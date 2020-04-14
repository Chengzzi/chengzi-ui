<template>
    <div class="cz-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from "vue"
export default { //输出
    name: "cz-collapse", 
    props: {
        accordion:{
            default:false,
            type: Boolean,
        },
        value: {
            type:Array
        },
    },
    data() {
        return {
            eventBus:new Vue(),
            myValue:null
        }
    },
    provide() {
        return {
            // tabs组件提供了一个事件中心
            eventBus: this.eventBus,
        }
    },
    methods: {
        sendBus(value){
            this.$emit("input",value);
            this.$emit("change",value);
            this.eventBus.$emit("update:activeName",value);
        }
    }, //传元素属性值
    created() {
        this.eventBus.$on("update:addName",(data)=>{
            let value = [...this.value];
            if(this.accordion){
                value = [data];
            }else{
                value.push(data);
            }
            this.sendBus(value);
        })
        this.eventBus.$on("update:removeName",(data)=>{
            let value = [...this.value];
            if(this.accordion){
                value = [];
            }else{
                value.splice(value.indexOf(data), 1);
            }
            this.sendBus(value);
        })
    },
    mounted() {
        if(!Array.isArray(this.value)){  
            console.error("组件collapse的value必须为Array")
        }
    },
    computed: {

    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-collapse{
    border:1px solid var(--tinge-color);
    border-radius: 3px;
}
</style>
