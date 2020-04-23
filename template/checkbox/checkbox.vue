<template>
    <div class="cz-checkbox" :class="{checked,disabled}" @click="checkClick">
        <input class="real-box" :name="name" type="checkbox" :disabled="disabled" :checked="checked">
        <span class="show-box"></span>
        <span class="label">{{label}}</span>
    </div>
</template>
<script>
    export default {
        name: "cz-checkbox",
        inject:{
            eventBus:{
                default(){
                    return null
                }
            }
        }, 
        props:{
            name:{
                type:String
            },
            value:{
                type:Boolean,
                default:false
            },
            label:{
                type:[String,Boolean,Number]
            },
            disabled:{
                type:Boolean,
                default:false
            },
        },
        data(){
            return{
                checked:false,
                isGroup:false
            }
        },
        methods:{
            checkClick(){
                if(this.disabled) return
                if(this.isGroup){
                    this.checked = !this.checked;
                    this.eventBus.$emit("checked",this.label);
                }else{
                    this.$emit("change",!this.checked);
                    this.$emit("input",!this.checked);
                }
            }
        },
        created(){
            if(this.eventBus){
                this.eventBus.$on("update:checked",data=>{
                    if(data.includes(this.label)){
                        this.checked = !this.checked;
                    }
                })
            }
        },
        watch:{
            value(val){
                if(!this.isGroup){
                    this.checked = val;
                }
            }
        }
    };
</script>

<style scoped>
.cz-checkbox{
    display: inline-block;
    cursor: pointer;
}
.real-box{
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    left: -999px;
}
.show-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 1px solid #999;
    border-radius: 2px;
    margin-right: 4px;
    position: relative;
    transition: all .2s;
}
.show-box:after{
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    top:50%;
    left:50%;
    transform: rotate(-45deg) translate(0%,-125%);    
    /*transform: rotate(-45deg);*/
    transition: all .2s;
    opacity: 0;
}
.checked .show-box:after{
    width: 8px;
    height: 4px;
    opacity: 1;
}
.checked .show-box{
    border: 1px solid #FF9500;
    background: #FF9500;
}
.checked .label{
    color: #FF9500;
}


.cz-checkbox.disabled{
    cursor: not-allowed;
}
.cz-checkbox.disabled .show-box{
    border: 1px solid #c0c4cc;
    background: #F2F6FC;
}
.checked.disabled .show-box:after{
    border-left: 1px solid #999;
    border-bottom: 1px solid #999;
}
.cz-checkbox.disabled .label{
    color: #c0c4cc;
}
</style>