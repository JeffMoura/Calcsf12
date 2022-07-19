//Limita inserir até o número 02
function onlynumberOP01(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[1-2]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }

 //Limita inserir até o número 03
 function onlynumberOP02(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[1-3]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }

  //Limita inserir até o número 05
  function onlynumberOP03(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[1-5]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }

  //Limita inserir até o número 06
  function onlynumberOP04(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[1-6]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }

