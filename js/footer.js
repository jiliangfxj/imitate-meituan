/*页面底部部分的js*/



function tabChage() {



    var oTabData = ['<a href="###">美食团购</a><a href="###">电影团购</a><a href="###">休闲娱乐团购</a><a href="###">旅游团购</a><a href="###">生活服务团购</a><a href="###">购物团购</a><a href="###">丽人团购</a><a href="###">团购评论</a><a href="###">品牌团购</a><a href="###">专题团购</a><a href="###">美团团购</a>', '<a href="###">望京团购</a><a href="###">五道口团购</a><a href="###">朝阳大悦城团购</a><a href="###">回龙观团购</a><a href="###">亚运村团购</a><a href="###">中关村团购</a><a href="###">昌平镇团购</a><a href="###">西单团购</a><a href="###">劲松团购</a><a href="###">十里堡团购</a><a href="###">天通苑团购</a><a href="###">魏公村团购</a><a href="###">双桥团购</a><a href="###">十八里店团购</a><a href="###">安定门团购</a><a href="###">航天桥团购</a><a href="###">颐和园团购</a><a href="###">王府井/东单团购</a><a href="###">公主坟/万寿路团购</a><a href="###">北京西站/六里桥团购</a>', '<a href="###">上海团购</a><a href="###">广州团购</a><a href="###">深圳团购</a><a href="###">天津团购</a><a href="###">西安团购</a><a href="###">福州团购</a><a href="###">重庆团购</a><a href="###">杭州团购</a><a href="###">宁波团购</a><a href="###">无锡团购</a><a href="###">南京团购</a><a href="###">合肥团购</a><a href="###">武汉团购</a><a href="###">成都团购</a><a href="###">青岛团购</a><a href="###">厦门团购</a><a href="###">大连团购</a><a href="###">沈阳团购</a><a href="###">长沙团购</a><a href="###">郑州团购</a><a href="###">石家庄团购</a><a href="###">苏州团购</a><a href="###">淄博团购</a><a href="###">南通团购</a><a href="###">南昌团购</a><a href="###">保定团购</a>', '<a href="###">ONEMORE</a><a href="###">益家优点</a><a href="###">胡氏大盘鸡</a><a href="###">德庄</a><a href="###">GOSSELINcake阁瑟林</a><a href="###">真味料自助无烟烧烤</a><a href="###">诸葛烤鱼</a><a href="###">九月烘焙工坊</a><a href="###">东京四谷姜太公</a><a href="###">吉尼咖啡</a><a href="###">欧依茜可丽饼</a><a href="###">狗不理</a><a href="###">维尔德克</a><a href="###">华庭自助百汇</a><a href="###">锦程大酒店</a><a href="###">面包新语</a><a href="###">好彩酒家</a><a href="###">笨牛牛排</a><a href="###">红舵码头</a><a href="###">百草堂</a><a href="###">凤台坊金鼎大排档</a><a href="###">老北京绿豆饼</a><a href="###">酷巴客盐城旗舰店</a><a href="###">新寺洞韩国烤肉</a><a href="###">500CC</a><a href="###">欧凯特牛肉火锅</a><a href="###">纯棉立领T恤</a><a href="###">宴和春酒楼</a><a href="###">聚晨摄影工作室</a><a href="###">锦江之星连锁酒店</a><a href="###">金苹果蛋糕</a><a href="###">西典咖啡</a><a href="###">善客养生会所</a><a href="###">凯悦咖啡</a><a href="###">甜甜向上</a><a href="###">大排档</a>', '<a href="###">桂林景点门票团购</a><a href="###">无忧团购导航网</a><a href="###">美心团购</a><a href="###">实惠团购</a><a href="###">胶州团购网站</a><a href="###">乐山电影票</a><a href="###">团购</a><a href="###">凯德广场美食团购</a><a href="###">石家庄火锅团购</a><a href="###">横店门票团购</a><a href="###">宿州酒店团购</a><a href="###">广州水疗馆团购</a><a href="###">纯棉四件套团购</a><a href="###">最大团购网</a><a href="###">丝域养发馆团购</a><a href="###">蛋糕团购</a><a href="###">广州</a><a href="###">古摄影</a><a href="###">团购</a><a href="###">杭州绿茶团购</a><a href="###">云南菜团购</a><a href="###">宁波美食团购网</a><a href="###">西安钟点房团购</a><a href="###">三上团购</a><a href="###">美甲团购网</a><a href="###">红蜡烛团购</a><a href="###">电影票团购网</a><a href="###">厦门小鱿鱼团购</a><a href="###">太平洋团购网</a><a href="###">大千团购网</a><a href="###">途观团购</a><a href="###">佛跳墙团购</a><a href="###">美年大健康体检中心团购</a><a href="###">阳坊涮肉团购</a><a href="###">香港美食团购网站</a><a href="###">儿童游泳团购</a><a href="###">美味故事团购</a><a href="###">杨家坪团购</a><a href="###">金佛山门票团购</a>', '<a href="###">上海美甲</a><a href="###">上海咖啡/酒吧</a><a href="###">上海演出/赛事/展览</a><a href="###">上海家居百货</a><a href="###">上海蒙餐</a><a href="###">上海照片冲印</a><a href="###">上海游泳/水上运动</a><a href="###">上海海鲜</a><a href="###">上海KTV</a><a href="###">上海儿童摄影</a><a href="###">上海美发</a><a href="###">上海运动/户外</a><a href="###">上海香锅烤鱼</a><a href="###">上海国内游</a><a href="###">上海玩具/母婴</a><a href="###">上海服装定制</a><a href="###">上海密室逃脱</a><a href="###">上海经济型酒店</a><a href="###">上海配饰</a><a href="###">上海图书音像</a><a href="###">上海东北菜</a><a href="###">上海真人CS</a><a href="###">上海食品饮料</a><a href="###">上海全部</a><a href="###">上海本地购物</a><a href="###">上海商场购物卡</a><a href="###">上海4D/5D电影</a><a href="###">上海婚纱摄影</a><a href="###">上海其他生活</a><a href="###">上海景点门票</a><a href="###">上海甜点饮品</a><a href="###">上海滑雪</a><a href="###">上海景点郊游</a><a href="###">上海自助餐</a><a href="###">上海豪华酒店</a><a href="###">上海温泉</a>', '<a href="###">大众点评网</a><a href="###">大众点评下载</a><a href="###">亲子</a><a href="###">家装</a><a href="###">结婚</a><a href="###">教育</a><a href="###">宴会</a><a href="###">餐饮加盟</a>'];



    // console.log(oTabData.length);
    //底部选项卡的点击切换

    var aTabBtnLi = document.getElementById('tab-btn').getElementsByTagName('li'); //获取的是按钮
    // console.log(aTabBtnLi);//查看获取到的元素
    var oTabContent = document.getElementById('tab-content'); //获取的是内容元素；
    // console.log(oTabContent);
    var iNow = 0; //记录当前选中了哪个元素的索引；
    for (var i = 0; i < aTabBtnLi.length; i++) {
        aTabBtnLi[i].index = i; //给每个元素添加index属性去记录他们的索引；
        aTabBtnLi[i].onclick = function() { //给每个按钮加点击事件
            aTabBtnLi[iNow].style.backgroundColor = 'transparent'; //设置之前的按钮成透明；
            this.style.backgroundColor = '#eee'; //设置当前的按钮为选中色；
            iNow = this.index; //更新iNow；
            //更换内容
            oTabContent.innerHTML = oTabData[this.index];
        }
    }

}

tabChage();//函数一定要执行才有作用；
