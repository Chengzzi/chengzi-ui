<template>
    <button class="cz-button" :class="{[`${iPosition}`]:true}" @click="x">
        <cz-icon :name="icon" v-if="icon"></cz-icon>
        <slot></slot>  <!--外部输入-->
    </button>
</template>

<script>
    export default {   //输出
        props:{
            test:{

            },
            icon:{
                
            },
            iPosition:{
                type:String,
                default:"left",
                validator(value){  //输入值合法检查
                    return value === "left"|| value === "right";
                }
            }
        },  //传元素属性值
        methods:{
            x(){
                this.$emit('click'); //被点击了触发X，该句向父组件传递"click"事件
            }
        },
        created(){
        }
    };
</script>

<style scoped>
    
    .cz-button {
        padding: 0 0.5em;
        height: var(--button-height);
        font-size: var(--font-size);
        color:#333;
        background: white;
        border-radius:4px;
        border:1px #999 solid;
        display: inline-flex;
        justify-content:center;
        vertical-align: middle;
        /*解决容器内项目不在一条水平线*/
        align-items:center;
        height:24px;
    }
    .cz-button:hover{
        border:1px #666 solid;
    }
    .cz-button:active{
        background: #eee;
    }
    .cz-button:focus{
        outline: none;
    }
    .cz-button.left >>> .icon{
        order: -1;
    }
    .cz-button.right >>> .icon{
        order: 1;
    }
</style>