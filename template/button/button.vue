<template>
    <button :disabled="disabled" class="cz-button" :class="classes" @click="clickFun">
        <cz-icon :name="icon" v-if="icon"></cz-icon>
        <slot></slot>
    </button>
</template>

<script>
    export default {  
        props:{
            icon:{},
            disabled:{
                type:Boolean,
                default:false
            },
            iPosition:{
                type:String,
                default:"left",
                validator(value){ 
                    return ["left","right"].includes(value)
                }
            },
            type:{
                type:String,
                default:"",
                validator(value){ 
                    return ["","success","plain","danger"].includes(value)
                }
            },
            size:{
                type:String,
                validator(value){ 
                    return ["large","small","mini"].includes(value);
                }
            }
        },  
        methods:{
            clickFun(){
                this.$emit('click');
            }
        },
        created(){
        },
        computed: {
            classes() {
                return {
                    [`${this.type}`]: this.type,
                    [`${this.size}`]: this.size,
                    "disabled": this.disabled,
                    [`${this.iPosition}`]:this.iPosition
                }
            },
            styles(){
                return {
                    background:this.backgroundColor||null,
                }
            }
        },
    };
</script>

<style scoped>
.cz-button {
    height: var(--button-height);
    color:#e6a23c;
    background: #fdf6ec;
    border:1px #f5dab1 solid;
    display: inline-flex;
    padding: 10px 16px;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    justify-content:center;
    vertical-align: middle;
    /*解决容器内项目不在一条水平线*/
    align-items:center;
}
.cz-button:hover:enabled{
    border:1px #e6a23c solid;
    
}
.cz-button:active{
    color: #fff;
    background: #e6a23c;
}
.cz-button.plain{ 
    color:#909399;
    background: #fff;
    border:1px #d3d4d6 solid; 
}
.cz-button.plain:hover:enabled{ border:1px #909399 solid; }
.cz-button.plain:active{ 
    color: #fff;
    background: #909399; 
}

.cz-button.danger{ 
    color:#f56c6c;
    background: #fef0f0;
    border:1px #fbc4c4 solid; 
}
.cz-button.danger:hover:enabled{ border:1px #f56c6c solid; }
.cz-button.danger:active{ 
    color: #fff;
    background: #f56c6c; 
}

.cz-button.success{ 
    color:#67c23a;
    background: #f0f9eb;
    border:1px #c2e7b0 solid; 
}
.cz-button.success:hover:enabled{ border:1px #67c23a solid; }
.cz-button.success:active{ 
    color: #fff;
    background: #67c23a; 
}

.cz-button.large{
    padding: 12px 16px;
}
.cz-button.small{
    padding: 9px 12px;
    font-size: 12px;
    border-radius: 3px;
}

.cz-button.mini{
    padding: 7px 12px;
    font-size: 12px;
    border-radius: 3px;
}

.cz-button:disabled{
    cursor: not-allowed;
    opacity: 0.6;
}
.cz-button.left >>> .icon{
    order: -1;
}
.cz-button.right >>> .icon{
    order: 1;
}
</style>