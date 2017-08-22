// 顶部导航栏
$(document).ready(function(){
	// 顶部广告
	$('.sub_top_ad_close').click(function(){
		$('.top_ad').hide();
	});
  // 鼠标移入时顶部导航栏的地址选择
  hover('.dorpdown','.dt_icon1','.address');
  // 鼠标移入顶部导航的我的京东
  hover('.top_rnav .fore3','.dt_icon2','.myjd');
  // 鼠标移入顶部导航的客服服务
  hover('.top_rnav .fore6','.dt_icon3','.sevice');
  //鼠标移入顶部导航的网站导航
  hover('.top_rnav .fore7','.dt_icon4','.page_nav');
  // 鼠标移入手机京东
  hover('.top_rnav .fore8','','.mobile_hide');
  // 鼠标移入购物车
  hover('.settleup','','.dorpdown-layer');
  // 调用轮播图函数
  Carousel(8,7,'.carousel_top .ig','.carousel_top .tab','.carousel_top .btn1','.carousel_top .btn2','.carousel_top','.carousel_top .btn');
  // 调用历史记录函数
  history();
  // 侧边栏的tab卡
  sideNav();
  // 轮播图右边的新闻
  Transform ('.mod_tab_head_item','.news_list','.J_news_tab_active','translateX(52px)');
  // 京东秒杀，调用btn悬停出现
  Btn_hover2('.J_sk_list_wrapper','.floor1 .control');
  // 优品专辑下的轮播图
  Carousel(3,2,'.floor2 .ig','.floor2 .tab','.floor2 .box_bd .btn1','.floor2 .box_bd .btn2','.floor2 .carousel','.floor2 .middle .btn');
  // 排行榜下的效果
  Transform ('.floor2 .top_tab_head a','.floor2 .top_tab_content a','.floor2 .top_tab_active','translateX(78px)');
  // 右边侧边栏的处理
  $('.fix-right .toolbar-tab').hover(function(){
    $(this).css("backgroundColor","#c81623");
    $(this).find('.tab-ico').css("backgroundColor","#c81623");
    $(this).find('.tab-text').css({"left":"-59px","backgroundColor":"#c81623"});
    $('.fix-right .last').css("backgroundColor","#c81623");
  },function(){
    $(this).css("backgroundColor","#7a6e6e");
    $(this).find('.tab-ico').css("backgroundColor","#7a6e6e");
    $(this).find('.tab-text').css({"left":"35px","backgroundColor":"#7a6e6e"});
    $('.fix-right .last').css("backgroundColor","#c81623");
  });
  // 京东倒计时
  window.setInterval(getTimer,10);/*设置不间断定时器执行getTimer函数*/  
})
// 页面滚过一个视口京东秒杀出现后固定的搜索导航栏
$(function(){
  var dom=$(document);//得到document文档对象
  var obj=[];//用来存放从json里获取的数据
  // 加载json数据
  $.ajax({
    type:'get',
    dataType: "json",
    url:'json.json',
    async:false,
    success:function(data){//请求成功 xhr.responseText
      for(var i=0;i<data.length;i++){
        obj.push(data[i]);//把json里的数据加到obj数组里
      }        
    },
    error:function(){//请求失败
      console.log('响应失败');
    }
  });
  var obj1=obj.slice(0,10);//选取json中前十个数据
  var obj2=obj.slice(10,16);//选取json中10到16,6个数据
  var obj3=obj.slice(16,24);//选择json中16到24,8个数据
  var obj4=obj.slice(24,25);//选择json中24到25,1个数据
  var obj5=obj.slice(25,29);//选择json中25到29,4个数据
  var obj6=obj.slice(29,32);//选择json中29到32,3个数据
  var obj7=obj.slice(32,44);//选择json中32到44,12个数据
  var obj8=obj.slice(44,54);//选择json中44到54,10个数据
  // 京东秒杀加载页面
  AddGoods('.floor1 .J_sk_list',10,'<li class="sk_item"><div class="sk_item_pic"><a href="" class="sk_item_pic_lk"><img src="" alt="" title="" class="sk_item_img" /><p class="sk_item_name"></p></a><span class="sk_item_shadow"></span></div><p class="sk_item_price"><span class="mod_price sk_item_price_new"><i>¥</i><span>155.00</span></span><span class="mod_price sk_item_price_origin"><i>¥</i><del>189.00</del></span></p></li>',
    'sk_item_img','.floor1 .sk_item','.sk_item_name','',obj1,'.sk_item_price_new span','.sk_item_price_origin del');
  // 发现好货加载页面
  AddGoods('.floor2 .first_list',6,'<li class="first_item"><a href="" class="first_item_lk"><p class="first_item_name"></p><img src="" alt="" title="" class="first_item_img"></a></li>',
    'first_item','.floor2 .first_item','.first_item_name','',obj2,'','');
  // 对京东秒杀下的图片悬停进行上移
  move('.floor1 .sk_item_pic_lk','img','translateY(-8px)','translateY(0)');
  // 对发现好货的图片进行左移
  move('.floor2 .first_item_lk','img','translateX(-10px)','translateX(0)');
  // 对领券中心的图进行右移
  move('.floor3 .list_item_lk','.list_img','translateX(15px)','translateX(0)');
  // 对广告进行加载
  ad('.floor4','.floor4 img');
  // 享品质
  AddGoods('.floor5 .entry_list',8,'<li class="entry_item"><a class="entry_lk" href=""><div class="entry_bg"><div class="entry_info"><h4 class="entry_info_tit"></h4><p class="entry_info_desc"></p></div></div><img src="" class="entry_img"></a></li>',
    'entry_item','.floor5 .entry_item','.entry_info_tit','.entry_info_desc',obj3,'','');
  // 对广告进行加载
  ad('.floor6','.floor6 img');
  // 享品质
  AddGoods('.pt_cover',1,'<a href="" class="pt_cover_lk"><img src="" class="pt_cover_img" /></a>','pt_cover_lk','.pt_cover_lk','','',obj4,'','');
  // 服装美妆
  AddGoods('.pt_bi',4,'<a href="" class="pt_bi_item"><p class="pt_bi_tit"></p><p class="pt_bi_promo"></p><img src="" alt="" title="" class="pt_bi_img"></a>',
    'pt_bi_item','.pt_bi_item','.pt_bi_tit','.pt_bi_promo',obj5,'','');
  AddGoods('.pt_more',3,'<a href="" class="pt_more_item"><img src="" alt="" title="" class="pt_more_img" /></a>',
    'pt_more_item','.pt_more_item','','',obj6,'','');
  AddGoods('.pt_logo_list',12,'<li class="pt_logo_item"><a href=""><img src="" alt="" class="pt_logo_img" /></a></li>',
    'pt_logo_item','.pt_logo_item','','',obj7,'','');
  // 服装美妆的第二栏
  $('.pt_cloth').clone().prependTo(".chn_col2");
  $('.chn_col2 .pt_tit').html('爱美丽');
  // 家电手机对服装美妆进行复制
  $('.floor7 .chn_inner').clone().prependTo(".floor8 .center");
  $('.floor8 .chn_col1 .pt_tit').html('家电馆');
  $('.floor8 .chn_col2 .pt_tit').html('搞机派');
  // 电脑数码对家电手机进行复制
  $('.floor8 .center').clone().prependTo(".floor9");
  $('.floor9 .chn_col .pt_tit').html('电脑');
  $('.floor8 .center').clone().prependTo(".floor10");
  $('.floor10 .chn_col1 .pt_tit').html('玩3C');
  $('.floor10 .chn_col2 .pt_tit').html('爱运动');
  ad('.floor11','.floor11 img');
  $('.floor8 .center').clone().prependTo(".floor12");
  $('.floor12 .chn_col .pt_tit').html('爱吃');
  $('.floor8 .center').clone().prependTo(".floor13");
  $('.floor13 .chn_col1 .pt_tit').html('爱宝宝');
  $('.floor13 .chn_col2 .pt_tit').html('爱家');
  $('.floor8 .center').clone().prependTo(".floor14");
  $('.floor14 .chn_col1 .pt_tit').html('爱阅读');
  $('.floor14 .chn_col2 .pt_tit').html('爱车');
  $('.floor8 .center').clone().prependTo(".floor15");
  $('.floor15 .chn_col1 .pt_tit').html('游戏');
  $('.floor15 .chn_col2 .pt_tit').html('金融化');
  ad('.floor16','.floor16 img');
  // 没逛够
  AddGoods('.floor17 .more_list',10,'<li class="more_item"><a href="" class="more_item_lk"><img src="" class="more_photo"><div class="more_info"><p class="more_info_name"></p><p class="more_info_price mod_price"><i>¥</i><span class="more_info_price_txt">105.8</span></p></div></a></li>',
    'more_item','.more_item','.more_info_name','',obj8,'','.more_info_price_txt');
  // 对楼层的商品进行效果处理
  move('.floor5 .entry_lk','img','translateX(-10px)','translateX(0)');
  move('.pt_bd_col1 .pt_cover','img','translateX(-10px)','translateX(0)');
  move('.pt_bd_col1 .pt_bi .pt_bi_item','img','translateX(-10px)','translateX(0)');
  move('.pt_bd_col1 .pt_more .pt_more_item','img','translateX(-10px)','translateX(0)');
  // 鼠标滚动到一个屏幕后的操作
  $(window).scroll(function(){
    if(dom.scrollTop()>=700){
      // 显示固定的搜索栏，主要对css的样式进行操作
      $('.search_logo .search').addClass('search-fix');
      $('.search-fix .search-m').css({'margin': 'auto','width': '1190px','height': '48px','position': 'relative','z-index': '100'});
      $('.search-m .sub_search_logo').css('display','block');
      $('.search .form').css('top','6px');
      $('.search .form .text').css({'border':'1px solid #efefef','background-color':'#efefef'});
      $('ul.shelper').css('top','41px');
    }else{
      // 回到第一个视口，恢复原来的样子
      $('.search_logo .search').removeClass('search-fix');
      $('.search-m .sub_search_logo').css('display','none');
      $('.search-fix .search-m').removeClass('search-m');
      $('.search .form .text').css({'border':'1px solid #f10215','background-color':'#fff'});
      $('.search .form').css('top','25px');
      $('ul.shelper').css('top','59px');
    }
    if(dom.scrollTop()>=($('.footer').offset().top-100)){
      for(var i=5;i<18;i++){
        $('.floor'+i).show();
      } 
    }
    if(dom.scrollTop()>=1620){
      $('.fix-left').css('display','block');
      $(".fix-left .lift_list li").click(function(){
        $(this).addClass("lift_item_on").siblings().removeClass("lift_item_on");
      });
      fixLeft(1620,2350,0);//指示页面滚到品质专享
      fixLeft(2350,2900,1);//指示页面滚到服装美妆
      fixLeft(2900,3500,2);//指示页面滚到家电手机
      fixLeft(3500,4100,3);//指示页面滚到电脑数码
      fixLeft(4100,4650,4);//指示页面滚到3C运动
      fixLeft(4650,5200,5);//指示页面滚到爱吃
      fixLeft(5200,5800,6);//指示页面滚到母婴家具
      fixLeft(5800,6400,7);//指示页面滚到图书汽车
      fixLeft(6400,7000,8);//指示页面滚到虚拟
      fixLeft(7000,7700,9);//指示页面滚到还没逛够
      // 使左侧的导航侧边栏能够随着视口的变化进行缩放
      $(window).resize(function(){ 
        var fixLeftClient=$(window).height();
        var fixLeftH=$('.fix-left').height();
        var fixLeftTop=(fixLeftClient-fixLeftH)/2+"px";
        $('.fix-left').css({"top":fixLeftTop});
      });   
    }else{
      $('.fix-left').css('display','none');
    }
    // 左边固定视口的滚动定位
    function fixLeft(n1,n2,num){
      if(dom.scrollTop()>=n1&&dom.scrollTop()<=n2){
        $('.fix-left .lift_item').eq(num).addClass("lift_item_on");
      }else{
        $('.fix-left .lift_item').eq(num).removeClass("lift_item_on");
      }
    }
  }); 
});
function getTimer(){  
  var endtime=new Date("2017/09/20 00:00:00");  /*定义结束时间*/  
  var nowtime=new Date();/*获取当前时间*/  
  var cha=endtime.getTime()-nowtime.getTime();/*得到它们相差的时间*/    
  var hour=Math.floor(cha/1000/60/60%24);/*划分出时分秒*/  
  var minute=Math.floor(cha/1000/60%60);  
  var  second=Math.floor(cha/1000%60);  
  if (minute <= 9) minute = '0' + minute;  
  if (second <= 9) second = '0' + second;  
  if (hour <= 9) hour = '0' + hour;     
  $(".cd_hour .cd_item_txt").html(hour); /*写到页面中*/ 
  $(".cd_minute .cd_item_txt").html(minute);  
  $(".cd_second .cd_item_txt").html(second);  
}  