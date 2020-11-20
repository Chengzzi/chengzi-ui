<template>
    <div class="cz-counter" :class="classes">
        <input 
        class="counterInput"
        :value="myValue"
        @change="counter($event.target.value)"  
        :name="name"
        :readonly="!inputted"
        ref="input"
        type="text">
        <span class="counterBtn add" @click="calculate('add')">+</span>
        <span class="counterBtn sub" @click="calculate('sub')">-</span>
    </div>
</template>
<script>
export default { //输出
    name: "cz-counter",
    data() {
        return {
            myValue:0,
        }
    },
    props: {
        value:{},
        name: {
            type: String
        },
        min: {
            type: Number,
            default:0
        },
        max: {
            type: Number,
            default:Infinity
        },
        step: {
            type: Number,
            default:1
        },
        inputted: {
            type: Boolean,
            default:true
        },
        size: {
            type: String,
            validator(value) {
                return ["large", "small", "mini"].includes(value);
            }
        },

    },
    methods: {
        calculate(type){
            if(type==="add"){
                this.counter(this.myValue + this.step);
            }else if(type==="sub"){
                this.counter(this.myValue - this.step);
            }
        },
        counter(value){
            if(this.validate(value)){
                if (this.myValue != Number(value)) {
                    this.$emit('change', Number(value));
                }
                this.$emit('input', Number(value));
                this.myValue = Number(value);
            }else{
                if(Number(value) < this.min){
                    this.$refs.input.value = this.min;
                    this.counter(this.min);
                } else if(Number(value) > this.max){
                    this.$refs.input.value = this.max;
                    this.counter(this.max);
                } else{
                    this.$refs.input.value = this.myValue;
                }
            }
        },
        validate(num){
            if(Number(num)===Number(num)){
                if((num >= this.min)&&(num <= this.max)){
                    return true
                } 
            }
            return false
        }
    },
    computed: {
        classes() {
            return {
                [`${this.size}`]: this.size
            }
        }
    },
    watch: {
        value(val){
            if(this.validate(val)){
                this.myValue = Number(val);
            }
        }
    },
    created() {
        if(this.validate(this.value)){
            this.myValue = Number(this.value);
        }else{
            this.myValue = this.min;
        }
    },
    mounted() {
    },
};
</script>
<style scoped>
.cz-counter{
    display: inline-block;
    position:relative;
    width: 160px;
    height: 36px;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    overflow: hidden;
}
.cz-counter.mini{
    width: 130px;
    height: 28px;
}
.cz-counter.mini>.counterBtn{
    height: 28px;
    line-height: 26px;
}
.cz-counter.small{
    width: 140px;
    height: 32px;
}
.cz-counter.small>.counterBtn{
    height: 32px;
    line-height: 30px;
}
.cz-counter.large{
    width: 170px;
    height: 40px;
}
.cz-counter.large>.counterBtn{
    height: 40px;
    line-height: 38px;
}
.counterInput{
    padding: 0 30px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #606266;
    background: #fff;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    border: none;
    text-align: center;
}
.cz-counter:hover{
    border: 1px solid #aba;
}
.counterBtn{
    position: absolute;
    top: 0;
    cursor: pointer;
    height: 36px;
    width: 30px;
    line-height: 34px;
    text-align: center;
    font-size: 18px;
    user-select: none; 
    background: #e9eef3;
}
.counterBtn:hover{
    color: var(--active-color);
}
.counterBtn.add{
    border-left: 1px solid #DCDFE6;
    right: 0;
}
.counterBtn.sub{
    border-right: 1px solid #DCDFE6;
    left: 0;
}
</style>