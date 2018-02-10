<template>
    <div class="dropdown icon-right" style="padding: 3px 9px;">
        <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
            <span class="icon-reorder"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
            <li role="presentation" v-for="(item, index) in itemlist">
                <a><input type="checkbox" v-model="item.visible" @click.stop /><span class="item-title" :title="item.title">{{item.title}}</span></a>
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
        left: 0;
    }
    
    .dropdown-toggle {
        color: #898989;
    }
    
    .dropdown .icon-reorder {
        color: #898989;
        margin: 0;
    }

    .dropdown-menu {
        min-width: 320px;
        margin-top: 5px;
    }
        
        .dropdown-menu li {
            width: 105px;
            float: left;
            overflow: hidden;
        }

    .icon-right{ 
        display: inline-block;
        width: auto ;
        height: auto;
        line-height: normal;
        vertical-align: baseline;
        background-image: none;
        background-position: 0% 0%;
        background-repeat: repeat;
        margin-top: 0;
        padding-right: 30px;
    }
    
    .item-title {
        margin: 7px;
    }
</style>