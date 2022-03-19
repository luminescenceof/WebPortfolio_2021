$(document).ready(function(){

	//스크롤바가 이동될 때마다 스크롤위치값 나타내기
	$(window).scroll(function(){
		$("#txt").text($(this).scrollTop());

	});


	//스크롤 내려갈때 보이는 Top Fix Menu........
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){
			$(".topmenu_fix").css("margin-top","0px");
		} else {
			$(".topmenu_fix").css("margin-top","-100px");
		}
	});


	//상단 팝업.....................
	bb=true;
	$(".btn_close_top").click(function(){

		if(bb){
			$(this).stop(true,true).animate({marginTop:"-60px"},500); //close버튼
			$(".pop_box_top").stop(true,true).animate({marginTop:"-60px"},500); //popup내용
			$("#header").stop(true,true).animate({marginTop:"0px"},500,function(){ //컨텐츠
				bb=false;
			}); 

		}


	});
	//오른쪽 아래 탑버튼................................

	$(".topmove").hide();

	$(window).scroll(function(){

		if($(this).scrollTop()>5400){
			$(".topmove").fadeIn();
		} else {
			$(".topmove").fadeOut();
		}
	});


	//오른쪽 퀵메뉴................................

	$(".quick_btn").hide();

	$(window).scroll(function(){

		if($(this).scrollTop()>=400){
			$(".quick_btn").fadeIn();
		} else {
			$(".quick_btn").fadeOut();
		}
	});



	$(window).scroll(function(){

		if($(this).scrollTop()>=500 && $(this).scrollTop()<1200){
			$(".quick_btn ul .btn1").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn1").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn1").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn1").find(">a>.text_over").css({"display":"none"});
		}
	});

	$(window).scroll(function(){

		if($(this).scrollTop()>=1200 && $(this).scrollTop()<2200){
			$(".quick_btn ul .btn2").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn2").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn2").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn2").find(">a>.text_over").css({"display":"none"});
		}
	});

	$(window).scroll(function(){

		if($(this).scrollTop()>=2200 && $(this).scrollTop()<3200){
			$(".quick_btn ul .btn3").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn3").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn3").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn3").find(">a>.text_over").css({"display":"none"});
		}
	});

	$(window).scroll(function(){

		if($(this).scrollTop()>=3200 && $(this).scrollTop()<4150){
			$(".quick_btn ul .btn4").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn4").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn4").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn4").find(">a>.text_over").css({"display":"none"});
		}
	});

	$(window).scroll(function(){

		if($(this).scrollTop()>=4150 && $(this).scrollTop()<5100){
			$(".quick_btn ul .btn5").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn5").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn5").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn5").find(">a>.text_over").css({"display":"none"});
		}
	});

	$(window).scroll(function(){

		if($(this).scrollTop()>=5100 && $(this).scrollTop()<6200){
			$(".quick_btn ul .btn6").find(">a>.dot").addClass("dothover");
			$(".quick_btn ul .btn6").find(">a>.text_over").css({"display":"inline-block"});
		} else {
			$(".quick_btn ul .btn6").find(">a>.dot").removeClass("dothover");
			$(".quick_btn ul .btn6").find(">a>.text_over").css({"display":"none"});
		}
	});
	 


