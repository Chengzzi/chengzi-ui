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
            default:"default",
            type:String
        }
    },
    computed: {
        classes(){
            return{
                "cz-tabs-default":this.type == "default",
                "cz-tabs-card":this.type == "card"
            }
        }
    },
    watch: {
    },
    created() {
        this.eventBus.$on("update:activeName",(data,el)=>{
            //此处可替换成input，不需要:activeName.sync="active"
            this.$emit("update:activeName",data);
        })
    },
    mounted() {
        this.$children.forEach((vm)=>{
            if(vm.$options.name =="cz-tab-head"){
                vm.$children.forEach((vm1)=>{   
                    if(vm1.name == this.value){
                        this.eventBus.$emit("update:activeName",this.value,vm1.$el);
                    }else{
                    }
                })  
            }
        })
        // this.eventBus.$emit("update:activeName",this.value);
        this.eventBus.$emit("update:type",this.type);
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-tabs{
    
}

</style>
<style>

</style>