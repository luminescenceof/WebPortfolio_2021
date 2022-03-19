

	var img_w= $(".pc_screen>ul>li").width();
	var img_n= $(".pc_screen>ul>li").length;
	var txt_w= $(".right>ul>li").width();
	var txt_n= $(".right>ul>li").length;
	var oldidx=0;
	var index=0;

	function slideImg(index){

		targetX=-(index*img_w);
		targetXX=-(index*txt_w);

		${".pc_screen>ul"}.animate({left:targetX},500);
		${".right>ul"}.animate({left:targetXX},500);
		$(".slide_btn ul li").eq(oldidx).removeClass(".active");
		$(".slide_btn ul li").eq(index).addClass(".active");
		oldidx=index;

	}

	$("slide_btn ul li").click(function(){

		index=$(this).index();
		slideImg(index);
	});




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