var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			im.dispose();
		}
		status--;
	}
	if (status == 0) {
		if ((im.getSpace(1) > 1 || im.getSpace(2) > 1 || im.getSpace(3) > 1 || im
				.getSpace(4) > 1)) {
			im.sendYesNo("这里是充值抽奖专区。我背包里面包含了必成卷轴、大PB、140所有装备哦。如果你充值满了300可以再这里免费抽奖一次哦！你确定要抽奖吗？");
		} else {
			im.sendOk("我背包里面包含了必成卷轴、大PB、140所有装备哦。如果你充值满了300可以再这里免费抽奖一次哦！你的充值金额到300了吗？");
			im.safeDispose();
		}
	} else if (status == 1) {
		if ((im.getSpace(1) > 1 || im.getSpace(2) > 1 || im.getSpace(3) > 1 || im
				.getSpace(4) > 1)) {
			var item;
			var chance = Math.floor(Math.random() * 30);
			if (chance >= 0 && chance <= 6) {
				im.gainExp(+1000000000);
				im.sendOk("恭喜你获得了10E经验值。");
				im.worldMessage("恭喜玩家" + im.getChar().getName()
						+ "在明日箱子（金）中吸取10E经验。");
				im.dispose();
			} else if (chance >= 7 && chance <= 10) {
				im.gainMeso(+100000000);
				im.sendOk("恭喜你获得了1E金币。");
				im.worldMessage("恭喜玩家" + im.getChar().getName()
						+ "在明日箱子（金）中无意拿到1E支票。");
				im.dispose();
			} else {

				var chance1 = Math.floor(Math.random() * 10);
				if (chance1 > 5) {
					var itemList = new Array(1532098, // 法弗纳荣耀炮 - (无描述)
					1522094, // 法弗纳双风翼弩 - (无描述)
					1492179, // 法弗纳左轮枪 - (无描述)
					1482168, // 法弗纳巨狼之爪 - (无描述)
					1472214, // 法弗纳危险之手 - (无描述)
					1462193, // 法弗纳风翼弩 - (无描述)
					1452205, // 法弗纳追风者 - (无描述)
					1442223, // 法弗纳半月宽刃斧 - (无描述)
					1432167, // 法弗纳贯雷枪 - (无描述)
					1422140, // 法弗纳闪电锤 - (无描述)
					1412135, // 法弗纳战斗切肉斧 - (无描述)
					1402196, // 法弗纳忏悔之剑 - (无描述)
					1382208, // 法弗纳魔冠之杖 - (无描述)
					1372177, // 法弗纳魔力夺取者 - (无描述)
					1362090, // 法弗纳洞察手杖 - (无描述)
					1342082, // 法弗纳急速之刃 - (无描述)
					1332225, // 法弗纳大马士革剑 - (无描述)
					1322203, // 法弗纳戈耳迪锤 - (无描述)
					1312153, // 法弗纳双刃切肉斧 - (无描述)
					1302275, // 法弗纳银槲之剑 - (无描述)
					1242061, // 法弗纳精神之刃 - 鲁塔比斯套装(海盗)专用武器
					1242060, // 法弗纳精神之刃 - 鲁塔比斯套装(飞侠)专用武器
					1232057, // 法弗纳死亡使者 - (无描述)
					1222058, // 法弗纳天使手铳 - (无描述)
					1003797, // 高贵战士头盔 - (无描述)
					1003798, // 高贵流丹维奇帽 - (无描述)
					1003799, // 高贵游侠贝雷帽 - (无描述)
					1003800, // 高贵刺客软帽 - (无描述)
					1003801, // 高贵流浪者帽 - (无描述)
					1042254, // 鹰眼战士盔甲 - (无描述)
					1042255, // 鹰眼丹维奇长袍 - (无描述)
					1042256, // 鹰眼游侠斗篷 - (无描述)
					1042257, // 鹰眼刺客衬衣 - (无描述)
					1042258, // 鹰眼流浪者外衣 - (无描述)
					1062165, // 魔术师战士短裤 - (无描述)
					1062166, // 魔术师丹维奇短裤 - (无描述)
					1062167, // 魔术师游侠短裤 - (无描述)
					1062168, // 魔术师刺客短裤 - (无描述)
					1062169, // 魔术师流浪者短裤 - (无描述)
					1212063// 法弗纳魔力源泉杖 - (无描述)
					);
					item = im.gainGachaponItem(itemList[Math.floor(Math
							.random()
							* itemList.length)], 1, "明日箱子（金）");
				} else {
					var itemList = new Array(2040303, // 耳环智力必成卷
					2040006, // 头盔防御必成卷
					2040007, // 头盔体力必成卷
					2040403, // 上衣防御必成卷
					2040506, // 全身盔甲敏捷必成卷
					2040507, // 全身盔甲防御必成卷
					2040603, // 裤裙防御必成卷
					2040507, // 全身盔甲防御必成卷
					2040603, // 裤裙防御必成卷
					2040709, // 鞋子敏捷必成卷
					2040710, // 鞋子跳跃必成卷
					2040711, // 鞋子速度必成卷
					2040806, // 手套敏捷必成卷
					2040903, // 盾牌防御必成卷
					2040507, // 全身盔甲防御必成卷
					2040603, // 裤裙防御必成卷
					2041024, // 披风魔法防御必成卷
					2041025, // 披风物理防御必成卷
					2043003, // 单手剑攻击必成卷
					2044019, // 双手剑魔力必成卷
					2044019, // 双手剑魔力必成卷
					2043103, // 单手斧攻击必成卷
					2043203, // 单手钝器攻击必成卷
					2043303, // 短剑攻击必成卷
					2043703, // 短杖攻击必成卷
					2043803, // 长杖攻击必成卷
					2044003, // 双手剑攻击必成卷
					2044019, // 双手剑魔力必成卷
					2044103, // 双手斧攻击必成卷
					2040903, // 盾牌防御必成卷
					2040903, // 盾牌防御必成卷
					2044203, // 双手钝器攻击必成卷
					2044303, // 枪攻击必成卷
					2044403, // 矛攻击必成卷
					2044503, // 弓攻击必成卷
					2044603, // 弩攻击必成卷
					2044703, // 拳套攻击必成卷
					2044815, // 指节攻击必成卷
					2044908, // 短枪攻击必成卷
					2340000, // 祝福卷轴
					2049406, // 特殊潜能附加卷轴
					2049303, // 高级装备强化卷轴
					3010070, // 巨无霸品克缤
					3010073, // baby品克缤
					3010073, // baby品克缤
					1402014, // 温度计
					1003172, // 狮心战斗头盔
					1102275, // 狮心战斗披风
					1082295, // 狮心战斗护腕
					1052314, // 狮心战斗锁子甲
					1072485, // 狮心战斗鞋
					1003173, // 龙尾法师帽子
					1102276, // 龙尾法师披风
					1082296, // 龙尾法师手套
					1052315, // 龙尾法师长袍
					1072486, // 龙尾法师鞋
					1003174, // 鹰翼哨兵便帽
					1102277, // 鹰翼哨兵披风
					1082297, // 鹰翼哨兵手套
					1052316, // 鹰翼哨兵服
					1072487, // 鹰翼哨兵鞋
					1003175, // 渡鸦之魂追踪者帽
					1102278, // 渡鸦之魂猎人披风
					1082298, // 渡鸦之魂追踪者手套
					1052317, // 渡鸦之魂追踪者盔甲
					1072488, // 渡鸦之魂追踪者鞋
					1003176, // 鲨齿船长帽
					1102279, // 鲨齿船长披风
					1082299, // 鲨齿船长手套
					1052318, // 鲨齿船长外套
					1072489, // 鲨齿船长鞋
					1432086, // 狮心长枪
					1442116, // 狮心长矛
					1322096, // 狮心震雷
					1422066, // 狮心巨锤
					1402095, // 狮心战刀
					1412065, // 狮心战斧
					1302152, // 狮心弯刀
					1312065, // 狮心勇斧
					1372084, // 龙尾短杖
					1382104, // 龙尾长杖
					1452111, // 鹰翼重弓
					1462099, // 鹰翼重弩
					1332130, // 渡鸦之魂（短刀）
					1472122, // 渡鸦之魂
					1342036, // 精灵角刀
					1492085, // 鲨齿手铳
					1532018, // 鲨齿鹰爪
					1302016, // 鲨齿火炮
					1522018 // 龙翼弩枪
					);
					item = im.gainGachaponItem(itemList[Math.floor(Math
							.random()
							* itemList.length)], 1, "在明日箱子（金）");
				}
			}
			if (item != -1) {
				im.gainItem(2430640, -1);
				im.sendOk("你获得了 #b#t" + item + "##k.");
			} else {
				im.sendOk("请你确认在背包的装备,消耗,其他窗口中是否有一格以上的空间?");
			}
		} else {
			im.sendOk("xx错误");
		}
		im.safeDispose();
	}
}