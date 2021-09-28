锘縱ar 鏄熸槦 = "#fEffect/CharacterEff/1114000/2/0#";
var 鐖卞績 = "#fEffect/CharacterEff/1022223/4/0#";
var 绾㈣壊绠ご = "#fUI/UIWindow/Quest/icon6/7#";
var 姝ｆ柟褰� = "#fUI/UIWindow/Quest/icon3/6#";
var 钃濊壊绠ご = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("鎰熻阿浣犵殑鍏変复锛�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+"\r\n"
			text += "\t\t\t  #e娆㈣繋鏉ュ埌#b涓栫邯鍐掗櫓宀泇079 #k!#n\r\n#r缁撳璇存槑濡備笅锛歕r\n缁撳瑕佹眰锛氬繀椤绘槸2涓汉,閮借鏈夌粨濠氶挜鍖�.\r\n缁撳瀵硅薄锛氬繀椤绘槸涓€鐢蜂竴濂�.鐢锋柟褰撻槦闀�.\r\n缁撳濂栧姳锛氱粨濠氱粡楠屽姞鎴�30%鍜岀粨濠氭垝鎸囦竴鏋歕r\n鏄惁鍙互绂诲锛氱粨濠氫互鍚庝笉鍙互绂诲锛岃€冭檻濂藉湪缁撳\r\n"
            text += "缁撳娴佺▼锛歕r\n1.鍙屾柟鍏堣喘涔版亱浜烘垝鎸�.\r\n2.璐拱缁撳閽ュ寵.鍙屾柟閮借璐拱!\r\n3.缁勯槦杩涘叆鍦板浘.淇╀汉韬笂瑕佹湁50W涔扮粨濠氳。鏈嶅悎璁�100涓�.\r\n4.鐐瑰嚮鏈堣€佺粨濠氭垚鍔�.\r\n5.棰嗗彇缁撳鎴掓寚缁忛獙鍔犳垚.\r\n\r\n"
            text += "#L1##e#d" + 钃濊壊绠ご + "鎴戣璺熸儏渚ｈ繘鍏ョ粨濠氬湴鍥�#l\r\n\r\n#L2##d" + 钃濊壊绠ご + "璐拱缁撳閽ュ寵 - 闇€瑕佺偣鍗�9999鐐瑰嵎/涓�.#l\r\n\r\n"//3
            //text += "#L3##d" + 钃濊壊绠ご + "鐜╁叿缁勯槦鍓湰#l#L4##d" + 钃濊壊绠ご + "澶╃┖缁勯槦鍓湰#l\r\n\r\n"//3
            //text += "#L5##d" + 钃濊壊绠ご + "姣掔墿缁勯槦鍓湰#l#L6##d" + 钃濊壊绠ご + "娴风洍缁勯槦鍓湰#l\r\n\r\n"//3
            //text += "#L7##d" + 钃濊壊绠ご + "缃楀瘑娆т笌鏈变附鍙剁粍闃熷壇鏈�#l\r\n\r\n"//3
            //text += "#L9##d" + 钃濊壊绠ご + "鑻辫瀛﹂櫌鍓湰#l\r\n\r\n"//3
            //text += "#L10##d" + 钃濊壊绠ご + "鎬墿鍢夊勾鍗�(缁勯槦瀵规姉鍓湰.鏈€浣�2V2)#l\r\n\r\n"//3
            //text += "#L8##d" + 钃濊壊绠ご + "閬楀潃鍏細瀵规姉鎴�(瀹舵棌鍓湰)#l\r\n\r\n"//3
            //text += ""+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+鐖卞績+"\r\n"
            //text += "#L11##dLv120.鍗冨勾鏍戠簿鐜嬮仐杩光叀#l\r\n\r\n"//3
            //text += "#L12##dLv130.浜哄伓甯圔OSS鎸戞垬#l\r\n\r\n"//3
            //text += "" + 钃濊壊绠ご + "#L13##rLv120绾т互涓�.缁孩鍓湰鎸戞垬#l\r\n\r\n"//3
            //text += "" + 钃濊壊绠ご + "#L14##rLv140绾т互涓�.寰″鍓湰鎸戞垬#l\r\n\r\n"//3
            text += ""+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+鏄熸槦+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //鏈堝缁勯槦鍓湰		//cm.warp(700000000 ,0);
            if (!cm.haveItem(4031409,1)) {  
            cm.sendOk("杩涘叆缁撳鍦板浘闇€瑕�#v4031409##z4031409#,璇峰厛璐拱鍐嶈锛�");
                cm.dispose();
              }else{
			cm.warp(700000000,0);  
				cm.gainItem(4031409, -1);//
				cm.dispose();
                return;
	      } 
        } else if (selection == 2) {  //搴熷純缁勯槦鍓湰
                    if (!cm.canHold(4031409, 1)) {
            cm.sendOk("鑳屽寘婊′簡锛岃娓呯悊涓€涓嬶紒锛�");
                cm.dispose();
			}else if (cm.haveItem(4031409,1)) {  
            cm.sendOk("浣犲凡缁忔湁浜�#v4031409##z4031409#,涓嶈閲嶅璐拱锛�");
                cm.dispose();
			}else if (cm.getPlayer().getCSPoints(1) >= 9999) {
				cm.gainNX(-9999);
				cm.gainItem(4031409, 1);//
			cm.鍠囧彮(2, "鎭枩[" + cm.getPlayer().getName() + "]鎴愬姛璐拱缁撳閽ュ寵涓€涓紝璇峰拰浣犵殑浼翠荆涓€璧疯繘鍏ョ粨濠氬湴鍥撅紝鍑嗗缁撳鍚э紒锛�");
            cm.sendOk("璐拱鎴愬姛锛�");
            cm.dispose();
			}else{
            cm.sendOk("鐐瑰嵎涓嶈冻2W鐐癸紝鏃犳硶璐拱!");
            cm.dispose();
			}
        } else if (selection == 3) { //鐜╁叿缁勯槦鍓湰
            cm.openNpc(2040034, 0);
        } else if (selection == 4) {//澶╃┖缁勯槦鍓湰
            cm.openNpc(2013000, 0);
        } else if (selection == 5) {//姣掔墿缁勯槦鍓湰
            cm.warp(300030100);
            cm.dispose();
        } else if (selection == 6) {//娴风洍缁勯槦鍓湰
            cm.openNpc(2094000, 0);
        } else if (selection == 7) {//缃楀瘑娆т笌鏈变附鍙剁粍闃熷壇鏈�
			cm.warp(261000011);
            cm.dispose();
        } else if (selection == 8) {//閬楀潃鍏細瀵规姉鎴�
			cm.warp(101030104);
            cm.dispose();
        } else if (selection == 9) {//鑻辫瀛﹂櫌鍓湰
            cm.warp(702090400);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 11) {//鍗冨勾鏍戠簿鐜嬮仐杩�
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//浜哄伓甯圔OSS鎸戞垬
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//缁孩
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("鏈湴鍥鹃檺鍒剁瓑绾�120绾с€傛偍鐨勮兘鍔涙病鏈夎祫鏍兼寫鎴樼化绾㈠壇鏈�");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//寰″
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("鏈湴鍥鹃檺鍒剁瓑绾�140绾с€傛偍鐨勮兘鍔涙病鏈夎祫鏍兼寫鎴樺尽濮愬壇鏈�");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 10) {//.鎬墿鍢夊勾鍗�
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


