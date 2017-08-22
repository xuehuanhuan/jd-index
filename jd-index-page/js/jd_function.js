// localstorage的数据存储搜索栏的历史记录
function history(){
  var j = 0;//设定一个变量存储数据
  // 输入内容时的点击搜索框
  $('.form .text').click(function(){
    // 判断有没有数据
    if(localStorage.g>0){
      // 有数据就显示出来
      $('.shelper').css('display','block');
      // 显示出来鼠标移入时显示
      $('.shelper').mouseover(function(){
        $('.shelper').css('display','block');
      });
      // 鼠标从历史记录的栏块移出时，隐藏掉
      $('.shelper').mouseout(function(){
        $('.shelper').css('display','none');
      });
      // 动态加入数据和li标签
      for(j;j<localStorage.g;j++){
        $('.close').before('<li><div class="search-item"></div><div class="search-count">搜索历史</div></li>');
        // 把动态获取的数据加到页面中
        $('.search-item').eq(j).html(localStorage.getItem(j));
        // 点击全部删除
        $('.close').click(function(){
          localStorage.clear();
          j=0;
          $('.shelper').css('display','none');
        });
        // 点击单个删除
        $('li.close').siblings().hover(function(e){
          // 把历史记录制成空白
          $(this).children().last().text('');
          // 然后再li下加一个a标签
          $(this).children().last().append('<a href="###" class="history-del">删除</a>');
          // 把a标签添加css样式
          $('.history-del').css({'color':'#005AA0','text-decoration':'none'});
          // 获取悬停时的li的索引值
          $(this).addClass('index').siblings().removeClass('index');
          var index=$('.index').index(); 
          // 点击删除
          $('.history-del').click(function(){
            // 把含有删除索引值的li none掉
            $('.index').css('display','none');  
            // 并把这个只在localstorage里的数据移除
            localStorage.removeItem(index);
            // 判断删除的li是否剩一个
            if(localStorage.g>1){
              // 并对个数进行减少
              localStorage.g=Number(localStorage.g)-1;            
            }else{
              $('.shelper').css('display','none');
              localStorage.g = 0;
              j=0;//以后的数据的索引从0开始
            }
          });
        },function(){
          $(this).children().last().text('搜索历史').css('color','#aaa');
        });
      }  
    }else{
      $('.shelper').css('display','none');
    }
  });
  // 点击button按钮进行提交，累计localstorage的数据个数
    $('.button').click(function(){
      if($('.search .form .text').val()!=""){
        if(localStorage.g){
          localStorage.g=Number(localStorage.g) +1;
        }else{
          localStorage.g=1;
        }
        // 获取输入框的字符串
        var a = $('.form .text').val();
        // 把值存到localstorage数据库中
        localStorage.setItem(j,a);
      }
    });
}
//轮播图
function Carousel(a,b,img,tab,prev,next,m,n){
  //定义全局变量和定时器
  var i = 0 ;
  var timer;
  //用jquery方法设置第一张图片显示，其余隐藏
  $(img).eq(0).show().siblings(img).hide();
  //调用showTime()函数（轮播函数）
  showTime(); 
  // 调用左右按钮悬停函数
  Btn_hover(m,n);
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $(tab).hover(function(){
    //获取当前i的值，并显示，同时还要清除定时器
    i = $(this).index();
    Show();
    clearInterval(timer);
  });  
  //鼠标点击左侧的箭头
  $(prev).click(function(){
    clearInterval(timer);
    if(i == 0){
      i = a;//注意此时i的值
    }
    i--;
    Show();
  }); 
  //鼠标点击右侧的箭头
  $(next).click(function(){
    clearInterval(timer);
    if(i == b){
      i = -1;//注意此时i的值
    }
    i++;
    Show();
  }); 
  //创建一个showTime函数
  function showTime(){
    //定时器
    timer = setInterval(function(){
      //调用一个Show()函数
      Show();
      i++;
      //当图片是最后一张的后面时，设置图片为第一张
      if(i==a){
        i=0;
      }
    },2000);
  } 
  //创建一个Show函数
  function Show(){
    $(img).eq(i).fadeIn(300).siblings(img).fadeOut(300); 
    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $(tab).eq(i).addClass('bg').siblings(tab).removeClass('bg');
  }
  //轮播图左右按钮悬停出现，移除消失函数
  function Btn_hover(m,n){
    $(m).hover(function(){
      clearInterval(timer);
      $(n).show();
    },function(){
      $(n).hide();
      showTime();
    });
  } 
}
// 京东秒杀里的悬停按钮
function Btn_hover2(m,n){
  $(m).hover(function(){
    $(n).show();
  },function(){
    $(n).hide();
  });
}
// 鼠标悬停时的顶部导航栏效果函数
function hover(m,o,p){
  $(m).mouseover(function(){
    $(o).addClass('hover');
    $('.settleup .cw-icon').addClass('hover1');
    $(p).css('display','block');
  });
  // 鼠标移出时顶部导航栏的效果
  $(m).mouseout(function(){
    $(p).css('display','none');
    $(o).removeClass('hover');
  });
  // 鼠标点击地址切换
  $('.address a').click(function(){
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".dt-text").html($(this).html());
  });
}
// 侧边栏的tab卡
function sideNav(){
  var sub = $('#sub');//获取元素
  var activeRow;//被激活的列选项
  var activeMenu;//被激活的内容选项
  var timer;//设置一个定时器
  var mouseInSub = false;//判断鼠标在那个区域
  sub.on('mouseenter',function(e){
    mouseInSub = true;
  }).on('mouseleave',function(e){
    mouseInSub = false;
  });
  $('#test').on('mouseenter',function(e){
    sub.removeClass('none');
  });
  $('#test').on('mouseleave',function(e){
    sub.addClass('none');
    if(activeRow){
      activeRow.removeClass('active');
      activeRow = null;
    }
    if(activeMenu){
      activeMenu.addClass('none');
      activeMenu = null;
    }
  });
  $('#test').on('mouseenter','li',function(e){
    if(!activeRow){
      activeRow = $(e.target).addClass('active');
      activeMenu = $('#'+activeRow.data('id'));
      activeMenu.removeClass('none');
      return;
    }
    timer = setTimeout(function(){
      if(mouseInSub){
        return;
      }
      activeRow.removeClass('active');
      activeMenu.addClass('none');
      activeRow = $(e.target);
      activeRow.addClass('active');
      activeMenu = $('#'+activeRow.data('id'));
      activeMenu.removeClass('none');
    },300);
  })
}
// 指示tab选项卡的横线
function Transform (tit,con,active,transform){
  $(tit).mouseover(function(){
    var index=$(this).index();//获取当前的tit索引值
    $(con).eq(index).show().siblings().hide();//对应的内容显示出来
    // 进行判断
    if(index==0){
    $(active).css('transform','translateX(0)');
    }
    if(index==1){
    $(active).css('transform',transform);
    }
    if(index==2){
    $(active).css('transform','translateX(156px)');
    }
    if(index==3){
    $(active).css('transform','translateX(234px)');
    }
    if(index==4){
    $(active).css('transform','translateX(312px)');
    }
  });
}
// 对图片悬停进行的上下左右移动
function move(wrap,img,translateN,translateO){
  $(wrap).hover(function(){
    $(this).find(img).css('transform',translateN);
  },function(){
    $(this).find(img).css('transform',translateO);
  })
}
//动态加载商品的函数
function AddGoods(parent,num,content,addName,child,text_h,text_p,obj,newPrice,oldPrice){
  for(var k = 0;k<num;k++){
    $(parent).append(content);//向页面中加入相关的标签
    var classStr = addName+k;//给每个标签加上一个独立的序号标签
    $(child).eq(k).addClass(classStr);
    // 给img的src的属性动态添加到页面中
    $('.'+classStr).find('img').attr({ src: "images/"+obj[k].src, alt:obj[k].alt,title:obj[k].title});
    // 添加商品的描述
    $('.'+classStr).find(text_h).html(obj[k].text);
    // 添加商品的详细描述
    $('.'+classStr).find(text_p).html(obj[k].p);
    // 添加商品的新的价格
    $('.'+classStr).find(newPrice).html(obj[k].newPrice);
    // 添加商品的原来的价格
    $('.'+classStr).find(oldPrice).html(obj[k].oldPrice); 
  }
}
// 加载广告
function ad(ad,adImg){
  $(ad).append('<div class="center"><img src="images/59279872Na7bbecba.jpg" /><img src="images/58fdc111N4be26e49.jpg" /><img src="images/58522b1bN916da74b.jpg" /></div>');
  $(adImg).hover(function(){
    $(this).addClass('greyOn');
  },function(){
    $(this).removeClass('greyOn');
  });
}