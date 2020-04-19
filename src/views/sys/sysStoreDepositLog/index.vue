<template> 
    <div class="app-container">
        <el-card class="filter-container" shadow="never">
            <div>
                <i class="el-icon-search"></i>
                <span>筛选搜索</span>
                <el-button
                        style="float: right"
                        @click="searchSysStoreDepositLogList()"
                        type="primary"
                        size="small">
                    查询结果
                </el-button>
            </div>
            <div style="margin-top: 15px">
                <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
                    <el-form-item label="输入搜索：">
                        <el-input style="width: 203px" v-model="listQuery.type" placeholder="类型类型/1-6"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="operate-container" shadow="never">
            <i class="el-icon-tickets"></i>
            <span>数据列表</span>
            <el-button
                    class="btn-add"
                    @click="addSysStoreDepositLog()"
                    size="mini">
                　预存款充值
            </el-button>

            <el-button
                                class="btn-add"
                                @click="drawSysStoreDepositLog()"
                                size="mini">
                            　预存款提现
                        </el-button>
        </el-card>
        <div class="table-container">
            <el-table ref="sysStoreDepositLogTable"
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
                                             label="创建时间">
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

                        <el-table-column prop="type"
                                             label="类型">
                                <template slot-scope="scope">
                                    {{scope.row.type |formatStatus}}
                                </template>
                            </el-table-column>

                            <el-table-column prop="balance"
                                             label="当前余额">
                                <template slot-scope="scope">
                                    {{scope.row.balance }}
                                </template>
                            </el-table-column>


                            <el-table-column prop="credit"
                                             label="收入金额">
                                <template slot-scope="scope">
                                    {{scope.row.credit }}
                                </template>
                            </el-table-column>


                            <el-table-column prop="debit"
                                             label="支出金额">
                                <template slot-scope="scope">
                                    {{scope.row.debit }}
                                </template>
                            </el-table-column>


                            <el-table-column prop="memo"
                                             label="备注">
                                <template slot-scope="scope">
                                    {{scope.row.memo }}
                                </template>
                            </el-table-column>




                            <el-table-column prop="storeId"
                                             label="storeId">
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
         <el-dialog
                      title="预存款充值"
                      :visible.sync="blance.dialogVisible"
                      width="40%">
                  <el-form :model="blance"  ref="brandFrom" label-width="150px">
                    <el-form-item
                            label="可用余额:"
                            prop="account">
                        <el-input v-model="blance.balance" readonly="readonly"  style="width: 370px;"/>
                    </el-form-item>
                      <el-form-item label="充值金额：" prop="detail">
                          <el-input v-model="blance.credit"></el-input>
                      </el-form-item>
                        <el-form-item label="支付方式：">
                         <el-radio-group v-model="blance.memo">
                           <el-radio-button :label="1">微信</el-radio-button>
                           <el-radio-button :label="2">支付宝</el-radio-button>
                         </el-radio-group>
                       </el-form-item>

                      <el-form-item>
                          <el-button @click="blance.dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="handleEditBlance">确 定</el-button>
                      </el-form-item>
                  </el-form>

              </el-dialog>

              <el-dialog
                      title="预存款提现"
                      :visible.sync="integration.dialogVisible"
                      width="40%">
                  <el-form :model="integration"  ref="brandFrom" label-width="150px">
                        <el-form-item
                            label="可用余额:"
                            prop="balance">
                        <el-input v-model="integration.balance" readonly="readonly" style="width: 370px;"/>
                    </el-form-item>

                    <el-form-item
                            label="收款账号:"
                            prop="account">
                        <el-input v-model="integration.account" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="金额:"
                            prop="amount">
                        <el-input v-model="integration.amount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="收款银行:"
                            prop="bank">
                        <el-input v-model="integration.bank" style="width: 370px;"/>
                    </el-form-item>

                      <el-form-item>
                          <el-button @click="integration.dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="handleEditIntegration">确 定</el-button>
                      </el-form-item>
                  </el-form>

              </el-dialog>
    </div>
</template>
<script>
    //将$都替换为$
    import {getCurrentStore} from '@/api/sys/sysStore'
    import {fetchList, deleteSysStoreDepositLog,drawStoreMoney,addStoreMoney,auditStoreMoney} from '@/api/sys/sysStoreDepositLog'
    import {formatDate} from '@/utils/date';

    export default {
        name: 'sysStoreDepositLogList',
        data() {
            return {
                operates: [],
                operateType: null,
                store:null,
                 blance:{
                              dialogVisible:false,
                              id:null,
                          },
                          integration:{
                              dialogVisible:false,
                              id:null,
                          },
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
                    return '预存款充值';
                } else if (value === 2) {
                    return '预存款调整';
                } else if (value === 3) {
                    return '订单支付';
                } else if (value === 4) {
                    return '服务支付';
                }else if (value === 5) {
                                     return '订单退款';
                }else if (value === 6) {
                                     return '订单结算';
                }else if (value === 7) {
                                     return '提现';
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
            getCurrentStore().then(response => {
                   this.blance.balance=response.data.amount
                     this.integration.balance=response.data.amount
                 })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleUpdate(index, row) {
                this.$router.push(
                    {path: '/sys/updateSysStoreDepositLog', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('是否要删除该类型', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteSysStoreDepositLog(row.id
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
            searchSysStoreDepositLogList() {
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
                if (this.operateType === 'showSysStoreDepositLog') {
                    showStatus = 1;
                } else if (this.operateType === 'hideSysStoreDepositLog') {
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
            addSysStoreDepositLog() {
               this.blance.dialogVisible=true;

            },
             drawSysStoreDepositLog() {
                           this.integration.dialogVisible=true;

                        },
                         handleEditBlance(){

                                    this.$confirm('是否要进行余额充值', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(()=>{

                                        addStoreMoney(this.blance).then(response => {
                                            this.$message({
                                                message: '余额充值成功',
                                                type: 'success',
                                                duration: 1000
                                            });
                                            this.getList();
                                        });
                                        this.blance.dialogVisible=false;

                                    });
                                },
                                handleEditIntegration(){
                                if(this.integration.blance<this.integration.amount){
                                                                        this.$message({
                                                                            message: '请余额不足',
                                                                            type: 'warning',
                                                                            duration: 1000
                                                                        });
                                                                        return
                                                                    }
                                    if(this.integration.amount==null){
                                        this.$message({
                                            message: '请输入金额',
                                            type: 'warning',
                                            duration: 1000
                                        });
                                        return
                                    }
                                     if(this.integration.account==null){
                                                                            this.$message({
                                                                                message: '请输入账户',
                                                                                type: 'warning',
                                                                                duration: 1000
                                                                            });
                                                                            return
                                                                        }
                                                                         if(this.integration.bank==null){
                                                                                                                this.$message({
                                                                                                                 message: '请输入银行',
                                                                                                                    type: 'warning',
                                                                                                                    duration: 1000
                                                                                                                });
                                                                                                                return
                                                                                                            }
                                    this.$confirm('是否要进行申请提现', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(()=>{

                                        drawStoreMoney(this.integration).then(response => {
                                            this.$message({
                                                message: '申请提现成功',
                                                type: 'success',
                                                duration: 1000
                                            });
                                            this.getList();
                                        });
                                        this.integration.dialogVisible=false;

                                    });
                                },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>


</style>


