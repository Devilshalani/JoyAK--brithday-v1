// White Devil @ Devilshalani javascript ES6
// background section
const background = document.querySelector('.background');
// select all elements in clock
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const typer = document.querySelector('.typer');
const intro = ['count your brithday....', 'from our family....', 'for joy akka....']; // add the text for type
// add some colors
const bgColors = ['#1740d5', '#03e9f4', '#716bdf', '#ad0e69', '#3d9f2f', '#fd00da', '#ffeb2d', '#fe0063', '#e80202', '#e053a8', '#d360b9', '#c065ca', '#a86ada', '#8671e7', '#6884f4', '#4394fc', '#00a3ff', '#00bdff', '#00d5ff', '#00ebfe', '#00ffef'
];
// set some variables for use
const currentYear = new Date().getFullYear(); // it will get current year
const joyAKsBrithDay = `dec 11, ${currentYear}`;
// create all flags and set width height left and background color 
const createFlag = e => {
	let x = Math.random() * innerWidth;
	let bg = Math.floor(Math.random() * bgColors.length);
	let rotate = Math.floor(Math.random() * 360);
	let size = Math.floor(Math.random() * 10);
	let flag = document.createElement('span');
	flag.classList.add('flag');
	flag.style.left = x + 'px';
	flag.style.width = size + 'px';
	flag.style.height = 50 + size + 'px';
	flag.style.setProperty("--r", rotate+'deg');
	flag.style.background = bgColors[bg];
	background.appendChild(flag);
	setTimeout(() => {
		flag.remove();
	}, 15300);
}

// typing animation main function
const typerAnimation = e => {
	let currentText = ''; // current index of text
	let letter = ''; // current index of letter 
	let currentTextCount = 0; // current text index 
	let letterCount = 0; // current letter index
	// type the letter in one by one
	const type = e => {
		if (currentTextCount > intro.length -1) currentTextCount = 0; // if current text counter is morethen intro length -1 it will be 0
		if (letter.length < intro[currentTextCount].length) { // if letter length is lessthen the intro text in current index do it
			currentText = intro[currentTextCount];
			letter = currentText.slice(0, ++letterCount);
			typer.textContent = letter;
			setTimeout(type, 300);
		} else {  // if letter length is morethen the intro text in current index do it
			setTimeout(erase, 600);
		}
	}
// erase the lettrrs one by one 
	const erase = e => {
		if (letter.length > 0) {// if letter length is morethen 0 do it
			currentText = intro[currentTextCount];
			letter = currentText.slice(0, --letterCount);
			typer.textContent = letter;
			setTimeout(erase, 100);
		} else {// if letter length is lessthen 0 do it
			currentTextCount++;
			letterCount = 0;
			letter = '';
			currentText = '';
			setTimeout(type, 100);
		}
	}
	type(); // call it once manualy
}

const brithDayTimer = e => {
	let joyAKsBrithDate = new Date(joyAKsBrithDay).getTime(); // it will return the seconds of 1953 to this day
	let currentDate = new Date().getTime(); // it will return the seconds of 1953 to now current day 
	let avelable = joyAKsBrithDate - currentDate; // we dont wont to 1953 to now day so remove it 
	let d = (1000*60*60*24); // milliseconds * seconds * minutes * hours
	let h = (1000*60*60); // milliseconds * seconds * minutes 
	let m = (1000*60); // milliseconds * seconds 
	let s = (1000); // milliseconds 
	let avelableDays = Math.floor(avelable / d);// sub / (1000*60*60*24)
	let avelableHours = Math.floor((avelable % d) / h);//  sub %(1000*60*60*24) /  (1000*60*60)
	let avelableMinutes= Math.floor((avelable % h) / m);// sub %  (1000*60*60) /  (1000*60)
	let avelableSeconds = Math.floor((avelable % m) / s);// sub % (1000*60) /  (1000)
	days.textContent = avelableDays; // adding content 
	hours.textContent = avelableHours; // adding content 
	minutes.textContent = avelableMinutes; // adding content 
	seconds.textContent = avelableSeconds; // adding content 
}

setInterval(brithDayTimer); // call it avery 1 second
typerAnimation(); // typer animation 
setInterval(createFlag, 100); // it will call avery 100 milliseconds