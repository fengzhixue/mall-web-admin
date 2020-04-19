<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="cmsZhaoPin" :rules="rules" ref="CmsZhaoPinFrom" label-width="150px">


                    <el-form-item
                            label="编号"
                            prop="id">
                        <el-input v-model="cmsZhaoPin.id" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="姓名"
                            prop="name">
                        <el-input v-model="cmsZhaoPin.name" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="年龄"
                            prop="age">
                        <el-input v-model="cmsZhaoPin.age" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="性别"
                            prop="sex">
                        <el-input v-model="cmsZhaoPin.sex" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="地址"
                            prop="address">
                        <el-input v-model="cmsZhaoPin.address" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="学历"
                            prop="xueli">
                        <el-input v-model="cmsZhaoPin.xueli" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="备注"
                            prop="remark">
                        <el-input v-model="cmsZhaoPin.remark" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="身份证"
                            prop="idcard">
                        <el-input v-model="cmsZhaoPin.idcard" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="身份证照片"
                            prop="idcardpic">
                        <el-input v-model="cmsZhaoPin.idcardpic" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="期望薪水"
                            prop="xinshui">
                        <el-input v-model="cmsZhaoPin.xinshui" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="爱好"
                            prop="hobby">
                        <el-input v-model="cmsZhaoPin.hobby" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="区域编号"
                            prop="areaId">
                        <el-input v-model="cmsZhaoPin.areaId" style="width: 370px;"/>
                    </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit('CmsZhaoPinFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('CmsZhaoPinFrom')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
    import {createCmsZhaoPin, getCmsZhaoPin, updateCmsZhaoPin} from '@/api/cms/cmsZhaoPin'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultCmsZhaoPin
    = {
        name: ''
    };
    export default {
        name: 'CmsZhaoPinDetail',
        components: {SingleUpload},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            cmsZhaoPin:
            Object.assign({},
        defaultCmsZhaoPin),
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
                getCmsZhaoPin(this.$route.query.id).then(response => {
                    this.cmsZhaoPin = response.data;
            })
                ;
            } else {
                this.cmsZhaoPin = Object.assign({},
            defaultCmsZhaoPin)
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
                            updateCmsZhaoPin(this.$route.query.id, this.cmsZhaoPin).then(response => {
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
                            createCmsZhaoPin(this.cmsZhaoPin).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.cmsZhaoPin = Object.assign({},
                            defaultCmsZhaoPin)
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
                this.cmsZhaoPin = Object.assign({},
            defaultCmsZhaoPin)
                ;
            }
        }
    }
</script>
<style>
</style>


