<template>
    <div class="cz-nav-subitem" @mouseenter="subMouseEvent" @mouseleave="subMouseEvent" :class="classes">
        <div class="title" @click="subClick" :style="styles" @mouseenter="hoverMouseEvent" @mouseleave="hoverMouseEvent">
            <slot name="title"></slot>
            <div class="title-arrow" ref="arrow" :class="{active:spread}">
                <cz-icon size="small" name="right"></cz-icon>
            </div>
        </div>
        
        <transition 
            appear
            v-on:appear="appear"
            v-on:appear-cancelled="appearCancelled"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-bind:css="false"
            :name="mode">
                <div ref="childItem" class="childItem" v-show="spread">
                    <slot></slot>
                </div>
        </transition>
    </div>
</template>
<script>
export default { //输出
    name: "cz-nav-subitem",
    data() {
        return {
            childrenNames: [],
            activeName: "",
            spread: true,
            hover: false,
            mode: null,
            trigger: null,
            multiple: null,
            textColor: null,
            activeTextColor: null,
            defaultOpeneds: [],
            childHeight: null,
            firstClose: true,

        }
    },
    inject: ["eventBus"],
    props: {
        name: {}
    },
    methods: {
        subClick() {
            if (this.trigger == "click") {
                if(this.spread){
                    this.closeChild();
                }else{
                    this.openChild();
                }
                this.eventBus.$emit("close:child", this.name);  
            }
        },
        subMouseEvent(e) {
            if (this.trigger == "hover") {
                if (e.type == "mouseenter") {
                    clearTimeout(this.leaveTimer);
                    this.openChild();
                } else if (e.type == "mouseleave") {
                    this.leaveTimer = setTimeout(() => {
                        this.closeChild();
                    }, 200)
                }
            }
        },
        hoverMouseEvent(e) {
            if (e.type == "mouseenter") {
                this.hover = true;
            } else if (e.type == "mouseleave") {
                this.hover = false;
            }
        },
        openChild() {
            this.spread = true;
            this.eventBus.$emit("open:subitem", this.name);
        },
        closeChild() {
            this.spread = false;
            this.eventBus.$emit("close:subitem", this.name);
        },

        appear(el, done){
            this.childHeight = window.getComputedStyle(el).height;
            el.style.opacity = 1;
        },
        appearCancelled(el) {},
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            Velocity(
                el, 
                { height: this.childHeight,opacity: 1}, 
                { duration: 300 }, 
                { complete: done },
                "linear"
            );
        },
        beforeLeave(el) {
            this.childHeight = window.getComputedStyle(el).height;
        },
        leave(el, done) {
            if(this.firstClose){
                this.firstClose = false;
                done();
            }
            Velocity(el, 
                { height: 0,opacity: 0},
                { duration: 300 }, 
                { complete: done },
                "linear"
            );
        }
    },
    created() {
        this.eventBus.$on("update:activeName", data => {
            this.activeName = data;
        })
        this.eventBus.$on("close:child", (data) => {
            if (!this.multiple && this.spread&&(this.name != data)) {
                // 不是多选的时候并且本选项卡展开的话，关闭本选项卡
                this.spread = false;
            }
        })
        this.eventBus.$on("init:params", data => {
            this.mode = data.mode;
            this.multiple = data.multiple;
            this.defaultOpeneds = data.defaultOpeneds;
            this.activeName = data.defaultActive;
            this.textColor = data.textColor;
            this.activeTextColor = data.activeTextColor;

            if (this.defaultOpeneds.includes(this.name)) {
                this.spread = true;
                this.firstClose = false;
            }
            if (data.mode == "horizontal" && data.trigger == "hover") {
                this.trigger = "hover";
            } else {
                this.trigger = "click";
            }

        })
    },
    mounted() {
        this.spread = false;
        // this.childHeight = window.getComputedStyle(this.$refs.childItem).height;
        this.$children.forEach((vm) => {
            if(vm.$options.name !="cz-icon") this.childrenNames.push(vm.name);
        })

    },
    computed: {
        classes() {
            return {
                active: this.active,
                vertical: this.mode == "vertical",
                horizontal: this.mode == "horizontal"
            }
        },
        active(){
            return this.childrenNames.includes(this.activeName)
        },
        styles(){
            let color = null;
            // if(this.active){
            //     if(this.activeTextColor){
            //         // color = this.activeTextColor;
            //     }
            // }

            if(this.textColor) color = this.textColor;
            if(this.hover) color = this.activeTextColor || "#FF9500";
            return {
                'color':color,
            }
        }
    },
    watch: {

    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cz-nav-subitem {
    cursor: pointer;
    position: relative;
}

.title {
    padding: 10px 22px 10px 16px;
    position: relative;
}
.cz-nav-subitem .title-arrow {
    display: flex;
    align-items: center;
    position: absolute;
    right: 6px;
    top: 50%;
    transition: all .3s;
    transform: translateY(-50%);
}
.title-arrow.active {
    transform:rotate(90deg) translateX(-50%);
}
.childItem {
    overflow: hidden;
}

.cz-nav-subitem.horizontal .childItem {
    position: absolute;
    left: 0px;
    min-width: 150px;
    margin-top: 10px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    background: #fff;
}
.cz-nav-subitem.vertical .childItem{
    font-size: 0.9em;
    padding-left: 10px;
}

/*.vertical-enter-active,
.vertical-leave-active {
    transition: all .5s;
}

.vertical-enter,
.vertical-leave-to {
    overflow: hidden;
    height: 0;
}

.horizontal-enter-active,
.horizontal-leave-active {
    transition: opacity .3s;
}

.horizontal-enter,
.horizontal-leave-to {
    opacity: 0;
}*/
</style>