<template> 
    <el-card class="form-container" shadow="never">
        <el-form :model="sysStore" :rules="rules" ref="SysStoreFrom" label-width="150px">


                    <el-form-item
                            label="name"
                            prop="name">
                        <el-input v-model="sysStore.name" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="服务电话"
                            prop="servicePhone">
                        <el-input v-model="sysStore.servicePhone" style="width: 370px;"/>
                    </el-form-item>



                    <el-form-item
                            label="联系人名"
                            prop="contactName">
                        <el-input v-model="sysStore.contactName" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item label="图标：" prop="logo">
                    <single-upload v-model="sysStore.logo"></single-upload>
                  </el-form-item>

                    <el-form-item
                            label="地址细节"
                            prop="addressDetail">
                        <el-input v-model="sysStore.addressDetail" style="width: 370px;"/>
                    </el-form-item>


                    <el-form-item
                            label="联系QQ"
                            prop="contactQq">
                        <el-input v-model="sysStore.contactQq" style="width: 370px;"/>
                    </el-form-item>

                    <el-form-item
                            label="支持电话"
                            prop="supportPhone">
                        <el-input v-model="sysStore.supportPhone" style="width: 370px;"/>
                    </el-form-item>



                    <el-form-item
                            label="描述"
                            prop="description">
                        <el-input v-model="sysStore.description" style="width: 370px;"/>
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
                <el-button type="primary" @click="onSubmit('SysStoreFrom')">提交</el-button>
                <el-button v-if="!isEdit" @click="resetForm('SysStoreFrom')">重置</el-button>
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
    import {createSysStore, getSysStore, updateSysStore} from '@/api/sys/sysStore'
    import SingleUpload from '@/components/Upload/singleUpload'

    const defaultSysStore = {
        name: ''
    };
    export default {
        name: 'SysStoreDetail',
        components: {SingleUpload,BaiduMap,BmLocalSearch,BmCityList,BmView,BmCopyright},
        props: {
            isEdit: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            sysStore:
            Object.assign({},
        defaultSysStore),
            rules: {
                name: [
                    {required: true, message: '请输入品牌名称', trigger: 'blur'},
                    {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
                ],

                    sort  :
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
                getSysStore(this.$route.query.id).then(response => {
                    this.sysStore = response.data;
            })
                ;
            } else {
                this.sysStore = Object.assign({},
            defaultSysStore)
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
                 this.sysStore.addressLat=this.center.lat;
                   this.sysStore.addressLng=this.center.lng;
                    if(valid) {
                        this.$confirm('是否提交数据', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            if(this.isEdit
                    )
                        {
                            updateSysStore(this.$route.query.id, this.sysStore).then(response => {
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
                            createSysStore(this.sysStore).then(response => {
                                if(response.code == 200
                        )
                            {
                                this.$refs[formName].resetFields();
                                this.sysStore = Object.assign({},
                            defaultSysStore)
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
                this.sysStore = Object.assign({},
            defaultSysStore)
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


