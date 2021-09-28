/* 
 * @Author Lerk
 * 
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 * 
 * Guild Quest - stage 1
 */


var status = -1;
var stage;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    var eim = cm.getEventInstance();
    if (eim == null) {
	cm.warp(990001100);
    }
    else {
	if (eim.getProperty("leader").equals(cm.getName())) {
	    if (cm.getMap().getReactorByName("statuegate").getState() > 0){
		cm.sendOk("Proceed.");
		cm.safeDispose();
	    } else {
		if (status == 0) {
		    if (eim.getProperty("stage1status") == null || eim.getProperty("stage1status").equals("waiting")) {
			if (eim.getProperty("stage1phase") == null) {
			    stage = 1;
			    eim.setProperty("stage1phase",stage);
			} else {
			    stage = parseInt(eim.getProperty("stage1phase"));
			}
			if (stage == 1) {
			    cm.sendOk("鍦ㄨ繖涓寫鎴樹腑锛屾垜灏嗗睍绀烘垜鍛ㄥ洿鐨勯洉鍍忕殑鍥炬銆傚綋鎴戠粰杩欎釜璇嶏紝閲嶅鐨勬ā寮忥紝鎴戠户缁�.");
			}
			else {
			    cm.sendOk("鎴戝皢涓轰綘鍛堢幇涓€涓洿闅剧殑璋滈銆傜浣犲ソ杩�.")
			}
		    }
		    else if (eim.getProperty("stage1status").equals("active")) {
			stage = parseInt(eim.getProperty("stage1phase"));
			if (eim.getProperty("stage1combo").equals(eim.getProperty("stage1guess"))) {
			    if (stage == 3) {
				cm.getMap().getReactorByName("statuegate").hitReactor(cm.getClient());
				cm.sendOk("鍑鸿壊鐨勫伐浣溿€傝杩涘叆涓嬩竴闃舵.");
				cm.showEffect(true, "quest/party/clear");
				cm.playSound(true, "Party1/Clear");
				var prev = eim.setProperty("stage1clear","true",true);
				if (prev == null) {
				    cm.gainGP(45);
				}
			    } else {
                                                                        
				cm.sendOk("寰堝ソ鐨勩€傜劧鑰岋紝浣犱粛鐒舵湁鏇村鐨勬潵瀹屾垚銆傚綋浣犲噯澶囧ソ鐨勬椂鍊欏啀鍜屾垜璇磋瘽.");
				eim.setProperty("stage1phase", stage + 1);
				cm.mapMessage("浣犲凡缁忓畬鎴愪簡閮ㄥ垎" + stage + " 鐨勬妸鍏充汉娴嬭瘯.");
			    }
                                                                
			} else {
			    cm.sendOk("浣犺€冭瘯涓嶅強鏍�.");
			    cm.mapMessage("浣犳湁娌℃湁鎶婂叧娴嬭瘯.");
			    eim.setProperty("stage1phase","1")
			}
			eim.setProperty("stage1status", "waiting");
			cm.safeDispose();
		    }
		    else {
			cm.sendOk("璇风瓑寰�.");
			cm.safeDispose();
		    }
		}
		else if (status == 1) {
		    //only applicable for "waiting"
		    var reactors = getReactors();
		    var combo = makeCombo(reactors);
		    /*/var reactorString = "Debug: Reactors in map: ";
                                                for (var i = 0; i < reactors.length; i++) {
                                                        reactorString += reactors[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);
                                                reactorString = "Debug: Reactors in combo: ";
                                                for (var i = 0; i < combo.length; i++) {
                                                        reactorString += combo[i] + " ";
                                                }
                                                cm.playerMessage(reactorString);*/
		    cm.mapMessage("璇风◢鍊欙紝璇ョ粍鍚堟樉绀�.");
                                                
		    var delay = 5000;
		    for (var i = 0; i < combo.length; i++) {
			cm.getMap().getReactorByOid(combo[i]).delayedHitReactor(cm.getClient(), delay + 3500*i);
		    }
		    eim.setProperty("stage1status", "display");
		    eim.setProperty("stage1combo","");
		    cm.dispose();
		}
	    }

	} else {
	    cm.sendOk("鎴戦渶瑕佷綘鐨勭粍闃熺殑闃熼暱鍜屾垜璇磋瘽锛屾病鏈変汉.");
	    cm.safeDispose();
	}
    }
}

//method for getting the statue reactors on the map by oid
function getReactors() {
    var reactors = new Array();
        
    var iter = cm.getPlayer().getMap().getAllReactorsThreadsafe().iterator();
    while (iter.hasNext()) {
	var mo = iter.next();
	if (!mo.getName().equals("statuegate")) {
	    reactors.push(mo.getObjectId());
	}
    }
        
    return reactors;
}

function makeCombo(reactors) {
    var combo = new Array();
        
    while (combo.length < (stage + 3)) {
	var chosenReactor = reactors[Math.floor(Math.random() * reactors.length)];
	//cm.log("Debug: Chosen Reactor " + chosenReactor)
	var repeat = false;
                
	if (combo.length > 0) {
	    for (var i = 0; i < combo.length; i++) {
		if (combo[i] == chosenReactor) {
		    repeat = true;
		    //cm.log("Debug: repeat reactor: " + chosenReactor);
		    break;
		}
	    }
	}
                
	if (!repeat) {
	    //cm.log("Debug: unique reactor: " + chosenReactor);
	    combo.push(chosenReactor);
	}
    }
        
    return combo;
}