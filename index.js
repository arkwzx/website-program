const goodsMap = {
	0: ["实木原木大板茶桌椅组合家用办公茶几茶具套装一体茶台禅意泡茶桌", 1380],
	1: ["沙发床两用可折叠小户型客厅单人三人座多功能欧式布艺沙发经济 亚麻浅灰色 600cm 单人座无扶手总长小沙发", 432.6],
	2: ["米愿 头戴式蓝牙耳机无线带麦音乐游戏吃鸡运动通话降噪耳麦可插卡插线适用华为苹果安卓手机电脑通用 B39【炫酷黑/呼吸灯/超长续航】", 41.32],
	3: ["5TH WHEEL五轮出行新国标智能电动自行车男女通用可折叠30KM长续航电动车电助力车D1 曜金黑", 3499],
	4: ["OPPO A1x 新品5G 天玑700 5000mAh大电池长续航 5G全网通手机 A2x （A1X）星空黑 6GB+128GB", 758],
	5: ["Nikon/尼康J1套机J2J4J5V1二手微单相机入门机单电迷你数码相机10-30镜头 95新尼康J5+10-30镜头", 2099],
	6: ["华为路由AX3 Pro new  WiFi 6+ 3000Mbps 一碰联网 免密接入  无线家用穿墙/高速千兆无线路由器", 299],
	7: ["茶花 拖把家用一拖净拖布地拖墩布免手洗旋转自拧水吸水懒人拖把", 49.9],
};

var goodsNum = 1;
var goodsPrice = 0;

function popPurchase(gid) {
	let goods = goodsMap[gid];
	goodsPrice = goods[1];

	document.getElementsByTagName('p').number.innerText = '1';
	document.querySelector("div#price span").innerText = goodsPrice.toString();
	document.getElementById("goodsName").innerText = goods[0];
	document.getElementById("purchase").style.visibility = "visible";
}

function changeNumber(increase) {
	if (increase) {
		goodsNum++;
	} else {
		if (goodsNum == 0) {
			return;
		}

		goodsNum--;
	}

	document.getElementsByTagName('p').number.innerText = goodsNum.toString();
	document.querySelector("div#price span").innerText = (goodsPrice * goodsNum).toFixed(2).toString();
}

function closePurchase(purchased) {
	document.getElementById("purchase").style.visibility = "hidden";
	goodsNum = 1;
	goodsPrice = 0;

	let inputs = document.getElementsByTagName("input");

	for (const ele of inputs) {
		ele.value = "";
	}

	if (purchased) {
		alert("成功购买！");
	}
}
