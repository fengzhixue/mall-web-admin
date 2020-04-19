<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="adminDayStatics" :rules="rules" ref="AdminDayStaticsFrom" label-width="150px">


                    <el-form-item
                            label="id"
                            prop="id">
                        <el-input v-model="adminDayStatics.id" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="添加商品"
                            prop="goodsCount">
                        <el-input v-model="adminDayStatics.goodsCount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="支付订单数"
                            prop="payOrderCount">
                        <el-input v-model="adminDayStatics.payOrderCount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="文章数"
                            prop="articleCount">
                        <el-input v-model="adminDayStatics.articleCount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="支付金额"
                            prop="payAmount">
                        <el-input v-model="adminDayStatics.payAmount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="添加会员数"
                            prop="memberCount">
                        <el-input v-model="adminDayStatics.memberCount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="创建时间"
                            prop="createTime">
                        <el-input v-model="adminDayStatics.createTime" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="商户"
                            prop="storeId">
                        <el-input v-model="adminDayStatics.storeId" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="没有支付订单数"
                            prop="notPayOrderCount">
                        <el-input v-model="adminDayStatics.notPayOrderCount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="没有支付订单金额"
                            prop="notPayAmount">
                        <el-input v-model="adminDayStatics.notPayAmount" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="商户"
                            prop="storeName">
                        <el-input v-model="adminDayStatics.storeName" style="width: 370px;"/>
                    </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit('AdminDayStaticsFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('AdminDayStaticsFrom')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
    import {createAdminDayStatics, getAdminDayStatics, updateAdminDayStatics} from '@/api/sys/adminDayStatics'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultAdminDayStatics = {
        name: ''
    };
    export default {
        name: 'AdminDayStaticsDetail',
        components: {SingleUpload},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            adminDayStatics:
            Object.assign({},
        defaultAdminDayStatics),
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
                getAdminDayStatics(this.$route.query.id).then(response => {
                    this.adminDayStatics = response.data;
            })
                ;
            } else {
                this.adminDayStatics = Object.assign({},
            defaultAdminDayStatics)
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
                            updateAdminDayStatics(this.$route.query.id, this.adminDayStatics).then(response => {
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
                            createAdminDayStatics(this.adminDayStatics).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.adminDayStatics = Object.assign({},
                            defaultAdminDayStatics)
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
                this.adminDayStatics = Object.assign({},
            defaultAdminDayStatics)
                ;
            }
        }
    }
</script>
<style>
</style>


