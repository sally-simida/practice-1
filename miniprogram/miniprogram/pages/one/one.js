// miniprogram/pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: ''
  },
  chooseImg() {
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        this.setData({
          imgPath: res.tempFilePaths[0]
        })
      }
    })
  },
  uploadImg() {
    //时间戳，记录当前时间为 ‘’ ，精确到毫秒，确保图片名字不重复，云地址处不会覆盖
    let timeStamp = Date.parse(new Date());
    //图片后缀不同，为了使有不同图片后缀的图片都能正常加载，采用(/.+\./, '' 正则表达式的方法取图片的格式
    let fName = this.data.imgPath.replace(/.+\./, '');
    wx.cloud.uploadFile({
      filePath: this.data.imgPath,//临时地址
      cloudPath: 'fellow43/' +timeStamp +'.'+fName,//云端地址
    }).then( res => {
      console.log(res);
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

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