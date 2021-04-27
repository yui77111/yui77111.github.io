window.onload=function (){reloadPage();}
//自动刷新一次页面
function reloadPage() {
	 if(location.href.indexOf('#reloaded')==-1){ //判断是否有刷新标记
		    location.href=location.href+"#reloaded";//没有添加标记
		    location.reload();//刷新
}
}