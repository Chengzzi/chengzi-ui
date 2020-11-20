<template>
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        v-bind:css="false"
    >
        <div
            class="cz-modal"
            @touchmove.self="windowScroll"
            @mousewheel.self="windowScroll"
            ref="czModal"
            @click="modalClick"
            v-if="visible"
        >
            <cz-panel
                class="modal-content"
                ref="czModalContent"
                :style="styles"
            >
                <template #title v-if="title">{{ title }}</template>
                <slot></slot>
                <span @click.stop>
                    <cz-icon
                        v-if="showClose"
                        name="guanbi1"
                        class="close-btn"
                        @click="close"
                    ></cz-icon>
                </span>
            </cz-panel>
        </div>
    </transition>
</template>
<script>
export default {
    //输出
    name: "cz-modal",
    data() {
        return {
            myValue: 0,
        };
    },
    props: {
        title: {
            type: String,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
            default: 400,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
        lockScroll: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        close() {
            this.$emit("update:visible", false);
        },
        windowScroll(e) {
            if (this.lockScroll) {
                let evt = e || window.event;
                if (evt.preventDefault) {
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                    evt.returnValue = false;
                }
                return false;
            }
        },
        modalClick(e) {
            if (!this.$refs.czModalContent.$el.contains(e.target)) {
                this.close();
            }
        },
        beforeEnter(el) {
            el.style.opacity = 0;
            el.children[0].style.top = "-30px";
        },
        enter(el, done) {
            Velocity(el.children[0], { top: "0" }, { duration: 200 }, "swing");
            Velocity(el, { opacity: 1 }, { complete: done });
        },
        leave(el, done) {
            Velocity(el, { opacity: 0 }, { duration: 300 }, "swing");
            Velocity(
                el.children[0],
                { top: "-30px" },

                { complete: done },
                "swing"
            );
        },
    },
    computed: {
        styles() {
            let width = this._dealPixel(this.width);
            return {
                width,
            };
        },
    },
    watch: {
        visible(val){
            if(val){
                this.$emit("open",val);
            }else{
                this.$emit("close",val);
            }
        }
    },
};
</script>
<style scoped>
.cz-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(110, 110, 110, 0.2);
    z-index: 1000;
}
.modal-content {
    background: #fff;
    margin: 0 auto;
    margin-top: 10%;
    max-height: 400px;
    border: 1px #ccc solid;
    overflow: auto;
    position: relative;
}
.modal-content::-webkit-scrollbar {
    width: 8px;
    height: 0px;
}

.modal-content::-webkit-scrollbar-track {
    display: none;
}

.modal-content::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px hsla(220, 4%, 58%, 0.3);
    box-shadow: inset 0 0 6px hsla(220, 4%, 58%, 0.3);
    border-radius: 7px;
    background: hsla(220, 4%, 58%, 0.3);
    display: block;
}

.modal-content::-webkit-scrollbar-button {
    display: none;
}
.close-btn {
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 8px;
}
</style>