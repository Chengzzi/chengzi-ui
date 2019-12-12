<template>
    <div class="cz-tab-head">

        <slot></slot>
        <div class="extra">
            <slot name="extra"></slot>
        </div>
        <div class="boder-bottom"></div>
        <div ref="line" class="line"></div>
    </div>
</template>
<script>
export default { //输出
    name: "cz-tab-head",
    data() {
        return {
        }
    },
    inject:["eventBus"],
    created(){
        this.eventBus.$on("update:activeName",(data,el)=>{
            if(el){
                let data = el.getBoundingClientRect();
                let tabHeadData = this.$el.getBoundingClientRect();
                let left =  data.left - tabHeadData.left;
                this.$refs.line.style.width = data.width+"px";
                this.$refs.line.style.left = left+"px";
            }
        })
    },
    methods: {

    }
};
</script>
<style scoped>
.cz-tab-head{
    display: flex;   
    position: relative;
    
}
.cz-tab-head .extra{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cz-tab-head .line{
    position: absolute;
    bottom: 0px;
    z-index: 2;
    border-bottom:2px solid var(--active-color);
    transition: all 400ms;
}
.boder-bottom{
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 0;
    border-bottom:1px solid #ddd;
}
</style>