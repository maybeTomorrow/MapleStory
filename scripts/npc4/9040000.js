/* 
 * Shuang, Victoria Road: Excavation Site<Camp> (101030104)
 * Start of Guild Quest
 */

var status;
var GQItems = Array(1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001031, 4001032, 4001033, 4001034, 4001035, 4001037);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.getPlayer().hasEquipped(1032033)) {
		cm.sendOk("璇峰嵏涓嬩綘鐨勪繚鎶ょ煶.");
		cm.dispose();
	} else {
		cm.sendSimple("浣犺鍋氫粈涔�? #b\r\n#L0#寮€濮嬩竴涓鏃忕殑浠诲姟#l\r\n#L1#鍔犲叆瀹舵棌鐨勫鏃�#l");
	}
	
    } else if (status == 1) {
	if (selection == 0) { //Start
	    if (cm.getPlayerStat("GID") == 0 || cm.getPlayerStat("GRANK") >= 3) { //no guild or not guild master/jr. master
		cm.sendNext("鍙湁瀹舵棌鏃忛暱鍜屽壇鏃忛暱鎵嶈兘寮€濮嬭繖涓换鍔�.");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("鍓湰鍙戠敓闂.");
		} else {
		    var prop = em.getProperty("started");

		    if ((prop.equals("false") || prop == null) && em.getInstance("GuildQuest") == null) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			em.startInstance(cm.getPlayer(), cm.getPlayer().getName());
			em.setProperty("state", "0");
			cm.guildMessage("瀹舵棌宸茶繘鍏ュ鏃忕殑浠诲姟銆傝鍦ㄩ€氶亾鐨勬寲鎺樿惀鍦版姤鍛� " + cm.getClient().getChannel() + ".");
		    } else {
			cm.sendOk("鏈変汉宸茬粡灏濊瘯鍦ㄥ鏃忎换鍔�.")
		    }
		}
		cm.dispose();
	    }
	} else if (selection == 1) { //entering existing GQ
	    if (cm.getPlayerStat("GID") == 0) { //no guild or not guild master/jr. master
		cm.sendNext("浣犲繀椤诲姞鍏ヤ竴涓鏃�.");
		cm.dispose();
	    } else {
		var em = cm.getEventManager("GuildQuest");
		if (em == null) {
		    cm.sendOk("鍓湰鍙戠敓闂.");
		} else {
		    var eim = em.getInstance("GuildQuest");

		    if (eim == null) {
			cm.sendOk("浣犵殑瀹舵棌鐩墠娌℃湁娉ㄥ唽杩欎釜鍓湰.");
		    } else {
//			if (em.getProperty("guildid") != null && !em.getProperty//("guildid").equalsIgnoreCase("" + cm.getPlayerStat("GID"))) {
//			if (cm.getPlayer().isGM()) {
//			    cm.sendOk("This instance is not your guild. Instance Guild: "  + //em.getProperty("guildid") + ", Your Guild: " + cm.getPlayerStat("GID"));
//			} else {
//			    cm.sendOk("This instance is not your guild.");
//			}
//			} else 
if (em.getProperty("started").equals("false")) {
    			for (var i = 0; i < GQItems.length; i++) {
				cm.removeAll(GQItems[i]);
    			}
			    eim.registerPlayer(cm.getPlayer());
			} else {
			    cm.sendOk("I'm sorry, but the guild has gone on without you. Try again later.");
			}
		    }
		}
		cm.dispose();
	    }
	}
    }
}