<template>
    <div class="cz-table" ref="czTable" :class="classes">
        <div class="cz-table-wrap" ref="czTableWrap">
            <table>
                <thead ref="thead" class="cz-table-head">
                    <tr>
                        <th v-if="checked" style="width:20px;">
                            <input class="cz-table-check-box" type="checkBox"  @change="checkAllClick($event)" ref="checkAll">
                        </th>
                        <th v-if="rowIndex" style="width:40px;">序号</th>
                        <th v-for="item,index in czColumns" :style="{width:item.width || 'auto'}">
                            {{item.text}}
                            <div v-if="item.field in orderRules" class="sort-btn" @click="sortBtnClick(item.field)">
                                <cz-icon :class="{active:orderRules[item.field]==='asc'}" name="xiangshang1"></cz-icon> 
                                <cz-icon :class="{active:orderRules[item.field]==='desc'}" name="xiangxia1"></cz-icon> 
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody ref="tbody" class="cz-table-body">
                    <template v-for="item,index in czTableData">    
                        <tr class="main-tr" :key="item.id" @click="trClick(item,index,$event)":class="{selected:item.id === selectedId}">
                            <td v-if="checked" style="width:20px;">
                                <input class="cz-table-check-box" type="checkBox" @change="checkClick(item,index,$event)" :checked="isChecked(item.id)">
                            </td>
                            <td v-if="rowIndex" style="width:40px;">{{index}}</td>
                            <td v-for="column,index in czColumns" :style="{width:column.width || 'auto'}">{{item[column.field]}}
                                <span class="tr-expend-i" v-if="index===czColumns.length-1&&item.children&&item.children.length>0" @click="expendChild(item.id)"> 
                                    <cz-icon v-if="expendIds.includes(item.id)" name="down"></cz-icon>
                                    <cz-icon v-else name="right"></cz-icon> 
                                </span>
                            </td>
                            
                        </tr>
                        <tr class="child-tr" v-if="expendIds.includes(item.id)" v-for="childItem,index in item.children" :key="`child${childItem.id}`">
                            <td v-if="checked" style="width:20px;"></td>
                            <td v-if="rowIndex" style="width:20px;"></td>
                            <td v-for="column in czColumns" :style="{width:column.width || 'auto'}">{{childItem[column.field]}}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="table-loading" v-if="loading">
            <cz-icon name="loading"></cz-icon>
        </div>
    </div>
</template>

