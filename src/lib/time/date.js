const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
function convertToAMOrPM(time) {
	var hour = Math.floor(time / 100);
	var minute = time % 100;

	if (hour >= 12) {
		return (hour === 12 ? 12 : hour - 12) + ':' + (minute < 10 ? '0' : '') + minute + 'PM';
	} else {
		return (hour === 0 ? 12 : hour) + ':' + (minute < 10 ? '0' : '') + minute + 'AM';
	}
}

function convertTo12(time) {
	// time is in this format: hh:mm
	var hour = time.split(':')[0];
	var minute = time.split(':')[1];
	if (hour > 12) {
		return hour - 12 + ':' + minute;
	}
	return hour + ':' + minute;
}
function checkIfDateOver(year, date, time) {
	var input = `${date}, ${year} ${time}`;
	var currentDate = new Date();
	var inputDate = new Date(input);
	if (inputDate - currentDate < 0) {
		return true;
	}
	return false;
}
function checkIsInProgress(day, startTime, endTime) {
	// if today is not the day from input, return
	var currentDate = new Date();
	if (currentDate.getDay() !== day) {
		return -1;
	}
	var date = currentDate.getDate();
	var month = months[currentDate.getMonth()];
	var year = currentDate.getFullYear();

	var combined = `${month}-${date}-${year}`;
	var start = `${combined}, ${startTime}`;
	var end = `${combined}, ${endTime}`;

	var startDate = new Date(start);
	var endDate = new Date(end);
	if (currentDate - startDate > 0 && currentDate - endDate < 0) {
		var progress = ((currentDate - startDate) / (endDate - startDate)) * 100;
		return progress;
	}
	return -1;
}

export {
	convertToAMOrPM as aMOrPM,
	checkIfDateOver as isCompleted,
	checkIsInProgress as isInProgress,
	convertTo12
};
