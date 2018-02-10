<template>
    <div class="dropdown" style="padding-top: 3px; padding-right: 6px;">
        <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            <span class="icon-reorder"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
            <li class="dropdown-submenu">
                <a>排序</a>
                <ul class="dropdown-menu">
                    <li><a><span class="icon-sort-up"></span><span @click="">升序</span></a></li>
                    <li><a><span class="icon-sort-down"></span><span @click="">降序</span></a></li>
                </ul>
            </li>
            <li class="divider"></li>
            <li class="dropdown-submenu">
                <a>显示/隐藏</a>
                <ul class="dropdown-menu">
                    <li role="presentation" v-for="(item, index) in itemlist">
                        <a>
                            <span class="icon-move"></span><input type="checkbox" v-model="item.visible" @click.stop.prevent /><span>{{item.title}}</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            itemlist: Array
        }
    }
</script>

<style scoped>
    a {
        cursor: pointer;
    }
    
    input {
        cursor: pointer;
    }
    
    .dropdown {
        left: 20px;
    }
    
    .dropdown-toggle {
        color: #898989;
    }
    
    .dropdown .icon-reorder {
        color: #898989;
        margin: 0;
    }
    
    .bottom-link>a>span {
        color: #ccc;
        padding: 2px;
    }
    
    .dropdown-menu .divider {
        height: 1px;
        margin: 5px 0;
        overflow: hidden;
        background-color: #e5e5e5;
    }
    
    .dropdown-submenu {
        position: relative;
    }
    
    .dropdown-submenu>.dropdown-menu {
        top: 0;
        left: 100%;
        margin-top: -6px;
        margin-left: -1px;
        -webkit-border-radius: 0 6px 6px 6px;
        -moz-border-radius: 0 6px 6px;
        border-radius: 0 6px 6px 6px;
    }
    
    .dropdown-submenu:hover>.dropdown-menu {
        display: block;
    }
    
    .dropdown-submenu>a:after {
        display: block;
        content: " ";
        float: right;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        border-width: 5px 0 5px 5px;
        border-left-color: #ccc;
        margin-top: 5px;
        margin-right: -10px;
    }
    
    .dropdown-submenu:hover>a:after {
        border-left-color: #fff;
    }
    
    .dropdown-submenu.pull-left {
        float: none;
    }
    
    .dropdown-submenu.pull-left>.dropdown-menu {
        left: -100%;
        margin-left: 10px;
        -webkit-border-radius: 6px 0 6px 6px;
        -moz-border-radius: 6px 0 6px 6px;
        border-radius: 6px 0 6px 6px;
    }
</style>