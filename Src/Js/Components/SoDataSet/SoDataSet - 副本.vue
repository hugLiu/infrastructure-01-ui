<template> 
    <div :id="_id" v-show="!hidden">
        <div v-if="_data"> 
            <ul class="nav nav-tabs" id="tab">
                <li :class="index == 0 ? 'active' : ''" v-for="(d, index) of _data">
                    <a data-toggle="tab" :href='("#" + _id + "-tab-" + index)'>{{d.name}}</a>
                </li>
            </ul>
            <br />
            <div class="tab-content">
                <div :id='(_id + "-tab-" + index)' class="tab-pane" :class="{'active':index == 0}" v-for="(d, index) of _data"> 
                    <datagrid :id='("grid-" + index + Date.now())' :data="d.gridData" :pagesize="d.pageSize" :count="d.count"></datagrid>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import datagrid from '../SoDataGrid/SoDataGrid.vue'
    export default {
        props: {
            id: {
                type: String,
                default: null
            },
            hidden: {
                type: Boolean,
                default: false
            },
            data: Array
        },
        data() {
            return {
                _id: "",
                _data: []
            }
        },
        computed: {
            _data: function() {
                let temp = []
                if (this.data && this.data.length) {
                    for (let value of this.data) {
                        var obj = {
                            "name": value.name,
                            "count": ("count" in value) ? value.count : value.records ? value.records.length : 0,
                            "pageSize": ("pageSize" in value) ? value.pageSize : value.records ? value.records.length : 0,
                            "gridData": {
                                "fields": value.fields ? value.fields : [],
                                "records": value.records ? value.records : []
                            }
                        }
                        temp.push(obj)
                    }
                }
                return temp
            }
        },
        methods: {
            // dataExchange: function() {
            //     if (this.data && this.data.length > 0) {
            //         let arr = this.data
            //         let temp = []
            //         for (let value of arr) {
            //             var obj = {
            //                 "name": value.name,
            //                 "count": ("count" in value) ? value.count : value.records ? value.records.length : 0,
            //                 "pageSize": ("pageSize" in value) ? value.pageSize : value.records ? value.records.length : 0,
            //                 "gridData": {
            //                     "fields": value.fields ? value.fields : null,
            //                     "records": value.records ? value.records : null
            //                 }
            //             }
            //             temp.push(obj)
            //         }
            //         //this.$set(this._data, _data, temp)
            //         this._data = temp
            //     }
            // }
        },
        components: {
            datagrid
        },
        watch: {
            // data: function() {
            //     //alert(1)
            //     //this.dataExchange()
            // }
        },
        created() {
            // this.dataExchange()
        },
        beforeMount() {
            if (this.id) {
                this._id = this.id
            } else {
                this._id = "dataset-" + Date.now()
            }
        },
        mounted() {
            this.$nextTick(function() {
                //this.dataExchange()
            })
        }
    }
</script>