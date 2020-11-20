<template>
    <div>
        <ul class="tabs-box">
            <li v-for="item in tabList" :name="item.name" :class="{active:activeName==item.name}" class="tab" @click="tabClick(item.name)">
                {{item.label}}
                <span v-if="closable" @click="close(item.name)">X</span>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>
<script>
import Vue from "vue"
export default { //输出
    name: "cz-tabs",
    data() {
        return {
            tabList: [],
            eventBus: new Vue(),
            activeName: this.value,
        }
    },
    provide() {
        return {
            // tabs组件提供了一个事件中心
            eventBus: this.eventBus,
        }
    },
    props: {
        title: {
            default: "",
            type: String,
        },
        closable: {
            default: false,
            type: Boolean,
        },
        value: {},
    },
    computed: {

    },
    watch: {
        
    },
    created() {},
    mounted() {
        console.log(this);
        this.$children.forEach(vm => {
            this.tabList.push({
                label: vm.label,
                name: vm.name,
                key: vm.id || null
            })
        })
        this.eventBus.$emit("getActive", this.value);
    },
    methods: {
        tabClick(tabName1) {
            // 直接向子组件派发信息
            // this.$children.forEach(vm=>{
            //     vm.activeName = this.value;
            // })

            // 通过provide/inject派发信息,eventBus这个Vue对象触发事件，所有子组件都可以监听信息
            // inject:["eventBus"],this.eventBus.$on("getActive",fun); 如果想建立全局信息中心，在app里provide即可
            this.eventBus.$emit("getActive", tabName1);
            // 另 this.$root.$emit()

            // "update:tabName"是一个特殊的触发事件，监听时可以简写成:tabName.sync="xxx"
            //  使得监听的父组件的xxx直接绑定tabName1参数。
            this.$emit("update:tabName", tabName1);
            this.$emit("tab-click", tabName1);

            this.activeName = tabName1;
        },
        close(tabName) {
            this.$emit("tab-remove", tabName);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    padding: 0;
    margin: 0;
}

.tabs-box {
    display: flex;
}

.tab {
    flex-grow: 0;
    display: flex;
    justify-content: flex-start;
    padding: 0 1em;
}

.tab>span {
    cursor: pointer;
    color: red;
}
</style>