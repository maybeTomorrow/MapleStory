var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("瀹屾垚鍏細浠诲姟鐨勫ソ杩愭皵!");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
		cm.sendSimple("浣犳兂鍋氫粈涔�? \r\n #L0#绂诲紑瀹舵棌浠诲姟#l");
	} else {
		cm.sendOk("瀵逛笉璧凤紝鎴戜笉鑳戒负浣犲仛浠讳綍浜�!");
		cm.dispose();
	}
    }
    else if (status == 1) {
	cm.sendYesNo("浣犵‘瀹氫綘鎯冲仛鐨勫悧锛熶綘灏嗕笉鑳藉洖鏉�!");
    }
    else if (status == 2) {
	if (cm.isPlayerInstance()) { 
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.dispose();
	return;
    }
}
