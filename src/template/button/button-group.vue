<template>
    <div class="cz-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {

    },
    mounted() {
        this.inspect();
    },
    methods: {
        inspect() {
            for (let node of this.$el.children) {
                let nodeName = node.nodeName.toLowerCase()
                if (nodeName != "button") {
                    console.warn("请在cz-button-group中使用cz-button")
                }
            }
        }
    }
};
</script>
<style scoped>
.cz-button-group{
    display: inline-block;
}
.cz-button-group>.cz-button {
    border-radius: 0!important;
}
.cz-button-group>.cz-button:not(:last-child):not(:first-child) {
    margin-right: -1px;
    margin-left: -1px;
}

.cz-button-group>.cz-button:first-child {
    border-top-left-radius: 4px!important;
    border-bottom-left-radius: 4px!important;
    /*margin-right: -1px;*/
}

.cz-button-group>.cz-button:last-child {
    /*margin-left: -1px;*/
    border-top-right-radius: 4px!important;
    border-bottom-right-radius: 4px!important;
}
</style>