var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032491)) {
			cm.sendYesNo("浣犳兂绉诲姩鍒伴殣钘忓湴鍥�?");
		} else {
			cm.sendOk("浣犻渶瑕佸皬浜�40绾э紝闇€瑕佽繘鍏ュ嵃绗畨鑰佹枒楦犲媼绔�.");
			cm.dispose();
		}
} else {
	cm.spawnMob_map(9400609, 677000005 , 89, 85);
	cm.warp(677000004,0);
	cm.dispose();
    }
}