import Vue from 'vue'
Vue.config.silent = false;//true;
Vue.config.devtools = true;//false;
//-----bootStrap风格的组件系列-------
//     VueStrap
import VueStrap from 'vue-strap'
import './src/js/antd/style/index.less'
import * as utils from './src/js/antd/utils'
import {Notification,Message,MessageBox} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//-----antd风格的组件系列-------
//---------------基本
//按钮
import aButton from './src/js/antd/components/button'
//按钮组
import aButtonGroup from './Src/Js/Antd/components/button/ButtonGroup.vue'
//字体图标，本地不行，不可以基于本地文件读取貌似，网络可以。
import aIcon from './src/js/antd/components/iconfont'
//布局
import aLayoutCol from './src/js/antd/components/layout/Col.vue'
import aLayoutRow from './src/js/antd/components/layout/Row.vue'

//---------------表单
//多选框
import aCheckbox from './src/js/antd/components/checkbox'
//数字输入框
import aInputNumber from './src/js/antd/components/input-number'
//单选框
import aRadio from './src/js/antd/components/radio'
//选择器
// import aSelect from './src/js/antd/components/select'
//switch开关
import aSwitch from './Src/Js/Antd/components/switch'
//上传
import  aUpload from './Src/Js/Antd/components/upload'

//---------------展示
//警告框
import aAlert from './Src/Js/Antd/components/alert'
//标记元素的数量 徽标数
import aBadge from './src/js/antd/components/badge'
//走马灯 vue文件和js文件都为空
// import aCarousel from './Src/Js/Antd/components/carousel/carousel.vue'
//面板 折叠面板引用了这个文件
import aPanel from './Src/Js/Antd/components/base/collapse/Panel.vue'
//折叠面板
import aCollapse from './Src/Js/Antd/components/collapse'
//下拉菜单
import aDropdown from './Src/Js/Antd/components/dropdown'
//对话框
import aModal from './Src/Js/Antd/components/modal'
//通知提醒框,没有vue文件
import aNotification from './Src/Js/Antd/components/base/notification'
//气泡确认框
import aPopconfirm from './Src/Js/Antd/components/popconfirm'
//气泡卡片
import aPopover from './Src/Js/Antd/components/popover/Popover.vue'
//进度条-Line
import aProgressLine from './Src/Js/Antd/components/progress/ProgressLine.vue'
//进度条-Circle
import aProgressCircle from './Src/Js/Antd/components/progress/ProgressCircle.vue'
//grid表格
import aTable from './src/js/antd/components/table'
//标签
import aTag from './Src/Js/Antd/components/tag'
//加载动画
import aSpin from './Src/Js/Antd/components/spin'
//时间轴总
import aTimeline from './Src/Js/Antd/components/timeline'
//时间轴单个项
import aTimelineItem from './Src/Js/Antd/components/timeline/TimelineItem.vue'
//文字提示
import aTooltip from './Src/Js/Antd/components/tooltip/tooltip.vue'

//---------------导航
//面包屑
import aBreadcrumd from './Src/Js/Antd/components/breadcrumb'
//步骤条
import aSteps from './Src/Js/Antd/components/steps'

//---------------其他
//固钉
import aAffix from './Src/Js/Antd/components/affix'
//入场动画
import aQueueAnim from './Src/Js/Antd/components/queue-anim'

//---------------基础
//动画
import aAnimate from './Src/Js/Antd/components/base/animate'
//对齐
import aAlign from './Src/Js/Antd/components/base/align'
//对话框
import aDialog from './Src/Js/Antd/components/base/dialog'


//notice
import aNotice from './Src/Js/Antd/components/base/notification/Notice.vue'

//引入vue-resource.js
//这个那里用到了？soui纯插件中是不应该出现ajax请求的逻辑的。
//require("./Assets/Js/lib/vue-resource.min.js?r=1")
//引入notification的js文件
// require("./Src/Js/Antd/components/notification/index.js?r=2")
// require("./Assets/Js/models.js?r=1")
//--------------------------自定义模块--------------------------
//---------------yuanq
// import filter from './Src/Js/Components/Filter/Filter.vue'
// import dropdown from './src/Js/Components/Dropdown/DropDown.vue'
// import searchinfo from './Src/Js/Components/SearchInfo/SearchInfo.vue'
// import bootpage from './Src/Js/Components/BootPage/BootPage.vue'
// import searchlist from './Src/Js/Components/SearchList/SearchList.vue'
// import imgshow from './Src/Js/Components/ImgShow/ImgShow.vue'
// import displayview from './Src/Js/Components/RichShow/RichShow.vue'
// //----------------------------------------------------------------
//----------------------------lei
//import showarea from './Src/Js/Components/SoShowArea/SoShowArea.vue'
//import showinglist from './Src/Js/Components/SoShowingList/SoShowingList.vue'
//import detail from './Src/Js/Components/SoDetail/SoDetail.vue'

