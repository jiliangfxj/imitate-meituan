/**
 * Created by Administrator on 2016/2/28.
 */
function fnMove (obj,json,fn){
    clearInterval(obj.timer)//清除正在执行的定时器
    var iSpeed  = 0;
    obj.timer = setInterval(function(){
        var bOver = true; //假设运动完成
        for (var attr in json){
            var iCur = 0;
            if(attr == "opacity"){//透明度
                iCur = Math.round(parseFloat(getStyle(obj,"opacity"))*100);
            }else{
                iCur = parseInt(getStyle(obj,attr));
            }

            iSpeed = (json[attr] - iCur)/5;//获取相对速度
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//上下取整

            if(iCur != json[attr]){
                bOver = false; //如果某一个属性没有完成运动，关闭按钮
                if(attr == "opacity"){
                    obj.style.filter ='alpha(opacity:'+iCur + iSpeed+')';
                    obj.style.opacity =(iCur + iSpeed)/100;
                }else{
                    obj.style[attr] =iCur + iSpeed +"px";
                }
            }
        }
        //console.log(bOver)
        if(bOver){//运动完成

            clearInterval(obj.timer);
            fn && fn()//如果有回调方法，就调用

        }

    },30)

}

function getId (str){
    return document.getElementById(str);
};

function getStyle(obj,attr){//获取css样式
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}

function scrollMove(target,time){
    var oBody=document.body||document.documentElement;
    //获得本次运动的距离， 终点-起点
    var distance=target-oBody.scrollTop;
    // console.log(distance);
    var speed=distance/(time/30);
    
    speed=speed>0?Math.floor(speed):Math.ceil(speed);
    console.log(speed);
    var timer=setInterval(function(){
        if(distance>0){
            if(oBody.scrollTop>=target){
                clearInterval(timer);
                oBody.scrollTop=target;
                return;
            }
        }else if(distance<0){
            if(oBody.scrollTop<=target){
                clearInterval(timer);
                oBody.scrollTop=target;
                return;
            }
        }else{
            clearInterval(timer);
            return;
        }       
        oBody.scrollTop+=speed;
    },30);
}