<script>
// 展示 选中 排序 固定表头 子菜单。
    export default { 
        name:"cz-table", 
        props:{
            tableData:{
                type:Array,
                required:true
            },
            columns:{
                type:Array,
                required:true
            },
            border:{
                type:Boolean,
                default:false
            },
            checked:{
                type:Boolean,
                default:false
            },
            checkedItems:{
                type:Array,
                default:()=>[]
            },
            orderRules:{
                type:Object,
                default:()=>{return{}}
            },
            intervalColor:{
                type:Boolean,
                default:false
            },
            height:{
                type:Number,
                validator(value) { 
                    return Number.isInteger(value) && value > 0
                }
            },
            loading:{
                type:Boolean,
                default:false
            },
            rowIndex:{
                type:Boolean,
                default:false
            },
        },  
        data(){
            return {
                selectedId:null,
                expendIds:[],
                czColumns:[],
                czTableData:[],
            }
        },
        methods:{
            trClick(rowData,index,$event){
                this.select(rowData.id);
                this.$emit("tr-click",rowData,index,$event);
            },
            select(id){
                this.selectedId = id;
            },
            expendChild(id){
                if(this.expendIds.includes(id)){
                    // this.expendIds.splice(this.expendIds.indexOf(id),1);
                    this.expendIds = this.expendIds.filter(i=>i !== id);
                }else{
                    this.expendIds.push(id);
                }
                this.fixTheadWidth();
            },
            checkClick(rowData,index,$event){
                let copyObj = JSON.parse(JSON.stringify(this.checkedItems));
                if($event.target.checked){
                    copyObj.push(rowData);
                }else{
                    // 剔除数组中指定对象
                    copyObj = copyObj.filter(i=>i.id !== rowData.id);
                }
                this.$emit("update:checkedItems",copyObj)
            },
            isChecked(id){
                return this.checkedItems.filter(item=> item.id === id).length>0
            },
            checkAllClick($event){
                if($event.target.checked){
                    this.$emit("update:checkedItems",this.czTableData);
                }else{
                    this.$emit("update:checkedItems",[]);
                }
            },

            sortBtnClick(field){
                let copyObj = JSON.parse(JSON.stringify(this.orderRules));
                if(copyObj[field] === "asc"){
                    copyObj[field] = "desc";
                }else if(copyObj[field] === "desc"){
                    copyObj[field] = "normal";
                }else{
                    copyObj[field] = "asc";
                }
                this.$emit("order-change",copyObj,field);
                this.$emit("update:order-rules",copyObj);
            },
            fixTheadWidth(){
                this.$nextTick(()=>{
                    let {height} = this.$refs.thead.getBoundingClientRect();
                    this.$refs.czTableWrap.style.paddingTop = (height-1) +"px";
                    // 先Array数组转化，拿到第一格所有格宽度
                    let wArr = Array.from(this.$refs.tbody.children[0].children).map(i=>{
                        let { width } = i.getBoundingClientRect();
                        return width
                    });
                    // 给thead所有格赋值宽度，但是thead必须设定CSS box-sizing: border-box;
                    Array.from(this.$refs.thead.children[0].children).forEach((i,index)=>{
                        i.style.width = wArr[index] + "px";
                    })
                })
            },
            tableInit(){
                this.$refs.czTable.appendChild(this.$refs.thead);
                if(this.height) this.$refs.czTable.style.height = this.height + "px";
                this.fixTheadWidth(); 
                window.addEventListener("resize",this.fixTheadWidth);
            },
            setTableData(val){
                this.czTableData = val;
            },
            setColumns(val){
                this.czColumns = val;
            },
        },
        created(){
            this.czColumns = this.columns;
            this.czTableData = this.tableData;
        },
        mounted(){
            this.tableInit();
        },
        beforeDestroy(){
            // 销毁事件
            window.removeEventListener("resize",this.fixTheadWidth);
        },
        computed: {
            classes(){
                return {
                    border:this.border,
                    intervalColor:this.intervalColor,
                }
            }
        },
        watch:{
            checkedItems(val){
                // 全选
                this.$refs.checkAll.checked = (val.length == this.czTableData.length)
                this.$refs.checkAll.indeterminate = (val.length!==0)&&(val.length !== this.czTableData.length)
            },
            czTableData(val){
                this.fixTheadWidth();
            },
            czColumns(val){
                this.fixTheadWidth();
            }
        },
        update:{
            tableData(val){
                this.czTableData = val;
            },
            columns(val){
                this.czColumns = val;
            },
            
        }
    };
</script>

<style scoped>
.cz-table{
    position: relative;
}
.cz-table-wrap{
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
}
.table-loading{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,0.7);
    z-index: 2;
}
.table-loading .cz-icon{
    font-size: 36px;
}
.cz-table-head{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    /*margin-top: -30px;*/
    /*margin-left: -0.5px;*/
}
.cz-table-head,
.cz-table-wrap table{
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

.cz-table-body td,
.cz-table-head th{
    position: relative;
    padding: 6px 8px;
}
.cz-table-head th{
    box-sizing: border-box;
    text-align: left;
    border-bottom:1px solid #ccc; 
    background: #fff;    
}
.cz-table-body tr{
    border-bottom:1px solid #d9dada; 
}
.cz-table-body tr.child-tr{
    background: #fafaea;
}
.intervalColor .cz-table-body tr.main-tr:nth-child(even){
    background: #f5f5f5;
}
.cz-table-body tr.main-tr .tr-expend-i{
    position: absolute;
    right: 10px;
    top:5px;
    cursor: pointer;
    color: #6e6e6e;
}
.cz-table-body tr:hover,
.cz-table-body tr.selected{
    background: #fdf6ec!important;
}


.cz-table.border .cz-table-head th,
.cz-table.border .cz-table-body td{
    border: 1px solid #d9dada; 
}

.cz-table-check-box{
    cursor: pointer;
}

.sort-btn{
    display: inline-flex;
    flex-direction:column;
    position: relative;
    top: -5px;
    width: 20px;
    cursor: pointer;
}
.sort-btn .cz-icon{
    height: 8px;
    font-size: 10px;
    color: #ccc;
}
.sort-btn .cz-icon.active{
    color: #000;
}
</style>