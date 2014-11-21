$(document).ready(function(){
	var turn = 1;
	$('td').on("click",function() {
		if (turn % 2 === 0){
			$(this).text("x");
		}
		else {
			$(this).text("0");
		}
			$(this).off("click");
		turn ++;		
	});
});



