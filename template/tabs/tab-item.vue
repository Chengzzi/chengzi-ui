<template>
    <div class="cz-tab-item" :class="classes" @click="tabClick">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-tab-item",
    data() {
        return {
            activeName:""
        }
    },
    inject:["eventBus"],
    props: {
        name: {
            default:"",
            type: String,
            required:true
        }
    },
    computed: {
        classes(){
            return{
                active:this.activeName == this.name
            }
        }
    },
    watch: {
        
    },
    created() {
        this.eventBus.$on("update:activeName",data=>{
            this.activeName = data;
        })
    },
    mounted() {

    },
    methods: {
        tabClick(){
            if(this.activeName != this.name){
                this.eventBus.$emit("update:activeName",this.name,this.$el);
            }
            // this.$emit("tab-click",this.name);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-tab-item{
    padding: 0 1em;
    line-height: 40px;
    cursor: pointer;
}
.cz-tab-item.active{
    color: var(--active-color);
    background: #fff;
}
</style>