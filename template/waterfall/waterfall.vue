<template>
    <div class="cz-waterfall" ref="waterfall" @scroll="scrollFun($event)">
        <div class="cz-waterfall-box" ref="waterfallBox">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cz-waterfall", 
        props:{
            width:{
                type:Number,
                validator(value) {
                    return value > 0;
                }
            },
            height:{
                type:Number,
                default:400,
                validator(value) {
                    return value > 0;
                }
            },
            reachBottomDistance:{
                type:Number,
                default:30,
                validator(value) {
                    return value > 0;
                }
            },
            reachBottomInterval:{
                type:Number,
                default:100
            },
            gap:{
                type:Number,
                default:15
            },
            maxCols:{
                type:Number,
                default:5
            }
        },
        data(){
            return {
                itemsHeight:[],
                reachBottomflag:true,
            }
        },
        updated(){
            this.layout();
        },
        mounted(){
            this.$refs.waterfall.style.width = this.width?this.width+"px":"100%";
            this.$refs.waterfall.style.height = this.height+"px";
            this.layout();
        },
        methods:{
            getItemWidth(){
                let width = parseInt((this.$refs.waterfall.offsetWidth - this.gap)/this.maxCols);
                return width - this.gap
            },
            layout(){
                this.itemsHeight = [];
                this.$nextTick(()=>{
                    this.$children.forEach((item,index)=>{
                        let itemWidth = this.getItemWidth();
                        item.$el.style.width = itemWidth+"px";
                        item.$el.style.marginLeft = this.gap+"px";
                        if(index<this.maxCols){
                            this.itemsHeight.push(item.$el.offsetHeight);
                        }else{
                            item.$el.style.position = "absolute";
                            let minH = Math.min.apply(null,this.itemsHeight);
                            let minIndex = this.itemsHeight.indexOf(minH);
                            item.$el.style.top = minH+this.gap +"px";
                            item.$el.style.left = (itemWidth+this.gap)*minIndex +"px";
                            this.itemsHeight[minIndex]+= (item.$el.offsetHeight+this.gap);
                        }
                    })
                    this.$refs.waterfallBox.style.height = Math.max.apply(null,this.itemsHeight) + "px";
                })
            },
            scrollFun(e){
                this.$emit("scroll",e);
                if(this.$refs.waterfall.scrollTop + this.height+this.reachBottomDistance>this.$refs.waterfallBox.offsetHeight){
                    if(this.reachBottomflag){
                        this.reachBottomflag = false;
                        this.$emit("reach-bottom",e);
                        setTimeout(()=>{
                            this.reachBottomflag = true;
                        },this.reachBottomInterval)
                    }
                }
            }
        },
    };
</script>

<style scoped>
.cz-waterfall{
    overflow: auto; 
}
.cz-waterfall::-webkit-scrollbar {
    width: 6px;
    height: 0px;
}
.cz-waterfall::-webkit-scrollbar-track {
    display: none;
}
.cz-waterfall::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px hsla(220,4%,58%,0.3);
    box-shadow: inset 0 0 6px hsla(220,4%,58%,0.3);
    border-radius: 7px;
    background: hsla(220,4%,58%,0.3);
    display: none;
}
.cz-waterfall:hover::-webkit-scrollbar-thumb {
    display: block;
}
.cz-waterfall::-webkit-scrollbar-button {
    display: none;
}
.cz-waterfall-box{
    display: flex;
    align-items:flex-start;
    position: relative;
}
.waterfall-item{
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    box-sizing:border-box;
}
</style>