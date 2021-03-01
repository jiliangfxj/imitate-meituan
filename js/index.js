/*首页的js效果*/

/*recommend区域的轮播效果*/
function rcommLunbo(){
	var oPicShop=document.getElementById('picshop');//包裹了五张幻灯片的外壳；
	var aPicLi=oPicShop.getElementsByTagName('li');//五张幻灯片
	var oBtnLeft=document.getElementById('btnLeft');//左切换按钮
	var oBtnRight=document.getElementById('btnRight');//右切换按钮
	var oTotal=document.getElementById('picTotal');
	var oInow=document.getElementById('picInow');
	// console.log(oPicShop,aPicLi,oBtnRight,oBtnLeft);
	var iNow=0;//记录当前显示那张图片的索引；
	var baseW=aPicLi[0].offsetWidth;//记录每张幻灯片的宽度；
	oPicShop.style.width=baseW*aPicLi.length+'px';//给五张幻灯片的外壳设置了宽；
	oTotal.innerHTML=aPicLi.length;//填充总张数
	//右按钮的点击事件
	oBtnRight.onclick=function(){
		var even=iNow;//even表示的是上一次显示的图片；
		iNow++;
		// console.log(iNow)
		if(iNow>aPicLi.length-1){
			iNow=0;
		}
		//iNow表示本次点击之后要显示的图片；
		// oPicShop.style.marginLeft=-iNow*baseW+'px';
		fnMove(oPicShop,{marginLeft:-iNow*baseW});
		oInow.innerHTML=(iNow+1)+'/';

	}

		//左按钮的点击事件
	oBtnLeft.onclick=function(){
		var even=iNow;//even表示的是上一次显示的图片；
		iNow--;
		// console.log(iNow)
		if(iNow<0){
			iNow=aPicLi.length-1;
		}
		//iNow表示本次点击之后要显示的图片；
		// oPicShop.style.marginLeft=-iNow*baseW+'px';
		fnMove(oPicShop,{marginLeft:-iNow*baseW});
		oInow.innerHTML=(iNow+1)+'/';

	}




}

rcommLunbo();


/*单件商品的添加*/
function addSingleShop(){
	var oContent=document.getElementById('fineFood-content');//所有商品的壳子
	// console.log(oContent);
	var aDiv=oContent.getElementsByTagName('div');
	// console.log(aDiv);
	//对数组进行检索，
	var aSingleShop=[];//存放单个商品的的数组
	for(var i=0;i<aDiv.length;i++){
		// console.log(aDiv[i].className);
		if(aDiv[i].className.indexOf('single-shop')===-1){//看一下 类名里有没有single-shop这个类名
			console.log('不符合要求');
		}else{
			//类名存在，是我们要的元素，所以放在aSingleShop;
			aSingleShop.push(aDiv[i]);
		}
	}
	// console.log(aSingleShop);
	//现在aSingleShop这个数组中存放的就是我们需要克隆的元素；
	for(var j=0;j<30;j++){
		oContent.appendChild(aSingleShop[0].cloneNode(true));
	}
	


}
addSingleShop();

/*滚动条滚动的吸顶效果*/
function scrollX(){
	var oContent=document.getElementById('fineFood-content');//所有商品的壳子
	var oSideNav=document.getElementById('side-nav');
	var oContentTop=oContent.offsetTop;
	// console.log(oContentTop);
	//滚动条滚动事件
	window.onscroll=function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(stop);
		if(stop>=oContentTop){
			//可以换成固定定位了
			var newStr=oSideNav.className.replace('normal','fix');
			// console.log(oSideNav.className);
			// console.log(newStr);
			oSideNav.className=newStr;

		}else{
			//换成绝对定位了
			var newStr=oSideNav.className.replace('fix','normal');
			// console.log(oSideNav.className);
			// console.log(newStr);
			oSideNav.className=newStr;
		}
	}


}
scrollX();

/*页面导航的效果*/
function pageScroll(){
	var aDiv=document.getElementsByTagName('div');
	// console.log(aDiv);
	var shopDiv=[];
	for(var i=0;i<aDiv.length;i++){
		if(aDiv[i].className.indexOf('model-shop-show')===-1){

		}else{
			shopDiv.push(aDiv[i]);
		}
	}
	// console.log(shopDiv);
	// console.log(shopDiv[3].offsetTop);

	//获取侧边栏导航内的七个按钮
	var aSideLi=document.getElementById('side-nav').getElementsByTagName('li');
	// console.log(aSideLi);
	var iNow=0;//记录的是当前显示的模块的索引；
	//页面滚动事件
	window.addEventListener('scroll',function(){
		// console.log('scroll');
		//1.求滚动条滚动距离
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(stop);
		//2.把七个模块距离等不的距离跟stop进行比较；
		for(var i=0;i<shopDiv.length;i++){
			if(Math.abs(shopDiv[i].offsetTop-stop)<=100){
				//清空上一个模块
				aSideLi[iNow].className='';
				//要显示当前的模块
				aSideLi[i].className='active';
				//更新iNow
				iNow=i;
			}
			
		}
	},false);
	//分别给七个按钮添加点击事件；
	for(var i=0;i<aSideLi.length;i++){
		aSideLi[i].index=i;//记录每个按钮的索引；
		aSideLi[i].onclick=function(){
			// console.log(this.index);
			// document.body.scrollTop=shopDiv[this.index].offsetTop;
			scrollMove(shopDiv[this.index].offsetTop,400);
		}
	}

}
pageScroll();