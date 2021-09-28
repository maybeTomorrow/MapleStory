/*
	Flo - Crossroad of Time(220040200)
**/

function start() {
    if (cm.getQuestStatus(6225) == 1 || cm.getQuestStatus(6315) == 1) {
	var ret = checkJob();
	if (ret == -1) {
	    cm.sendOk("璇峰啀缁勬垚涓€涓槦浼嶏紝鍐嶈窡鎴戣涓€娆�.");
	} else if (ret == 0) {
	    cm.sendOk("璇风‘淇濈粍闃熶汉鏁颁负2.");
	} else if (ret == 1) {
	    cm.sendOk("浣犵殑涓€涓槦鍛樻病鏈夎祫鏍艰繘鍏ュ彟涓€涓笘鐣�.");
	} else if (ret == 2) {
	    cm.sendOk("浣犵殑涓€涓槦鍛樼殑姘村钩鏄病鏈夎祫鏍艰繘鍏ュ彟涓€涓笘鐣�.");
	} else {
	    var dd = cm.getEventManager("ElementThanatos");
	    if (dd != null) {
		dd.startInstance(cm.getParty(), cm.getMap());
	    } else {
		cm.sendOk("鍙戠敓鏈煡閿欒.");
	    }
	}
    } else {
	cm.sendOk("浣犱技涔庢病鏈夌悊鐢辨弧瓒虫垜.");
    }
    cm.dispose();
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    if (party.getMembers().size() != 2) {
	return 0;
    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 212 || cPlayer.getJobId() == 222 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}