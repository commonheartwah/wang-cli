<template lang="html">
  <div>
    <!-- 头部查询筛选 -->
    <el-col  class='toolbar' style='padding-bottom: 0px;'>
        <el-form :inline = "true">
            <el-form-item>
                <el-input  placeholder='姓名' icon="circle-cross"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input  placeholder='年龄' icon="circle-cross"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary'>查询</el-button>
            </el-form-item>
        </el-form>
    </el-col>

    <!-- 列表展示 -->
    <el-table :data="demoListDate" border style="width: 100%" v-loading="examListLoading" >
        <el-table-column prop="name" label="姓名" sortable  align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="six" label="性别" align="center"></el-table-column>
        <el-table-column prop="school" label="学校" align="center"></el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button-group>
                  <el-button type="success" size="small" @click="edit(scope.row, scope.$index)">编辑</el-button>
                </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <!-- 列表分页 -->
    <el-col class='toolbar'>
      <el-pagination style='float: right' :current-page.sync="examListPage" :page-size="20" layout="total, prev, pager, next" :total="totalCount">
      </el-pagination>
    </el-col>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      demoListDate: [
          {
              id: 1,
              name: 'wang',
              age: 18,
              six: '男',
              school: '北京XXX大学'
          },
           {
              id: 2,
              name: 'wang',
              age: 18,
              six: '男',
              school: '北京XXX大学'
          },
           {
              id: 3,
              name: 'wang',
              age: 18,
              six: '男',
              school: '北京XXX大学'
          },
           {
              id: 4,
              name: 'wang',
              age: 18,
              six: '男',
              school: '北京XXX大学'
          },
           {
              id: 5,
              name: 'wang',
              age: 18,
              six: '男',
              school: '北京XXX大学'
          },
      ],
      examListLoading: false,
      examListPage: 1,
      //总数量
      totalCount: 5,
      //总页数
      totalPage: 1,
    };
  },
  methods: {
    /*
        点击编辑按钮
    */
    edit(item, index) {
      console.log('编辑')
    },
  },
  mounted() {
  }
};
</script>

<style>
</style>
