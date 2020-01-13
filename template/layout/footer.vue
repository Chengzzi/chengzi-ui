<template>
    <div class="cz-footer">
        <slot></slot> 
    </div>
</template>
<script>
export default { //输出
    name: "cz-footer", 
    data() {
        return {
        }
    },
    props: {
        title: {
            default:"",
            type: String,
        },
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    } //传元素属性值
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
