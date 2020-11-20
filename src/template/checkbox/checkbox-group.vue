<template>
    <div class="cz-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from "vue"
    export default {
        name: "cz-checkbox-group", 
        provide() {
            return {
                eventBus: this.eventBus,
            }
        },
        props:{
            value:{
                type:Array
            }
        },
        data(){
            return{
                eventBus: new Vue(),
                checkGroup:[],
            }
        },
        mounted(){
            this.init();
        },
        created(){
            this.eventBus.$on("checked",data=>{
                let checkedGroup = [...this.value];
                if(checkedGroup.includes(data)){
                    checkedGroup.splice(checkedGroup.indexOf(data), 1);
                }else{
                    checkedGroup.push(data);
                }
                this.$emit("change",checkedGroup);
                this.$emit("input",checkedGroup);
            })
        },
        methods:{
            init(){
                let filterVal = [];
                this.checkGroup = [];
                this.$children.forEach(item=>{
                    if(item.$options.name === "cz-checkbox"){
                        item.isGroup = true;
                        this.checkGroup.push(item.label);
                    }
                })
                this.value.forEach(item=>{
                    if(this.checkGroup.includes(item)) filterVal.push(item);
                })
                this.$emit("input",filterVal)
                this.eventBus.$emit("update:checked",filterVal);
            }
        }
    };
</script>

<style scoped>
.cz-checkbox-group >>> .cz-checkbox{
    margin: 0 8px;
}
</style>