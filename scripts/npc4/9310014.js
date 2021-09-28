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
			cm.sendSimple("#b娆㈣繋鐜╁ #r#h ##k,涓栫邯鍐掗櫓宀涚鎮ㄦ柊骞村揩涔愶紒涓囦簨澶у悏锛乗r\n\r\n#v4032593##v4032593##v4032593#绂忕瀵挎槬鍗锋嫾鐩樺埗浣�#v4032593##v4032593##v4032593#\r\n#v4310110#鐢╗鏄ヨ妭绾康甯乚鍙喘涔版潗鏂欙紝涓嶆敹鎵嬪伐璐瑰摝锛乗r\n#b鈥籟鏄ュ嵎]涓哄浐鏈夐亾鍏�(鍙氦鏄�)锛屽寘閲屽彧鑳藉瓨1涓鎹細娑堝け.鏉愭枡鍙彔鍔�.\r\n#r娓╅Θ鎻愮ず:鍏戞崲鍓嶈纭鑳屽寘鏍煎瓙,鍗冧竾涓嶈婧㈠嚭鎷夸笉鍒板摝锛�" +
            "#k\r\n#L101##r#i4032582##bx66#i4032583##bx66#i4032584##bx66#r鎹�#b#v4032593#绂忕瀵挎槬鍗锋嫾鐩榵1.\r\n\r\n#L102##r鏄ヨ妭甯�#i4310110##bx30#r鎹�#b#i4032582#鐩婂鏄ュ嵎鐨畑11.\r\n\r\n#L103##r鏄ヨ妭甯�#i4310110##bx30#r鎹�#b#i4032583#绂忔皵鑲夐x11.\r\n\r\n#L104##r鏄ヨ妭甯�#i4310110##bx30#r鎹�#b#i4032584#璐㈣繍璞嗘补x11.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4032583, 66) & cm.haveItem(4032584, 66) & cm.haveItem(4032582, 66)) {
                    cm.gainItem(4032583, -66);
                    cm.gainItem(4032584, -66);
                    cm.gainItem(4032582, -66);
                    cm.gainItem(4032593, 1);
					//cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0)
                    cm.sendOk("鑾峰緱#v4032593#绂忕瀵挎槬鍗锋嫾鐩�.鏂板勾蹇箰鍝︼紒");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍒朵綔浜哰绂忕瀵挎槬鍗锋嫾鐩榏鏂板勾绂忕瀵挎槦楂橀珮鐓э紒涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032582,11);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍒朵綔浜哰鐩婂鏄ュ嵎鐨甝寤跺勾鐩婂锛佷笘绾啋闄╁矝绁濆叏浣撶帺瀹舵柊骞村揩涔愶紒");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032583, 11);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍒朵綔浜哰绂忔皵鑲夐]绂忔皵婊℃弧锛佷笘绾啋闄╁矝绁濆叏浣撶帺瀹舵柊骞村揩涔愶紒");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032584, 11);
                    cm.sendOk("鍏戞崲鎴愬姛.");
cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鍒朵綔浜哰璐㈣繍璞嗘补]璐㈣繍浜ㄩ€氾紒涓栫邯鍐掗櫓宀涚鍏ㄤ綋鐜╁鏂板勾蹇箰锛�");
                    cm.dispose();
                } else {
                    cm.sendOk("鎮ㄧ殑閬撳叿涓嶈冻鍝鍔犳补鑾峰彇閬撳叿鍐嶅厬鎹㈠惂锛佹柊骞村揩涔愶紒");
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

	