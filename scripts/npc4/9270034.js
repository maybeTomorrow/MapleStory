
function start() {
	if(cm.getzb() > 0){
			var 鍏呭€奸噾棰� = cm.getzb();
			var 鐐瑰嵎鍊嶇巼 = 鍏呭€奸噾棰� * 150;
		//	var 绉垎鍊嶇巼 = 鍏呭€奸噾棰� * 1;
			cm.gainNX(鐐瑰嵎鍊嶇巼);
		//	cm.gainjf(绉垎鍊嶇巼);
			cm.setzb(-鍏呭€奸噾棰�);
			cm.sendOk("鎮ㄥ凡鎴愬姛棰嗗彇锛� "+鐐瑰嵎鍊嶇巼+"鐐瑰嵎!\r\n鐐瑰嵎宸叉坊鍔犲埌鎮ㄧ殑甯愭埛! \r\n浜彈鍚�! #r璧跺揩鍘诲晢鍩庤喘涔颁綘鍠滅埍鐨勫晢鍝佸惂!#k");//\r\n鍚屾椂杩樿幏寰椾簡:"+绉垎鍊嶇巼+"绉垎!
			cm.getChar().saveToDB(false, false);
			cm.worldMessage(12, cm.getC().getChannel(),"銆栧厖鍊肩郴缁熴€�" + " : " + " [" + cm.getPlayer().getName() + "]鍏呭€间簡"+ 鐐瑰嵎鍊嶇巼 +"鐐瑰嵎,璧跺揩鍘诲晢鍦烘寫閫夊枩娆㈢殑鐗╁搧鍚э紒", true);  
			cm.dispose();
		} else {
			cm.sendOk("璇风‘璁や綘鏄惁鍏呭€肩偣鍗蜂簡!");
			cm.dispose();
		}
}

