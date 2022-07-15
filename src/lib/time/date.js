function convertToAMOrPM(time) {
	if (time > 12) {
		return time - 12 + 'PM';
	} else if (time == 12) {
		return time + 'PM';
	} else if (time == 0) {
		return 12 + 'AM';
	} else {
		return time + 'AM';
	}
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
export { convertToAMOrPM as aMOrPM, checkIfDateOver as isCompleted };
