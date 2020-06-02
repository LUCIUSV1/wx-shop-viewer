<template>
    <div>

    <el-table

            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="productId"
                label="商品id"
                width="150">
        </el-table-column>
        <el-table-column
                prop="productName"
                label="名称"
                width="120">
        </el-table-column>
        <el-table-column
                prop="productIcon"
                label="图片"
                width="120"
                >
        </el-table-column>
        <el-table-column
                prop="productPrice"
                label="单价"
                width="50">
        </el-table-column>
        <el-table-column
                prop="productStock"
                label="库存"
                width="50">
        </el-table-column>
        <el-table-column
                prop="productDescription"
                label="描述"
                width="120">
        </el-table-column>
        <el-table-column
                prop="productDescription"
                label="介绍"
                width="120">
        </el-table-column>
        <el-table-column
                prop="categoryType"
                label="类目"
                width="50">
        </el-table-column>
        <el-table-column
                prop="createTime"
                label="创建时间"
                width="150"
                :formatter="formatDate">
        </el-table-column>
        <el-table-column
                prop="updateTime"
                label="更改时间"
                width="150"
                :formatter="formatDate">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="page">
    </el-pagination>

    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },formatDate(row, column) {
                // 获取单元格数据
                let data = row[column.property]
                let dt = new Date(data)
                return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
            }
        ,  page(currentPage){
                // console.log(currentPage)
                const  _this = this
                axios.get("http://192.168.1.200:9090/pro/getProductList/"+currentPage+"/5").then(function (resp) {
                    // console.log(resp)
                    _this.tableData = resp.data.records
                    _this.total = resp.data.total
                })
            }
        },
        created(){
            const  _this = this
            axios.get("http://192.168.1.200:9090/pro/getProductList/1/5").then(function (resp) {

                _this.tableData = resp.data.records
                _this.pageSize = resp.data.size
                _this.total = resp.data.total
            })
        },
        data() {
            return {
                total:null,
                tableData: null,
                pageSize:'1'
            }
        }
    }
</script>
<style scoped>

</style>
