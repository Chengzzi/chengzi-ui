<template>
    <div class="cz-collapse-item" :class="{active:active}">
        <div class="collapse-head" @click="headClick">
            <div class="head-title">{{title}}</div>
            <div class="head-arrow">></div>
        </div>
        <div class="collapse-content" v-show="active">
            <slot></slot>
        </div>
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
            active: false,
            accordion: false
        }
    },
    inject: ["eventBus"],
    methods: {
        headClick() {
            if (this.active) {
                this.close();
            } else {
                this.open();
            }
            
            this.sendHandle();
            
        },
        sendHandle() {
            this.eventBus.$emit("update:activeName", this.name, true);
        },
        open() {
            this.active = true;
        },
        close() {
            this.active = false;
        },
    },
    created() {
        this.eventBus.$on("update:activeName", (data, flag) => {
            if(this.accordion){
                if (data == this.name) {
                    !flag && this.open();
                } else {
                    this.close();
                }
            }
        })
        this.eventBus.$on("update:activeArr", (data) => {
            if (data.indexOf(this.name) != -1) {
                this.open();
            } else {
                this.close();
            }
        })
    },
    mounted() {

    },
    computed: {

    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collapse-head {
    display: flex;
    cursor: pointer;
}

.head-arrow {
    margin-left: auto;
}
</style>