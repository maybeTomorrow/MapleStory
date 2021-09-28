var status = 0
var chair = 3012003

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
	if(status == 1){
		cm.sendYesNo("璇烽棶鏄惁瑕侀鍙�#v1112320#鍜�#v3012003#.");
	} else if(status == 2){
		if(cm.getPlayer().getMarriageId() > 0) {
			if(!cm.canHold(1112320)){
				cm.sendNext("鑳屽寘绌洪棿涓嶈冻");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLog("LoveChair") > 0){
				cm.sendNext("浣犲凡缁忛鍙栬繃缁撳绀煎寘");
				cm.dispose();
				return;
			}
			cm.getPlayer().setOneTimeLog("LoveChair");
		    cm.getPlayer().setVip(3);
			cm.gainItem(chair, 1);
			cm.gainItem(1112320,5,5,5,5,500,500,5,5,10,10,10,10,10,10);
			cm.鍠囧彮(3, "鐜╁锛歔" + cm.getPlayer().getName() + "]鎴愬姛棰嗗彇缁撳鎴掓寚锛屾伃鍠滐紒锛�");
			cm.sendNext("#v"+chair+"#銆�#v1112804#宸茬粡鏀惧埌浜嗕綘鐨勮儗鍖呫€佷笅绾夸互鍚庯紝閲嶆柊涓婏紝灏辨湁缁撳缁忛獙浜嗭紒锛�");
		}
		cm.dispose();
	} else {
		cm.dispose();
	}
}