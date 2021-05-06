// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: '境外游礼包',
  },
  bindViewTap() {
      wx.navigateTo({
        url: '../main/main'
      })
    },
  
})
