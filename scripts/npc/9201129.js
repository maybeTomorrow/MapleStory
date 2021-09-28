var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032495)) {
			cm.sendYesNo("浣犳兂绉诲姩鍒伴殣钘忓湴鍥�?");
		} else {
			cm.sendOk("浣犻渶瑕佸皬浜�40绾э紝闇€瑕佽繘鍏ョ墰榄旂帇鍕嬬珷.");
			cm.dispose();
		}
} else {
	cm.spawnMob_map(9400612, 677000001,-10,60 );
	cm.warp(677000000,0);
	cm.dispose();
    }
}