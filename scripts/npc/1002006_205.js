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
            text += "#e#d制作#v1372206#需要#v1372044#x1、#v4001012#x100.#v4031891#2000万.搜集好道具我就可以为您制作了.#l\r\n\r\n"//3
            text += "#L1##r制作伽耶汉武器（四维+15、攻击100、魔攻150）#l\r\n\r\n"//3
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
			}else */if(cm.haveItem(1372044,1) && cm.haveItem(4001012,100) && cm.getMeso() > 20000000){
				cm.gainItem(1372044, -1);
				cm.gainItem(4001012, -100);
				cm.gainMeso(-20000000);
				cm.gainItem(1372206,15,15,15,15,0,0,100,150,0,0,50,50,0,0);
            cm.sendOk("制作成功！");
           cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]制作了[伽耶汉短杖]，神器降临！可喜可贺！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


