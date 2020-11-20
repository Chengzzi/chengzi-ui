<template>
    <div class="cz-notify" :class="classes" @click="click">
        <div class="notify-icon" v-if="type||iconName">
            <cz-icon size="large" :name="myIconName"></cz-icon>
        </div>
        <div class="main-wrap">
            <div class="title"><b>{{title}}</b></div>
            <div v-if="htmlMessage" v-html="message" class="message"></div>
            <div v-else class="message">{{message}}</div>
        </div>
        <div class="closeBtn" @click="close">
            <cz-icon size="small" name="guanbi1"></cz-icon>
        </div>
    </div>
</template>
<script>
export default { //输出
    name: "cz-notify",
    data() {
        return {
            number: null,
            myIconName:"info"
        }
    },
    props: {
        n_id:{
            default: 1,
            type: Number
        },
        type:{
            type: String,
            validator(val) {
                return ["error", "warning", "info", "success"].includes(val);
            }
        },
        iconName:{
            type: String
        },
        onClose:{
            default(){
                return null
            },
            type: Function
        },
        onClick:{
            default(){
                return null
            },
            type: Function
        },
        message: {
            default: "这是一条消息",
            type: String
        },
        title: {
            default: "提示",
            type: String
        },
        htmlMessage: {
            default: false,
            type: Boolean
        },
        closeDelay: {
            default: 2500,
            type: Number,
            validator(val) {
                return val >= 0;
            }
        },
        offset: {
            default: 20,
            type: Number
        },
        position: {
            default: "top-right",
            type: String,
            validator(val) {
                return ["top-right", "top-left", "bottom-right", "bottom-left"].includes(val);
            }
        },
    },
    methods: {
        close() {
            this.$emit("close", this);
            if(this.onClose) this.onClose(this);
            this.$el.remove();
            this.$destroy();
        },
        click(){
            if(this.onClick) this.onClick(this);
        },
        updatePosition(h) {
            let { top } = this.$el.getBoundingClientRect();
            if (this.position.includes("top")) {
                this.$el.style.top = (top - Math.ceil(h) - 10) + "px";
            } else if (this.position.includes("bottom")) {
                this.$el.style.top = (top + Math.ceil(h) + 10) + "px";
            }
        },
        setPosition() {
            let brothers = document.body.getElementsByClassName(`position-${this.position}`);
            let lastNotify = brothers[brothers.length - 1];
            let data = null;
            lastNotify && (data = lastNotify.getBoundingClientRect());
            if (this.position.includes("top")) {
                this.$el.style.top = this.offset + "px";
                if (lastNotify) {
                    // 如果有前一个通知
                    this.$el.style.top = (data.top + Math.ceil(data.height) + 10) + "px";
                }
            } else if (this.position.includes("bottom")) {
                this.$el.style.bottom = this.offset + "px";
                if (lastNotify) {
                    // 如果有前一个通知
                    this.$nextTick(() => {
                        let { height } = this.$el.getBoundingClientRect();
                        this.$el.style.bottom = "auto";
                        this.$el.style.top = (data.top - Math.ceil(height) - 10) + "px";
                    })
                }
            }
        }
    },
    created() {
        if(this.iconName) this.myIconName = this.iconName;
        if(this.type) this.myIconName = this.type=="info"?"info":`color-${this.type}`;
    },
    mounted() {
        if (this.closeDelay!==0) setTimeout(() => { this.close() }, this.closeDelay);
        this.setPosition();
    },
    computed: {
        classes() {
            return [`position-${this.position}`]
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-notify {
    position: fixed;
    display: flex;
    width: 330px;
    min-height: 50px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    z-index: 1000;
    box-shadow: 0 0 5px 0 rgba(188,188,188,.6), 0 2px 5px 0 rgba(188,188,188,.5);
}
@keyframes right-in {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes left-in {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0%);
        opacity: 1;
    }
}

.cz-notify.position-top-right,
.cz-notify.position-bottom-right {
    right: 20px;
    animation: right-in .8s;
}

.cz-notify.position-top-left,
.cz-notify.position-bottom-left {
    left: 20px;
    animation: left-in .8s;
}

.notify-icon {
    width: 40px;
    color: #999;
}

.main-wrap {
    width: 100%;
}

.main-wrap .title {
    margin-bottom: 10px;
}

.main-wrap .message {
    font-size: 14px;
    line-height: 21px;
    color: #606266;
    text-align: justify;
}

.closeBtn {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
}
</style>