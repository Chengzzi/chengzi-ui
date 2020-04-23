<template>
    <div class="cz-select" ref="select">
        <cz-popover 
        class="select-pop" 
        selectPop 
        position="bottom"
        :trigger="trigger"
        ref="selectPop"
        @open="iconName='up'"
        @close="iconName='down'"
        >
            <template #content>
                <div class="options" ref="options">
                    <div v-if="allSelect" class="allSelect">
                        <cz-checkbox @change="allSelectClick" v-model="allSelected" label="全选"></cz-checkbox>
                    </div>
                    <slot></slot>
                </div>
            </template>
            <div class="select-input" ref="selectInput">
                <cz-input :width="width" readonly border-style="none" :value="inputValue" i-position="right" :icon="iconName"></cz-input>
                <div class="multiple"></div>
            </div>
        </cz-popover> 
        
    </div>
</template>
<script>
    import Vue from "vue"
    export default {
        name: "cz-select", 
        props:{
            width:{
                type:Number,
                default:240,
                validator(value) { //输入值合法检查
                    return value > 0;
                }
            },
            multiple:{
                type:Boolean,
                default:false
            },
            value:{
                type:[String, Array, Number]
            },
            allSelect:{
                type:Boolean,
                default:false
            },
            trigger: {
                default: "click",
                type: String,
                validator(value) { //输入值合法检查
                    return value === "click" || value === "hover";
                }
            },
        },
        data(){
            return{
                iconName:"down",
                eventBus: new Vue(),
                optionGroup:[],
                allSelected:false
            }
        },
        provide() {
            return {
                eventBus: this.eventBus,
            }
        },
        mounted(){
            this.$refs.select.style.width = this.width+"px";
            this.$refs.options.style.width = (this.width-2)+"px";
            this.$children[0].$children.forEach(item=>{
                if(item.$options.name === "cz-select-option"){
                    this.optionGroup.push(item.value);
                }
            })
            if(this.multiple){
                let arr = [];
                this.value.forEach((item,index)=>{
                    if(this.optionGroup.includes(item)) arr.push(item)
                })
                this.sendBus(arr);
            }else {
                if(!this.optionGroup.includes(this.value)){
                    this.sendBus(this.optionGroup[0]);
                }else{
                    this.eventBus.$emit("update:selected",this.value);
                }
            }
            
        },
        created(){
            this.eventBus.$on("select",(data)=>{
                if(this.multiple){
                    let selectArray = [...this.value];
                    if(selectArray.includes(data)){
                        selectArray.splice(selectArray.indexOf(data), 1);
                    }else{
                        selectArray.push(data);
                    }
                    this.sendBus(selectArray);
                }else{
                    this.$refs.selectPop.clickClose();
                    this.sendBus(data);
                }
            });

            this.validate();
        },
        methods: {
            sendBus(data){
                this.$emit("input",data);
                this.eventBus.$emit("update:selected",data);
            },
            validate(){
                let validation1 =  this.multiple? Array.isArray(this.value) : (typeof this.value === "string"||typeof this.value === "number");
                if(!validation1){
                    let str = this.multiple? "Array" : "String或者Number";
                    console.error(`cz-select的绑定值应当为${str}类型`);
                }

                if(this.allSelect && !this.multiple){
                    console.error(`cz-select必须设定为多选(multiple)才能设定全选(allSelect)`);
                }
            },
            allSelectClick(data){
                if(data){
                    this.sendBus(this.optionGroup);
                }else{
                    this.sendBus([]);
                }
            }
        },
        computed:{
            inputValue(){
                let val = this.value;
                if(Array.isArray(val)){
                    if(val.length>3){
                        val = `${val[0]},${val[1]},${val[2]} 等${val.length-3}项`
                    }
                }
                return val
            },
            // allSelected(){
            //     if(this.allSelect&&this.multiple&&this.optionGroup&&this.optionGroup.length>0){
            //         return this.value.length == this.optionGroup.length
            //     }else{
            //         return false
            //     }
            // }
            // allSelected was assigned to but it has no setter.
        },
        watch:{
            value(val){
                if(this.allSelect&&this.multiple&&this.optionGroup&&this.optionGroup.length>0){
                    this.allSelected = (val.length == this.optionGroup.length);
                }
            }
        }
    };
</script>

<style scoped>
.cz-select >>> .cz-input input{
    cursor: pointer;
}
.cz-select >>> .pop-content{
    padding: 0;
}
.options{
    max-height: 200px;
    overflow: auto;
}
.options::-webkit-scrollbar {
    width: 6px;
    height: 0px;
}
.options::-webkit-scrollbar-track {
    display: none;
}
.options::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px hsla(220,4%,58%,0.3);
    box-shadow: inset 0 0 6px hsla(220,4%,58%,0.3);
    border-radius: 7px;
    background: hsla(220,4%,58%,0.3);
    display: none;
}
.options:hover::-webkit-scrollbar-thumb {
    display: block;
}
.options::-webkit-scrollbar-button {
    display: none;
}
.allSelect{
    padding: 4px 8px;
    color: #333;
}
</style>