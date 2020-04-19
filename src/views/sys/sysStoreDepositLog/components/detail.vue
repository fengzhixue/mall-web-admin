<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="sysStoreDepositLog" :rules="rules" ref="SysStoreDepositLogFrom" label-width="150px">


                    <el-form-item
                            label="id"
                            prop="id">
                        <el-input v-model="sysStoreDepositLog.id" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="createTime"
                            prop="createTime">
                        <el-input v-model="sysStoreDepositLog.createTime" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="updateTime"
                            prop="updateTime">
                        <el-input v-model="sysStoreDepositLog.updateTime" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="balance"
                            prop="balance">
                        <el-input v-model="sysStoreDepositLog.balance" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="credit"
                            prop="credit">
                        <el-input v-model="sysStoreDepositLog.credit" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="debit"
                            prop="debit">
                        <el-input v-model="sysStoreDepositLog.debit" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="memo"
                            prop="memo">
                        <el-input v-model="sysStoreDepositLog.memo" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="type"
                            prop="type">
                        <el-input v-model="sysStoreDepositLog.type" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="storeId"
                            prop="storeId">
                        <el-input v-model="sysStoreDepositLog.storeId" style="width: 370px;"/>
                    </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit('SysStoreDepositLogFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('SysStoreDepositLogFrom')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
    import {createSysStoreDepositLog, getSysStoreDepositLog, updateSysStoreDepositLog} from '@/api/sys/sysStoreDepositLog'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultSysStoreDepositLog = {
        name: ''
    };
    export default {
        name: 'SysStoreDepositLogDetail',
        components: {SingleUpload},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            sysStoreDepositLog:
            Object.assign({},
        defaultSysStoreDepositLog),
            rules: {
                name: [
                    {required: true, message: '请输入品牌名称', trigger: 'blur'},
                    {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
                ],
                    logo
            :
                [
                    {required: true, message: '请输入品牌logo', trigger: 'blur'}
                ],
                    sort
            :
                [
                    {type: 'number', message: '排序必须为数字'}
                ],
            }
        }
        },
        created() {
            if (this.isEdit) {
                getSysStoreDepositLog(this.$route.query.id).then(response => {
                    this.sysStoreDepositLog = response.data;
            })
                ;
            } else {
                this.sysStoreDepositLog = Object.assign({},
            defaultSysStoreDepositLog)
                ;
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        this.$confirm('是否提交数据', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            if(this.isEdit
                    )
                        {
                            updateSysStoreDepositLog(this.$route.query.id, this.sysStoreDepositLog).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.$message({
                                    message: '修改成功',
                                    type: 'success',
                                    duration: 1000
                                });
                                this.$router.back();
                            }
                        else
                            {
                                this.$message({
                                    message: response.msg,
                                    type: 'error',
                                    duration: 1000
                                });
                            }

                        })
                            ;
                        }
                    else
                        {
                            createSysStoreDepositLog(this.sysStoreDepositLog).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.sysStoreDepositLog = Object.assign({},
                            defaultSysStoreDepositLog)
                                ;
                                this.$message({
                                    message: '提交成功',
                                    type: 'success',
                                    duration: 1000
                                });
                                this.$router.back();
                            }
                        else
                            {
                                this.$message({
                                    message: response.msg,
                                    type: 'error',
                                    duration: 1000
                                });
                            }

                        })
                            ;
                        }
                    })
                        ;

                    } else {
                        this.$message({
                            message: '验证失败',
                            type: 'error',
                            duration: 1000
                        });
                return false;
            }
            })
                ;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.sysStoreDepositLog = Object.assign({},
            defaultSysStoreDepositLog)
                ;
            }
        }
    }
</script>
<style>
</style>


