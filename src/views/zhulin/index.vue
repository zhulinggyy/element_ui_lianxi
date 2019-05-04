<template>
  <div>
    <div class="title">项目信息管理</div>
    <div class="search_wrap">
      <button @click="addList">新增</button>
    </div>
    <div class="table_cont">
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column label="序号" prop="id" sortable="custom" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="150px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄" min-width="150px">
          <template slot-scope="scope">
            <span>{{ scope.row.age }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.author')" width="110px" align="center">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
        <el-table-column v-if="showReviewer" :label="$t('table.reviewer')" width="110px" align="center">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.importance')" width="80px">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.readings')" align="center" width="95">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <span>bb</span>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <el-dialog :visible.sync="isPuops" title="我是一个帅哥">
      <h2>我是一个表格</h2>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        list:[
          {
            id:1,
            name:'小果果',
            age: 20
          },
          {
            id:2,
            name:'小果果ssss',
            age: 2055555
          }
        ],
        isPuops:false
      }

    },
    methods:{
      addList(){
        this.isPuops = true;
      }
    }
  }
</script>

<style scoped>

</style>