//___________________________webdsign


	// webdsign 탭메뉴..................................
	$(".panel>li:not(:first)").hide();
	// 첫번째를 제외한 나머지 내용 숨기기

	$(".tab>li a").click(function(){
		$(".tab>li a").removeClass("selected"); //기존 선택된 selected 클래스 삭제
		$(this).addClass("selected"); // 새로 선택된 selected 클래스 생성
		$(".panel>li").hide(); // 기존의 보여진 내용 숨기기
		$($(this).attr("href")).show().hide().fadeIn(); // 새로 선택된 내용 href 연결된 내용 보여주기


		return false; // a기능 차단
	});


	// webdsign 모달 Graphic.............................
	/*리스트 이미지 클릭시*/
	$(".graphic_list>li").click(function(){

		g_pop=$(this).index();
		$(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); // 기존 html 스크롤 숨기기
		$(".pop>li").eq(g_pop).show(); // g_pop index에 해당하는 팝업보이기
		$("#popup").stop(true,true).fadeIn(); //검정배경



	});

	/*오른쪽 상단 버튼-다음보기*/
	$(".right_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop<10){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*왼쪽 상단 버튼-이전보기*/
	$(".left_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop>0){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop--;

			$(".g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼-닫기*/
	$(".btn_close").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#popup").stop(true,true).fadeOut();
		$(".pop>li").stop(true,true).hide();

	});

	// webdsign 모달 uiux.............................
	/*리스트 이미지 클릭시*/
	$(".uiux_list>li").click(function(){

		g_pop=$(this).index();
		$(".g_page_ui span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); // 기존 html 스크롤 숨기기
		$(".pop_ui>li").eq(g_pop).show(); // g_pop index에 해당하는 팝업보이기
		$("#popup_ui").stop(true,true).fadeIn(); //검정배경



	});

	/*오른쪽 상단 버튼-다음보기*/
	$(".right_btn_ui").click(function(){

		$("#popup_ui").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop<9){
			$(".pop_ui>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop++;

			$(".g_page_ui span:nth-child(1)").text(g_pop+1);
			$(".pop_ui>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*왼쪽 상단 버튼-이전보기*/
	$(".left_btn_ui").click(function(){

		$("#popup_ui").scrollTop(0); /*스크롤 상단으로 올리기*/

		if(g_pop>0){
			$(".pop_ui>li").eq(g_pop).stop(true,true).fadeOut(); //기존거 사라짐
			g_pop--;

			$(".g_page_ui span:nth-child(1)").text(g_pop+1);
			$(".pop_ui>li").eq(g_pop).stop(true,true).fadeIn();
		}

	});


	/*오른쪽 상단 버튼-닫기*/
	$(".btn_close_ui").click(function(){
		$("html").css({overflowY:"scroll"});
		$("#popup_ui").stop(true,true).fadeOut();
		$(".pop_ui>li").stop(true,true).hide();

	});




//___________________________webpublishing

	//Webpublishing 이미지 슬라이드................................


	var wpimg_w= $(".pc_screen_m2>ul>li").width();   //이미지의 가로너비
	var wpsimg_n= $(".pc_screen_m2>ul>li").length;  //이미지의 총개수  
	var wpimg_wt= $(".slide_m2_info>ul>li").width();   //텍스트의 가로너비
	var wpsimg_nt= $(".slide_m2_info>ul>li").length;  //텍스트의 총개수  
	var wpsoldidx=0;  //기존이미지
	var wpsindex=0;  //선택된 새이미지

	//index번째 비주얼이미지 이동하는 함수생성
	function slideImg(wpsindex){

		targetX=-(wpsindex*wpimg_w); //움직이는 거리(너비)
		targetXX=-(wpsindex*wpimg_wt); //텍스트 움직이는 거리(너비)

		$(".pc_screen_m2>ul").animate({left:targetX},500);
		$(".slide_m2_info>ul").animate({left:targetXX},500);
		$(".slide_btn_m2 ul li").eq(wpsoldidx).removeClass("active_m2");  //기존버튼 비활성화
		$(".slide_btn_m2 ul li").eq(wpsindex).addClass("active_m2");  //선택버튼 활성화
		wpsoldidx=wpsindex;

	}

	//하단버튼 클릭
	$(".slide_btn_m2 ul li").click(function(){


		wpsindex=$(this).index();
		slideImg(wpsindex);


	});


	//webpublishing modal.....................

	//각 메뉴를 클릭했을때......
	$(".menu_sg, .menu_kr, .menu_op").click(function(){
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});

		//클릭시 나오는 모달팝업창에도 스크롤바가 생성되므로 html스크롤바는 안보이게함

		return false;
	});


	//close과 검정배경영역을 클릭했을때......
	$(".close_sg, .pop_sg, .close_kr, .pop_kr, .close_op, .pop_op").click(function(){
		$(".pop_sg, .pop_kr, .pop_op").hide(); //.pop을 안보이게함
		$("html").css({"overflow-y":"scroll"}); //html스크롤바 보이게함

	});


//___________________________Webrespon

	//각 스크린 호버시 자동 스크롤
	$(".respon_pc").hover(function(){
		$(this).find("img").animate({top:"-2350px"},7000);
	},function(){
		$(this).find("img").animate({top:"0px"},4000);
	});
	$(".respon_tablet").hover(function(){
		$(this).find("img").animate({top:"-1620px"},5500);
	},function(){
		$(this).find("img").animate({top:"0px"},4000);
	});
	$(".respon_mobile").hover(function(){
		$(this).find("img").animate({top:"-1035px"},4000);
	},function(){
		$(this).find("img").animate({top:"0px"},4000);
	});


	//반응형 기기별 모달창 띄우는 부분..............

	$(".btn_view").click(function(){//각 메뉴를 클릭했을때
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});//body스크롤없앰
		return false;
	});

	$(".close_view").click(function(){//close눌렀을때
		$(".pop_view").hide(); //.pop을 안보이게함
		$("html").css({"overflow-y":"scroll"});//body스크롤생김	
	});

	/*검정 배경 클릭시 닫기*/
	$(".pop_view").click(function(){
		$("html").css({"overflow-y":"scroll"});
		$(".pop_view").hide();
		return false;
	});



//___________________________Mobile

	//Mobile 슬라이드...................................

	var img_h= $(".slideUp>ul>li").height();   //이미지의 세로높이
	var simg_n= $(".slideUp>ul>li").length;  //이미지의 총개수  
	var soldidx=0;  //기존이미지
	var sindex=0;  //선택된 새이미지

	//index번째 비주얼이미지 이동하는 함수생성
	function slideUpImg(sindex){

		targetY=-(sindex*img_h); //움직이는 거리(너비)

		$(".slideUp>ul").animate({top:targetY},400);
		$(".slideUp_btn>ul>li").eq(soldidx).removeClass("active");  //기존버튼 비활성화
		$(".slideUp_btn>ul>li").eq(sindex).addClass("active");  //선택버튼 활성화
		soldidx=sindex;

	}

	//슬라이드 숫자버튼 클릭
	$(".slideUp_btn>ul>li").click(function(){

		sindex=$(this).index();
		slideUpImg(sindex);

	});




	//Mobile modal.....................
	//각 메뉴를 클릭했을때......
	$(".menu_cr, .menu_kb").click(function(){
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});

		//클릭시 나오는 모달팝업창에도 스크롤바가 생성되므로 html스크롤바는 안보이게함

		return false;
	});


	//close과 검정배경영역을 클릭했을때......
	$("close_cr,.pop_cr,.close_kb, .pop_kb").click(function(){
		$(".pop_cr,.pop_kb").hide(); //.pop을 안보이게함
		$("html").css({"overflow-y":"scroll"}); //html스크롤바 보이게함

	});


