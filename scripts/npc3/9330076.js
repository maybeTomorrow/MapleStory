/*乐 章制作.需要脚本至尊,请联系QQ：237253995.*/

importPackage(net.sf.odinms.client);

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
		return;
	} else {
		if (mode == 1)
			status++; 
		else
			status--;
		if (status == 0) {
		if (cm.getPlayer().getMapId() == 541010010){
var text = "No1.我想你应该有能力拯救这个地方.去吧!\r\n#L0#进入下一关#l\r\n\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 541010040){
var text = "No2.请帮帮我,打败这里的怪物!!\r\n#L1#进入下一关#l\r\n\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 701010322){
var text = "能来这里,你应该有打败BOSS的可能!\r\n#L2#进入下一关#l\r\n\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 701010323){
var text = "很高兴你能来到这里,你必须打败BOSS，才能进入奖励关.请使用#v4001117#召唤Boss.\r\n#b#L3#召唤船长#l\r\n\r\n#k打完BOSS后,选择你捡取到BOSS掉落的物品,进行奖励.#b\r\n#L4##v4001035#恶魔标识#l\r\n\r\n#L7#返回自由市场#l";
cm.sendSimple(text);
}else {//vip1待遇
var text = "现在服务器时间为:" + cm.getHour() + "时";
cm.sendOk(text);
cm.dispose();
}
		}
		else if(status == 1) {
			if (selection == 0) {
if (cm.getHour() < 16) {

cm.warp(910000000,0);
cm.sendOk("过掉活动时间,副本中断,你将被传出.\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.dispose();
}else if (cm.haveItem(4000379,200)) {
cm.gainItem(4000379,-200);
cm.gainItem(4031344,1);
cm.warp(541010040,0);
cm.sendOk("但愿你能坚持下来.请收集300个#v4000382#.#r依然,请不要换线#k.请注意时间!!!超过22点,任务将视为放弃.!");
cm.dispose();

}else {	
cm.sendOk("但愿你能打败大王蜈蚣,请先展现下你的实力吧~收集200个#v4000379#.请注意时间!!!超过22点,任务将视为放弃.!");
cm.dispose();
}

//
}else if (selection == 1) {
if (cm.getHour() < 16) {
cm.sendOk("过掉活动时间,副本中断,你将被传出.\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.warp(910000000,0);
cm.dispose();
}else if (cm.haveItem(4000382,300)) {
cm.gainItem(4000382,-300);cm.gainItem(4031344,1);
cm.warp(541010050,0);
cm.sendOk("但愿你能坚持下来.请完成这关,下一关我将送你去挑战#b大王蜈蚣#k!~请收集收集500个#v4000383#像我报告.");
cm.dispose();

}else {	
cm.sendOk("但愿你能打败大王蜈蚣,请先展现下你的实力吧~收集300个#v4000382#.请注意时间!!!超过22点,任务将视为放弃.!");
cm.dispose();
}

}else if (selection == 2) {
if (cm.getHour() < 16) {
cm.sendOk("过掉活动时间,副本中断,你将被传出.\r\n现在服务器时间为:" + cm.getHour() + "时:" + cm.getMin() + "分:" + cm.getSec() + "秒");
cm.warp(910000000,0);
cm.dispose();
}else if (cm.haveItem(4000383,500)) {
cm.gainItem(4000383,-500);cm.gainItem(4031344,1);
 cm.gainItem(4001117,1); 
cm.warp(541010100,0);
cm.sendOk("但愿你能打败他~");
cm.dispose();
}else {	
cm.sendOk("但愿你能打败大王蜈蚣,请先展现下你的实力吧~收集500个#v4000383#.请注意时间!!!超过22点,任务将视为放弃.!");
cm.dispose();
}



}else if (selection == 3) {
  var map =cm.getChar().getMap();
    if(map.countMobOnMap() >= 10){
cm.sendOk("消灭地图中已有的#b大王蜈蚣#k才能进行再次召唤.!");
cm.dispose();
}else if (!cm.haveItem(4001117,1)) {
cm.sendOk("你貌似已经召唤过了吧?");
cm.dispose();
}else {
cm.warp(701010323,0);
  cm.summonMob(9600009, 5000000, 10000, 1);//大王蜈蚣5E血
 cm.gainItem(4001117,-1);
cm.serverNotice("[任务]: 玩家 [" + cm.getPlayer() + "] 成功召唤了大王蜈蚣,他能否打败大王蜈蚣,获得奖励呢?");

cm.dispose();


}
}else if (selection == 4) {

            cm.serverNotice(" 玩家:" + cm.c.getPlayer().getName() + " 打败大王蜈蚣后,获得了珍贵的恶魔标识!");
cm.warp(910000000,0);
cm.sendOk("恶魔标识可以开启下一阶段的路程,加油历练吧,勇士.");
            cm.dispose(); 

}else if (selection == 5) {
 var party = cm.getPlayer().getParty();
            if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("请你开设一个队伍,保证你一个人在这个队伍里.");
   cm.dispose(); 
    }else  if (!cm.haveItem(3994034,1)) {
cm.sendOk("您不能选择这个奖励关卡.!");
cm.dispose();
 }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquest");  
                if (em == null) { 
                    cm.sendOk("脚本出错,请联系GM."); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                } 
            cm.serverNotice(" 玩家:" + cm.c.getPlayer().getName() + " 打败大王蜈蚣后,开始了紫字奖励关卡!");
cm.gainItem(3994034,-1);
            cm.dispose(); 
} 
}
}else if (selection == 6)  {
 var party = cm.getPlayer().getParty();
            if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("请你开设一个队伍,保证你一个人在这个队伍里.");
   cm.dispose(); 
    }else  if (!cm.haveItem(3994027,1)) {
cm.sendOk("您不能选择这个奖励关卡.!");
cm.dispose();
 }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 6){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquest");  
                if (em == null) { 
                    cm.sendOk("脚本出错,请联系GM."); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                } 
            cm.serverNotice(" 玩家:" + cm.c.getPlayer().getName() + " 打败大王蜈蚣后,开始了银字奖励关卡!");
cm.gainItem(3994027,-1);
            cm.dispose(); 
} 
}
}else if (selection == 7) {
cm.warp(910000000,0);

            cm.dispose(); 

}}}}