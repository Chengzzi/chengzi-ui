<template>
    <div class="cz-tab-body">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-tab-body",
    data() {
        return {
        }
    },
    provide() {
        return {
        }
    },
    props: {
        value: {},
    },
    computed: {

    },
    watch: {
        
    },
    created() {},
    mounted() {

    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-tab-body{
    padding: 1em;
}
</style>