//___________________________webplanning

	// webplanning 탭메뉴..................................
	$(".panel_wp>li:not(:first)").hide();
	// 첫번째를 제외한 나머지 내용 숨기기

	$(".tab_wp>li a").click(function(){
		$(".tab_wp>li a").removeClass("selected"); //기존 선택된 selected 클래스 삭제
		$(this).addClass("selected"); // 새로 선택된 selected 클래스 생성
		$(".panel_wp>li").hide(); // 기존의 보여진 내용 숨기기
		$($(this).attr("href")).show().hide().fadeIn(); // 새로 선택된 내용 href 연결된 내용 보여주기


		return false; // a기능 차단
	});



	// webplanning modal........................


	//각 메뉴를 클릭했을때......
	$(".menu_m5").click(function(){
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"});

		//클릭시 나오는 모달팝업창에도 스크롤바가 생성되므로 html스크롤바는 안보이게함

		return false;
	});


	//close과 검정배경영역을 클릭했을때......
	$(".close_m5").click(function(){
		$(".pop_m5").hide(); //.pop을 안보이게함
		$("html").css({"overflow-y":"scroll"}); //html스크롤바 보이게함

	});



//___________________________Profile

	// skill..................................
	$(window).scroll(function(){

	if($(this).scrollTop()>=5600){
		$(".skill_01 .skill_bar1").css({"width":"85%"});
		$(".skill_02 .skill_bar1").css({"width":"80%"});
		$(".skill_03 .skill_bar1").css({"width":"90%"});
		$(".skill_04 .skill_bar1").css({"width":"90%"});
		$(".skill_05 .skill_bar1").css({"width":"80%"});
		$(".skill_06 .skill_bar1").css({"width":"85%"});
	}else{
		$(".skill_01 .skill_bar1").css({"width":"0%"});
		$(".skill_02 .skill_bar1").css({"width":"0%"});
		$(".skill_03 .skill_bar1").css({"width":"0%"});
		$(".skill_04 .skill_bar1").css({"width":"0%"});
		$(".skill_05 .skill_bar1").css({"width":"0%"});
		$(".skill_06 .skill_bar1").css({"width":"0%"});
	}

	});






});