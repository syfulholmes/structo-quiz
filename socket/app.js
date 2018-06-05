var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//health check
app.get('/', function(req, res){
	res.send('Hello World!');
})

//expected output: Time now is Thu Mar 12 18:12:04 +08 2018 
function dateNow() {
	var now = new Date();
	var dateArr = now.toString().split(' ');
	dateArr = dateArr.slice(0, 6);

	//set proper timezone format
	var timezone = dateArr[dateArr.length-1];
	timezone = timezone.slice(timezone.length-5, timezone.length-2);
	dateArr[dateArr.length-1] = timezone;

	//shift year to tail
	var year = dateArr[3];
	dateArr = dateArr.slice(0, 3).concat(dateArr.slice(4));
	dateArr.push(year);

	var date = dateArr.join(' ');
	return 'Time now is ' + date;
}

//expected output: Tomorrow is Fri Mar 13.
function dateTomorrow() {
	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	var dateArr = tomorrow.toString().split(' ');
	dateArr = dateArr.slice(0, 3);

	var date = dateArr.join(' ');
	return 'Tomorrow is ' + date + '.';
}

io.on('connection', function(socket) {
	socket.on('message', function(msg) {
		if (msg == 'time-now') {
			io.emit('time-response', dateNow());

		} else if (msg == 'date-tomorrow') {
			io.emit('tomorrow-response', dateTomorrow());
		}
	})
})

http.listen(8080, function(){
	console.log('Listening on port 8080');
});