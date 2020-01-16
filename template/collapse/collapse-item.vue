<template>
    <div class="cz-collapse-item" :class="classes">
        <div class="collapse-head" @click="headClick">
            <div class="head-title">{{title}}</div>
            <div class="head-arrow" v-show="active"><cz-icon name="down"></cz-icon></div>
            <div class="head-arrow" v-show="!active"><cz-icon name="right"></cz-icon></div>
        </div>
        <transition name="content">
            <div class="collapse-content-wrap" v-if="active">
                <div class="collapse-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default { //输出
    name: "cz-collapse-item",
    props: {
        title: {
            default: "",
            type: String,
        },
        name: {}
    },
    data() {
        return {
            active: false
        }
    },
    inject: ["eventBus"],
    methods: {
        headClick() {
            this.sendHandle();
        },
        sendHandle() {
            if(this.active){
                this.eventBus.$emit("update:removeName", this.name);
            }else{
                this.eventBus.$emit("update:addName", this.name);
            }
        }
    },
    created() {
        this.eventBus.$on("update:activeName", (data) => {
            if (data.indexOf(this.name)> -1) {
                this.active = true;
            } else {
                this.active = false;
            }
        })
    },
    mounted() {

    },
    computed: {
        classes(){
            return { active:this.active }
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-collapse-item{
    border-bottom:1px solid var(--tinge-color);
}
.cz-collapse-item:last-child{
    border:none;
}
.collapse-head {
    display: flex;
    cursor: pointer;
    padding: 10px;
}

.head-arrow {
    margin-left: auto;
}
.collapse-content-wrap{
    overflow: hidden;
    max-height: 200px;
}
.collapse-content{
    border-top:1px solid #eee;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
}

.content-enter-active,
.content-leave-active {
    transition: all 2s;
}

.content-enter,
.content-leave-to {
    max-height: 0px;
}
</style>