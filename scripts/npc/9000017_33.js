function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d[闪耀阿尔泰耳环]升级至顶级[灿烂的阿尔泰耳环]你确定吗？.#l\r\n\r\n"//3
            text += "#L1##r升级为灿烂的阿尔泰耳环#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(1032101,1) && cm.haveItem(4170001,20)){
				cm.gainItem(1032101, -1);
				cm.gainItem(4170001, -20);
				cm.gainItem(1032186,9,9,9,9,100,100,3,3,10,10,10,10,0,0);
				//cm.gainMeso(100000);
            cm.sendOk("兑换成功！");
cm.worldMessage(6,"玩家：["+cm.getName()+"]将[闪耀阿尔泰耳环]升级至顶级[灿烂的阿尔泰耳环].牛逼~牛逼~");
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]将[闪耀阿尔泰耳环]升级至顶级[灿烂的阿尔泰耳环]牛逼~牛逼~");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！，需要\r\n#v4170001#x20个\r\n#v1032101#x1个");
            cm.dispose();
			}
		}
    }
}


