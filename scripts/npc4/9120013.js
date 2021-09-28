/* Boss Kitty
	Zipangu : Showa Town (801000000)
	
	Quiz for quest 8012 (Sakura, the Kitty, and the Orange Marble)
*/

var status = -1;
var questions = new Array("涓嬮潰鐗╁搧涓嶆槸鐙哥尗鎵€鎺夊嚭鐨勭墿鍝�?","鍙や唬绁炵ぞ涓紝鍐欐湁銆庨鑿囥€忕殑鍦版柟鏈夊嚑澶勶紵","鍙や唬绁炵ぞ鐨勮穿鍗栫墿鍝侀噷锛屼綍鑰呮槸鎻愬崌鏀诲嚮鍔涚殑锛�?","涓嬪垪鐗╁搧涓紝閭ｄ釜鐗╁搧鏄瓨鍦ㄧ殑涓滆タ锛�?","閭ｄ釜鐗╁搧涓嶅瓨鍦�??","鍦ㄦ槶鍜岄晣钄彍搴楄€佹澘鍙粈涔堝悕瀛�?","杩欎簺鐗╁搧鐨勯偅涓瓨鍦�?","鏄拰鏉戝崠楸肩殑閾哄瓙澶栭潰鍐欑潃鍝嚑涓瓧?","鍝閬撳叿鐨勮鏄庢湁閿欒锛�?","浣曡€呬笉鏄彜浠ｇ绀剧殑鍏冩嘲鍗栫殑鎷夐潰锛�?","鏄拰鐢靛奖闄㈤棬鍓嶇殑NPC 鏄皝锛�?");;
var answers  = new Array(new Array("鐙哥尗鏌寸伀","鐙鐙殑纭","绾㈣壊鐨勭爾"),new Array("6","5","4"),new Array("绔犻奔鐑�","绂忓缓闈�","闈㈢矇"),new Array("涔岄甫灞�","榛勮壊闆ㄤ紴","楠嗛┘铔�"),new Array("鍐诲喕楸�","瀵掑啺鐮撮瓟鏋�","鑻嶈潎鎷�"),new Array("钀ㄧ背","鍗＄背","鐢辩編"),new Array("浜戠嫄鐨勭墮榻�","鑺辨潫","鐙愮嫺鐨勫熬宸�"),new Array("鍟嗚崳绻佺洓","鍏ㄥ満涓€鎶�","娆㈣繋鍏変复"),new Array("绔圭煕-鎴樺＋鍞竴鐨勬鍣�","姗＄毊姒斿ご-鍗曟墜鍓�","榫欒儗鍒�-鍙屾墜鍓�"),new Array("铔嬬倰闈�","鏃ユ湰鐐掗潰","铇戣弴鐗瑰埗鎷夐潰"),new Array("姝﹀ぇ閮�","妯辨灏忎父瀛�","缁橀噷棣�"));;
var correctAnswer = new Array(1,1,0,1,2,2,2,0,0,2,2);
var questionNum;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(8012) == 1 && !cm.haveItem(4031064)){ //quest in progress
	    cm.sendYesNo("浣犲緱鍒颁粬浠簡鍚楋紵浣犲噯澶囧洖绛旀垜鎵€鏈夌殑闂鍚�?");
	} else { //quest not started or already completed
	    cm.sendOk("鍠靛柕鍠祣!");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var hasChicken = cm.haveItem(2020001, 300);

	if (!hasChicken) {
	    cm.sendOk("浠€涔堬紵涓�!鎴戦渶瑕�300涓偢楦°€傚鏋滀綘鎯宠鐨勮瘽锛屼綘瑕佷氦鏇村鐨勬湅鍙嬶紝浣嗘垜鑷冲皯闇€瑕�300涓�.骞朵笉鏄墍鏈夌殑浜洪兘鑳藉儚浣犱竴鏍蜂紵澶�...");
	    cm.safeDispose();
	} else {
	    cm.gainItem(2020001, -300)
	    cm.sendNext("骞插緱濂�!鐜板湪寮€濮嬬瓟棰�!鎴戣繖閲屾湁涓€浜涢鐗�!甯姪鑷繁. 濂藉惂锛岀幇鍦ㄦ槸鏃跺€欒鎴戦棶浣犱竴浜涢棶棰樹簡銆傛垜鐩镐俊浣犱細鎰忚瘑鍒拌繖涓€鐐癸紝浣嗚浣忥紝濡傛灉浣犻敊浜嗭紝閭ｅ氨缁撴潫浜嗐€傝繖涓€鍒囨垨浠€涔堥兘娌℃湁!");
	}
    } else if (status == 7) { //2-6 are the questions
	if (selection != correctAnswer.pop()){
	    cm.sendNext("鍡紝鍙嶆鎵€鏈変汉绫荤姱閿欒! 濡傛灉浣犳兂鍐嶆潵鍥炵瓟涓€娆★紝閭ｅ氨缁欐垜甯�300涓偢楦�.")
	    cm.safeDispose();
	}
	else {
	    cm.sendNext("鍠祣锛屼綘鍥炵瓟浜嗘墍鏈夌殑闂銆傛垜鍙兘涓嶅枩娆汉绫伙紝浣嗘垜涓嶅枩娆㈢牬鍧忎竴涓壙璇猴紝鎵€浠ワ紝姝ｅ鎵€鎵胯鐨勶紝杩欓噷鐨勬鑹插ぇ鐞嗙煶.")
	}
    } else if (status == 8) { //gain marble
	cm.gainItem(4031064, 1);
	cm.sendOk("鎴戜滑鐨勭敓鎰忕粨鏉熶簡锛岄潪甯告劅璋綘锛佷綘鐜板湪鍙互璧颁簡!");
	cm.safeDispose();
    } else if (status >= 2 && status <= 6 && mode == 1) {//questions
	var cont = true;
	if (status > 2) {
	    if (selection != correctAnswer.pop()){
		cm.sendNext("鍡紝鍙嶆鎵€鏈変汉绫荤姱閿欒锛佸鏋滀綘鎯冲啀鏉ュ洖绛斾竴娆★紝閭ｅ氨缁欐垜甯�300涓偢楦�.")
		cm.safeDispose();
		cont = false;
	    }
	}
			
	if (cont) {
	    questionNum = Math.floor(Math.random() * questions.length);
	    if (questionNum != (questions.length - 1)){
		var temp;
		temp = questions[questionNum];
		questions[questionNum] = questions[questions.length - 1];
		questions[questions.length - 1] = temp;
		temp = answers[questionNum];
		answers[questionNum] = answers[questions.length - 1];
		answers[questions.length - 1] = temp;
		temp = correctAnswer[questionNum];
		correctAnswer[questionNum] = correctAnswer[questions.length - 1];
		correctAnswer[questions.length - 1] = temp;
	    }
				
	    var question = questions.pop();
	    var answer = answers.pop();
	    var prompt = "闂." + (status - 1) + ": " + question;
				
	    for (var i = 0; i < answer.length; i++) {
		prompt += "\r\n#b#L" + i + "#" + answer[i] + "#l#k"
	    }
				
	    cm.sendSimple(prompt);
	}
    }
}