function start() {
        if (cm.haveItem(4000194, 20)) {
    cm.gainItem(4000194, -20);
    cm.warp(701010322, "sp");	
    cm.dispose();
	} else {
	    cm.sendOk("你没有黑羊毛20个!");
    cm.dispose();
}
}