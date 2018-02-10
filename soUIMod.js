import Vue from 'vue';


//-----antd风格的组件系列-------
import './src/js/antd/style/index.less'
import * as utils from './src/js/antd/utils'
//标记元素的数量
import aBadge from './src/js/antd/components/badge'
//grid表格
import aTable from './src/js/antd/components/table'
//按钮
import aButton from './src/js/antd/components/button'
//字体图标，本地不行，不可以基于本地文件读取貌似，网络可以。
import aIcon from './src/js/antd/components/iconfont'
//多选框
import aCheckbox from './src/js/antd/components/checkbox'
//数字输入框
import aInputNumber from './src/js/antd/components/input-number'
//布局
import aLayout from './src/js/antd/components/layout'



//-----bootStrap风格的组件系列-------
//     VueStrap
import VueStrap from 'vue-strap'



//--------------------------自定义模块--------------------------
import filter from './src/Js/Components/Filter/filter.vue'
import dropdown from './src/Js/Components/Dropdown/dropdown.vue'
import searchinfo from './Src/Js/Components/SearchInfo/searchinfo.vue'
import BootPage from './src/Js/BootStrap/Components/BootPage/BootPage.vue'
import searchlist from './Src/Js/Components/SearchList/searchlist.vue'
import test from './Assets/testB.vue'



const soUIMod = {
    vm: Vue,
    //antd封装
    aBadge: aBadge,
    aTable: aTable,
    aButton: aButton,
    aIcon: aIcon,
    aCheckbox: aCheckbox,
    aInputNumber: aInputNumber,
    aLayout: aLayout,
    //vue-strap封装--
    sAlert: VueStrap.alert,
    sCarousel: VueStrap.carousel,
    sSlider: VueStrap.slider,
    sAccordion: VueStrap.accordion,
    sAffix: VueStrap.affix,
    sAside: VueStrap.aside,
    sCheckboxBtn: VueStrap.checkboxBtn,
    sCheckboxGroup: VueStrap.checkboxGroup,
    sDatepicker: VueStrap.datepicker,
    sDropdown: VueStrap.dropdown,
    sModal: VueStrap.modal,
    sOption: VueStrap.option,
    sPanel: VueStrap.panel,
    sPopover: VueStrap.popover,
    sProgressbar: VueStrap.progressbar,
    sRadioGroup: VueStrap.radioGroup,
    sRadioBtn: VueStrap.radioBtn,
    sSelect: VueStrap.select,
    sTab: VueStrap.tab,
    sTabset: VueStrap.tabset,
    sTooltip: VueStrap.tooltip,
    sTypeahead: VueStrap.typeahead,
    sNavbar: VueStrap.navbar,
    sSpinner: VueStrap.spinner,
    //自定义模块
    test: test,
    filter: filter,
    dropdown: dropdown,
    searchlist: searchlist,
    bBootPage: BootPage,
    searchinfo: sooilSearch
};

export default soUIMod