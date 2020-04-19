<template> 
    <div class="app-container">
        <el-card class="filter-container" shadow="never">
            <div>
                <i class="el-icon-search"></i>
                <span>筛选搜索</span>
                <el-button
                        style="float: right"
                        @click="searchSysStoreCashList()"
                        type="primary"
                        size="small">
                    查询结果
                </el-button>
            </div>
            <div style="margin-top: 15px">
                <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
                    <el-form-item label="输入搜索：">
                        <el-input style="width: 203px" v-model="listQuery.keyword" placeholder="类型名称/关键字"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="operate-container" shadow="never">
            <i class="el-icon-tickets"></i>
            <span>数据列表</span>
            <el-button
                    class="btn-add"
                    @click="addSysStoreCash()"
                    size="mini">
                添加
            </el-button>
        </el-card>
        <div class="table-container">
            <el-table ref="sysStoreCashTable"
                      :data="list"
                      style="width: 100%"
                      @selection-change="handleSelectionChange"
                      v-loading="listLoading"
                      border>
                <el-table-column type="selection" width="60" align="center"></el-table-column>



                            <el-table-column prop="id"
                                             label="编号">
                                <template slot-scope="scope">
                                    {{scope.row.id }}
                                </template>
                            </el-table-column>


                            <el-table-column prop="createTime"
                                             label="添加时间">
                                <template slot-scope="scope">
                                    {{scope.row.createTime |formatCreateTime}}
                                </template>
                            </el-table-column>


                            <el-table-column prop="updateTime"
                                             label="更新时间">
                                <template slot-scope="scope">
                                    {{scope.row.updateTime |formatCreateTime}}
                                </template>
                            </el-table-column>


                            <el-table-column prop="account"
                                             label="账户">
                                <template slot-scope="scope">
                                    {{scope.row.account }}
                                </template>
                            </el-table-column>

                             <el-table-column prop="balance"
                                                                         label="当前余额">
                                                            <template slot-scope="scope">
                                                                {{scope.row.balance }}
                                                            </template>
                                                        </el-table-column>
                            <el-table-column prop="amount"
                                             label="提现金额">
                                <template slot-scope="scope">
                                    {{scope.row.amount }}
                                </template>
                            </el-table-column>


                            <el-table-column prop="bank"
                                             label="银行卡">
                                <template slot-scope="scope">
                                    {{scope.row.bank }}
                                </template>
                            </el-table-column>


                             <el-table-column label="状态" width="100" align="center">
                                                                 <template slot-scope="scope">
                                                                   <el-switch
                                                                     @change="audit(scope.$index, scope.row)"
                                                                     :active-value="3"
                                                                     :inactive-value="2"
                                                                     v-model="scope.row.status">
                                                                   </el-switch>
                                                                 </template>
                                                               </el-table-column>

                            <el-table-column prop="storeId"
                                             label="店铺编号">
                                <template slot-scope="scope">
                                    {{scope.row.storeId }}
                                </template>
                            </el-table-column>



            </el-table>
        </div>
        <div class="batch-operate-container">

        </div>
        <div class="pagination-container">
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    layout="total, sizes,prev, pager, next,jumper"
                    :page-size="listQuery.pageSize"
                    :page-sizes="[5,10,15]"
                    :current-page.sync="listQuery.pageNum"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    //将$都替换为$
    import {fetchList, deleteSysStoreCash,audit} from '@/api/sys/sysStoreCash'
    import {auditStoreMoney} from '@/api/sys/sysStoreDepositLog'
    import {formatDate} from '@/utils/date';

    export default {
        name: 'sysStoreCashList',
        data() {
            return {
                operates: [],
                operateType: null,
                listQuery: {
                    keyword: null,
                    pageNum: 1,
                    pageSize: 10
                },
                list: null,
                total: null,
                listLoading: true,
                multipleSelection: []
            }
        },
        created() {
            this.getList();
        },
        filters: {
            formatCreateTime(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
            },

            formatStatus(value) {
                if (value === 1) {
                    return '提交申请';
                } else if (value === 2) {
                    return '审核成功';
                } else if (value === 3) {
                    return '审核失败';
                }
            },
        },
        methods: {
            getList() {
                this.listLoading = true;
                fetchList(this.listQuery).then(response => {
                    this.listLoading = false;
                this.list = response.data.records;
                this.total = response.data.total;
                this.totalPage = response.data.pages;
                this.pageSize = response.data.size;
            })
                ;

            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleUpdate(index, row) {
                this.$router.push(
                    {path: '/sys/updateSysStoreCash', query: {id: row.id}})
            },
             audit(index, row) {
                    let data = new URLSearchParams();
                    ;
                     data.append("id", row.id);
                    data.append("amount", row.amount);
                    data.append("showStatus", row.status);

                    auditStoreMoney(data).then(response => {
                      this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration: 1000
                      });
                    }).catch(error => {
                      if (row.showStatus === 3) {
                        row.showStatus = 2;
                      } else {
                        row.showStatus = 3;
                      }
                    });
                  },
            handleDelete(index, row) {
                this.$confirm('是否要删除该类型', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteSysStoreCash(row.id
            ).
                then(response => {
                    this.$message({
                        message: '删除成功',
                        type: 'success',
                        duration: 1000
                    });
                this.getList();
            })
                ;

            })
                ;

            },


            handleSizeChange(val) {
                this.listQuery.pageNum = 1;
                this.listQuery.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.listQuery.pageNum = val;
                this.getList();
            },
            searchSysStoreCashList() {
                this.listQuery.pageNum = 1;
                this.getList();
            },
            handleBatchOperate() {
                console.log(this.multipleSelection);
                if (this.multipleSelection < 1) {
                    this.$message({
                        message: '请选择一条记录',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                let showStatus = 0;
                if (this.operateType === 'showSysStoreCash') {
                    showStatus = 1;
                } else if (this.operateType === 'hideSysStoreCash') {
                    showStatus = 0;
                } else {
                    this.$message({
                        message: '请选择批量操作类型',
                        type: 'warning',
                        duration: 1000
                    });
                    return;
                }
                let ids = [];
                for (let i = 0; i < this.multipleSelection.length; i++) {
                    ids.push(this.multipleSelection[i].id);
                }
                let data = new URLSearchParams();
                data.append("ids", ids);
                data.append("showStatus", showStatus);
                updateShowStatus(data).then(response => {
                    this.getList();
                this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: 1000
                });
            })
                ;
            },
            addSysStoreCash() {
                //手动将router,改成$router
                this.$router.push({path: '/sys/addSysStoreCash'})
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


