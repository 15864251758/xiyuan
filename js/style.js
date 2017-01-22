$(function(){
   jQuery("#nav").slide({ 
          type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
          titCell:".nLi", //鼠标触发对象
          targetCell:".sub", //titCell里面包含的要显示/消失的对象
          effect:"slideDown", //targetCell下拉效果
          delayTime:300 , //效果时间
          triggerTime:0, //鼠标延迟触发时间（默认150）
          returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
        });
   $('.search').click(function(){
      $('.search-show').fadeIn();
   })
   $('.search-show').click(function(){
      $(this).fadeOut();
   })
   $('.search-show input').click(function(event){
      event.stopPropagation();
   })
   jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
   $('.block1-img').hover(function(){
      $(this).find('.block1-show').stop(false,true).animate({
                                  bottom:'0px',
                                });
   },function(){
      $(this).find('.block1-show').stop(false,true).animate({
                                  bottom:'-180px',
                                });
   })
   jQuery(".slideTxtBox1").slide();
   $('#more').click(function(){
      $('.fw-txt-more').slideToggle();
      $(this).fadeOut();
   })
})