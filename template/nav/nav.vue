<template>
    <div class="cz-nav" :style="styles" :class="classes">
        <slot></slot>
        <div class="line" v-if="this.mode =='horizontal'" ref="line"></div>
    </div>
</template>
<script>
import Vue from "vue"
export default { //输出
    name: "cz-nav",
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
        mode: {
            default: "vertical",
            type: String,
        },
        defaultActive: {
            default: "",
            type: String,
        },
        defaultOpeneds: {
            default(){return []},
            type: Array,
        },
        textColor: {
            default: "",
            type: String,
        },
        backgroundColor: {
            default: "",
            type: String,
        },
        activeTextColor: {
            default: "",
            type: String,
        },
        multiple: {
            default: false,
            type: Boolean,
        },
        router: {
            default: false,
            type: Boolean,
        },
        trigger: {
            default: "hover",
            type: String,
        },

    },
    methods: {
        openSub(name) {
            this.$children.forEach((vm)=>{
                if(vm.$options.name=='cz-nav-subitem'&&names.includes(vm.name)){
                    vm.spread = true;
                }
            })
        },
        closeSub(names) {
            this.$children.forEach((vm)=>{
                console.log(vm.name);
                console.log(vm.$options.name);
                if(vm.$options.name=='cz-nav-subitem'&&names.includes(vm.name)){
                    vm.spread = false;
                }
            })
        }
    },
    created() {
        this.eventBus.$on("update:activeName", (data,el,first) => {
            //不是第一次更新，则传递事件函数
            if(!first) this.$emit("select", data); 

            if(el && this.$refs.line){
                // active下划线
                let data = el.getBoundingClientRect();
                let tabHeadData = this.$el.getBoundingClientRect();
                let left =  data.left - tabHeadData.left;
                this.$refs.line.style.width = data.width+"px";
                this.$refs.line.style.left = left+"px";
            }
        })

        
        this.eventBus.$on("open:subitem", data=>{
            this.$emit("open", data); 
        });
        this.eventBus.$on("close:subitem", data=>{
            this.$emit("close", data); 
        });
    },
    mounted() {
        let params = {
            mode: this.mode,
            defaultActive: this.defaultActive,
            defaultOpeneds: this.defaultOpeneds,
            textColor: this.textColor,
            backgroundColor: this.backgroundColor,
            activeTextColor: this.activeTextColor,
            multiple: this.multiple,
            router: this.router,
            trigger: this.trigger
        }
        this.eventBus.$emit("init:params", params, true);
    },
    computed: {
        classes() {
            return {
                vertical: this.mode == "vertical",
                horizontal: this.mode == "horizontal"
            }
        },
        styles(){
            return {
                background:this.backgroundColor||null,
            }
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
}
/* .cz-nav>>> >div:not(.line){
    padding: 10px 16px;
} */
.cz-nav .line{
    position: absolute;
    margin-top: -1px;
    bottom: 0px;
    z-index: 2;
    border-bottom:2px solid #FF9500;
    transition: all 400ms;
}
.cz-nav.horizontal {
    flex-direction: row;
    border-bottom:1px solid #e6e6e6;
}
</style>