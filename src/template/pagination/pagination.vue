<template>
    <div
        v-show="!pageHide"
        class="cz-pagination"
        :class="{ background, disabled }"
    >
        <cz-button
            icon="left"
            :disabled="prevDisbled || disabled"
            size="mini"
            v-if="layout.includes('prev')"
            @click="btnClick('prev')"
        >
            {{ prevText }}
        </cz-button>
        <ul class="cz-pager">
            <li
                class="cz-pager-number"
                :class="{
                    active: item === currentPage,
                    'prev-more': item === 'prev',
                    'next-more': item === 'next',
                }"
                v-if="
                    typeof item === 'number' ? true : layout.includes('jumper')
                "
                @click="numberClick(item)"
                v-for="item in pages"
            >
                <span>{{ typeof item === "number" ? item : "..." }}</span>
            </li>
        </ul>
        <cz-button
            icon="right"
            i-position="right"
            :disabled="nextDisabled || disabled"
            size="mini"
            v-if="layout.includes('next')"
            @click="btnClick('next')"
        >
            {{ nextText }}
        </cz-button>
    </div>
</template>

<script>
export default {
    name: "cz-pagination",
    props: {
        hideIfOnePage: {
            type: Boolean,
            default: true,
        },
        background: {
            type: Boolean,
            default: false,
        },
        totle: {
            type: Number,
            required: true,
            validator(value) {
                return Number.isInteger(value) && value > 0;
            },
        },
        currentPage: {
            type: Number,
            required: true,
            validator(value) {
                let flag = Number.isInteger(value) && value > 0;
                return flag;
            },
        },
        prevText: {
            type: String,
            default: "",
        },
        nextText: {
            type: String,
            default: "",
        },
        showNumberSize: {
            type: Number,
            default: 5,
            validator(value) {
                return [3, 5, 7].includes(value);
            },
        },
        layout: {
            type: Array,
            default() {
                return ["prev", "next", "jumper"];
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            pages: [],
        };
    },
    methods: {
        btnClick(val) {
            if (this.disabled) return;
            if (val === "prev") {
                this.moveTo(this.currentPage - 1);
            } else if (val === "next") {
                this.moveTo(this.currentPage + 1);
            }
        },
        numberClick(val) {
            if (this.disabled) return;
            if (typeof val === "number") {
                this.moveTo(val);
            } else {
                if (val === "prev") {
                    this.moveTo(this.currentPage - this.showNumberSize);
                } else if (val === "next") {
                    this.moveTo(this.currentPage + this.showNumberSize);
                }
            }
        },
        pageInit() {
            let arr = [];
            if (this.layout.includes("jumper")) arr = [1, this.totle];
            for (let i = 1; i <= this.showNumberSize; i++) {
                let num = this.currentPage - Math.ceil(this.showNumberSize / 2);
                arr.push(num + i);
            }
            arr.sort((a, b) => {
                return a - b;
            });
            this.pages = this.unique(arr);
        },
        unique(arr) {
            let obj = {};
            arr.map((item) => {
                obj[item] = true;
            });
            let rawData = Object.keys(obj).map((item) => {
                return parseInt(item);
            });
            // or let rawData =  [...new Set(arr)];
            let pages = rawData.reduce((prev, current, index, array) => {
                // prev = 传入的[],current=当前项,index=序号,array = rawData
                if (current >= 1 && current <= this.totle) {
                    // 经过排序和去重后，首先现在每一项都要推入pages数组
                    prev.push(current);
                    if (
                        array[index + 1] !== undefined &&
                        array[index + 1] - current > 1
                    ) {
                        // 需要做的是判断什么时候插入prev,next按钮项。
                        // 一旦下一项减前一项大于一，则不连续，中间就需要插入prev next
                        if (
                            prev.includes("prev") ||
                            this.currentPage < this.showNumberSize
                        ) {
                            // 如果显示的数字数比现在的页数还小，那肯定是+next
                            prev.push("next");
                        } else {
                            prev.push("prev");
                        }
                    }
                }
                return prev;
            }, []);
            return pages;
        },
        moveTo(page) {
            if (page < 1) page = 1;
            if (page > this.totle) page = this.totle;
            if (this.currentPage === page) return;

            this.$emit("update:currentPage", page);
            this.$nextTick(() => {
                this.$emit("page-change", page);
                this.pageInit();
            });
        },
    },
    created() {
        if (this.currentPage && this.currentPage > this.totle)
            console.error("当前页必须小于或等于总页数");
        this.pageInit();
    },
    computed: {
        nextDisabled() {
            return this.currentPage === this.totle;
        },
        prevDisbled() {
            return this.currentPage === 1;
        },
        pageHide() {
            return this.hideIfOnePage && this.totle === 1;
        },
    },
    watch: {
        totle(val) {
            this.pageInit();
        },
    },
};
</script>

<style scoped>
.cz-pagination {
    text-align: center;
}
.cz-pager {
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
}
.cz-pager-number {
    margin: 0 5px;
    background-color: #fff;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    position: relative;
}
.background .cz-pager-number {
    background-color: #f4f4f5;
}
.cz-pagination:not(.disabled) .cz-pager-number:hover,
.cz-pager-number.active {
    color: #ff9500;
}
.disabled .cz-pager-number {
    cursor: not-allowed;
}
.background .cz-pager-number.active {
    background: #ff9500;
    color: #fff !important;
}
.cz-pagination:not(.disabled) .cz-pager-number.prev-more:hover:before,
.cz-pagination:not(.disabled) .cz-pager-number.next-more:hover:before {
    display: block;
    height: 28px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-75%);
}
.cz-pagination:not(.disabled) .cz-pager-number.prev-more:hover:before {
    content: "《";
}
.cz-pagination:not(.disabled) .cz-pager-number.next-more:hover:before {
    content: "》";
    transform: translateX(-25%);
}
.cz-pagination:not(.disabled) .cz-pager-number.prev-more:hover > span,
.cz-pagination:not(.disabled) .cz-pager-number.next-more:hover > span {
    display: none;
}
.cz-pagination >>> .cz-button {
    background-color: #fff;
    color: #606266;
    border: none;
    font-size: 13px;
    height: 28px;
    padding: 0 4px;
    margin: 0 5px;
    min-width: 30px;
}
.cz-pagination >>> .cz-button:hover:enabled {
    color: #ff9500;
    border: none;
}
.background.cz-pagination >>> .cz-button {
    background-color: #f4f4f5;
}
</style>