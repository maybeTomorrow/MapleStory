锘縱ar status = 0
var victim;
var ring = 1112001;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 1) {
        cm.sendSimple("" +
                "#L1##r#e杩涘叆绾㈤妇瀹�#l\r\n" +
                "#L2##k#e鎴戞兂鍥炲幓浜�");
    } else if (status == 2) {
        if (selection == 1) {
            if (cm.getParty() == null) {
                cm.sendNext("璇蜂笌浣犵殑鍙︿竴鍗婄粍闃熷悗鎵炬垜");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendNext("璇疯闃熼暱涓庢垜瀵硅瘽");
                cm.dispose();
                return;
            }

            var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId || victim.getGender() == gender)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("璇风‘璁ゆ偍璺熸偍鐨勭殑鍙﹀涓€鍗婂湪杩欎竴寮犲湴鍥俱€佷笉鍚屾€у垾銆佸苟涓旈兘鍦ㄧ嚎浠ュ強闃熶紞涓矑鏈夊叾浠栦汉");
                cm.dispose();
                return;
            }
			
            if (!victim.hasEquipped(ring) || !cm.getPlayer().hasEquipped(ring)) {
                cm.sendNext("鎮ㄦ垨鎮ㄧ殑鍙︿竴鍗婃矑鏈夎澶�#v" + ring + "##z" + ring + "#鍝�");
                cm.dispose();
                return;
            }
            cm.sendYesNo("纰哄畾鏄惁瑕佷笌" + victim.getName() + "缁撳鍚�?");
        } else if (selection == 2) {
            var map = cm.getSavedLocation("WEDDING");
            cm.warp(map, 0);
			cm.clearSavedLocation("WEDDING");
            cm.dispose();
        }
    } else if (status == 3) {
		cm.warpParty(700000100);
        cm.dispose();
    } else {
        cm.dispose();
    }
}