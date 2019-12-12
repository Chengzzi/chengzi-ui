<template>
    <div class="tab-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-tab-pane", 
    data() {
        return {
            active:false,
            activeName:"",
        }
    },
    //inject：一个字符串数组，或者是一个对象。属性值可以是一个对象，包含from和default默认值。
    inject:["eventBus"],
    props: {
        label: {
            default:"",
            type: String,
            required:true
        },
        name: {
            default:"",
            type: String,
            required:true
        }
    },
    methods: {

    }, 
    created() {
        //注入的eventBus对象，监听派发的getActive事件
        this.eventBus.$on("getActive",data=>{
            console.log(1);
            this.activeName = data;
        })
    },
    mounted() {

    },
    computed: {
        classes(){
            return{
                active:this.active,
            }
        }
    },
    watch:{
        activeName(val){
            this.active = (val == this.name);
        }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
