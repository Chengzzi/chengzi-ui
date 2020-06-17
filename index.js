import 'velocity-animate'
import './lib/iconFont/iconfont.js'
import './lib/iconFont/iconfont.css'
import './css/commmon.css'

import Button from './template/button/button.vue'
import ButtonGroup from './template/button/button-group.vue'
import Icon from './template/icon/icon.vue'
import Row from './template/grid/row.vue'
import Col from './template/grid/col.vue'
import Popover from './template/popover/popover.vue'
import Container from './template/layout/container.vue'
import Header from './template/layout/header.vue'
import Body from './template/layout/body.vue'
import Sider from './template/layout/sider.vue'
import Footer from './template/layout/footer.vue'
import Tabs from './template/tabs/tabs.vue'
import TabBody from './template/tabs/tab-body.vue'
import TabPane from './template/tabs/tab-pane.vue'
import TabHead from './template/tabs/tab-head.vue'
import TabItem from './template/tabs/tab-item.vue'
import Input from './template/input/input.vue'
import Collapse from './template/collapse/collapse.vue'
import CollapseItem from './template/collapse/collapse-item.vue'
import Nav from './template/nav/nav.vue'
import NavItem from './template/nav/nav-item.vue'
import NavSubitem from './template/nav/nav-subitem.vue'
import Counter from './template/counter/counter.vue'
import Carousel from './template/carousel/carousel.vue'
import CarouselItem from './template/carousel/carousel-item.vue'
import Waterfall from './template/waterfall/waterfall.vue'
import WaterfallItem from './template/waterfall/waterfall-item.vue'
import Select from './template/select/select.vue'
import SelectOption from './template/select/select-option.vue'
import Checkbox from './template/checkbox/checkbox.vue'
import CheckboxGroup from './template/checkbox/checkbox-group.vue'
import Radio from './template/radio/radio.vue'
import RadioGroup from './template/radio/radio-group.vue'
import Pagination from './template/pagination/pagination.vue'
import Table from './template/table/table.vue'

import notify from './template/notify/notifyPlugin.js'

const chengziUI = {
  install: function (Vue) {
    Vue.component('cz-icon', Icon);
    Vue.component('cz-button', Button);
    Vue.component('cz-button-group', ButtonGroup);
    Vue.component('cz-input', Input);
    Vue.component('cz-row', Row);
    Vue.component('cz-col', Col);
    Vue.component('cz-popover', Popover);
    Vue.component('cz-container', Container);
    Vue.component('cz-body', Body);
    Vue.component('cz-header', Header);
    Vue.component('cz-sider', Sider);
    Vue.component('cz-footer', Footer);
    Vue.component('cz-tabs', Tabs);
    Vue.component('cz-tab-body', TabBody);
    Vue.component('cz-tab-pane', TabPane);
    Vue.component('cz-tab-head', TabHead);
    Vue.component('cz-tab-item', TabItem);
    Vue.component('cz-collapse', Collapse);
    Vue.component('cz-collapse-item', CollapseItem);
    Vue.component('cz-nav', Nav);
    Vue.component('cz-nav-item', NavItem);
    Vue.component('cz-nav-subitem', NavSubitem);
    Vue.component('cz-counter', Counter);
    Vue.component('cz-carousel', Carousel);
    Vue.component('cz-carousel-item', CarouselItem);
    Vue.component('cz-waterfall', Waterfall);
    Vue.component('cz-waterfall-item', WaterfallItem);
    Vue.component('cz-select', Select);
    Vue.component('cz-select-option', SelectOption);
    Vue.component('cz-checkbox', Checkbox);
    Vue.component('cz-checkbox-group', CheckboxGroup);
    Vue.component('cz-radio', Radio);
    Vue.component('cz-radio-group', RadioGroup);
    Vue.component('cz-pagination', Pagination);
    Vue.component('cz-table', Table);

    Vue.prototype.$czNotify = notify(Vue);
  }
}

export default chengziUI;