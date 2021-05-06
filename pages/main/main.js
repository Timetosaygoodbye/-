// main.js

Page({
  data: {
    ifDialog1: false,
    ifDialog2: false,
    ifAnimationEnd: false,
    dialogTitle: "恭喜你获得：",
    nextButtonText: "领取下一张",
    moreButtonText: "领取更多",
    firstDialogImageURL: "../../image/First_Dialog.png",
    scrollDialogImageURL: "../../image/Scroll_Dialog.png",
    scrollDialogBackgroundImageURL: "../../image/Rectangle_Green.png",
    HongKongimageURL: "../../image/HongKong.png",
    watsonsAvatarURL: "../../image/watsons.png",
    superExchangeRateCouponURL: "../../image/Super_Exchange_Rate_Coupon.png",
    moreReductionCouponURL: "../../image/More_Reduction_Coupon.png",
    watsonsCouponURL: "../../image/Watsons_Coupon.png",
    HongKongCouponURL: "../../image/HongKong_Coupon.png",
    newItemCouponURL: "../../image/New_Item_Coupon.png",
    giftCouponURL: "../../image/Gift_Coupon.png",
    rebateCouponURL: "../../image/Rebate_Coupon.png",
    singleItemCouponURL: "../../image/Single_Item_Coupon.png",
    moreStoresURL: "../../image/More_Stores.png",
    moneyIconURL: "../../image/money_icon.png",
    payIconURL: "../../image/pay_icon.png",
    arrowIconURL: "../../image/arrow_icon.png",
    businessChineseName: "屈臣氏",
    businessEnglishName: "watsons",
    couponModule: [{
        front: "微信支付优惠券",
        back: "微信支付自动抵扣"
      },
      {
        front: "商户优惠券",
        back: "请向收银员出示使用优惠券"
      }
    ],
    tabBarText: "&nbsp;专享超优汇率生效中&nbsp;",
    scrollBarList: [
      {
        number: 1,
      },
      {
        number: 4,
      },
      {
        number: 5,
      },
      {
        number: 2,
      },
      {
        number: 3,
      }
    ],
    footer: "活动规则 ｜ 联系客服"
  },
  close: function () {
    this.setData({
      ifDialog1: false,
      ifDialog2: false
    })
  },
  onShow() {
    this.setData({
      ifDialog1: true,
      ifDialog2: false,
      ifAnimationEnd: false
    });
  },
  //弹窗时禁止滑动，在编译器中无效，只有在真机预览才有效
  preventTouchMove: function () {},

  nextDialog: function(){
    var that = this;
    this.setData({
      ifDialog1: false,
      ifDialog2: true,
    });
    setTimeout(function () {
      that.animation = wx.createAnimation(
        {
          duration: 2000,
          timingFunction: 'ease'
        }
      );
      console.log(- 520 / 750 * wx.getSystemInfoSync().windowWidth);
      that.animation.translate(0,  - 800 / 750 * wx.getSystemInfoSync().windowWidth).step();
      that.setData({
        animation: that.animation.export()
      });
      setTimeout(function(){
        that.setData({
          ifAnimationEnd: true
        })
      }, 2500);
    }, 100);
    
  }
  
})