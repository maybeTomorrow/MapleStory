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
            text += "#e#d制作#v1052461##z1052461#\t需要：#v4310015#x300#k个.搜集好道具我就可以为您制作了.#l\r\n\r\n"//3
            text += "#L1##r制作#v1052461##z1052461#（四维+15、攻击+1、魔攻+1、其他+50）\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
if (!cm.canHold(1052461, 1)) {
                cm.sendOk("您的背包空间不足.请您清理一下！");
            } else if(cm.haveItem(4310015,300)){
				cm.gainItem(4310015, -300);
				cm.gainItem(1052461,15,15,15,15,100,100,1,1,50,50,50,50,0,0);
            cm.sendOk("制作成功！");
cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功兑换【专属紫金枫叶套装】，以后也要更加勤奋的带新人哦！！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！\r\n制作#v1052461##z1052461#\t需要：#v4310015#x300#k个");
            cm.dispose();
			}
		}
    }
}


