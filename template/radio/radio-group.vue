<template>
    <div class="cz-radio-group">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from "vue"
    export default {
        name: "cz-radio-group", 
        provide() {
            return {
                eventBus: this.eventBus,
            }
        },
        props:{
            value:{}
        },
        data(){
            return{
                eventBus: new Vue(),
                radioGroup:[],
            }
        },
        mounted(){
            this.$children.forEach(item=>{
                if(item.$options.name === "cz-radio"){
                    item.isGroup = true;
                    this.radioGroup.push(item.label);
                }
            })
            if(!this.radioGroup.includes(this.value)){
                this.$emit("input","");
            }
            this.eventBus.$emit("checked",this.value);
        },
        created(){
            this.eventBus.$on("checked",data=>{
                if(data !== this.value) this.$emit("change",data);
                this.$emit("input",data);
            })
        }
    };
</script>

<style scoped>
.cz-radio-group >>> .cz-radio{
    margin: 0 8px;
}
</style>