/* Author: aaroncsn(MapleSea Like)
	NPC Name: 		Karcasa
	Map(s): 		The Burning Sands: Tents of the Entertainers(260010600)
	Description: 		Warps to Victoria Island
*/
var towns = new Array(100000000,101000000,102000000,103000000,104000000);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("鏄殑鈥︿綘瀹虫€曢€熷害鎴栭珮搴︼紵浣犱笉鑳界浉淇℃垜鐨勯琛屾妧鑳斤紵鐩镐俊鎴戯紝鎴戝凡缁忚В鍐充簡鎵€鏈夌殑闂!");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0){
		cm.sendAcceptDecline("鎴戜笉鐭ラ亾浣犳槸鎬庝箞鍙戠幇杩欎釜鐨勶紝浣嗘槸浣犳潵鐨勬槸姝ｇ‘鐨勫湴鏂癸紒瀵逛簬閭ｄ簺寰樺緤鍦ㄥ凹鍝堝皵娌欐紶鍜岃秺鏉ユ兂瀹讹紝鎴戞彁渚涗竴涓埅鐝洿杈鹃噾閾跺矝锛屼笉鍋滐紒涓嶈鎷呭績杩欒墭椋炶埞--瀹冨彧鏄竴娆℃垨涓ゆ鍧犺惤锛佷綘涓嶈寰楀菇闂湪灏忚埞闀块€旈琛屽悧锛熶綘瑙夊緱鎬庝箞鏍凤紵浣犳効鎰忔帴鍙楄繖涓€鐩存帴鑸彮鐨勬姤浠峰悧?");
	} else if(status == 1){
		cm.sendAcceptDecline("璇疯浣忎袱鐐广€備竴锛岃繖鏉＄嚎瀹為檯涓婃槸涓烘捣澶栬埅杩愶紝鎵€浠� #r鎴戜笉鑳戒繚璇佷綘浼氱‘鍒囩殑鍩庨晣鍦熷湴#k. 鍥犱负鎴戞妸浣犳斁鍦ㄨ繖涓壒鍒殑椋炶锛岃繖浼氭湁鐐硅吹銆傛湇鍔¤垂鏄� #e#b10,000 閲戝竵#n#k. 鏈変竴涓埅鐝紝閭ｅ氨瑕佽捣椋炰簡銆備綘鏈夊叴瓒�?");
	} else if(status == 2){
		cm.sendNext("濂戒簡锛屽噯澶囪捣椋瀪");
	} else if(status == 3){
		if(cm.getMeso() >= 10000){
			cm.gainMeso(-10000);
			cm.warp(towns[Math.floor(Math.random() * towns.length)]);
		} else{
			cm.sendNextPrev("鍢匡紝浣犳病鏈夌幇閲�? 鎴戝憡璇夎繃浣狅紝浣犻渶瑕� #b10,000#k 閲戝竵 涓轰簡寰楀埌杩欎釜.");
			cm.dispose();
			}
		}
	}
}