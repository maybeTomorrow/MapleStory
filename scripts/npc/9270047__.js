var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 551030200) {
		cm.sendYesNo("浣犺鍑哄幓鍡�?");
		status = 1;
		return;
	}
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("There is a level requirement of 90 to attempt Scarlion/Targa.");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 5) {
			cm.sendOk("鍙兘鍦ㄩ牷閬� 5");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("ScarTarBattle");

    if (em == null) {
	cm.sendOk("The event isn't started, please contact a GM.");
	cm.dispose();
	return;
    }
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("鎸戞埌鐔婄帇鑸囩崊鐜嬮渶瑕�90绛�.");
			cm.dispose();
			return;
		}
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("ScarTar");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("鎮ㄦ槸鍚︽湁鑸堣叮鎴愮偤閬犲緛闅婄殑闅婇暦锛�");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("ScarTar");
	    if (type == -1) {
		cm.sendOk("The squad has ended, please re-register.");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("ScarTar");
		if (memberType == 2) {
		    cm.sendOk("You been banned from the squad.");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("浣犺鍋氫粈楹�? \r\n#b#L0#鏌ョ湅閬犲緛闅婂悕鍠�#l \r\n#b#L1#鍔犲叆閬犲緛闅�#l \r\n#b#L2#閫€鍑洪仩寰侀殜#l");
		} else if (memberType == -1) {
		    cm.sendOk("The squad has ended, please re-register.");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("浣犺鍋氫粈楹�? \r\n#b#L0#鏌ョ湅閬犲緛闅婂悕鍠�#l \r\n#b#L1#鍔犲叆閬犲緛闅�#l \r\n#b#L2#閫€鍑洪仩寰侀殜#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("浣犺鍋氫粈楹�? \r\n#b#L0#鏌ョ湅閬犲緛闅婂悕鍠�#l \r\n#b#L1#韪㈤櫎闅婂摗#l \r\n#b#L2#淇敼閬犲緛闅婃竻鍠�#l \r\n#r#L3#閫插叆鍦板湒#l");
	    // TODO viewing!
	    }
	} else {
		var props = em.getProperty("leader");
		if (props != null && props.equals("true")) {
			var eim = cm.getDisconnected("ScarTarBattle");
			if (eim == null) {
				cm.sendOk("閬犲緛闅婅垏BOSS鐨勬埌楝ュ凡缍撻枊濮�.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("浣犺閲嶆柊閫插叆鍡�?");
				status = 2;
			}
		} else {
			cm.sendOk("Your leader has left the battle, so you may not return.");
			cm.safeDispose();
		}
	}
    } else {
		var props = em.getProperty("leader");
		if (props != null && props.equals("true")) {
			var eim = cm.getDisconnected("ScarTarBattle");
			if (eim == null) {
				cm.sendOk("The battle against the boss has already begun.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("浣犺閲嶆柊閫插叆鍡�?");
				status = 2;
			}
		} else {
			cm.sendOk("Your leader has left the battle, so you may not return.");
			cm.safeDispose();
		}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("ScarTar", 5, "宸叉垚鐐洪仩寰侀殜闀凤紝鎯宠鍙冨姞閬犲緛闅婄殑鐜╁璜嬮枊濮嬮€茶鐢宠珛銆�")) {
				cm.sendOk("You have been named the Leader of the Squad. For the next 5 minutes, you can add the members of the Expedition Squad.");
			} else {
				cm.sendOk("An error has occurred adding your squad.");
			}
	    }
	    cm.dispose();
	    break;
	case 1:
	    if (mode == 1) {
		cm.warp(551030100, 0);
	    }
	    cm.dispose();
	    break;
	case 2:
	    if (mode == 1) {
		cm.warp(551030200, 0);
	    }
	    cm.dispose();
	    break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ScarTar", 0)) {
		    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ScarTar", true);
		if (ba == 2) {
		    cm.sendOk("The squad is currently full, please try again later.");
		} else if (ba == 1) {
		    cm.sendOk("You have joined the squad successfully");
		} else {
		    cm.sendOk("You are already part of the squad.");
		}
	    } else {// withdraw
		var baa = cm.addMember("ScarTar", false);
		if (baa == 1) {
		    cm.sendOk("You have withdrawed from the squad successfully");
		} else {
		    cm.sendOk("You are not part of the squad.");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("ScarTar", 0)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("ScarTar", 1)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("ScarTar", 2)) {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("ScarTar") != null) {
			var dd = cm.getEventManager("ScarTarBattle");
			dd.startInstance(cm.getSquad("ScarTar"), cm.getMap());
		    } else {
			cm.sendOk("Due to an unknown error, the request for squad has been denied.");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("ScarTar", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ScarTar", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}