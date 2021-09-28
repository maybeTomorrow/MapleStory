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
			cm.sendSimple("#b娆㈣繋鐜╁ #r#h ##k,涓栫邯鍐掗櫓宀涚鎮ㄦ姝ラ珮鍗囷紒涓囦簨澶у悏锛乗r\n\r\n浣犺繕娌℃湁#v4310110#鍚�.鍡€︹€︽湁浠樺嚭灏辨湁鍥炴姤锛屼綘甯垜鎼滈泦鏂板勾闇€瑕佺殑鏉愭枡鎴戜粯缁欎綘[鏄ヨ妭绾康甯乚.\r\n#r娓╅Θ鎻愮ず:鍏戞崲鍓嶈纭鑳屽寘鏍煎瓙,鍗冧竾涓嶈婧㈠嚭鎷夸笉鍒板摝锛乗r\n" +
            "#k\r\n#L101##r#i4000189##bx200#r鎹�#b鏄ヨ妭#i4310110##bx10#L102##r#i4000190##bx200#r鎹�#b鏄ヨ妭#i4310110#x10\r\n\r\n#L103##r#i4000191##bx200#r鎹�#b鏄ヨ妭#i4310110##bx10#L104##r#i4000192##bx200#r鎹�#b鏄ヨ妭#i4310110##bx10\r\n\r\n#L105##r#i4000193##bx200#r鎹�#b鏄ヨ妭#i4310110##bx10.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000189, 200)) {
                    cm.gainItem(4000189, -200);
                    cm.gainItem(4310110,10);
					//cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0)
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]璧氬彇浜哰鏄ヨ妭绾康甯乚涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4000190, 200) ) {
                    cm.gainItem(4000190, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]璧氬彇浜哰鏄ヨ妭绾康甯乚涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4000191, 200) ) {
                    cm.gainItem(4000191, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]璧氬彇浜哰鏄ヨ妭绾康甯乚涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4000192, 200) ) {
                    cm.gainItem(4000192, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]璧氬彇浜哰鏄ヨ妭绾康甯乚涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4000193, 200) ) {
                    cm.gainItem(4000193, -200);
					cm.gainItem(4310110,10)
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]璧氬彇浜哰鏄ヨ妭绾康甯乚涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
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

	