<template>
    <div class="cz-input" :class="classes">
        <div class="input-icon">
            <cz-icon :name="icon"></cz-icon>
        </div>
        <input :value="value" @input="inputFun($event)" type="text">
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
        title: { default: "", type: String },
        icon: { default: "", type: String },
        iPosition: {
            default: "left",
            type: String,
            validator(value) { //输入值合法检查
                return value === "left" || value === "right";
            }
        },
        size: {
            type: String,
            validator(value) { //输入值合法检查
                return ["large", "small", "mini"].includes(value);
            }
        },
        width:{
            type: [Number,String]
        },
        disabled:{
            default: "left",
            type: String,
        }

    },
    methods: {
        inputFun($event) {
            this.$emit("input", $event.target.value)
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {
        classes() {
            return {
                [`i-${this.iPosition}`]: true,
                [`${this.size}`]: this.size,
            }
        },
        inputStyle(){
            return {
                width:this.width || "100%"
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
    line-height: 16px;
    border:1px solid var(--tinge-color);
    border-radius: 3px;
    width: auto;
    width: 100%;
    padding: 3px 25px;
}
.cz-input>input{
    width: 100%;
    display: inline-block;
    border:none;
    outline:none;
    
}
.cz-input>input:focus{

}


.cz-input .input-icon {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
}

.cz-input.i-right .input-icon {
    left: auto;
    right: 5px;
}


.cz-input.mini{
    padding: 3px 20px;
    font-size: 0.8em;
}
.cz-input.small{
    padding: 3px 20px;
    font-size: 0.9em;
}
.cz-input.large{
    padding: 8px 20px;
}



</style>