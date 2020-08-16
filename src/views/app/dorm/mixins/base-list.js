import listLayout from '@/components/listLayout'
import { Dialog, Toast } from 'vant'
export default {
  components: {
    listLayout
  },
  data() {
    return {
      isShowBar: false, // 是否展示checkbox框
      isShowSearch: false, // 是否展示搜索弹框
      isShowEditPopup: false, // 是否展示宿舍编辑弹框
      isShowDetailPopup: false, // 是否展示宿舍详情弹框
      rowId: null, // 当前编辑的id
      limit: 20, // 每页行数
      page: 0, // 当前页码 total 总条数
      dataList: [],
      isCheckAll: false, // 列表选中全部
      showMore: false // 更多操作
    }
  },
  methods: {
    onSearch() {
      this.page = 0
      this.dataList = []
      this.loadData()
    },
    // tab便签点击切换路由
    tabClick(value) {
      console.log(value)
      switch (value) {
        case 1:
          this.$router.push('/dorm/bedList')
          break
        case 2:
          this.$router.push('/dorm/dormList')
          break
        case 3:
          this.$router.push('/dorm/buildingList')
          break
      }
    },
    // 复选框选择所有
    changeCheckAll() {
      this.isCheckAll = !this.isCheckAll
      this.dataList.forEach((item, index) => {
        item.isCheck = this.isCheckAll
      });
    },
    // 行中的复选框变化了
    changeRowCheckbox(val) {
      if (!val) {
        this.isCheckAll = false
      } else {
        this.isCheckAll = !this.dataList.some(item => item.isCheck === false) // 全部是选中
      }
    },
    // 行点击弹详情框
    handleRowClick(item) {
      this.rowId = item.id
      this.isShowDetailPopup = true
    },
    // 关闭弹框
    closePopup(isload) {
      this.isShowEditPopup = false
      this.isShowDetailPopup = false
      this.showMore = false
      if (isload) {
        this.onSearch()
      }
    },
    // 获取需要操作的idlist
    getOpIdList(id, opLabel, method) {
      let idList = []
      if (id) {
        idList = [id]
      } else {
        idList = this.dataList.filter(item => item.isCheck).map(item => { return item.id })
      }
      if (idList.length <= 0) {
        Toast(`请选中一条要${opLabel}的记录！`);
        return;
      }
      Dialog.confirm({
        title: `确认${opLabel}？`,
        message: `此次选中${idList.length}条记录，${opLabel}的数据无法恢复`
      }).then(() => {
        this.$api[method]({ dormId: idList.join(',') }).then(res => {
          Toast(`${opLabel}成功，此次共删除${idList.length}条记录！`);
          this.onSearch()
        }).catch(error => {
          Toast(`${opLabel}失败！` + error);
        })
      })
    }
  }
}
