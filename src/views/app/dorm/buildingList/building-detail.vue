<template>
  <div class="building-detail">
    <custom-panel
      :data="data"
      :field-list="fieldList" />
    <custom-cell
      :value="data.address"
      title="楼栋位置" />
    <custom-cell title="班级信息">
      <template slot="value">
        <div
          v-for="item in data.classInfos"
          :key="item">{{ item.fullDeptNames }}:{{ item.count }}人</div>
      </template>
    </custom-cell>
    <custom-cell
      :value="data.desc"
      title="简介" />
  </div>
</template>

<script>
import customPanel from '@/components/customPanel'
import customCell from '@/components/customCell'
import { getQuery } from '@/utils'
export default {
  name: 'BuildingDetail',
  components: {
    customCell,
    customPanel
  },
  // props: {
  //   id: {
  //     type: String,
  //     default: ''
  //   }
  // },
  data() {
    return {
      id: null,
      data: {},
      fieldList: [
        { prop: 'buildingName', label: '楼栋名称' },
        {
          prop: 'buildingManagers',
          label: '楼管',
          type: 'array',
          childrenFields: [
            { prop: 'realName' },
            { prop: 'phone', class: 'c-info' }]
        },
        {
          prop: 'maintenanceWorkers',
          label: '维修人员',
          type: 'array',
          childrenFields: [
            { prop: 'realName' },
            { prop: 'phone', class: 'c-info' }]
        },
        {
          prop: 'annexList',
          label: '楼栋照片',
          type: 'uploader'
        }
      ]
    }
  },
  computed: {
    tcBaseUrl() {
      return this.$store.getters['core/system'].tcBaseUrl
    }
  },
  created() {
    this.id = getQuery('id')
    this.getDetail()
  },
  methods: {
    // 获取详情
    getDetail() {
      this.$api.getBuildingDetail(this.id).then(data => {
        data.annexList.forEach(item => {
          item.url = this.tcBaseUrl + item.fileName
        });
        this.data = data
      })
    }
  }
}
</script>

<style lang="scss">
.building-detail {
  width: 100%;
  overflow: auto;
}
</style>
