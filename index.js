import 'velocity-animate'
import './src/lib/iconFont/iconfont.js'
import './src/lib/iconFont/iconfont.css'
import './src/css/commmon.css'
import czMixins from './src/js/czmixins.js'


import Button from './src/template/button/button.vue'
import ButtonGroup from './src/template/button/button-group.vue'
import Icon from './src/template/icon/icon.vue'
import Row from './src/template/grid/row.vue'
import Col from './src/template/grid/col.vue'
import Popover from './src/template/popover/popover.vue'
import Container from './src/template/layout/container.vue'
import Header from './src/template/layout/header.vue'
import Body from './src/template/layout/body.vue'
import Sider from './src/template/layout/sider.vue'
import Footer from './src/template/layout/footer.vue'
import Tabs from './src/template/tabs/tabs.vue'
import TabBody from './src/template/tabs/tab-body.vue'
import TabPane from './src/template/tabs/tab-pane.vue'
import TabHead from './src/template/tabs/tab-head.vue'
import TabItem from './src/template/tabs/tab-item.vue'
import Input from './src/template/input/input.vue'
import Collapse from './src/template/collapse/collapse.vue'
import CollapseItem from './src/template/collapse/collapse-item.vue'
import Nav from './src/template/nav/nav.vue'
import NavItem from './src/template/nav/nav-item.vue'
import NavSubitem from './src/template/nav/nav-subitem.vue'
import Counter from './src/template/counter/counter.vue'
import Carousel from './src/template/carousel/carousel.vue'
import CarouselItem from './src/template/carousel/carousel-item.vue'
import Waterfall from './src/template/waterfall/waterfall.vue'
import WaterfallItem from './src/template/waterfall/waterfall-item.vue'
import Select from './src/template/select/select.vue'
import SelectOption from './src/template/select/select-option.vue'
import Checkbox from './src/template/checkbox/checkbox.vue'
import CheckboxGroup from './src/template/checkbox/checkbox-group.vue'
import Radio from './src/template/radio/radio.vue'
import RadioGroup from './src/template/radio/radio-group.vue'
import Pagination from './src/template/pagination/pagination.vue'
import Table from './src/template/table/table.vue'
import Panel from './src/template/panel/panel.vue'
import Modal from './src/template/modal/modal.vue'


import notify from './src/template/notify/notifyPlugin.js'

import ClickOut from './src/template/clickOut/clickOut.js'

const chengziUI = {
    install: function(Vue) {
        let components = [
            { name: "cz-icon", module: Icon },
            { name: "cz-button", module: Button },
            { name: "cz-button-group", module: ButtonGroup },
            { name: "cz-input", module: Input },
            { name: "cz-row", module: Row },
            { name: "cz-col", module: Col },
            { name: "cz-popover", module: Popover },
            { name: "cz-container", module: Container },
            { name: "cz-body", module: Body },
            { name: "cz-header", module: Header },
            { name: "cz-sider", module: Sider },
            { name: "cz-footer", module: Footer },
            { name: "cz-tabs", module: Tabs },
            { name: "cz-tab-body", module: TabBody },
            { name: "cz-tab-pane", module: TabPane },
            { name: "cz-tab-head", module: TabHead },
            { name: "cz-tab-item", module: TabItem },
            { name: "cz-collapse", module: Collapse },
            { name: "cz-collapse-item", module: CollapseItem },
            { name: "cz-nav", module: Nav },
            { name: "cz-nav-item", module: NavItem },
            { name: "cz-nav-subitem", module: NavSubitem },
            { name: "cz-counter", module: Counter },
            { name: "cz-carousel", module: Carousel },
            { name: "cz-carousel-item", module: CarouselItem },
            { name: "cz-waterfall", module: Waterfall },
            { name: "cz-waterfall-item", module: WaterfallItem },
            { name: "cz-select", module: Select },
            { name: "cz-select-option", module: SelectOption },
            { name: "cz-checkbox", module: Checkbox },
            { name: "cz-checkbox-group", module: CheckboxGroup },
            { name: "cz-radio", module: Radio },
            { name: "cz-radio-group", module: RadioGroup },
            { name: "cz-pagination", module: Pagination },
            { name: "cz-table", module: Table },
            { name: "cz-panel", module: Panel },
            { name: "cz-modal", module: Modal },
        ]
        components.forEach(item => {
            item.module.mixins = [czMixins]
            Vue.component(item.name, item.module);
        })


        Vue.prototype.$czNotify = notify(Vue);

        // Vue.mixin(czMixins);

        Vue.directive("click-out", ClickOut);
    }
}

export default chengziUI;