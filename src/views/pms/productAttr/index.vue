<template> 
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets" style="margin-top: 5px"></i>
      <span style="margin-top: 5px">数据列表</span>
      <el-button
        class="btn-add"
        @click="addProductAttrCate()"
        size="mini">
        添加
      </el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="productAttrCateTable"
                style="width: 100%"
                :data="list"
                v-loading="listLoading"
                border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="类型名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="属性数量" width="200" align="center">
          <template slot-scope="scope">{{scope.row.attributeCount==null?0:scope.row.attributeCount}}</template>
        </el-table-column>
        <el-table-column label="参数数量" width="200" align="center">
          <template slot-scope="scope">{{scope.row.paramCount==null?0:scope.row.paramCount}}</template>
        </el-table-column>
        <el-table-column label="设置" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="getAttrList(scope.$index, scope.row)">规格列表
            </el-button>
            <el-button
              size="mini"
              @click="getParamList(scope.$index, scope.row)">参数列表
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="productAttrCatForm":model="productAttrCate" :rules="rules" label-width="120px">
        <el-form-item label="类型名称" prop="name">
          <el-input v-model="productAttrCate.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类图标：">
          <single-upload v-model="productAttrCate.pic"></single-upload>
        </el-form-item>
          <el-form-item label="列表样式：">
                      <el-radio-group v-model="productAttrCate.style">
                        <el-radio :label="1">一列一个</el-radio>
                        <el-radio :label="2">一列两个</el-radio>
                          <el-radio :label="3">一列3个</el-radio>
                      </el-radio-group>
                </el-form-item>
                  <el-form-item label="是否展示首页：">
                              <el-radio-group v-model="productAttrCate.showIndex">
                                <el-radio :label="1">展示</el-radio>
                                <el-radio :label="2">不展示</el-radio>
                              </el-radio-group>
                        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm('productAttrCatForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import {fetchList,createProductAttrCate,deleteProductAttrCate,updateProductAttrCate} from '@/api/productAttrCate'
  import SingleUpload from '@/components/Upload/singleUpload';
  export default {
    name: 'productAttrCateList',
    components: {SingleUpload},
    data() {
      return {
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          pageNum: 1,
          pageSize: 5
        },
        dialogVisible: false,
        dialogTitle:'',
        productAttrCate:{
          name:'',
          id:null
        },
        rules: {
          name: [
            { required: true, message: '请输入类型名称', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        this.listLoading = true;
        fetchList(this.listQuery).then(response => {
          this.listLoading = false;
          this.list = response.data.records;
          this.total = response.data.total;
        });
      },
      addProductAttrCate() {
        this.dialogVisible = true;
        this.dialogTitle = "添加类型";
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
      handleDelete(index, row) {
        this.$confirm('是否要删除该品牌', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteProductAttrCate(row.id).then(response=>{
            this.$message({
              message: '删除成功',
              type: 'success',
              duration:1000
            });
            this.getList();
          });
        });
      },
      handleUpdate(index, row) {
        this.dialogVisible = true;
        this.dialogTitle = "编辑类型";
        this.productAttrCate.name = row.name;
        this.productAttrCate.id = row.id;
      },
      getAttrList(index, row) {
        this.$router.push({path: '/pms/productAttrList',query:{cid:row.id,cname:row.name,type:0}})
      },
      getParamList(index, row) {
        this.$router.push({path: '/pms/productAttrList',query:{cid:row.id,cname:row.name,type:1}})
      },
      handleConfirm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = new URLSearchParams();
            data.append("name",this.productAttrCate.name);
data.append("style",this.productAttrCate.style);
data.append("showIndex",this.productAttrCate.showIndex);
data.append("pic",this.productAttrCate.pic);
            if(this.dialogTitle==="添加类型"){
              createProductAttrCate(data).then(response=>{
                this.$message({
                  message: '添加成功',
                  type: 'success',
                  duration:1000
                });
                this.dialogVisible = false;
                this.getList();
              });
            }else{
              updateProductAttrCate(this.productAttrCate.id,data).then(response=>{
                this.$message({
                  message: '修改成功',
                  type: 'success',
                  duration:1000
                });
                this.dialogVisible = false;
                this.getList();
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>


