window.onload = function(){
	processador = document.getElementById("processador");
	content = document.getElementById("content");
	memoria = document.getElementById("memoria");
	barramento = document.getElementById("barramento");
	
	processador.onclick = function(){
		$(content.children[0]).css('display','block');
		$(content.children[1]).css('display','none');
		$(content.children[2]).css('display','none');
	};
	
	memoria.onclick = function(){
		$(content.children[0]).css('display','none');
		$(content.children[1]).css('display','block');
		$(content.children[2]).css('display','none');
	};
	
	barramento.onclick = function(){
		$(content.children[0]).css('display','none');
		$(content.children[1]).css('display','none');
		$(content.children[2]).css('display','block');
	};
};

var content;
var processador;
var memoria;
var barramento;

