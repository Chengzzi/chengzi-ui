<template>
    <div class="cz-panel">
        <div class="panel-title" v-if="$slots.title || title" :style="titleStyles">
            <div class="panel-title-wrap">
                <slot name="title"><h3>{{title}}</h3></slot>
            </div>
        </div>
        <div class="panel-content" :style="contentStyles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default { //输出
    name: "cz-panel",
    data() {
        return {}
    },
    props: {
        title: {
            type: String
        },
        titleStyles: {
            type: Object
        },
        contentStyles: {
            type: Object
        }
    }
};
</script>
<style scoped>
.cz-panel{
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    border: 1px solid #dbdbdb;
    border-radius: 3px;
}
.panel-title{
    border-bottom: 1px solid #dbdbdb;
}
.panel-title h3{
    font-weight: 500;
    font-size: 1.1em;
}
.panel-content,
.panel-title-wrap{
    padding: 8px 10px;
}
</style>