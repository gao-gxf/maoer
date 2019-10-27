$(
	function(){
//	console.log($('.ul-nav'),$('.ul-nav').children().eq(1),$('.ul-nav').children().eq(1).children().eq(1))
		$('.ul-nav .menu').hover(function(){'yab'
			$(this).children().eq(1).css('display','block')
		},function(){
			$(this).children().eq(1).css('display','none')
		})
		var $width=$('.tab>li').eq(1).width();
	    var $li=$('.tab>li:eq(0)').clone(true);
	    $('.tab').append($li)
		var $num=$('.tab>li').size();
		$('.tab').width($width* $num+'px');
		$('.btn>li').mouseover(function(){
			$(this).addClass('now').siblings('li').removeClass('now');
			 page=num=$(this).index();
			$target=num*$width
			  $('.tab').animate({'left':-$target},900) 
		})
	    console.log($('.tab>li').eq(1).width(),$('.tab'),$num,$li,$('.tab'))
	    var num=0;
	    var page=0
	     function right(){
	     	num++;
	     	if(num==$num){
	     		num=1
	     	 $('.tab').animate({'left':0},10) 
	     	}
	     	$target=num*$width
	     	 $('.tab').animate({'left':-$target},1000) 
	     	  page++;
	     	  if(page==$('.btn>li').size()){
	     		page=0
	     	}
	     	 $('.btn>li').eq(page).addClass('now').siblings('li').removeClass('now') 
	     }
	    var $time=null;
	    $time=setInterval(right,3900) 
	    $('.ban-left').hover(function(){
	  	clearInterval($time)
	    },function(){
	  	 $time=setInterval(right,3900) 
	  	
	  })
	    function tab(obj,obj1){
	        $(obj).click(function(){
	    	$(this).addClass('now').siblings('li').removeClass('now');
	    	$(obj1).eq($(this).index()).addClass('now').siblings(obj1).removeClass('now')
	        return false;
	    })
	    }
	    tab('.pe-re-tit-time>li','.pe-re-cont');
	    tab('.sound-cartoon-time>li','.sound-cartoon-cont');
	    tab('.sound-cartoon-right-time>li','.sound-cartoon-right-cont');
	    tab('.radio-play-time>li','.radio-play-cont');
	    tab('.radio-play-right-time>li','.radio-play-right-cont');
	    tab('.se-music-time>li','.se-music-cont');
	    tab('.se-music-right-time>li','.se-music-right-cont');
	    tab('.se-hynoise-time>li','.se-hynoise-cont');
	    tab('.se-hynoise-right-time>li','.se-hynoise-right-cont');
	    tab('.se-eth-time>li','.se-eth-cont');
	    tab('.se-eth-right-time>li','.se-eth-right-cont');
	    tab('.day-paw-time>li','.day-paw-cont');
	    tab('.day-paw-right-time>li','.day-paw-right-cont');
	    tab('.listen-book-time>li','.listen-book-cont');
	    tab('.listen-book-right-time>li','.listen-book-right-cont');
	    tab('.se-dub-time>li','.se-dub-cont');
	    tab('.se-dub-right-time>li','.se-dub-right-cont');
	    
	    $('.bell-tit-menus>li').click(function(){
	    	$(this).addClass('now').siblings('li').removeClass('now');
	    	$(this).children().eq(0).addClass('now');
            $(this).siblings('li').children().removeClass('now');
            $(".bell-cont").eq($(this).index()).addClass('now').siblings(".bell-cont").removeClass('now')
	    })
	    $('.bell-tit-menus>li').children().click(function(event){
	    	event.preventDefault()
	    })
	    
	    $('.right-bell-cont>li').hover(function(){
	    	$(this).children().eq(1).css('display','block')
	    	$(this).siblings('li').children('.left-cont').css('display','none')
	    	$(this).addClass('now').siblings('li').removeClass('now')
	    },function(){
	    	$(this).children().eq(1).css('display','none');
	    	$(this).removeClass('now')
	    })
//	    $(window).scroll(function(){
//	    	console.log($("html,body").scrollTop())
//	    	if($("html,body").scrollTop()>=200){    		
//	    		$('.side-dog').css("top",'0px')
//	    
//	    	}
//	    	else{
//	    		$('.side-dog').css("top",'-500px')
//	    	}	    		    
//	    })
	    $(window).on('scroll',function () {
	    	if($("html,body").scrollTop()>=200){	    		
	    		$('.side-dog').stop().animate({'top':0,
	    		"slow":'easein'},1000)
	    	}
	    	}).on('scroll',function () {
	    		if($("html,body").scrollTop()<200){
	    		$('.side-dog').stop().animate({'top':-500},1000)
	    	}
	    	})	    		
	}
)


