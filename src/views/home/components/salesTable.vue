<template>
  <div class="salesTable">
    <el-table
      :data="tableData"
      stripe
      height="424"
      style="width: 100%">
      <el-table-column
        class-name="salesUsername"
        prop="username"
        label="USERNAME"
        width="150"
      >
        <template slot-scope="scope">
            <img class="userImg" :src="userImg" alt="tuxiang" width="50px" height="50px"/>

        </template>
      </el-table-column>
      <el-table-column
              class-name="salesUsername"
              prop="username"
              label="USERNAME"
              width="150"
      >
        <template slot-scope="scope">
          {{(scope.row.username).substring(0,12)}}
        </template>
      </el-table-column>
      <el-table-column
        class-name="salesPrice"
        prop="price"
        label="PRICE"
        width="80"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1" class="saleColor">$ {{scope.row.status}}</span>
          <span v-if="scope.row.status === 2" class="taxColor">$ {{scope.row.status}}</span>
          <span v-if="scope.row.status === 3" class="extenedColor">$ {{scope.row.status}}</span>
          <span v-if="scope.row.status === 4" class="likeColor">$ {{scope.row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="DATE"
        width="180"
      >
        <template slot-scope="scope">
           <svg-icon icon-class="icontime" />
           {{scope.row.createTime| formatTime}}
        </template>
      </el-table-column>
      <el-table-column
        class-name="salesStatus"
        prop="status"
        label="STATUS"
        >
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1" class="saleBgcolor">SALE</span>
          <span v-if="scope.row.status === 2" class="taxBgcolor">TAX</span>
          <span v-if="scope.row.status === 3" class="extenedBgcolor">EXTENDED</span>
          <span v-if="scope.row.status === 4" class="likeBgcolor">LIKE</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import { getSalesTableList } from "@/api/test/sales";
  import userImg from "@/assets/img/avatar-3.png";
  import {formatDate} from '@/utils/date';
  export default {
    data() {
      return {
        tableData: [],
        userImg:userImg
      }
    },
    mounted(){
        this.getSalesList();
    },
    filters:{
      formatType(type){
        if(type===1){
          return 'ios首页轮播';
        }else if(type===2){
          return 'android首页轮播';
        }
        else if(type===3){
          return 'pc首页轮播';
        }else if(type===4){
          return 'h5首页轮播';
        }else if(type===5){
          return '小程序首页轮播';
        }
      },
      formatTime(time){
        if(time==null||time===''){
          return 'N/A';
        }
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      },
    },
    methods:{
        // 获取列表数据
        getSalesList(){
            getSalesTableList({}).then(res => {
                console.log(res);

                this.tableData = res.data.records
            })
        },
    }
  }
</script>

<style lang="less" scoped>

</style>
