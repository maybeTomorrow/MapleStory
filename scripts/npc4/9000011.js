var quantities = Array(10, 8, 6, 5, 4, 3, 2, 1, 1, 1);
var prize1 = Array(1442047, 2000000, 2000001, 2000002, 2000003, 2000004, 2000005, 2430036, 2430037, 2430038, 2430039, 2430040); //1 day
var prize2 = Array(1442047, 4080100, 4080001, 4080002, 4080003, 4080004, 4080005, 4080006, 4080007, 4080008, 4080009, 4080010, 4080011);
var prize3 = Array(1442047, 1442048, 2022070);
var prize4 = Array(1442048, 2430082, 2430072); //7 day
var prize5 = Array(1442048, 2430091, 2430092, 2430093, 2430101, 2430102); //10 day
var prize6 = Array(1442048, 1442050, 2430073, 2430074, 2430075, 2430076, 2430077); //15 day
var prize7 = Array(1442050, 3010183, 3010182, 3010053, 2430080); //20 day
var prize8 = Array(1442050, 3010178, 3010177, 3010075, 1442049, 2430053, 2430054, 2430055, 2430056, 2430103, 2430136); //30 day
var prize9 = Array(1442049, 3010123, 3010175, 3010170, 3010172, 3010173, 2430201, 2430228, 2430229); //60 day
var prize10 = Array(1442049, 3010172, 3010171, 3010169, 3010168, 3010161, 2430117, 2430118, 2430119, 2430120, 2430137); //1 year
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}	
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {	
			cm.sendNext("鍢匡紝鎴戞槸 #p" + cm.getNpc() + "#, 濡傛灉浣犱笉蹇欑殑璇濃€﹂偅鎴戝彲浠ュ拰浣犱竴璧峰嚭鍘诲悧锛熸垜鍚杩欓噷鏈変汉鑱氶泦鍦ㄨ繖閲� #娲诲姩#k 浣嗘垜涓嶆兂浜茶嚜鍘婚偅閲屸€﹀ソ鍚э紝浣犳兂鍜屾垜涓€璧峰幓鐪嬬湅鍚�?");
		} else if (status == 1) {	
			cm.sendSimple("鍝堬紵浠€涔堟牱鐨勪簨浠讹紵鍡紝閭ｆ槸..\r\n#L0##e1.#n#b 瀹冩槸浠€涔堟牱鐨勪簨浠�?#k#l\r\n#L1##e2.#n#b 鍚戞垜瑙ｉ噴浜嬩欢娓告垙.#k#l\r\n#L2##e3.#n#b 濂藉惂锛屾垜浠蛋鍚�!#k#l\r\n#L3##e4.#n#b璇锋洿鎹㈠鍔遍」杩炶儨璇佷功.#k#l");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendNext("杩欎釜鏈堬紝鍏ㄧ悆姝ｅ湪搴嗙鍏剁涓夊懆骞村啋闄╁矝! 鐢℅M灏嗗湪鏁翠釜浜嬩欢涓妇鍔炰竴涓儕鍠滅殑娲诲姩浜嬩欢锛屾墍浠M涓捐锛岀‘淇濆弬鍔犺嚦灏戜竴椤规椿鍔紝涓轰紵澶х殑濂栧搧!");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendSimple("杩欎釜浜嬩欢鏈夊緢澶氭父鎴忋€傚湪浣犵帺娓告垙涔嬪墠锛屽畠浼氬府鍔╀綘鐭ラ亾濡備綍鐜╂父鎴忋€傞€夋嫨涓€涓綘鎯崇煡閬撴洿澶氱殑! #b\r\n#L0# Ola Ola#l\r\n#L1# 鍐掗櫓宀涙灚浣撹兘娴嬭瘯#l\r\n#L2# 婊氶洩鐞冩瘮璧�#l\r\n#L3# 鎵撴ぐ瀛愭瘮璧�#l\r\n#L4# 0X鏅哄姏娴嬭瘯#l\r\n#L5# 瀵诲疂#l#k");
			} else if (selection == 2) {
				if (!cm.canHold()) {
					cm.sendNext("灏介噺鑵惧嚭浣犵殑鑳屽寘绌洪棿.");
				} else if (cm.getChannelServer().getEvent() > -1) {
					cm.saveReturnLocation("EVENT");
					cm.getPlayer().setChalkboard(null);
					cm.warp(cm.getChannelServer().getEvent(), cm.getChannelServer().getEvent() == 109080000 || cm.getChannelServer().getEvent() == 109080010 ? 0 : "join00");
				} else {
					cm.sendNext("鏃犺鏄椿鍔ㄦ病鏈夊紑濮嬶紝浣犻兘宸茬粡鏈変簡 #b绉樺瘑鍗疯酱#k, 鎴栬€呬綘宸茬粡鍙傚姞浜嗚繖涓€娲诲姩鍦ㄨ繃鍘�24灏忔椂鍐呫€傝绋嶅悗鍐嶈瘯!");
				}
				cm.dispose();
			} else if (selection == 3) {
				var selStr = "浣犳兂浜ゆ崲鍝竴涓洿鎺ヨ耽鐨勮瘉涔�?";
				for (var i = 0; i < quantities.length; i++) {
					selStr += "\r\n#b#L" + i + "##t" + (4031332 + i) + "# Exchange(" + quantities[i] + ")#l";
				}
				cm.sendSimple(selStr);
				status = 9;
			}
		} else if (status == 3) {
			if (selection == 0) {
				cm.sendNext("#b[涓婃ゼ 涓婃ゼ]#k 鏄竴涓父鎴忥紝鍙備笌鑰呯埇姊瓙鍒拌揪椤堕儴銆傞€氳繃閫夋嫨姝ｇ‘鐨勫厜鏌憋紝浠庝紬澶氱殑鍏夋煴闂ㄤ腑閫夋嫨姝ｇ‘鐨勫厜鏌遍棬锛岀埇涓婁綘鐨勬柟娉�. \r\n\r\n娓告垙鐢变笁涓眰娆＄粍鎴愶紝鏃堕棿闄愬埗鏄� #b6 鍒嗛挓#k. 鍦╗Ola Ola], 浣� #b涓嶈兘璺筹紝鐬Щ锛屽姞閫燂紝鎴栧鍔犱綘鐨勯€熷害浣跨敤鑽墏鎴栫墿鍝�#k. 杩樻湁涓€浜涙伓浣滃墽鐨勫厜鏌遍棬锛屽皢瀵艰嚧浣犲埌涓€涓檶鐢熺殑鍦版柟锛屾墍浠ヨ娉ㄦ剰閭ｄ簺.");
				cm.dispose();
			} else if (selection == 1) {
				cm.sendNext("#b[鍐掗櫓宀涚殑浣撹兘娴嬭瘯] 鏄竴涓閫氳繃闅滅鐗╃殑#k 寰堝儚妫灄鐨勮€愬績銆備綘鍙互閫氳繃鍏嬫湇鍚勭闅滅锛屽苟鍦ㄦ椂闄愬唴鍒拌揪鏈€缁堢洰鐨勫湴銆� \r\n\r\n娓告垙鐢卞洓涓眰娆＄粍鎴愶紝鏃堕棿闄愬埗鏄� #b15鍒嗛挓#k.[鍐掗櫓宀涗綋鑳芥祴璇昡鏃讹紝浣犱笉鍙互浣跨敤浼犻€佹垨閫熷害鍔犳垚.");
				cm.dispose();
			} else if (selection == 2) {
				cm.sendNext("#b[婊氶洩鐞僝#k 鐢变袱闃熴€佹灚鍙堕槦鍜屾晠浜嬮槦缁勬垚锛屼袱闃熺殑鍕嬬珷涔熺湅涓嶈 #b鍦ㄦ湁闄愮殑鏃堕棿閲岋紝鍝釜闃熸妸闆悆婊氬緱瓒婅繙锛岃秺澶�#k. 濡傛灉娓告垙涓嶈兘鍦ㄦ椂闂存鍐呭喅瀹氾紝閭ｄ箞灏辨妸闆悆婊氬埌鏇磋繙鐨勫湴鏂� \r\n\r\n鍗疯捣鐨勯洩锛屽湪鏈敾鍑诲畠g #bCtrl#k. 鎵€鏈夎繙绋嬫敾鍑诲拰鎶€鑳戒负鍩虹鐨勬敾鍑诲皢涓嶅湪杩欓噷鑳戒娇鐢�, #b鍙湁鍏抽棴鐨勬敾鍑诲皢宸ヤ綔#k. \r\n\r\n濡傛灉涓€涓鑹叉帴瑙﹀埌闆悆锛屼粬/濂逛細琚€佸洖璧风偣銆傚湪鍑哄彂鐐瑰墠闈㈢殑闆汉鏀诲嚮锛屼互闃叉瀵规柟浠庢粴鍔ㄧ殑闆墠杩涖€傝繖鏄竴涓鍒掑ソ鐨勭瓥鐣ワ紝鍥犱负鍥㈤槦灏嗗喅瀹氭槸鍚︽敾鍑绘粴闆悆鎴栭洩浜�.");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendNext("#b[妞板瓙姣旇禌]#k 鐢变袱闃燂紝鏋彾闃熷拰鏁呬簨鐨勫洟闃燂紝鍜屼袱鏀嚭鏉ュ媼绔犵湅涓嶅埌#鍝釜鍥㈤槦鏀堕泦浜嗘渶澶氭ぐ瀛�#k. 鏃堕棿闄愬埗 #b5 鍒嗛挓#k. 濡傛灉娓告垙缁撴潫浜庝竴鏉￠甯︼紝涓€涓澶栫殑2鍒嗛挓灏嗚鎺堜簣纭畾鑾疯儨鑰呫€傚鏋滐紝涓轰簡鏌愮鍘熷洜锛屾瘮鍒嗕繚鎸佸钩灞€锛岄偅涔堟父鎴忓皢浠ュ钩灞€缁撴潫銆俓r\n \ r鎵€鏈夎繙绋嬫敾鍑绘妧鑳界殑鏀诲嚮灏嗕笉浼氬湪杩欓噷宸ヤ綔锛�#甯傞偊绔嬬殑杩戣窛绂绘敾鍑诲皢#濡傛灉浣犱笉鏈変竴涓繎璺濈鏀诲嚮鐨勬鍣紝浣犲彲浠ヨ喘涔颁粬浠€氳繃娲诲姩鍦板浘鍐呯殑NPC銆傛棤璁烘槸鎬ф牸銆佹按骞崇殑姝﹀櫒鎴栨妧鑳斤紝鎵€鏈夎禂鍋跨殑閫傜敤灏嗘槸鐩稿悓鐨勩€俓r\n \ r \ nbeware鐨勯噸閲嶉殰纰嶅拰闄烽槺鍦ㄥ湴鍥俱€傚鏋滆鑹插湪娓告垙涓浜★紝鐜╁灏嗚娣樻卑鍑哄眬銆傚湪妞板瓙涓嬮檷鐨勬渶鍚庝竴涓悆鍛樼殑鐞冨憳銆傚彧鏈夋ぐ瀛愮牳鍒板湴涓婃暟锛岃繖鎰忓懗鐫€涓嶈浠庢爲涓婃帀涓嬫潵鐨勶紝鎴栬€呭伓灏旂殑鐖嗙偢妞板瓙灏变笉绠椼€傝繕鏈変竴涓殣钘忕殑闂ㄥ湪鍦板浘搴曢儴鐨勪竴涓３锛屾墍浠ヤ娇鐢ㄧ殑鏄槑鏅虹殑!");
				cm.dispose();
			} else if (selection == 4) {
				cm.sendNext("#b[0X鏅哄姏娴嬭瘯]#k is a game of MapleStory smarts through X's and O's. Once you join the game, turn on the minimap by pressing #bM#k to see where the X and O are. A total of #r10 questions#k will be given, and the character that answers them all correctly wins the game. \r\n\r\nOnce the question is given, use the ladder to enter the area where the correct answer may be, be it X or O. If the character does not choose an answer or is hanging on the ladder past the time limit, the character will be eliminated. Please hold your position until [CORRECT] is off the screen before moving on. To prevent cheating of any kind, all types of chatting will be turned off during the OX Quiz.");
				cm.dispose();
			} else if (selection == 5) {
				cm.sendNext("#b[瀵诲疂]#k is a game in which your goal is to find the #btreasure scrolls#k that are hidden all over the map #rin 10 minutes#k. There will be a number of mysterious treasure chests hidden away, and once you break them apart, many items will surface from the chest. Your job is to pick out the treasure scroll from those items. \r\nTreasure chests can be destroyed using #bregular attacks#k, and once you have the treasure scroll in possession, you can trade it for the Scroll of Secrets through an NPC that's in charge of trading items. The trading NPC can be found on the Treasure Hunt map, but you can also trade your scroll through #bVikin#k of Lith Harbor.\r\n\r\nThis game has its share of hidden portals and hidden teleporting spots. To use them, press the #bup arrow#k at a certain spot, and you'll be teleported to a different place. Try jumping around, for you may also run into hidden stairs or ropes. There will also be a treasure chest that'll take you to a hidden spot, and a hidden chest that can only be found through the hidden portal, so try looking around.\r\n\r\nDuring the game of Treasure Hunt, all attack skills will be #rdisabled#k, so please break the treasure chest with the regular attack.");
				cm.dispose();
			}
		} else if (status == 10) {
			if (selection < 0 || selection > quantities.length) {
				return;
			}
			var ite = 4031332 + selection;
			var quan = quantities[selection];
			var pri;
			switch(selection) {
				case 0:
					pri = prize1;
					break;
				case 1:
					pri = prize2;
					break;
				case 2:
					pri = prize3;
					break;
				case 3:
					pri = prize4;
					break;
				case 4:
					pri = prize5;
					break;
				case 5:
					pri = prize6;
					break;
				case 6:
					pri = prize7;
					break;
				case 7:
					pri = prize8;
					break;
				case 8:
					pri = prize9;
					break;
				case 9:
					pri = prize10;
					break;
				default:
					cm.dispose();
					return;
			}
			var rand = java.lang.Math.floor(java.lang.Math.random() * pri.length);
			if (!cm.haveItem(ite, quan)) {
				cm.sendOk("You need #b" + quan + " #t" + ite + "##k to exchange it with item.");
			} else if (cm.getInventory(1).getNextFreeSlot() <= -1 || cm.getInventory(2).getNextFreeSlot() <= -1 || cm.getInventory(3).getNextFreeSlot() <= -1 || cm.getInventory(4).getNextFreeSlot() <= -1) {
				cm.sendOk("You need space for this item.");
			} else {
				cm.gainItem(pri[rand], 1);
				cm.gainItem(ite, -quan);
				cm.gainMeso(100000 * selection); //temporary prize lolol
			}
			cm.dispose();
		}
	}
}