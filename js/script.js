function mainClock(){
	var date = new Date();
	$('#clock .clock__time').text(date.toLocaleString("ru", {hour: 'numeric',  minute: 'numeric',  second: 'numeric', timeZone: 'Asia/Yekaterinburg'}));
	$('#clock .clock__date').text(date.toLocaleString("ru", {month: 'long',  day: 'numeric'}));
}

mainClock();

var mainClockId = setInterval(mainClock, 1000);

function modalMsg(list = {title:'Modal title', text: 'Сообщение', type: ''}){
	var modal = $('#form_msg');
	modal.removeClass('success danger warning').addClass(list.type);
	modal.find('.modal-title').text(list.title);
	modal.find('.form_msg__item').text(list.text);
	modal.modal('show');
}


$('[data-toggle="tooltip"]').tooltip();