// miniprogram/pages/two/two.js
const db = wx.cloud.database();
const fellow43_DB = db.collection('fellow43')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpval: '',
    list: [],
    val: '',
    isDelete: true,
    idList:[]
  },
  getList() {
    fellow43_DB.where({
      isDone: false,
    }).get().then(res => {
      this.setData({
        list: res.data,
      });
      console.log(this.data.list);
    })
  },
  getDeleteList() {
    fellow43_DB.where({
      isDone: true,
    }).get().then(res => {
      this.setData({
        list: res.data,
      });
      console.log(this.data.list);
    })
  },
  getInpval(e) {
    this.setData({
      inpval: e.detail.value
    })
  },
  add() {
    let val = this.data.inpval;
    if(val){
    fellow43_DB.add({
      data: {
        title: val,
        isDone: false
      }
    }).then(res => {
      this.setData({
        val: ''
      });
      this.getList();
    })
   }else{
    wx.showToast({
      title: '输入不得为空！',
      icon: 'none',
      duration: 2050
    })
   }
  },
  finish(e) {
    console.log(e);
    fellow43_DB.doc(e.target.dataset.id).update({
      data: {
        isDone: true
      }
    }).then(res => {
      this.getList();
    });
  },
  delete(e) {
    console.log(e);
    fellow43_DB.doc(e.target.dataset.id).remove().then(res => {
      this.getDeleteList();
      console.log(888);
    });
  },
  change() {
    this.setData({
      isDelete: !this.data.isDelete
    });
    if(this.data.isDelete){
      this.getList();
    }else{
      this.getDeleteList();
    }
  },
manyChange(e){
  this.setData({
    idList:e.detail.value
  });
  console.log(this.data.idList);
},
batchHandle(e){
  let type = e.target.dataset.type;
  wx.cloud.callFunction({
    // 云函数名称
    name: 'doList',
    // 传给云函数的参数
    data: {
      type:type,
      idList: this.data.idList
    },
  })
  .then(res => {
    if(type==='finish'){
      this.getList();
    }else{
      this.getDeleteList();
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})