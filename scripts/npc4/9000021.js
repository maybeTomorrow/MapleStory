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
			cm.sendSimple("#b娆㈣繋鐜╁ #r#h ##k,涓栫邯鍐掗櫓宀涚鎮ㄦ姝ラ珮鍗囷紒涓囦簨澶у悏锛乗r\n\r\n鎶藉彇绀煎寘鐨勬椂鍊欐嬁鍒颁簡绾㈠寘锛熸壘鎴戝氨瀵瑰暒锛佹垜浼氱粰浣犲厬鎹㈡垚闈炲父濂界殑鐗╁搧鐨勶紒\r\n#r娓╅Θ鎻愮ず:鍏戞崲鍓嶈纭鑳屽寘鏍煎瓙,鍗冧竾涓嶈婧㈠嚭鎷夸笉鍒板摝锛乗r\n" +
            "#k\r\n#L101##r#i4031549##bx1#r鎹�#b绁ラ緳椋庣瓭#i1102248##bx1.\r\n\r\n#L102##r#i4031548##bx1#r鎹�#b鏄ヨ妭甯�#i4310110#x888.\r\n\r\n#L103##r#i4031547##bx1#r鎹�#b鏄ヨ妭甯�#i4310110##bx588.\r\n\r\n#L104##r#i4031546##bx1#r鎹�#b鏄ヨ妭甯�#i4310110##bx188.\r\n\r\n#L105##r#v4310070# 鎹� 涓栫邯鍐掗櫓宀涙柊骞寸ぜ鍖匼r\n\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4031549, 1)) {
                    cm.gainItem(4031549, -1);
					//cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0)
					cm.gainItem(1102248,8,8,8,8,1888,1888,8,8,88,88,0,0,0,0)
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鐢ㄧ壒绾х孩鍖咃紝鍏戞崲浜嗘柊骞撮璧燵绁ラ緳椋庣瓭]锛侊紒");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍑ら福鏄ユ棩鏅擄紝榫欒捣娴峰ぉ楂樸€�");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]绁濆叏浣撲笘绾啋闄╁矝鐜╁锛屾柊骞村ぇ鍚夛紝澶у睍瀹忓浘锛侀緳鍑ゅ憟绁ワ紒");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4031548, 1) ) {
                    cm.gainItem(4031548, -1);
                    cm.gainItem(4310110,888);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鎵撳紑浜哰鏂板勾澶х孩鍖匽鑾峰緱浜�888涓柊骞寸邯蹇靛竵.涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4031547, 1) ) {
                    cm.gainItem(4031547, -1);
                    cm.gainItem(4310110,588);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鎵撳紑浜哰鏂板勾涓孩鍖匽鑾峰緱浜�588涓柊骞寸邯蹇靛竵.涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4031546, 1) ) {
                    cm.gainItem(4031546, -1);
                    cm.gainItem(4310110,188);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鎵撳紑浜哰鏂板勾灏忕孩鍖匽鑾峰緱浜�188涓柊骞寸邯蹇靛竵.涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4310070, 1) ) {
                    cm.gainItem(4310070, -1);
					cm.gainItem(3010789,1)//妞呭瓙
					cm.gainItem(2022070,10)//绁濈
					cm.gainItem(4310110,188)//鏄ヨ妭甯�188
					cm.gainItem(4032226,8)//榛勯噾鐚尓
					cm.gainItem(1003965,1)//甯藉瓙
					cm.gainItem(1052661,1)//
                cm.gainNX(8888);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]棰嗗彇浜哰涓栫邯鍐掗櫓宀涙柊骞寸ぜ鍖匽涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
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

	