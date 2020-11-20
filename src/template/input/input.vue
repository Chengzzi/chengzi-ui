<template>
    <div class="cz-input" :style="inputStyle" :class="classes">
        <div v-if="type=='text'" class="input-icon">
            <cz-icon size="small" :name="icon"></cz-icon>
        </div>
        <input
        ref="text" 
        v-if="type=='text'" 
        :maxlength="maxlength" 
        :minlength="maxlength" 
        :disabled="disabled" 
        :readonly="readonly" 
        :placeholder="placeholder" 
        :value="value" 
        @input="$emit('input', $event.target.value)" 
        @change="$emit('change', $event.target.value)" 
        @focus="$emit('focus', $event)" 
        @blur="$emit('blur', $event)" 
        :name="name"
        type="text">

        <textarea
        ref="textarea"  
        v-if="type=='textarea'" 
        :maxlength="maxlength" 
        :minlength="minlength" 
        :disabled="disabled" 
        :readonly="readonly" 
        :placeholder="placeholder" 
        :name="name"
        :rows="rows" 
        :value="value" 
        @input="resize();$emit('input', $event.target.value)" 
        @change="$emit('change', $event.target.value)" 
        @focus="$emit('focus', $event)" 
        @blur="$emit('blur', $event)" 
        ></textarea>
    </div>
</template>
<script>
export default { //输出
    name: "cz-input",
    data() {
        return {
            propOne: "propOne"
        }
    },
    props: {
        value: {},
        name: {
            type: String
        },
        type:{
            default: "text",
            type: String,
            validator(value) { //输入值合法检查
                return value === "text" || value === "textarea";
            }
        },
        icon: { default: "",type: String },
        maxlength: { type: [Number,String] },
        rows: { 
            default: "2",
            type: String
        },
        minlength: { type: [Number,String] },
        iPosition: {
            default: "left",
            type: String,
            validator(value) { //输入值合法检查
                return value === "left" || value === "right";
            }
        },
        size: {
            type: String,
            validator(value) {
                return ["large", "small", "mini"].includes(value);
            }
        },
        borderStyle: {
            type: String,
            validator(value) { //输入值合法检查
                return ["green", "blue", "none"].includes(value);
            }
        },
        placeholder: {
            default:"",
            type: String
        },
        width:{ type: [Number,String] },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        autosize:{
            type:[Boolean,Object],
            default:false,
            validator(value) {
                if(typeof value === "object"){
                    if(typeof value.minRows !=="number" || typeof value.maxRows !=="number"){
                        console.error('minRows、minRows的值为数字'); 
                        return false;
                    }else if(!value.minRows>=1){
                        console.error('minRows值不能小于1');
                        return false;
                    }else{
                        return true
                    }
                }else{
                    return true;
                }
            }
        },

    },
    methods: {
        focus(){
            this.$refs[this.type].focus();
        },
        resize() {
            let el = this.$refs.textarea;
            if (el&&this.autosize) {
                if(typeof this.autosize === "object"){
                    let maxH = this.autosize.maxRows*Number(getComputedStyle(el).lineHeight.replace("px",""))
                    if((el.scrollHeight-6)>maxH) return
                }
                el.style.height = 'auto';
                el.style.height = (el.scrollHeight-6) + 'px';
            }
        }
    },
    mounted() {
        let el = this.$refs.textarea;
        if(el && typeof this.autosize === "object"){
            let minH = this.autosize.minRows*Number(getComputedStyle(el).lineHeight.replace("px",""))+"px";
            el.style.minHeight = minH;
        }
    },
    computed: {
        classes() {
            return {
                [`${this.size}`]: this.size&& this.type == 'text',
                [`${this.type}`]: true,
                [`i-position-${this.iPosition}`]: this.icon,
                [`border-${this.borderStyle}`]: this.borderStyle,
                "readonly":this.readonly
            }
        },
        inputStyle(){
            let width = this._dealPixel(this.width);
            return {
                width
            }
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-input {
    position: relative;
    display: inline-block;
}
.cz-input.text {
    height: 34px;
}
.cz-input.large{height: 38px;}
.cz-input.small{height: 30px;}
.cz-input.mini{height: 26px;}


.cz-input>input,
.cz-input>textarea{
    width: calc(100% - 8px);
    display: inline-block;
    border:none;
    outline:none;
    line-height: 26px;
    border:1px solid #ccc;
    border-radius: 3px;
    color: #606266;
    padding: 3px;
    font-size: 14px;
}
.cz-input>textarea{
    max-width: calc(100% - 8px);
    min-width: calc(100% - 8px);
    line-height: 1.5em;
}
.cz-input>input:focus,
.cz-input>textarea:focus{
    box-shadow: inset 0 0 2px var(--active-color);
    border:1px solid var(--active-color);
}
.cz-input>input:hover:enabled,
.cz-input>textarea:hover:enabled{
    border:1px solid var(--active-color);
}
.cz-input.border-green>input:focus,
.cz-input.border-green>textarea:focus{
    box-shadow: inset 0 0 2px #67c23a;
    border:1px solid #67c23a;
}
.cz-input.border-green>input:hover:enabled,
.cz-input.border-green>textarea:hover:enabled{
    border:1px solid #67c23a;
}
.cz-input.border-blue>input:focus,
.cz-input.border-blue>textarea:focus{
    box-shadow: inset 0 0 2px #409eff;
    border:1px solid #409eff;
}
.cz-input.border-blue>input:hover:enabled,
.cz-input.border-blue>textarea:hover:enabled{
    border:1px solid #409eff;
}
.cz-input.readonly>input:focus,
.cz-input.readonly>textarea:focus,
.cz-input.border-none>input:focus,
.cz-input.border-none>textarea:focus{
    box-shadow: none;
    border:1px solid #ccc;
}
.cz-input.readonly>input:hover:enabled,
.cz-input.readonly>textarea:hover:enabled,
.cz-input.border-none>input:hover:enabled,
.cz-input.border-none>textarea:hover:enabled{
    border:1px solid #ccc;
}
.cz-input>input:disabled,
.cz-input>textarea:disabled{
    cursor: not-allowed;
    opacity: 0.6;
}
.cz-input.i-position-left>input{
    padding-left: 23px;
    width: calc(100% - 28px);
}
.cz-input.i-position-right>input{
    padding-right: 23px;
    width: calc(100% - 28px);
}

.cz-input .input-icon {
    display: inline-block;
    position: absolute;
    top: calc(50% - 2px);
    left: 5px;
    transform: translateY(-50%);
}
.cz-input.i-position-right .input-icon {
    left: auto;
    right: 5px;
}
.cz-input.mini>input{
    line-height: 18px;
    font-size: 0.8em;
}
.cz-input.small>input{
    line-height: 22px;
    font-size: 0.9em;
}
.cz-input.large>input{
    line-height: 30px;
}



</style>