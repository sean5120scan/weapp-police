// index.js
// 获取应用实例
const app = getApp()
const getRandVal=require("../../utils/util")
let User=require("../../apis/index")
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    background: ['demo-text-1', 'demo-text-2'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    hasUserInfo: false,
    serviceList:[
      {
        id:0,
        icon:"huifuhukou",
        title:"户政服务",
        cont:"本市居民户口迁入迁出",
        bgColor:"#f7eaf5",
        color:"#f00"
      },
     
    {id:1,
      icon:"shenfenzheng",
      title:"身份证业务",
      cont:"身份证办理，补办邮寄等",
      bgColor:"#edfafb",
      color:"#22cddc"
    },
      { id:2,
        icon:"churujing",
        title:"出入境服务",
        cont:"港澳台以及海外出入境服务",
        bgColor:"#e1f2e2",
        color:"#07b710"
      },
      {id:3,
        icon:"jiaotongshigu1",
        title:"交管服务",
        cont:"车辆登记驾驶证办理等相关服务",
        bgColor:"#f8f6ef",
        color:"#F89E19"
      },
      {id:4,
        icon:"juzhuzhengbanli",
        title:"居住证业务",
        cont:"车辆登记驾驶证办理等相关服务",
        bgColor:"#f4eff8",
        color:"#f00"
      },
      {id:5,
        icon:"shehuizhian",
        title:"治安服务",
        cont:"市区犯罪事件、嫌疑人举报服务专区",
        bgColor:"#f9f3f6",
        color:"#335CFF"
    },
    ],
    specalService:[
      {id:0,
        icon:"dibudaohanglan-",
        title:"失物招领",
        cont:"物件证件丢失招领",
        bgColor:"#f8f6ef",
        color:"#F89E19"
      },
      {id:1,
        icon:"zhaoren",
        title:"寻人寻亲",
        cont:"亲人走失、走散，认领",
        bgColor:"#f4eff8",
        color:"#f00"
      },
    ],
    deptColors:["#f00","#ff7f00","#f200ff","#0cc8fc","#0ace89"],
    deptArr:[
    {id:0,title:"容",cont:"容城派出所"},
    {id:1,title:"朱",cont:"朱河派出所"},
    {id:2,title:"新",cont:"新沟派出所"},
    {id:3,title:"毛",cont:"毛市派出所"},
    {id:4,title:"福",cont:"福田派出所"},
    {id:5,title:"汴",cont:"汴河派出所"},
    {id:6,title:"上",cont:"上车湾派出所"},
    {id:7,title:"尺",cont:"尺八湾派出所"},
    {id:8,title:"棋",cont:"棋盘派出所"},
    {id:9,title:"网",cont:"网市派出所"},
    {id:10,title:"周",cont:"周沟派出所"},
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  viewLinsence(){
    wx.navigateTo({
      url: '../electronicId/electronicId'
    })
  },
  goUserCenter(){
    wx.navigateTo({
      url: '../userCenter/userCenter'
    })
  },
  goServerDetal(e){
    var id=e.currentTarget.dataset.id
    console.log("id:",id)
    var targetVal=""
    switch(id){
      case 0:
        targetVal="hukou";
        break;
      case 1:
          targetVal="IDCard";
          break;
      case 2:
        targetVal="outLand";
        break;
      case 3:
          targetVal="traffic";
          break;
      case 4:
        targetVal="traffic";
        break;
      case 5:
        targetVal="residence"
        break;
      case 6:
        targetVal="publicSecurity "
        break;
    }
    console.log("targetVal:",targetVal)
    wx.navigateTo({
      url: `../${targetVal}/${targetVal}`
    })
  },
  goDetailDept(e){
    console.log("点击:",e)
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../deptDetail/deptDetail?id='+id,
    })
  },
  onLoad() {
    console.log("onLoad:",User)
    // User.getUserInfo()
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
  },
  viewDeptList(){
    console.log('aa')
    wx.navigateTo({
      url: '../deptList/deptList'
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  returnRandColor(){
    console.log("getRandVal(this.deptColors):",getRandVal(this.deptColors))
    return getRandVal(this.deptColors)
  }
})
