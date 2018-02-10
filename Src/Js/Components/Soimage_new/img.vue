<template>
    <div class="images" id="images">
        <img :src="imgurl" alt="图片" :style="{width:width,height:height}">
        <ul>
            <li>
                <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
            </li>
            <li>
                <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
            </li>
        </ul>
    </div>
</template>
<script>
//require('./lib/viewer.min.js');
export default {
    props: {
        imgurl: {
            type: String,
            default: "../../Img/3.png"
        },
        width:{
            type:String,
            default:"100%"
        },
        height:{
            type:String,
            default:"100%"
        }
    },
    mounted: function () {
        debugger;
        $(".images").viewer();
    },
};

</script>

<style scoped>

.images>ul {
    position:relative;
    bottom: 28px;
    margin-right: 0px;
    padding: 0;
}

.images>ul>li {    
    list-style-type: none;
    float: left;
    margin-left: 8px;
    color: palegreen;
    cursor: pointer;
    font-size: 22px;
}
.images>ul>li:hover{
    color: lightsalmon;
}
</style>