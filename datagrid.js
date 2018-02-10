import Vue from 'vue'
Vue.config.silent = false; //true;
Vue.config.devtools = true; //false;
//import tree from './Src/Js/Components/SoTree/SoTree.vue'
import datagrid from './Src/Js/Components/SoDataGrid/SoDataGrid.vue'
//import dataset from './Src/Js/Components/SoDataSet/SoDataSet.vue'

function loadUI(name, tags) {
    let items = document.getElementsByTagName("body")[0].childNodes

    function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement, targetElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        };
    };

    function load(data, name, tags) {
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].nodeName.toLowerCase().substr(0, 3) == name.toLowerCase()) {
                let soId = null;
                let soParam = {};
                let tagName = data[i].nodeName.toLowerCase();
                for (let j = 0; j <= data[i].attributes.length - 1; j++) {
                    if (data[i].attributes[j].name == ":id") {
                        //if(data[i].attributes[j] && data[i].attributes[j].name == ":id"){
                        soId = data[i].attributes[j].value;
                        //添加例外：第三方组件。
                        if (data[i].nodeName.toLowerCase().substr(3, 2) == "a_" || data[i].nodeName.toLowerCase().substr(3, 2) == "s_") {
                            data[i].removeAttribute(data[i].attributes[j].name);
                            j--;
                        }
                        //break; 
                    } else {
                        if (data[i].attributes[j].name.toLowerCase().substr(0, 6) == ":data-") {
                            soParam[data[i].attributes[j].name.substr(6, data[i].attributes[j].name.length - 1)] = data[i].attributes[j].value;
                            data[i].removeAttribute(data[i].attributes[j].name);
                            j--;
                        }
                    }
                }
                if (!soId) continue;
                let tit = document.createElement("div");
                tit.setAttribute("id", "div" + soId);
                tit.setAttribute("style", 'display:inline');
                insertAfter(tit, data[i]);
                document.getElementById("div" + soId).appendChild(data[i]);
                let mod = [];
                for (let tag in tags) {
                    mod.push(tags[tag]);
                }
                let vm = soUI.bind({
                    scope: "div" + soId,
                    model: mod
                });
                soModels.viewModels[soId] = {
                    key: soId,
                    name: tagName,
                    vm: vm,
                    param: soParam
                };
            } else {
                load(data[i].childNodes, name, tags);
            }
        }
    }

    load(items, name, tags);
}

function getNames(name) {
    let tags = {};
    let uiTags = document.querySelectorAll("body *")
    for (let i = 0; i <= uiTags.length - 1; i++) {
        let item = uiTags[i].nodeName.toLowerCase();
        if (item.substr(0, 3) == name.toLowerCase())
            tags[item] = item;
    }
    return tags;
}

const models = {
    // "so:tree": tree,
    "so:datagrid": datagrid,
    //"so:dataset": dataset,
};


const soUI = {
    isAutoLoadUI: true,
    bind: function(com) {
        let model = {};
        if (com.model) {
            if (typeof(com.model) == "string") {
                model = {
                    [com.model]: models[com.model]
                }
            } else {
                for (let i = 0; i < com.model.length; i++) {
                    model[com.model[i]] = models[com.model[i]];
                }
            }
        } else {}


        for (let i in model) {
            let nodes = document.getElementById(com.scope).getElementsByTagName(i);
            for (let n = 0; n < nodes.length; n++) {
                for (let j = 0; j < nodes[n].attributes.length; j++) {
                    let ab = nodes[n].attributes[j];
                    if (ab.name.substr(0, 1) == ":") {
                        let abobject = ab.value;
                        //let abtype = "string";
                        try {
                            abobject = eval(ab.value);
                        } catch (ex) {
                            nodes[n].removeAttribute(ab.name);
                            nodes[n].setAttribute(ab.name.substr(1, ab.name.length), ab.value);
                            j--;
                            //}
                        }
                        if (ab.name.substr(0, 3) == ":on") {
                            if (!com.methods) com.methods = {};
                            if (!com.methods[ab.value])
                                com.methods[ab.value] = abobject;
                        } else {
                            if (!com.data) com.data = {};
                            if (!com.data[ab.value])
                                com.data[ab.value] = abobject;
                        }
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
    getDataByVm: function(vm, name) {
        return vm.$data[name];
    },
    setDataByVm: function(vm, name, data) {
        vm.$data[name] = data;
    },
    getDataById: function(id, name) {
        let vm = soUI.getViewModel(id);
        return vm.$data[name];
    },
    setDataById: function(id, name, data) {
        let vm = soUI.getViewModel(id);
        vm.$data[name] = data;
    },
    bindViewModel: function(vm, scope) {
        vm.$mount("#" + scope);
    },
    getViewModel: function(id) {
        let r = null;
        if (!soUI.isAutoLoadUI)
            return r;
        if (soModels.viewModels[id])
            r = soModels.viewModels[id].vm;
        return r;
    },
};

const soModels = {
    viewModels: {},
    getReturnModel: function(id, data) {
        let mod = null;
        if (!soUI.isAutoLoadUI)
            return mod;
        if (soModels.viewModels[id]) {
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

window.onload = function() {
    const tag = "so:";
    if (soUI.isAutoLoadUI)
        loadUI(tag, getNames(tag));
}
window.soModels = soModels;
window.datagrid = soUI;