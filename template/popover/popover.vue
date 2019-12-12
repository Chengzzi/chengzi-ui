<template>
    <div v-on="eventType" class="cz-popover">
        <div ref="popContent" class="pop-content" v-show="popShow">
            <slot name="content"></slot>
        </div>
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
        }
    },
    data() {
        return {
            popShow: false,
            eventclick: { click: this.popClick },
            eventhover: { mouseover: this.popHover, mouseout: this.popHover },

        }
    },
    computed: {
        eventType() {
            return this[`event${this.trigger}`];
        }
    },
    created() {

    },
    mounted() {

    },
    destroyed() {
        //在组件关闭时候消除监听，避免内存泄露
        $("body").off("click", this.documentClick);
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.popContent);
            //获取元素的位置，可用减去父元素的绝对位置来获取相对位置
            let data = this.$el.getBoundingClientRect();
            let left = data.left + window.scrollX;
            let top = data.top + window.scrollY - 30;
            this.$refs.popContent.style.left = left + "px";
            this.$refs.popContent.style.top = top + "px";
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
            console.log(e.target);
            let flag = !this.$refs.popContent.contains(e.target) && !this.$refs.popTrigger.contains(e.target);
            if (flag) {
                this.clickClose()
            }
        },
        clickClose() {
            this.popShow = false;
            $("body").off("click", this.documentClick);
        },
        clickOpen() {
            this.popShow = true;
            this.positionContent();
            $("body").on("click", this.documentClick);
        },

        popHover() {
            this.popShow = !this.popShow;
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-popover {
    display: inline-block;
    position: relative;
}

.pop-content {
    position: absolute;
    top: -30px;
    padding: 0.2em;
    border: 2px solid #ffbbcc;
}
</style>