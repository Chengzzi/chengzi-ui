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
        title: {
            default:"",
            type: String,
        },
        accordion:{
            default:false,
            type: Boolean,
        },
        value: {},
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

    }, //传元素属性值
    created() {
        this.eventBus.$on("update:activeName",(data,flag)=>{
            if(this.accordion){
                this.$emit("input",data);
                this.$emit("change",data);
            } else {
                if(this.myValue.indexOf(data) != -1){
                    this.myValue.splice(this.myValue.findIndex(item => item === data), 1);
                }else{
                    this.myValue.push(data);
                }
                this.$emit("input",this.myValue);
                this.$emit("change",this.myValue);
            }
        })
    },
    mounted() {
        this.$children.forEach((vm)=>{
            // vm 是子组件的vue对象
            vm.accordion = this.accordion;

        });
        this.myValue = [...this.value];
        if(this.accordion){
            // (typeof this.value != "string") && console.warn("value应该为数组");
            this.eventBus.$emit("update:activeName",this.value);
        }else{
            !Array.isArray(this.value) && console.warn("value应该为数组");
            this.eventBus.$emit("update:activeArr",this.value);
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

</style>
