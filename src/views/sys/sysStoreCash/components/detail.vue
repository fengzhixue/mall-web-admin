<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="sysStoreCash" :rules="rules" ref="SysStoreCashFrom" label-width="150px">


                    <el-form-item
                            label="id"
                            prop="id">
                        <el-input v-model="sysStoreCash.id" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="createTime"
                            prop="createTime">
                        <el-input v-model="sysStoreCash.createTime" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="updateTime"
                            prop="updateTime">
                        <el-input v-model="sysStoreCash.updateTime" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="account"
                            prop="account">
                        <el-input v-model="sysStoreCash.account" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="amount"
                            prop="amount">
                        <el-input v-model="sysStoreCash.amount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="bank"
                            prop="bank">
                        <el-input v-model="sysStoreCash.bank" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="status"
                            prop="status">
                        <el-input v-model="sysStoreCash.status" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="storeId"
                            prop="storeId">
                        <el-input v-model="sysStoreCash.storeId" style="width: 370px;"/>
                    </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit('SysStoreCashFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('SysStoreCashFrom')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
    import {createSysStoreCash, getSysStoreCash, updateSysStoreCash} from '@/api/sys/sysStoreCash'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultSysStoreCash = {
        name: ''
    };
    export default {
        name: 'SysStoreCashDetail',
        components: {SingleUpload},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            sysStoreCash:
            Object.assign({},
        defaultSysStoreCash),
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
                getSysStoreCash(this.$route.query.id).then(response => {
                    this.sysStoreCash = response.data;
            })
                ;
            } else {
                this.sysStoreCash = Object.assign({},
            defaultSysStoreCash)
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
                            updateSysStoreCash(this.$route.query.id, this.sysStoreCash).then(response => {
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
                            createSysStoreCash(this.sysStoreCash).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.sysStoreCash = Object.assign({},
                            defaultSysStoreCash)
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
                this.sysStoreCash = Object.assign({},
            defaultSysStoreCash)
                ;
            }
        }
    }
</script>
<style>
</style>


