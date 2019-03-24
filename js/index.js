window.onload = function(){
	header = document.getElementById("project-name");

	header.onclick = function() {
		window.location.href = 'index.html'
	};
	
	content = document.getElementById("content");
	theme1 = document.getElementById("theme1");
	theme2 = document.getElementById("theme2");
	theme3 = document.getElementById("theme3");
	
	if(theme1 !== null){
		theme1.onclick = function(){
			$(content.children[0]).css('display','block');
			$(content.children[1]).css('display','none');
			$(content.children[2]).css('display','none');
		};
	}
	
	if(theme2 !== null){
		theme2.onclick = function(){
			$(content.children[0]).css('display','none');
			$(content.children[1]).css('display','block');
			$(content.children[2]).css('display','none');
		};
	}
	
	if(theme3 !== null){
		theme3.onclick = function(){
			$(content.children[0]).css('display','none');
			$(content.children[1]).css('display','none');
			$(content.children[2]).css('display','block');
		};
	}
}

var header;
var content;
var theme1;
var theme2;
var theme3;


