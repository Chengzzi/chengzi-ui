<template>
    <div class="cz-container" :class="containerClass">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-container", 
    data() {
        return {
            containerClass:{
                hasSider:false
            }
        }
    },
    props: {
        title: {
            default:"title",
            type: String,
        },
    },
    computed: {

    },
    watch: {
       
    },
    created() {

    },
    mounted() {
        this.$children.forEach(vm=>{
            let typeList = ["cz-sider","cz-header","cz-body","cz-footer","cz-container"]
            if(!typeList.includes(vm.$options.name)){
                console.warn("container的子组件只能是cz-sider,cz-header,cz-body,cz-footer,cz-container中的一种");
            }
            if(vm.$options.name =="cz-sider"){
                this.containerClass.hasSider = true;
            }
        })
    },
    methods: {
        clickme(childData){
           
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-container{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.hasSider{
    flex-direction: row;
}
</style>