//--------------------------------------------------------------


// import grid from './Src/Js/Components/Grid/grid.vue'
// import tabs from './Src/Js/Components/Tabs/Tabs.vue'
// import tree from './Src/Js/Components/Tree/tree.vue'
// import showgdb from './Src/Js/Components/Showgdb/showgdb.vue'
// import dataset from './Src/Js/Components/DataSet/dataSet.vue'
// import tableshow from './Src/Js/Components/Test/tableshow.vue'
 import notification from './Src/Js/Antd/components/notification'
 import message from './Src/Js/Antd/components/message'

// const event = {
//     "notification":notification,
//     "message":message,
// }

//加载页面模块的方法，理论上不修改bind方法，然后加上开关，让两种方法都可以正常使用。
//只去掉id，其他逻辑在bind中，去掉id可以避免重复load。
//这里有2个关键点：1是获取所有使用到的组件名称。2是递归遍历的方法获取顶层组件并绑定。
function loadUI(name,tags){
    let items = document.getElementsByTagName("body")[0].childNodes;
    function insertAfter( newElement, targetElement ){
        var parent = targetElement.parentNode;
        if( parent.lastChild == targetElement ){
            parent.appendChild( newElement, targetElement );   
        }else{   
            parent.insertBefore( newElement, targetElement.nextSibling );   
        };   
    }; 
    function load(data,name,tags){
        for(let i =0; i <= data.length -1 ; i++){
            if(data[i].nodeName.toLowerCase().substr(0, 3) == name.toLowerCase()){
                //alert(data[i].nodeName.toLowerCase());
                //1.替换id
                //这里还有个策略是指获取带id的，所有嵌套只需要在最外层加id.
                //获取自定义属性也应该将嵌套属性挂在最外层的域上。
                //bug:子元素的id没有去掉，嵌套的组件只在最上层写id。
                //bug:未扫描子元素的自定义属性。
                //bug:自动加载模块关闭的逻辑中没有获取自定义属性。
                //bug:没有去掉id的话应该判断父节点是不是存在添加过的div。
                //     自动加载的方式应该只使用与自定义组件，引用第三方和基础组件不应该适用，因为会修改参数增加id，和修改返回事件。
                let soId = null;
                let soParam = {};
                let tagName = data[i].nodeName.toLowerCase();
                for(let j = 0;j <= data[i].attributes.length-1;j++){
                    if(data[i].attributes[j].name == ":id"){
                    //if(data[i].attributes[j] && data[i].attributes[j].name == ":id"){
                        soId = data[i].attributes[j].value;
                        //添加例外：第三方组件。
                        if(data[i].nodeName.toLowerCase().substr(3, 2) =="a_" || data[i].nodeName.toLowerCase().substr(3, 2) =="s_"){
                            data[i].removeAttribute(data[i].attributes[j].name);
                            j--;
                        }
                        //break; 
                    }else{
                        if(data[i].attributes[j].name.toLowerCase().substr(0, 6) == ":data-"){
                            soParam[data[i].attributes[j].name.substr(6, data[i].attributes[j].name.length-1)]=data[i].attributes[j].value;
                            data[i].removeAttribute(data[i].attributes[j].name);
                            j--;
                        }
                    }
                }
                if(!soId) continue;
                let tit = document.createElement("div");
                tit.setAttribute("id","div"+soId);
                tit.setAttribute("style",'display:inline');
                // let node = data[i];
                // tit.appendChild(node);
                // data[i].insertBefore(tit);
                insertAfter(tit,data[i]);
                document.getElementById("div"+soId).appendChild(data[i]);
                // insertAfter(document.getElementById(soId),data[i]);
                //let node = document.getElementsByTagName(data[i].nodeName.toLowerCase());
                //let div = document.getElementById(soId);
                // data[i].removeChild(data[i]);
                //2.绑定
                let mod = [];
                for(let tag in tags){
                    mod.push(tags[tag]);
                }
                let vm = soUI.bind({
                    scope:"div"+soId,
                    model: mod
                });
                //3.添加到vm队列,在非自动加载模式下bind中也需要添加
                soModels.viewModels[soId]={
                    key:soId,
                    name:tagName,
                    vm:vm,
                    //用户自定义参数，data-*
                    param:soParam
                };
            }else{
                load(data[i].childNodes,name,tags);
            }
        }
    }  

    load(items,name,tags);
}

