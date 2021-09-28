/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Mike
	Map(s): 		Warning Street: Perion Dungeon Entrance(106000300)
	Description: 		Unknown
*/

function start(){
	if (cm.getQuestStatus(28177) == 1 && !cm.haveItem(4032479)) { //too lazy
		cm.gainItem(4032479,1);
	}
	cm.sendNext("绌胯繃杩欓噷锛屼綘浼氬彂鐜扮淮澶氬埄浜氬矝涓績鍦扮墷銆傝灏忓績...");
	cm.dispose();
}