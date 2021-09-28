var status = 0;
var cost = 5000;

function start() {
    cm.sendYesNo("你好,我是码头服务员乔伊。你想离开维多利亚岛城到天空之城吗? 从这站到艾纳斯大陆的#b天空之城#k的船只\r需要花费#b"+cost+" 枫币#k 购买#b#t4031045##k 才可以启航.");
}

function action(mode, type, selection) {
    if(mode == -1)
        cm.dispose();
    else {
        if(mode == 0) {
            cm.sendNext("你有一些经济的负担而无法搭船对吧?");
            cm.dispose();
            return;
        }
        status++;
        if(status == 1) {
            if (cm.getMeso() >= cost && cm.canHold(4031045)) {
                cm.gainItem(4031045,1);
                cm.gainMeso(-cost);
                cm.dispose();
            } else {
                cm.sendOk("请问你有 #b"+cost+" 枫币#k? 如果有的话,我劝您检查下身上其他栏位看是否有没有满了.");
                cm.dispose();
            }
        }
    }
}