function getNames(name){
    let tags = {};
    let uiTags = document.querySelectorAll("body *")
    for (let i = 0; i <= uiTags.length-1; i++) {
        let item = uiTags[i].nodeName.toLowerCase();
        if(item.substr(0, 3) == name.toLowerCase())
            tags[item] = item;
    }
    return tags;
}

const models= {
    //这里实际已经使用了引用的模块，对于wenpack来说。所以设置使用的模块并没有起到效果。
    //notification:leijing,

    //antd封装
    "so:a_badge": aBadge,
    "so:a_table": aTable,
    "so:a_button": aButton,
    "so:a_buttongroup": aButtonGroup,
    "so:a_icon": aIcon,
    "so:a_checkbox": aCheckbox,
    "so:a_inputnumber": aInputNumber,
    //"so:a_layout": aLayout,
    "so:a_layoutcol":aLayoutCol,
    "so:a_layoutrow":aLayoutRow,
    "so:a_alert": aAlert,
    "so:a_collapse":aCollapse,
    "so:a_dropdown":aDropdown,
    "so:a_modal":aModal,
    "so:a_notification":aNotification,
    "so:a_notice":aNotice,


    "so:a_panel":aPanel,
    "so:a_popconfirm": aPopconfirm,
    "so:a_popover":aPopover,
    "so:a_progressline":aProgressLine,
    "so:a_progresscircle":aProgressCircle,
    "so:a_spin":aSpin,
    "so:a_tag":aTag,
    "so:a_timeline":aTimeline,
    "so:a_timelineitem":aTimelineItem,
    "so:a_tooltip":aTooltip,
    "so:a_radio": aRadio,
    "so:a_radiogroup": aRadio.vRadioGroup,
    // "so:a_select": aSelect,
    // "so:a_option": aSelect.Option,
    "so:a_switch": aSwitch,
    "so:a_upload": aUpload,
    "so:a_breadcrumd": aBreadcrumd,
    "so:a_breadcrumditem": aBreadcrumd.BreadcrumbItem,
    "so:a_steps": aSteps,
    "so:a_step": aSteps.vStep,
    "so:a_affix": aAffix,
    "so:a_queueanim": aQueueAnim,
    'so:a_animate':aAnimate,
    'so:a_align':aAlign,
    'so:a_dialog':aDialog,

    //vue-strap封装--
    "so:s_alert": VueStrap.alert,
    "so:s_carousel": VueStrap.carousel,
    "so:s_slider": VueStrap.slider,
    "so:s_accordion": VueStrap.accordion,
    "so:s_affix": VueStrap.affix,
    "so:s_aside": VueStrap.aside,
    "so:s_checkboxBtn": VueStrap.checkboxBtn,
    "so:s_checkboxGroup": VueStrap.checkboxGroup,
    "so:s_datepicker": VueStrap.datepicker,
    "so:s_dropdown": VueStrap.dropdown,
    "so:s_modal": VueStrap.modal,
    "so:s_option": VueStrap.option,
    "so:s_panel": VueStrap.panel,
    "so:s_popover": VueStrap.popover,
    "so:s_progressbar": VueStrap.progressbar,
    "so:s_radioGroup": VueStrap.radioGroup,
    "so:s_radioBtn": VueStrap.radioBtn,
    "so:s_select": VueStrap.select,
    "so:s_tab": VueStrap.tab,
    "so:s_tabset": VueStrap.tabset,
    "so:s_tooltip": VueStrap.tooltip,
    "so:s_typeahead": VueStrap.typeahead,
    "so:s_navbar": VueStrap.navbar,
    "so:s_spinner": VueStrap.spinner,
    //自定义封装
    // "so:dropdown": dropdown,
    // "so:tabs": tabs,
    // "so:filter": filter,
    // "so:searchinfo": searchinfo,
    // "so:bootpage": bootpage,
    // "so:searchlist": searchlist,
    // "so:imgshow": imgshow,
    // "so:displayview": displayview,
    // "so:showinglist": showinglist,
    // "so:showarea": showarea,
    // "so:grid": grid,
    // "so:tree": tree,
    // "so:detail": detail,
    // "so:gdb": showgdb,
    // "so:dataset": dataset,
    // "so:tableshow": tableshow,
}

