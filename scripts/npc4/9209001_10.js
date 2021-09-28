锘�/*
 By 姊撴潯
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=鏄剧ず;false=寮€濮嬫椿鍔�
          if(Editing){
          cm.sendOk("鏆傚仠杩愪綔");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b娆㈣繋鐜╁ #r#h ##k ,鏀惰幏涓嶅皬鍢�,閭ｄ箞灏辨妸浣犻挀鍒扮殑楸煎湪鎴戣繖閲屽厬鎹㈠鍔卞惂锛佸皬楸兼垜鍙笉瑕侊紒瑕佸ぇ鐨勶紒锛乗r\n#r鐗瑰埆鎻愮ず:鍏戞崲鍓嶈纭鑳屽寘鏍煎瓙,婧㈠嚭鍚庢灉鑷礋锛佹垝鎸�/鍕嬬珷鍙兘棰嗕竴娆★紒" +
            "#k\r\n#L101##b#v1142146#鍥涚淮+9.HP/MP+900.鏀�/榄�+9.\r\n#r鍏戞崲闇€瑕侊細#k#v4031640#113cm.#v4031644#148cm.鍚�50鏉�.閲戝竵888涓�.\r\n\r\n#L102##b#i1112907#鍥涚淮+5.HP/MP+500.鏀�/榄�+5.(鏈夋场娉＄壒鏁�)\r\n#r鍏戞崲闇€瑕侊細#k#v4031640#113cm.#v4031644#148cm.鍚�50鏉�.閲戝竵1000涓�.\r\n\r\n#L103##b#v1142610#鍥涚淮+12.HP/MP+1200.鏀�/榄�+12.\r\n#r鍏戞崲闇€瑕侊細#k#v1142146#閽撻奔鐜嬪媼绔爔1 + #v4001200#x10鏉�.閲戝竵1500涓�.\r\n\r\n#L104##b#v4001200#x1#r鍏戞崲闇€瑕侊細\r\n#k#v4031628#120cm/128cm/131cm/140cm.#v4031630#30cm/53cm/60cm/100cm.\r\n  姣忕楸煎悇10鏉�.100涓囬噾甯�.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4031640, 50) & cm.haveItem(4031644, 50) && cm.getMeso() > 8888888) {
                    cm.gainItem(4031640, -50);
                    cm.gainItem(4031644, -50);
					cm.gainItem(1142146,9,9,9,9,900,900,9,9,0,0,0,0,0,0)
		            cm.gainMeso(-8888888);
                    cm.sendOk("鑾峰緱#v1142146#閽撻奔鐜嬪媼绔�.");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈夎冻澶熺殑閬撳叿.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4031640, 50) & cm.haveItem(4031644, 50) && cm.getMeso() > 10000000) {
                    cm.gainItem(4031640, -50);
                    cm.gainItem(4031644, -50);
                    cm.gainItem(1112907,5,5,5,5,500,500,5,5,50,50,5,5,5,5);
		            cm.gainMeso(-10000000);
                    cm.sendOk("鑾峰緱#v1112907#灏忛奔鎴掓寚锛�.");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈夎冻澶熺殑閬撳叿.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(1142146, 1) & cm.haveItem(4001200, 10) && cm.getMeso() > 15000000) {
                    cm.gainItem(1142146, -1);
                    cm.gainItem(4001200, -10);
                    cm.gainItem(2340000, 1);
					cm.gainItem(1142610,12,12,12,12,1200,1200,12,12,0,0,0,0,0,0)
		            cm.gainMeso(-15000000);
                    cm.sendOk("鑾峰緱#v1142610#澶╂墠閽撻奔鐜嬪媼绔�.");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈夎冻澶熺殑閬撳叿.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4031628, 10) & cm.haveItem(4031641, 10) && cm.haveItem(4031642, 10) & cm.haveItem(4031643, 10) && cm.haveItem(4031630, 10) & cm.haveItem(4031637, 10) && cm.haveItem(4031638, 10) & cm.haveItem(4031639, 10) && cm.getMeso() > 1000000) {
                    cm.gainItem(4031628, -10);
                    cm.gainItem(4031641, -10);
                    cm.gainItem(4031642, -10);
                    cm.gainItem(4031643, -10);
                    cm.gainItem(4031630, -10);
                    cm.gainItem(4031637, -10);
                    cm.gainItem(4031638, -10);
                    cm.gainItem(4031639, -10);
                    cm.gainItem(4001200, 1);
		            cm.gainMeso(-1000000);
                    cm.sendOk("鑾峰緱#v4032226#灏忛奔x1.");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈夎冻澶熺殑閬撳叿.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2022034, 30) ) {
                    cm.gainItem(2022034, -30);
                    cm.gainItem(2040917, 1);
					cm.gainItem(4031456,30)
                    cm.sendOk("鑾峰緱#i2040917#x1#i4031456#x30");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈�#i2022034#,璇峰湪娆＄‘璁�");
                    cm.dispose();
				}
			 }else if (selection == 106) {
                if (cm.haveItem(2022034, 100) ) {
                    cm.gainItem(2022034, -100);
                    cm.gainItem(1142005, 1);
					cm.gainItem(4031456,100)
                    cm.sendOk("鑾峰緱#i1142005#x1#i4031456#x100");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈�#i2022034#,璇峰湪娆＄‘璁�");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(4032226, 1) ) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("鑾峰緱#i2022488#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈�#i4032226#,璇峰湪娆＄‘璁�");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("鑾峰緱#i2022489#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈�#i4032226#,璇峰湪娆＄‘璁�");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("鑾峰緱#i2022490#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄨ韩涓婃病鏈�#i4032226#,璇峰湪娆＄‘璁�");
                    cm.dispose();
				}
			 }
        }
    }
}

	