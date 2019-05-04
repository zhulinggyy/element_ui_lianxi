<template>
 <div>
   <div class="title">
     <h2>管理项目</h2>
     <button @click="addList">按摩</button>
   </div>
   <div>
     <el-radio v-model="radio" label="1">备选项</el-radio>
     <el-radio v-model="radio" label="2">备选项</el-radio>
   </div>
   <div>
     <el-table :data="tableData" border style="width: 100%">
       <el-table-column prop="date" label="日期" width="180"></el-table-column>
       <el-table-column prop="name" label="姓名" width="180"></el-table-column>
       <el-table-column prop="address" label="地址"></el-table-column>
       <el-table-column prop="address" label="操作">
         <template slot-scope="scope">
           <el-button
             size="mini"
             type="danger"
             @click="handleDelete(scope.$index,scope.row)">删除</el-button>
         </template>
       </el-table-column>
     </el-table>
     <div class="bnt_2">
       <el-button type="primary" plain circle="true">主要按钮</el-button>
     </div>

   </div>

   <el-dialog :visible.sync="isPuops" title="我是一个美女的妈">
     <div>

       <div>
         <el-form ref="form" :model="form" label-width="80px">
           <el-form-item required="true" label="活动名称">
             <el-input v-model="form.name"></el-input>
           </el-form-item>
           <el-form-item label="活动区域">
             <el-select v-model="form.region" placeholder="请选择活动区域">
               <el-option label="区域一" value="shanghai"></el-option>
               <el-option label="区域二" value="beijing"></el-option>
             </el-select>
           </el-form-item>
           <el-form-item label="活动时间">
             <el-col :span="11">
               <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
             </el-col>
             <el-col class="line" :span="2">-</el-col>
             <el-col :span="11">
               <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
             </el-col>
           </el-form-item>
           <el-form-item label="即时配送">
             <el-switch v-model="form.delivery"></el-switch>
           </el-form-item>
           <el-form-item label="活动性质">
             <el-checkbox-group v-model="form.type">
               <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
               <el-checkbox label="地推活动" name="type"></el-checkbox>
               <el-checkbox label="线下主题活动" name="type"></el-checkbox>
               <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
             </el-checkbox-group>
           </el-form-item>
           <el-form-item label="特殊资源">
             <el-radio-group v-model="form.resource">
               <el-radio label="线上品牌商赞助"></el-radio>
               <el-radio label="线下场地免费"></el-radio>
             </el-radio-group>
           </el-form-item>
           <el-form-item label="活动形式">
             <el-input type="textarea" v-model="form.desc"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">立即创建</el-button>
             <el-button>取消</el-button>
           </el-form-item>
         </el-form>



       </div>


       <div class="btn">
         <button class="btn_l" @click="updateData">提交</button>&nbsp;&nbsp;&nbsp;
         <button class="btn_r" @click="isPuops=false">取消</button>
       </div>
     </div>
   </el-dialog>
 </div>


</template>

<script>
  import {reqSmsLogin} from '../../api'
  export default {
    data(){
      return{
        listData:[
          {
            id:1,
            name:'勇第',
            age:28
          },
          {
            id:2,
            name:'老公',
            age:29
          },
          {
            id:3,
            name:'小三',
            age:30
          }
        ],
        isPuops:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        radio:null,
        tableData:[
          {
            "id":1,
            "date": "2016-05-02",
            "name": "王小虎1",
            "address": "上海市普陀区金沙江路 1518 弄"
          },
          {
            "id":2,
            "date": "2016-05-02",
            "name": "王小虎2",
            "address": "上海市普陀区金沙江路 1518 弄"
          },
          {
            "id":3,
            "date": "2016-05-04",
            "name": "王小虎3",
            "address": "上海市普陀区金沙江路 1517 弄"
          },
          {
            "id":4,
            "date": "2016-05-01",
            "name": "王小虎4",
            "address": "上海市普陀区金沙江路 1519 弄"
          },
          {
            "id":5,
            "date": "2016-05-03",
            "name": "王小虎5",
            "address": "上海市普陀区金沙江路 1516 弄"
          }
        ]


      }
    },
    mounted(){
      this.$store.dispatch('getShops')
    },
    methods:{
      addList(){
        this.isPuops=true;
        console.log('ssss')
      },
      updateData() {
        console.log(this.temp)

      },
      onSubmit() {
        if(!this.form.name){
          this.$message.error('活动名称不能为空！');
          return false
        }
        console.log(this.form);
        //添加数据发送ajax请求
        reqSmsLogin(this.form).then(res=>{
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });

          this.$store.dispatch('getShops')


        }).catch(err=>{
          this.$message.error('错了哦，这是一条错误消息');
        })
      },
      handleDelete(a,b){
        this.tableData.splice(a,1)



      }

    }
  }
</script>

<style scoped>
  .btn{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .bnt_2{
    text-align: center;
  }
  .bnt_2 .el-button{
    width: 100px;
    height: 100px;
  }
</style>
