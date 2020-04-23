<template>
    <div class="cz-radio" :class="{checked,disabled}" @click="checkClick">
        <input class="real-radio" type="radio" :name="name" :disabled="disabled" :checked="checked">
        <span class="show-radio"></span>
        <span class="label">{{label}}</span>
    </div>
</template>
<script>
    export default {
        name: "cz-radio",
        inject:["eventBus"], 
        props:{
            name:{
                type:String
            },
            label:{
                type:[String,Boolean,Number]
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                checked:false
            }
        },
        methods:{
            checkClick(){
                if(this.disabled) return
                this.eventBus.$emit("checked",this.label);
            }
        },
        created(){
            this.eventBus.$on("checked",data=>{
                this.checked = this.label == data;
            })
        },
    };
</script>

<style scoped>
.cz-radio{
    display: inline-block;
    cursor: pointer;
}
.real-radio{
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    left: -999px;
}
.show-radio{
    margin-bottom: -1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #999;
    border-radius: 12px;
    margin-right: 4px;
    position: relative;
    transition: all .2s;
}
.show-radio:after{
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 12px;
    background: #fff;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);    
    transition: all .2s;
    opacity: 0;
}
.checked .show-radio:after{
    width: 5px;
    height: 5px;
    opacity: 1;
}
.checked .show-radio{
    border: 1px solid #FF9500;
    background: #FF9500;
}
.checked .label{
    color: #FF9500;
}


.cz-radio.disabled{
    cursor: not-allowed;
}
.cz-radio.disabled .show-radio{
    border: 1px solid #c0c4cc;
    background: #F2F6FC;
}
.checked.disabled .show-radio:after{
    background: #999;
}
.cz-radio.disabled .label{
    color: #c0c4cc;
}
</style>