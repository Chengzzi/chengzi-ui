<template>
    <div class="cz-carousel" @mouseover="toggleAutoPlay(false)" @mouseout="toggleAutoPlay(true)">
        <div class="carousel-wrap">
            <slot></slot>
        </div>
        <div class="carousel-point-wrap" v-if="pointPosition != 'none'" :class="{[`${pointPosition}`]:true}">
            <ul class="carousel-point">
                <li v-for="(item,index) in names" :key="index" 
                :class="{active:activeIndex == index}"
                @[trigger]="goTo(index);"></li>
            </ul>
        </div>
        <div class="carousel-btn next-btn" v-if="arrow" @click="nextPlay">
            <cz-icon name="right" size="small"></cz-icon>
        </div>
        <div class="carousel-btn last-btn" v-if="arrow" @click="lastPlay">
            <cz-icon name="left" size="small"></cz-icon>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cz-carousel", 
        data(){
            return{
                names:[],
                btnToggle:{
                    use:false,
                    reserve:true
                },
                timeout:null,
            }
        },
        props:{
            activeName:{},
            autoPlay:{
                type:Boolean,
                default:true
            },
            interval:{
                type:Number,
                default:3000
            },
            trigger:{
                type:String,
                default:'click',
                validator(value) { 
                    return ["mouseover","click"].includes(value)
                }
            },
            pointPosition:{
                type:String,
                default:'none',
                validator(value) { 
                    return ["inside","none","outside"].includes(value)
                }
            },
            arrow:{
                type:Boolean,
                default:true
            },
        },
        computed:{
            activeIndex(){
                let index = this.names.indexOf(this.activeName);
                if(index<0) index = 0;
                return index
            }
        },
        updated(){
            this.updateActive();
        },
        mounted() {
            this.updateActive();
            this.$children.forEach(item=>{
                if(item.$options.name ==="cz-carousel-item") this.names.push(item.name);
            });
            if(this.autoPlay) this.autoPlayFun();
        },
        methods:{
            updateActive(){
                let activeName = this.activeName || this.$children[0].name;
                this.$children.forEach(item=>{
                    let newIndex = this.activeIndex; 
                    let oldIndex = this.names.indexOf(item.activeName);
                    // 如果是按钮按的则保持原有方向。
                    item.reserve = this.btnToggle.use?this.btnToggle.reserve:(newIndex<oldIndex);
                    this.$nextTick(()=>{
                        item.activeName = activeName;
                        this.btnToggle.use = false;
                    })
                })
            },
            autoPlayFun(){
                const run = ()=>{
                    this.nextPlay();
                    if(this.autoPlay) this.timeout = setTimeout(run,this.interval);
                }
                this.timeout = setTimeout(run,this.interval);
            },
            nextPlay(){
                let index = this.activeIndex;
                index++;
                if(index >= this.names.length) index = 0;
                this.btnToggle = {
                    use:true,
                    reserve:false
                }
                this.goTo(index);
            },
            lastPlay(){
                let index = this.activeIndex;
                index--;
                if(index < 0) index = (this.names.length-1);
                this.btnToggle = {
                    use:true,
                    reserve:true
                }
                this.goTo(index);
            },
            goTo(index){
                this.$emit("update:activeName",this.names[index]);
            },
            toggleAutoPlay(flag){
                this.autoPlay = flag;
                if(flag){
                    this.autoPlayFun();
                }else{
                    if(this.timeout) clearTimeout(this.timeout);
                }
            }
        }
    };
</script>
<style scoped>
.cz-carousel{
    position: relative;
}
.carousel-wrap{
    /*display: inline-block;*/
    overflow: hidden;
    position: relative;
    display: flex;
    border: 1px solid #000;
}
.carousel-point-wrap.outside{
    position: relative;
    height: 30px;
}
.carousel-point{
    position: absolute;
    width: 50%;
    display: flex;
    list-style: none;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    transition: all .5s;
    opacity: 0;
}

.carousel-point>li{
    margin: 6px;
    height: 4px;
    border-radius: 2px;
    background: #cfd2d6;
    flex-grow :1;
}
.carousel-point>li:hover{
    cursor: pointer;
    background: #eaeaea;
}
.carousel-point>li.active{
    background: #fff;
}
.carousel-point-wrap.outside .carousel-point>li{
    background: #eaeaea;
}
.carousel-point-wrap.outside .carousel-point>li:hover{
    background: #cfd2d6;
}
.carousel-point-wrap.outside .carousel-point>li.active{
    background: #777798;
}
.cz-carousel:hover .carousel-point{
    opacity: 1;
}
.carousel-btn{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    opacity: 0;
    width: 30px;
    height: 30px;
    background: #444;
    border-radius: 15px;
    transform: translateY(-50%);
    color: #fff;
    top: 50%;
    cursor: pointer;
}
.cz-carousel:hover .carousel-btn{
   opacity: .4; 
}
.cz-carousel .carousel-btn:hover{
    opacity: 1;
}
.next-btn{
    right: 8px;
}
.last-btn{
    left: 8px;
}
</style>