export default [
  // 宿舍列表
  {
    path: '/dorm/dormList',
    name: 'dormList',
    component: () => import('@/views/app/dorm/dormList')
  },
  // 楼栋列表
  {
    path: '/dorm/buildingList',
    name: 'buildingList',
    component: () => import('@/views/app/dorm/buildingList')
  },
  // 床位列表
  {
    path: '/dorm/bedList',
    name: 'bedList',
    component: () => import('@/views/app/dorm/bedList')
  },
  // 床位详情页
  {
    path: '/dorm/bedDetail',
    name: 'bedDetail',
    component: () => import('@/views/app/dorm/bedList/bed-detail')
  },
  // 宿舍详情
  {
    path: '/dorm/dormDetail',
    name: 'dormDetail',
    component: () => import('@/views/app/dorm/dormList/dorm-detail')
  },
  // 楼栋详情页
  {
    path: '/dorm/building/detail',
    name: 'buildingDetail',
    component: () => import('@/views/app/dorm/buildingList/building-detail')
  },
  // 楼栋编辑页
  {
    path: '/dorm/building/edit',
    name: 'buildingEdit',
    component: () => import('@/views/app/dorm/buildingList/building-edit')
  },
  // 未分配人员
  {
    path: '/dorm/unallocated',
    name: 'unallocated',
    component: () => import('@/views/app/dorm/unallocated')
  },
  // 分配
  {
    path: '/dorm/allocate',
    name: 'allocate',
    component: () => import('@/views/app/dorm/unallocated/dorm-allocate')
  },
  // 调换审核列表
  {
    path: '/dorm/exchange',
    name: 'dormExchange',
    component: () => import('@/views/app/dorm/exchangeDorm')
  },
  // 调换审核页
  {
    path: '/dorm/exchange/detail',
    name: 'dormExchangeDetail',
    component: () => import('@/views/app/dorm/exchangeDorm/change-detail')
  },
  // 床位二维码
  {
    path: '/bed-qrcode',
    name: 'bed-qrcode',
    component: () => import('@/views/app/dorm/bed-qrcode')
  },
  // 床位二维码无权限
  {
    path: '/bed-qrcode/bed-noauth',
    name: 'bed-noauth',
    component: () => import('@/views/app/dorm/bed-qrcode/bed-noauth')
  },
  // 床位二维码学生权限
  {
    path: '/bed-qrcode/bed-auth-self',
    name: 'bed-auth-self',
    component: () => import('@/views/app/dorm/bed-qrcode/bed-auth-self')
  },
  // 床位二维码卫生员权限
  {
    path: '/bed-qrcode/bed-auth-checkman',
    name: 'bed-auth-checkman',
    component: () => import('@/views/app/dorm/bed-qrcode/bed-auth-checkman')
  },
  // 床位详情页
  {
    path: '/bed-qrcode/bedDetail',
    name: 'qrcode-bedDetail',
    component: () => import('@/views/app/dorm/bedList/bed-detail')
  },
  // 宿舍详情及辅导员以上扫码页
  {
    path: '/bed-qrcode/dormDetail',
    name: 'qrcode-dormDetail',
    component: () => import('@/views/app/dorm/dormList/dorm-detail')
  },
  // 宿舍导入
  {
    path: '/dorm/import',
    name: 'dormImport',
    component: () => import('@/views/app/dorm/dormImport')
  },
  // 评分榜
  {
    path: '/dorm/rank',
    name: 'dormRank',
    component: () => import('@/views/app/dorm/checkRank')
  },
  // 检查列表
  {
    path: '/dorm/check-list',
    name: 'dormCheckList',
    component: () => import('@/views/app/dorm/checkList')
  },
  // 活动室
  {
    path: '/aroom',
    name: 'aroom',
    component: () => import('@/views/app/aroom')
  },
  // 床位二维码
  {
    path: '/aroom-qrcode',
    name: 'aroom-qrcode',
    component: () => import('@/views/app/aroom/aroom-detail')
  },
  // 活动室详情，包括学生扫码申请页
  {
    path: '/aroom/detail',
    name: 'aroomDetail',
    component: () => import('@/views/app/aroom/aroom-detail')
  },
  // 活动室审核列表
  {
    path: '/aroom/audit',
    name: 'aroomAuditList',
    component: () => import('@/views/app/aroom/aroomAudit')
  },
  // 活动室审核页面
  {
    path: '/aroom/audit/detail',
    name: 'aroomAudit',
    component: () => import('@/views/app/aroom/aroomAudit/aroom-audit-detail')
  },
  {
    path: '/dorm-count',
    name: 'dormCount',
    component: () => import('@/views/app/dorm/dormCount/index')
  }
]
