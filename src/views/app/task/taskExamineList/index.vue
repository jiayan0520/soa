<template>
  <list-layout
    ref="listLayout"
    :data-list="dataList"
    :more-op-list="moreOpList"
    detail-url="/task/examine/detail"
    class="soa-task-examine-list"
    @search="onSearch"
    @loadData="onLoad">
    <template slot="top">
      <van-search
        v-model="searchValue"
        label="任务内容"
        placeholder="搜索"
        @search="onSearch"
      />
      <van-tabs
        v-model="active"
        @click="onSearch">
        <van-tab
          v-for="item in tab"
          :key="item"
          :title="item"/>
      </van-tabs>
    </template>
    <template
      slot="item-content"
      slot-scope="slotProps">
      <div class="soa-list-item-content content">
        <div
          :style="infoStyle"
          class="soa-task-examine-list__info">
          <div class="c-ft16">{{ slotProps.item.title }}</div>
          <div class="c-light">{{ slotProps.item.deadline }} 截止</div>
          <div class="c-light">{{ slotProps.item.createTime }} 发布</div>
          <span :class="[`c-${computeTimes(slotProps.item.deadline).type}`]">{{ computeTimes(slotProps.item.deadline).value }}</span>
        </div>
        <div :class="[examStatus[slotProps.item.state].type,'soa-task-examine-list__status']">{{ examStatus[slotProps.item.state].label }}</div>
      </div>
    </template>
  </list-layout>
</template>>

<script>
import listLayout from '@/components/listLayout'
import { examStatus } from '../components/taskEnum'
import { computeDiffTime } from '@/utils/index.js'
export default {
  name: 'TaskExamineList',
  components: {
    listLayout
  },
  data() {
    return {
      examStatus,
      active: 0,
      searchValue: '',
      dataList: [],
      tab: ['待审核', '已审核'],
      moreOpList: [],
      page: 0, // 当前页码
      limit: 20 // 每页请求数量
    }
  },
  computed: {
    infoStyle() {
      return { width: ((document.body.clientWidth > 1024 ? 1024 : document.body.clientWidth) * 0.7) + 'px' }
    }
  },
  methods: {
    onSearch() {
      this.page = 0;
      this.dataList = []
      this.onLoad()
    },
    computeTimes(deadline) {
      const deadlineTime = deadline + ':00'
      return computeDiffTime(deadlineTime)
    },
    onLoad() {
      this.page++;
      const params = {
        type: this.active ? 'AUDITED' : 'WAITING',
        pageNum: this.page,
        pageSize: this.limit,
        content: this.searchValue
      }
      this.$api.getTaskExamineList(params).then((res) => {
        this.dataList = this.dataList.concat(res.rows)
        const total = (res && res.total) || 0;
        // 加载状态结束
        this.$refs.listLayout.loading = false
        // 数据全部加载完成
        if (this.dataList.length >= total) {
          this.$refs.listLayout.finished = true
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/mixins/mixins.scss';
@include b(task-examine-list){
  & .content{
     @include base-between
  }
  @include e(info){
    word-wrap:break-word;
  }
  @include e(status){
    width: 80px;
    text-align: center
  }
}
</style>
