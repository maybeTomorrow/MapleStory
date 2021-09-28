var status = 0;
var victim;
var ring = 1112001;

function start(){
	action(1, 0, 0);
}

function action(mode, type, selection){	
	if(mode == 1){
		status++;
	} else if(mode == 0){
		status--;
	} else {
		cm.dispose();
		return;
	}
	if(status == 1){
		cm.sendYesNo("浣犵湡鐨勭‘瀹氳缁撳鍚�?");
	} else if (status == 2){
			if(cm.getPlayer().getMarriageId() > 0){
                cm.sendNext("浣犲凡缁忕粨杩囧");
                cm.dispose();
                return;
			} else if (cm.getParty() == null) {
                cm.sendNext("缁勯槦鍚庡湪鏉ユ壘鎴�");
                cm.dispose();
                return;
            } else if (!cm.isLeader()) {
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
                if (victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMarriageId() > 0 || victim.getMapId() != mapId || victim.getGender() == gender)) {
                    next = true;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("璇风‘璁ゆ偍璺熸偍鐨勭殑鍙﹀涓€鍗婂湪杩欎竴寮犲湴鍥俱€佷笉鍚屾€у垾銆佹病缁撳杩囥€佸苟涓旈兘鍦ㄧ嚎浠ュ強闃熶紞涓矑鏈夊叾浠栦汉");
                cm.dispose();
                return;
            }
			
            if (!victim.hasEquipped(ring) || !cm.getPlayer().hasEquipped(ring)) {
                cm.sendNext("鎮ㄦ垨鎮ㄧ殑鍙︿竴鍗婃矑鏈夎澶�#v" + ring + "##z" + ring + "#锛�");
                cm.dispose();
                return;
            }
			
			if(!cm.canHold(1112804) || !victim.canHold(1112804)){
                cm.sendNext("鎮ㄦ垨鎮ㄧ殑鍙︿竴鍗婅儗鍖呯┖闂翠笉瓒�");
                cm.dispose();
                return;
			}
			cm.getPlayer().setMarriageId(victim.getId());
			victim.setMarriageId(cm.getPlayer().getId());
			//cm.givePartyItems(1112804, 1, false);
			cm.getPlayer().saveToDB(false, false);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "銆庢湀涓嬭€佷汉銆�" + " : " + "[" + cm.getChar().getName() + "]鍜屼粬鐨勪即渚"+victim.getName()+"]缁撲负澶銆傚皬濮愮彔鍦嗙帀娑︽椇澶箣鐩搞€佸疁瀹ゅ疁瀹�,鍏堢敓鎵嶉珮鍏枟銆佸瀵屼簲杞︺€傜幇绂忕楦抽腐缂樺畾涓夌敓锛屼匠鍋跺ぉ鎴愶紝鐝犺仈澹佸悎銆傜浜屼汉锛氭案缁撳悓蹇冿紝鐧惧勾濂藉悎銆佺櫨瀛愬崈瀛�,鏃犺瀵岃吹璐┓鍚屽痉鍚屽績銆佺惔鐟熷悎楦ｃ€佺浉鏁瀹俱€傜粨姝ょ粓韬箣鐩�,瀹堟缁堣韩涔嬭獡,涓嶇涓嶅純銆佺櫧澶村仌鑰併€傚ぇ瀹剁绂忎粬[濂筣锛佹垜浠浠�/濂逛滑浠庢父鎴忚蛋鍒扮幇瀹炲濮荤殑娈垮爞銆�"));
			//cm.worldMessage(11, "銆庢湀涓嬭€佷汉銆�" + " : " + "[" + cm.getChar().getName() + "]鍜屼粬鐨勪即渚"+victim.getName()+"]缁撲负澶銆傚皬濮愮彔鍦嗙帀娑︽椇澶箣鐩搞€佸疁瀹ゅ疁瀹�,鍏堢敓鎵嶉珮鍏枟銆佸瀵屼簲杞︺€傜幇绂忕楦抽腐缂樺畾涓夌敓锛屼匠鍋跺ぉ鎴愶紝鐝犺仈澹佸悎銆傜浜屼汉锛氭案缁撳悓蹇冿紝鐧惧勾濂藉悎銆佺櫨瀛愬崈瀛�,鏃犺瀵岃吹璐┓鍚屽痉鍚屽績銆佺惔鐟熷悎楦ｃ€佺浉鏁瀹俱€傜粨姝ょ粓韬箣鐩�,瀹堟缁堣韩涔嬭獡,涓嶇涓嶅純銆佺櫧澶村仌鑰併€傚ぇ瀹剁绂忎粬[濂筣锛佹垜浠浠�/濂逛滑浠庢父鎴忚蛋鍒扮幇瀹炲濮荤殑娈垮爞銆�");
			//cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍜屼粬鐨勪即渚"+victim.getName()+"]缁撲负澶銆傚皬濮愮彔鍦嗙帀娑︽椇澶箣鐩搞€佸疁瀹ゅ疁瀹�,鍏堢敓鎵嶉珮鍏枟銆佸瀵屼簲杞︺€傜幇绂忕楦抽腐缂樺畾涓夌敓锛屼匠鍋跺ぉ鎴愶紝鐝犺仈澹佸悎銆傜浜屼汉锛氭案缁撳悓蹇冿紝鐧惧勾濂藉悎銆佺櫨瀛愬崈瀛�,鏃犺瀵岃吹璐┓鍚屽痉鍚屽績銆佺惔鐟熷悎楦ｃ€佺浉鏁瀹俱€傜粨姝ょ粓韬箣鐩�,瀹堟缁堣韩涔嬭獡,涓嶇涓嶅純銆佺櫧澶村仌鑰併€傚ぇ瀹剁绂忎粬[濂筣锛佹垜浠浠�/濂逛滑浠庢父鎴忚蛋鍒扮幇瀹炲濮荤殑娈垮爞銆�");
			victim.saveToDB(false, false);
			//cm.warpMapWithClock(700000200, 300);
			cm.warpParty(700000200, 0);
			cm.dispose();
	} else{
		cm.dispose();
	}
	
}