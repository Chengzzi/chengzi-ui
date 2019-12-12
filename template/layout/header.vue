<template>
    <div class="cz-header">
        <slot :username="user.name" :user="user.password" name="left"></slot> 
        <slot name="right"></slot> 
        <slot></slot> 
    </div>
</template>
<script>
export default { //输出
    name: "cz-header", 
    data() {
        return {
            user:{
                name:"chengzzi",
                password:"123456",
            }
        }
    },
    props: {
        title: {
            default:"",
            type: String,
        },
        name:{},
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
.cz-header{
    border: 1px solid black;
}
</style>
