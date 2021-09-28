var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		cm.dispose();
		return;
    }
    if (status == 0) {
		if (cm.getPlayer().getMapId() == 105050400) {
			if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032496)) {
				cm.sendYesNo("浣犳兂鍒拌揪鍦扮嫳澶у叕鏁ｆ鐨勫湴鏂�?");
			} else {
				cm.sendOk("浣犻渶瑕佸皯浜�40绾у苟涓旈渶瑕佹伓榄旂寧鎵嬬殑楗板搧杩涘叆.");
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 677000011) { //warp to another astaroth map.
			if (cm.getParty() == null) {
				cm.sendOk("浣犲繀椤诲湪娆″紑缁勯槦.");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= 10 && cPlayer.getLevel() < 40) || cPlayer.getJobId() == 900) {
						levelValid += 1;
					} else {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += 1;
					}
				}
				if (party.size() < 2 || inMap < 2) {
					next = false;
				}
				if (!next) {
					cm.sendOk("鍦ㄥ悓涓€寮犲湴鍥句笂锛屾偍闇€瑕佷綘鐨勭粍闃熶汉鏁颁负2浜�.");
					cm.dispose();
					return;
				}
			}
			cm.warp(677000013,0);
			cm.dispose();
		} else if (cm.getPlayer().getMapId() == 677000013) { //warp to another astaroth map.
			if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032496)) {
				if (cm.getParty() == null) {
					cm.sendOk("浣犲繀椤诲湪杩欓噷寮€缁勯槦.");
				} else {
					var party = cm.getParty().getMembers();
					var mapId = cm.getMapId();
					var next = true;
					var levelValid = 0;
					var inMap = 0;
					var it = party.iterator();
					while (it.hasNext()) {
						var cPlayer = it.next();
						if ((cPlayer.getLevel() >= 10 && cPlayer.getLevel() < 40) || cPlayer.getJobId() == 900) {
							levelValid += 1;
						} else {
							next = false;
						}
						if (cPlayer.getMapid() == mapId) {
							inMap += 1;
						}
					}
					if (party.size() < 2 || inMap < 2) {
						next = false;
					}
					if (next) {
						if (cm.getMap(677000012).getCharactersSize() > 0) {
							cm.sendOk("鏈変汉璇曞浘鎵撹触鍦扮嫳澶у叕宸茬粡.");
						} else {
							cm.warpParty(677000012);
						}
					} else {
						cm.sendOk("鍦ㄥ悓涓€寮犲湴鍥句笂锛屽湪鍚屼竴寮犲湴鍥句笂锛屾偍闇€瑕佷綘鐨勭粍闃熶汉鏁颁负2浜�.");
					}
				}
			} else {
				cm.warp(105050400,0);
			}
			cm.dispose();
		} else {
			if (cm.getParty() != null) {
				cm.warpParty(677000011);
			} else {
				cm.warp(677000011,0);
			}
			cm.dispose();
		}
	} else {
		cm.warp(677000010,0);
		cm.dispose();
	}
}