<template>
    <div v-on="eventType" class="cz-popover">
        <transition name="content">
            <div v-on="contentHover" ref="popContent" :class="classes" class="pop-content" v-show="popShow">
                <slot name="content"></slot>
            </div>
        </transition>
        <span ref="popTrigger">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default { //输出
    name: "cz-popover",
    props: {
        trigger: {
            default: "click",
            type: String,
            validator(value) { //输入值合法检查
                return value === "click" || value === "hover";
            }
        },
        position:{
            default: "top",
            type: String,
            validator(value) { //输入值合法检查
                return ["top","left","right","bottom"].includes(value);
            }
        },
        type:{
            default: "light",
            type: String,
            validator(value) { //输入值合法检查
                return value === "light" || value === "dark";
            }
        }
    },
    data() {
        return {
            hoverTimeout: null,
            popShow: false,
            eventclick: { click: this.popClick },
            eventhover: { mouseover: this.hoverOpen, mouseout: this.hoverClose }
        }
    },
    computed: {
        eventType() {
            return this[`event${this.trigger}`];
        },
        contentHover() {
            if(this.trigger == "hover"){
                return this.eventhover;
            }else{
                return null;
            }
        },
        classes(){
            return {
                [`position-${this.position}`]:true,
                [`${this.type}`]:true
            }
        }
    },
    created() {

    },
    mounted() {

    },
    destroyed() {
        //在组件关闭时候消除监听，避免内存泄露
        document.body.removeEventListener("click",this.documentClick);
    },
    methods: {
        positionContent() {
            let {width,height,left,top} = this.$el.getBoundingClientRect();

            document.body.appendChild(this.$refs.popContent);
            //获取元素的位置，可用减去父元素的绝对位置来获取相对位置
            let {height:height2,width:width2} = this.$refs.popContent.getBoundingClientRect();
            let positions = {
                top:{ 
                    top:top + window.scrollY - height2 - 5,
                    left:left + window.scrollX 
                },
                left:{
                    top:top + window.scrollY + (height-height2)/2,
                    left:left + window.scrollX - width2 - 5
                },
                right:{
                    top:top + window.scrollY + (height-height2)/2,
                    left:left + window.scrollX + width + 5
                },
                bottom:{
                    top:top + window.scrollY + height + 5,
                    left:left + window.scrollX 
                }  
            }
            this.$refs.popContent.style.left = positions[this.position].left + "px";
            this.$refs.popContent.style.top = positions[this.position].top + "px";
        },
        popClick(e) {
            //contains用于检查是否包含后代node
            if (this.$refs.popTrigger.contains(e.target)) {
                if (this.popShow) {
                    this.clickClose();
                } else {
                    this.clickOpen();
                }
            }

        },
        documentClick(e) {
            let flag = !this.$refs.popContent.contains(e.target) && !this.$refs.popTrigger.contains(e.target);
            if (flag) {
                this.clickClose()
            }
        },
        clickClose() {
            this.popShow = false;
            this.$emit("close");
            document.body.removeEventListener("click",this.documentClick);
        },
        hoverClose() {
            this.hoverTimeout = setTimeout(()=>{
                this.popShow = false;
                this.$emit("close");
            },200)
        },
        clickOpen() {
            this.popShow = true;
            this.$emit("open");
            this.$nextTick(() => {
                this.positionContent();
            })
            document.body.addEventListener("click",this.documentClick);
        },
        hoverOpen() {
            if(this.hoverTimeout){
                clearTimeout(this.hoverTimeout);
            }
            this.popShow = true;
            this.$emit("open");
            this.$nextTick(() => {
                this.positionContent();
            })
        },
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-popover {
    display: inline-block;
}

.pop-content {
    position: absolute;
    padding: 8px;
    background: #fff;
    border: 1px solid #888;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(188,188,188,.6), 0 2px 3px 0 rgba(188,188,188,.5);
}

.pop-content:after {
    content: '';
    display: block;
    
    width: 5px;
    height: 5px;
    background: #fff;
    position: absolute;
}
.pop-content.position-top:after {
    border-right: 1px solid #888;
    border-bottom: 1px solid #888;
    bottom: -3px;
    left: 10px;
    transform:rotate(45deg);
}
.pop-content.position-bottom:after {
    border-left: 1px solid #888;
    border-top: 1px solid #888;
    top: -4px;
    left: 10px;
    transform:rotate(45deg);
}
.pop-content.position-right:after {
    border-left: 1px solid #888;
    border-bottom: 1px solid #888;
    left: -4px;
    top: 14px;
    transform:rotate(45deg);
}
.pop-content.position-left:after {
    border-top: 1px solid #888;
    border-right: 1px solid #888;
    right: -4px;
    top: 14px;
    transform:rotate(45deg);
}
.pop-content.dark:after{
    border:none;
    background: #303133;
}
.pop-content.dark{
    color: #fff;
    background: #303133;
    box-shadow:none;
}

.content-enter-active{
    transition: opacity .3s;
}
.content-leave-active{
    transition: opacity .1s;
}
.content-enter, .content-leave-to{
    opacity: 0;
}
</style>