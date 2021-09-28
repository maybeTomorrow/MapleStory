var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(1452084)) {
			cm.sendYesNo("浣犳兂绉诲姩鍒伴殣钘忓湴鍥�?");
		} else {
			cm.sendOk("浣犻渶瑕佸皬浜�40绾э紝闇€瑕佽繘鍏ヨ鏈夋墍缃楅棬涔嬪紦.");
			cm.dispose();
		}
} else {
	cm.spawnMob_map(9400610, 677000003,34,35 );
	cm.warp(677000002,0);
	cm.dispose();
    }
}