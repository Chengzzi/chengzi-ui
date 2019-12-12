<template>
    <div class="cz-row" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-row", 
    data() {
        return {
        }
    },
    props: {
        gutter: {
            type: [String,Number],
        },
        align: {
            type: [String],
            validator(val){
                return ["center","left","right"].includes(val);
            }
        },
        alignY: {
            type: [String],
            validator(val){
                return ["center","top","bottom"].includes(val);
            }
        }
    },
    watch:{

    },
    computed: {
        rowStyle(){
            let {gutter} = this;
            let rowStyle = {
                margin:'0 '+(-gutter/2)+'px'
            };
            return rowStyle
        },
        rowClass(){
            let {align,alignY} = this;
            let rowClass = {
                [`align-${align}`]:align,
                [`alignY-${align}`]:alignY
            };
            return rowClass
        }

    },
    mounted() {
        this.$children.forEach((vm)=>{
            // vm 是子组件的vue对象
            vm.gutter = this.gutter;//箭头函数使得this指向父作用域 ,改变子组件的data

        })
    },
    created() {
    },
    methods: {

    } 
};
</script>
<style scoped>
.cz-row{
    display: flex;
}
.align-left{
    justify-content: flex-start;
}
.align-right{
    justify-content: flex-end;
}
.align-center{
    justify-content: center;
}
</style>