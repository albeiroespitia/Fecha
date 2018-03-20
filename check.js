$(document).ready(function(){

	var fechaObjeto
	
	$('#crearFechaForm').submit(function(event){
		event.preventDefault();
		var inputDay = $('#day').val()
		var inputMes = $('#month').val()
		var inputAnio = $('#year').val()
		fechaObjeto = new Fecha(inputDay,inputMes,inputAnio);

	})	

	$('#biciesto').click(function(){
		fechaObjeto.leapYear();
	})

	$('#printLatino').click(function(){
		fechaObjeto.printLat();
	})

	$('#printGringo').click(function(){
		fechaObjeto.printUSA();
	})

	$('#getDia').click(function(){
		alert(fechaObjeto.day);
	})

	$('#getMes').click(function(){
		alert(fechaObjeto.month);
	})

	$('#getAnio').click(function(){
		alert(fechaObjeto.year);
	})
})