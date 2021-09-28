var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "请选择一种嘉年华战斗场地!\r\n#L100#冒险岛纪念币兑换#l";
	var found = false;
        for (var i = 0; i < 6; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("#e#d您好！这里是嘉年华对抗准备地图：\r\n您需要先组建一个队伍才能开始嘉年华对抗！。\r\n#L100##k冒险岛纪念币兑换#l");
        } else {
            if (cm.isLeader()) {
				var pt = cm.getPlayer().getParty();
				if (pt.getMembers().size() < 2) {
						cm.sendOk("需要 2 人以上才可以嘉年华！！");
						cm.dispose();
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(30, 100) == 1) {
                        cm.sendOk("队伍里有人等级不符合。必须30~70级才能参加");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 100) == 2) {
                        cm.sendOk("在地图上找不到您的队友。");
                        cm.dispose();
                    }
				}
				}
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("目前没有房间.\r\n#L100#冒险岛纪念币#l");
		}
            } else {
                cm.sendSimple("请叫你的队长来找我\r\n#L100#冒险岛纪念币#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50个冒险岛纪念币 = 休彼德曼的项链#v1122007##l\r\n#L1#30个冒险岛纪念币 = 休彼德曼的珠子#v2041211##l\r\n#L2#50个闪耀的冒险岛纪念币 = 休彼德曼的混沌链#v1122058##k");
	} else if (selection >= 0 && selection < 6) {
	    var mapid = 980000000+((selection+1)*100);
            if (cm.getEventManager("cpq").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(30, 100) == 1) {
                        cm.sendOk("队伍里有人等级不符合。必须30~70级才能参加");
                        cm.dispose();
                    } else if (checkLevelsAndMap(30, 100) == 2) {
                        cm.sendOk("在地图上找不到您的队友。");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("您的队伍人数不足。");
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(30, 100) == 1) {
                    cm.sendOk("队伍里有人等级不符合。必须30~70级才能参加");
                    cm.dispose();
                } else if (checkLevelsAndMap(30, 100) == 2) {
                    cm.sendOk("在地图上找不到您的队友。");
                    cm.dispose();
                } else {
					var pt = cm.getPlayer().getParty();
					if (pt.getMembers().size() < 2) {
						cm.sendOk("需要 2 人以上才可以嘉年华！！");
						cm.dispose();
					} else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042001);
                    //}
                    cm.sendOk("您的挑战已经发送。");
                    cm.dispose();
                }
				}
            } else {
                cm.sendOk("队伍人数不相符。");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("很抱歉您并没有#t4001129# #b50#k个");
		} else if (!cm.canHold(1122007,1)) {
		    cm.sendOk("请清出空间.");
		} else {
		    cm.gainItem(1122007,1,true);
		    cm.gainItem(4001129,-50);
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("很抱歉您并没有#t4001129# #b30#k个");
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("请清出空间.");
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
		}
		cm.dispose();
	    } else if (selection == 2) {
		if (!cm.haveItem(4001254,50)) {
		    cm.sendOk("很抱歉您并没有#t4001254# #b50#k个");
		} else if (!cm.canHold(1122058,1)) {
		    cm.sendOk("请清出空间.");
		} else {
		    cm.gainItem(1122058,1,true);
		    cm.gainItem(4001254,-50);
		}
		cm.dispose();
	    }
        }
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980000000+(fieldnumber*100)));
        if (event == null && fieldnumber != 5 && fieldnumber != 6 && fieldnumber != 9) {
            status = "擂台赛场地 "+fieldnumber+"(2v2)";
        } else if (event == null) {
            status = "擂台赛场地 "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"人/平均等级 "+averagelevel;
        }
    }
    return status;
}