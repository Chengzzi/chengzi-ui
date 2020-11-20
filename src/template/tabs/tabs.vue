<template>
    <div class="cz-tabs" :class="classes">
        <slot></slot>
        
    </div>
</template>
<script>
import Vue from "vue"
export default { //输出
    name: "cz-tabs",
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            // tabs组件提供了一个事件中心
            eventBus: this.eventBus,
        }
    },
    props: {
        value: {},
        type:{
            type:String,
            validator(value) { 
                return ["default","card"].includes(value);
            }
        }
    },
    computed: {
        classes(){
            return{
                "cz-tabs-card":this.type == "card"
            }
        }
    },
    watch: {
    },
    created() {
        this.eventBus.$on("update:activeName",(data,el)=>{
            //此处可替换成input，不需要:activeName.sync="active"
            // this.$emit("update:activeName",data);
            this.$emit("input",data);
        })
        this.eventBus.$on("tab-click",(data)=>{
            this.$emit("tab-click",data);
        })
    },
    mounted() {
        this.$children.forEach((vm)=>{
            if(vm.$options.name =="cz-tab-head"){
                let hasValidName = false;
                vm.$children.forEach((vm1)=>{   
                    if(vm1.name == this.value){
                        this.eventBus.$emit("update:activeName",this.value,vm1.$el);
                        hasValidName = true;
                    }
                }) 
                if(!hasValidName) {
                    this.eventBus.$emit("update:activeName",vm.$children[0].name,vm.$children[0].$el);
                }   
            }
        })
        // this.eventBus.$emit("update:activeName",this.value);
        // this.eventBus.$emit("update:type",this.type);
    },
    methods: {
        openTab(name){
            if(!name) return
            this.$children.forEach((vm)=>{
                if(vm.$options.name =="cz-tab-head"){
                    vm.$children.forEach((vm1)=>{   
                        if(vm1.name == name){
                            this.eventBus.$emit("update:activeName",name,vm1.$el);
                        }
                    })   
                }
            })
        }
    }
};
</script>
<style scoped>
.cz-tabs{
    background: #fff;
}
.cz-tabs.cz-tabs-card{
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: 0 0 2px 0 rgba(188,188,188,.6), 0 1px 2px 0 rgba(188,188,188,.5);
}
.cz-tabs.cz-tabs-card >>> .cz-tab-head{
    color:#909399;
    background: #f5f7fa;
}
.cz-tabs.cz-tabs-card >>> .cz-tab-head .line{
    display: none;
}
.cz-tabs.cz-tabs-card >>> .cz-tab-item:first-child{
    border-top-left-radius: 4px;
}
.cz-tabs.cz-tabs-card >>> .cz-tab-item.active{
    margin:0 -1px 0px -1px;
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    z-index: 1;
    transition: all 0.3;
}
</style>