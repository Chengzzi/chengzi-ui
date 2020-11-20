<template>
    <div class="cz-nav-item" :class="classes" @click="itemClick" :style="styles" @mouseenter="hoverMouseEvent" @mouseleave="hoverMouseEvent">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-nav-item", 
    data() {
        return {
            activeName:"",
            hover:false,
            textColor:null,
            activeTextColor:null,
            router:false,
        }
    },
    inject:["eventBus"],
    props: {
        name: {
            default:"",
            type: String,
        },
        route: {
            default:"",
            type: String,
        },
    },
    methods: {
        itemClick(){
            this.eventBus.$emit("close:child",this.$parent.name);

            if(this.activeName != this.name){
                let el = this.$el;
                if(this.$parent.$options.name == "cz-nav-subitem"){
                    el = this.$parent.$el;
                }
                this.eventBus.$emit("update:activeName",this.name,el);
            }
            if(this.route&&this.router) this.$router.push({ path: this.route });
        },
        hoverMouseEvent(e) {
            if (e.type == "mouseenter") {
                this.hover = true;
            } else if (e.type == "mouseleave") {
                this.hover = false;
            }
        },
    }, 
    created() {
        this.eventBus.$on("update:activeName",data=>{
            this.activeName = data;
        })
        this.eventBus.$on("init:params", data => {
            this.activeName = data.defaultActive;
            this.textColor = data.textColor;
            this.activeTextColor = data.activeTextColor;
            this.router = data.router;
            if(this.activeName == this.name) {
                let el = this.$el;
                if(this.$parent.$options.name == "cz-nav-subitem"){
                    el = this.$parent.$el;
                }
                // 第一次触发函数
                this.eventBus.$emit("update:activeName",this.activeName,el,true);
            }
        })
    },
    mounted() {

    },
    computed: {
        classes(){
            return {
                active:this.active
            }
        },
        active(){
            return this.activeName == this.name
        },
        styles(){
            let color = null;
            if(this.active){
                if(this.activeTextColor){
                    color = this.activeTextColor;
                }
            }else if(this.textColor){
                color = this.textColor;
            }

            if(this.hover) color = this.activeTextColor || "#FF9500";
            return {
                'color':color,
            }
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-nav-item{
    padding: 10px 16px;
    cursor:pointer;
}
.active{
    color:#FF9500;
}
</style>