const soUI = {
    isAutoLoadUI:true,
    bind: function (com) {
       let model={};
        if(com.model){
            if(typeof(com.model)=="string"){
                model={
                    [com.model]:models[com.model]
                }
            }
            else {
                for(let i=0;i<com.model.length;i++){
                    model[com.model[i]]=models[com.model[i]];
                }
            }
        }else{
            //出于性能的考虑，目前必须手动注册使用到的模块。
            //model=models;
        }

        // for(let i in event){
        //     model[i]=event[i];
        // }

        for(let i in model){
            let nodes = document.getElementById(com.scope).getElementsByTagName(i);
            for(let n =0;n<nodes.length;n++){
                for(let j=0;j<nodes[n].attributes.length;j++){
                    let ab = nodes[n].attributes[j];
                    if(ab.name.substr(0, 1) == ":"){
                        let abobject = ab.value;
                        //let abtype = "string";
                        try{
                            abobject =eval(ab.value);
                            //abtype = typeof eval(ab.value)
                        }catch(ex){
                            //特别针对参数加：的情况字符串的处理
                            //这个处理会额外增加data
                            //if(!com.data) com.data = {};
                            //if(!com.data[ab.value])
                            //    com.data[ab.value]=abobject;
                            //js的属性方法无法修改键，只有删除再添加，这样会有改变数组的小问题。
                            //这样处理会造成循环多次，但不会影响结果。
                            //if(ab.name.substr(0, 1) == ":") {
                                nodes[n].removeAttribute(ab.name);
                                nodes[n].setAttribute(ab.name.substr(1, ab.name.length), ab.value);
                                j--;
                            //}
                        }
                        //if(abtype == "object" || abtype=="function"){
                            if(ab.name.substr(0, 3)==":on"){
                                if(!com.methods) com.methods = {};
                                if(!com.methods[ab.value])
                                    com.methods[ab.value]=abobject;
                            }
                            else{
                                if(!com.data) com.data = {};
                                if(!com.data[ab.value])
                                    com.data[ab.value]=abobject;
                            }
                        //}
                    }
                }
            }
        }

        let vm = new Vue({
            el: null,
            data: com.data,
            methods: com.methods,
            components: model
        });
        if (com.scope)
            vm.$mount("#" + com.scope);
        return vm;
    },
    notification:Notification,
    message:Message,
    messageBox:MessageBox,
    getDataByVm: function (vm, name) {
        // return vm.$get(name);
        return vm.$data[name];
    },
    setDataByVm: function (vm, name, data) {
        //vm.$set(name, data);
        vm.$data[name] = data;
    },
    getDataById: function (id, name) {
        let vm = gtUI.getViewModel(id);
        //return vm.$get(name);
        return vm.$data[name];
    },
    setDataById: function (id, name, data) {
        let vm = gtUI.getViewModel(id);
        //vm.$set(name, data);
        vm.$data[name] = data;
    },
    bindViewModel: function (vm, scope) {
        vm.$mount("#" + scope);
    },
    getViewModel: function(id){
        //按id获取自动加载UI是的vm
        let r = null;
        if(!gtUI.isAutoLoadUI)
            return r;
        if(gtModels.viewModels[id])
            r = gtModels.viewModels[id].vm;
        return r;
    },
};

const soModels= {
    //两种模式下都需要
    viewModels:{},
    getReturnModel:function(id,data){
        //获取返回值模型
        //需要在每个模块内定义一个id参数。

       let mod = null;
        if(!soUI.isAutoLoadUI)
            return mod;
        if(soModels.viewModels[id]){
            let r = soModels.viewModels[id];
            mod = {
                target: {
                    id: r.key,
                    tagName: r.name,
                },
                dataset: r.param,
                detail: data
            }
        }
        return mod;
    }
};

window.onload=function(){
    const tag = "so:";
    if(soUI.isAutoLoadUI)
        loadUI(tag,getNames(tag));
} 
//分开变量的目的是为了解耦调用名称和打包名称。然后将无法预估大小的vm和主功能分开。
window.soModels = soModels;
window.soUI = soUI;