var status = -1;
var need = 50000;

function start() {
 action(1, 0, 0);
}
 
function action(mode, type, selection){
	 if(mode == 1){
		 status++;
	 } else {
		 cm.dispose();
		 returm;
	 }
	 if(status == 0){
		 cm.sendYesNo("浣犳兂涔樺潗鎴戝悧锛熷彲鏄緢璐垫槸鍚︿箻鍧愶紵\r\n\r\n閲戝竵闇€瑕�#r" + need);
	 } else if(status == 1){
		 if(cm.getPlayer().getMeso() < need){
			 cm.sendNext("浣犵殑閲戝竵涓嶅 ");
			 cm.dispose();
			 return;
		 }
		 cm.gainMeso(-need);
		if (cm.getMapId() == 260020000) {
			cm.warp(260020700, 0);
		} else { // 260020700
			cm.warp(260020000, 1);
        }
		cm.dispose();
		}
 }

