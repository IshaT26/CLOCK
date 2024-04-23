let darkToggle = document.querySelector('.icons');
// let mainSection = document.querySelector('section')
let mainSection = document.getElementById('clock');

let hourText = document.getElementById('hour-text');
let minuteText = document.getElementById('minute-text');
let secondText = document.getElementById('second-text');
let amPmText = document.getElementById('am-pm');

darkToggle.addEventListener('click', ()=>{
	mainSection.classList.toggle('dark');
})

setInterval( updateWithTime )

function updateWithTime (){

	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let amPm = hours < 12 ? "AM" : "PM"; // For AM and PM

	hours = hours > 12 ? (hours - 12) : hours; // For Value to stay between 00 and 11
	hours = hours === 0 ? (hours = 12) : hours;

	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	hourText.textContent= hours;
	minuteText.textContent= minutes;
	secondText.textContent= seconds;
	amPmText.textContent= amPm;
	
}