<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="sysShop" :rules="rules" ref="SysShopFrom" label-width="150px">

                    <el-form-item
                            label="门店名称"
                            prop="storeName">
                        <el-input v-model="sysShop.storeName" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="门店电话/手机号"
                            prop="mobile">
                        <el-input v-model="sysShop.mobile" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="门店联系人"
                            prop="linkman">
                        <el-input v-model="sysShop.linkman" style="width: 370px;"/>
                    </el-form-item>

        <el-form-item label="门店logo：" prop="logo">
              <single-upload v-model="sysShop.logo"></single-upload>
         </el-form-item>
                    <el-form-item
                            label="门店详细地址"
                            prop="address">
                        <el-input v-model="sysShop.address" style="width: 370px;"/>
                    </el-form-item>

<el-form-item label="地图：" prop="phone">

        <input v-model.number="center.lng" />
        <input v-model.number="center.lat" />

        <baidu-map  ak="15BWmtGEGGkZ8lSPUGah30XZ6IGw57HE"
                    class="map bm-view"
                :scroll-wheel-zoom="true"
                :center="center"
                :zoom="zoom"
                    :auto-resize="true"
                @moving="syncCenterAndZoom"
                @moveend="syncCenterAndZoom"
                @zoomend="syncCenterAndZoom">
          <bm-copyright
                  anchor="BMAP_ANCHOR_TOP_RIGHT"
                  :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>mallplus多租户商城</a>'}]">
          </bm-copyright>
          <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT" @changeAfter="changeAfters"></bm-city-list>
         <!-- <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>-->
        </baidu-map>
      </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('SysShopFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('SysShopFrom')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
 import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch';
  import BmCityList from 'vue-baidu-map/components/controls/CityList';
  import BmCopyright from 'vue-baidu-map/components/controls/Copyright';
  import BmView from 'vue-baidu-map/components/map/MapView';
    import {createSysShop, getSysShop, updateSysShop} from '@/api/sys/sysShop'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultSysShop = {
        name: ''
    };
    export default {
        name: 'SysShopDetail',
        components:{SingleUpload,BaiduMap,BmLocalSearch,BmCityList,BmView,BmCopyright},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            sysShop:
            Object.assign({},
        defaultSysShop),
            rules: {
                name: [
                    {required: true, message: '请输入品牌名称', trigger: 'blur'},
                    {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
                ],

              sort:
                [
                    {type: 'number', message: '排序必须为数字'}
                ],
            }, location: '北京',
                     keyword: '百度',
                     center: {
                       lng: 116.404,
                       lat: 39.915
                     },
                     zoom: 15
        }
        },
        created() {
            if (this.isEdit) {
                getSysShop(this.$route.query.id).then(response => {
                    this.sysShop = response.data;
            })
                ;
            } else {
                this.sysShop = Object.assign({},
            defaultSysShop)
                ;
            }
        },
        methods: {
         changeAfters(e){
                console.log('123')
                console.log(e)
              },
              handleScroll (e) {
                //修复body高度为100%，百度地图鼠标滚轮滚动产生位移问题，以及全景鼠标hover后未显示全景信息问题
                document.body.scrollTop=0
                document.documentElement.scrollTop =0
              },
              syncCenterAndZoom (e) {

                const {lng, lat} = e.target.getCenter()
                this.center.lng = lng
                this.center.lat = lat
                this.zoom = e.target.getZoom()
              },
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        this.$confirm('是否提交数据', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                        console.log(this.center)
                          this.sysShop.latitude=this.center.lat;
                           this.sysShop.longitude=this.center.lng;
                            if(this.isEdit
                    )
                        {
                            updateSysShop(this.$route.query.id, this.sysShop).then(response => {
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
                            createSysShop(this.sysShop).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.sysShop = Object.assign({},
                            defaultSysShop)
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
                this.sysShop = Object.assign({},
            defaultSysShop)
                ;
            }
        }
    }
</script>
<style>
  .bm-view {
    width: 100%;
    height: 400px;
  }
</style>


