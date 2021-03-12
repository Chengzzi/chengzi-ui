<template>
    <div class="cz-col" :style="colStyle" :class="colClass">
        <slot></slot>
    </div>
</template>
<script>
export default { //输出
    name: "cz-col",
    data() {
        return {
            gutter: 0
        }
    },
    props: {
        span: {
            type: [String, Number],
        },

        offset: {
            type: [String, Number],
        }
    },
    computed: { //computed 旗下的值不能在data先里定义
        colStyle() {
            let { gutter } = this; //绑定this的属性

            let colStyle = {
                padding: '0 ' + gutter / 2 + 'px',
            }
            return colStyle;
        },
        colClass() {
            let { span, offset } = this; //绑定this

            let colClass = [
                span && `col-${span}`,
                offset && `offset-${offset}`,
            ]
            return colClass
        }
    },
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {

    } //传元素属性值
};
</script>
<style lang="scss" scoped>
@for $n from 1 through 24 {
    .cz-col.col-#{$n} {
        width: ($n/24) * 100%;
    }
}

@for $n from 1 through 24 {
    .cz-col.offset-#{$n} {
        margin-left: ($n/24) * 100%;
    }
}

@for $n from 1 through 24 {
    .cz-col.col-phone-#{$n} {
        width: ($n/24) * 100%;
    }
}

@for $n from 1 through 24 {
    .cz-col.offset-phone-#{$n} {
        margin-left: ($n/24) * 100%;
    }
}

@media (min-width:768px) {
    @for $n from 1 through 24 {
        .cz-col.col-ipad-#{$n} {
            width: ($n/24) * 100%;
        }
    }
    @for $n from 1 through 24 {
        .cz-col.offset-ipad-#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}

@media (min-width:992px) {
    @for $n from 1 through 24 {
        .cz-col.col-smpc-#{$n} {
            width: ($n/24) * 100%;
        }
    }
    @for $n from 1 through 24 {
        .cz-col.offset-smpc-#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}

@media (min-width:1280px) {
    @for $n from 1 through 24 {
        .cz-col.col-pc-#{$n} {
            width: ($n/24) * 100%;
        }
    }
    @for $n from 1 through 24 {
        .cz-col.offset-pc-#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}

@media (min-width:1600px) {
    @for $n from 1 through 24 {
        .cz-col.col-lgpc-#{$n} {
            width: ($n/24) * 100%;
        }
    }
    @for $n from 1 through 24 {
        .cz-col.offset-lgpc-#{$n} {
            margin-left: ($n/24) * 100%;
        }
    }
}
</style>