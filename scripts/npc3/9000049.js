/* 乐 章编写,转载请注明*/

importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var needap = 1; //需要AP的数量
var needdz = 1;//需要邮票的数量
var needzsb = 1;//需要圣杯的数量
var needsj = 1;//升级次数需要pk币的数量
var slot;
var item;
var qty;
var display;

function start() {
    status = -1;
    action(1, 0, -1);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0 && type == 0) {
        status--;
        
    } else {
        cm.sendOk("好的,如果你想好了要做什么,我会很乐意的为你服务的..");
        cm.dispose();
        return;
    }
if (status == 0) {
 if(cm.getChar().isGM()){
var text = "你好,我的朋友#h #.我的ID:"+cm.getNpc()+"\r\n";
text += "我是本服强化装备使者,有什么需要我效劳吗?#r\r\n";
text += "#b#L1#★增加装备 物理攻击力 ★#l  #L8#★锁定装备[免费]★#l\r\n#L2#★增加装备 魔法攻击力 ★#l  #L9#★解锁装备[#r收费#b]★#l\r\n";
text += "#b#L3#★增加装备 力量属性值 ★#l  #L10#★一键清理[免费]★#l\r\n#L4#★增加装备 敏捷属性值 ★#l\r\n";
text += "#b#L5#★增加装备 智力属性值 ★#l     \r\n#b#L6#★增加装备 运气属性值 ★#l     \r\n";
text += "#b#L7#★增加装备 可升级次数 ★#l  \r\n\r\n\r\n";
text += "#k#n你目前杀了#r" + cm.getChar().getPvpKills() +"#k人  被杀次数:#r" + cm.getChar().getPvpDeaths() +"#k次  pk币:#r" + cm.getzb() + "#k个";
cm.sendSimple(text);
  }else {
var text = "你好,我的朋友#h #.我的ID:"+cm.getNpc()+"\r\n";
text += "我是本服强化装备使者,有什么需要我效劳吗?#r\r\n";
text += "#b#L1#★增加装备 物理攻击力 ★#l  #L8#★锁定装备[免费]★#l\r\n#L2#★增加装备 魔法攻击力 ★#l  #L9#★解锁装备#r[收费]#b★#l\r\n";
text += "#b#L3#★增加装备 力量属性值 ★#l  #L10#★一键清理[免费]★#l\r\n#L4#★增加装备 敏捷属性值 ★#l\r\n";
text += "#b#L5#★增加装备 智力属性值 ★#l     #r更多内容,待添加\r\n#b#L6#★增加装备 运气属性值 ★#l \r\n";
text += "#b#L7#★增加装备 可升级次数 ★#l  \r\n\r\n\r\n";
text += "#k#n你目前杀了#r" + cm.getChar().getPvpKills() +"#k人  被杀次数:#r" + cm.getChar().getPvpDeaths() +"#k次  pk币:#r" + cm.getzb() + "#k个";
cm.sendSimple(text);
}
//==========================
} else if (status == 1) {
if (selection == 1) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();

} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备物理攻击力#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r物理攻击力增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#L0#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 2) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备魔法攻击力#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r魔法攻击力增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L1#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text); }
} else if (status == 1) {
if (selection == 3) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备力量属性值#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r力量属性值增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L2#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 4) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备敏捷属性值#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r敏捷属性值增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L3#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 5) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备智力属性值#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r智力属性值增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L4#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 6) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备运气属性值#k强化需要如下要求：\r\n★消耗★："+needdz+" 金邮票#v4002002# + #r"+needap+"#k 属性值+ "+  needzsb+" 个圣杯#v4031454#\r\n\r\n★效果★：装备#r运气属性值增加:#b10#r.加卷次数:#b-1#r.\r\n\r\n#k★注意★：①该强化需保证可升级次数>0,方可进行.\r\n";
text += "       ②#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L5#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 7) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("第一格没有装备,无法使用.");
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("限时装备不能使用该功能.");cm.dispose();
cm.dispose();
} else{
var text = "";
text += "您要升级的装备为:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,可升级次数为：#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"次#k\r\n进行#r增加装备可升级次数#k强化需要如下要求：\r\n★消耗★："+needsj+" 个 pk币\r\n\r\n★效果★：装备#r可升级次数增加:#b1#r..\r\n\r\n#k★注意★：";
text += "①#b#e装备栏第一个物品为强化物品#n#K.\r\n#k若不遵守上面的注意事项,造成损失由玩家自行负责.\r\n";
text += "#r#L6#★★★★★开始强化装备★★★★★#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 8) {
cm.openNpc( 1063004);
} else if (status == 1) {
if (selection == 9) {
cm.openNpc( 1063005);
} else if (status == 1) {
if (selection == 10) {
var a ="#r请注意:此功能清理垃圾为不可挽回清理,所以请在清理前把重要的东西保存在仓库里:\r\n#k有些特殊物品是不会删除的哦~\r\n#b";
a+= "\r\n#L7#↖(^ω^)↗装备栏"; 
a+= "\r\n#L8#↖(^ω^)↗消耗栏"; 
a+= "\r\n#L9#↖(^ω^)↗设置栏"; 
a+= "\r\n#L10#↖(^ω^)↗其他栏"; 
a+= "\r\n#L11#↖(^ω^)↗特殊栏"; 
} 
cm.sendSimple(a);
} else if (status == 1) {

//请在之前插入
}}}
}
}
}
}
}
}
//结束status == 1
} else if (status == 2) {
if (selection == 0) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备物理攻击力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加物理攻击成功.\r\n砸卷次数-1,物理攻击加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}


} else if (status == 2) {
if (selection == 1) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备魔法攻击力需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加魔法攻击成功.\r\n砸卷次数-1,魔法攻击加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 2) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备力量属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr()+10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加力量成功.\r\n砸卷次数-1,力量加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 3) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备敏捷属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加敏捷属性值成功.\r\n砸卷次数-1,敏捷属性值加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 4) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备智力属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加智力属性值成功.\r\n砸卷次数-1,智力属性值加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 5) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b增加装备运气属性值需要#r"+needap+"#b点属性值,你剩余的属性值不足!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("你的背包里没有"+needdz+"个金邮票#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("你的背包里没有圣杯#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加运气属性值成功.\r\n砸卷次数-1,运气属性值加10!");
cm.dispose();
}
else{
cm.sendOk("强化要求不足.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 6) {
if (cm.getzb() < needsj) {
cm.sendOk("#b升级砸卷次数需要#r"+needsj+"#b个pk币,你的pk币不足!");
cm.dispose();
}else {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.setzb(-needsj);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("恭喜你,增加可升级次数成功.\r\n可升级次数+1!");
cm.dispose();
}
} else if (status == 2) {
if (selection == 7) {
cm.deleteItem(1);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 8) {
cm.deleteItem(2);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 9) {
cm.deleteItem(3);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 10) {
cm.deleteItem(4);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
} else if (status == 2) {
if (selection == 11) {
cm.deleteItem(5);
cm.sendOk("恭喜,已经为你清理完毕!");  
cm.dispose();
}}}}}}}}}}}}

//结束status == 2
}
}
