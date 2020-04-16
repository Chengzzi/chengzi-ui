<template>
    <div class="cz-waterfall-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "cz-waterfall-item", 
        props:{
        },
        data(){
            return {
            }
        },
        mounted(){
        },
        methods:{
        },
        computed: {
        },
    };
</script>

<style scoped>
.cz-waterfall-item{
    display: inline-block;
    box-sizing:border-box;
}
</style>