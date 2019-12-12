<template>
    <div class="cz-tab-pane" :class="classes" v-if="active" >
        <slot></slot>
    </div>
</template>
<script>
export default { 
    name: "cz-tab-pane", 
    data() {
        return {
            activeName:"",
            active:false
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
    methods: {

    }, 
    created() {
        //注入的eventBus对象，监听派发的getActive事件
        this.eventBus.$on("update:activeName",data=>{
            this.activeName = data;
            this.active = (this.name === data);
        })
    },
    mounted() {

    },
    computed: {
        classes(){
            return{
                active:this.active
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
