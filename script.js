
var myVar = setInterval(myClock, 1000)
function myClock() {
	var d = new Date();
	document.getElementById("time").innerText = d.toLocaleTimeString();
	document.getElementById("date").innerText = d.toLocaleDateString();
}
//timer increment
var seconds = 4;
var count = 4;
var interval = setInterval(printIncre, 1000);
function printIncre() {
	if (count == 1) {
		clearInterval(interval);
	}
	count -= 1;
	document.getElementById("incre").innerHTML = seconds;
	seconds--;
}
//mobile number enter
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button.nbtn");
let resVal = "";
// console.log(buttons);
for (item of buttons) {
	item.addEventListener("click", (e) => {
		buttonText = e.target.innerText;
		if (buttonText == "C") {
			result.value = "";
			resVal = "";
		}
		else {
			result.value += buttonText;
			document.getElementById("result").style.color = "green";
			var m = document.getElementById("result").value;
			sessionStorage.setItem("mobileno",m);
		}
	})
}
// mobile number validate
function validate() {
	let txt = document.getElementById("result").value;
	var patt = /^[7-9]\d{9}$/;
	if (patt.test(txt)) {
		window.location.href = "anim.html";
	}
	else {
		document.getElementById("error_btn").style.display = "block";
		// let ele = document.createElement('div');
		// ele.className = 'alert alert-warning alert-dismissible fade show';
		// ele.innerHTML = "Invalid Mobile Number";
		// let p = document.querySelector('div.result_enter');
		// p.appendChild(ele);
		// console.log(ele);
		let btnclose = document.getElementById("btnclose");
		btnclose.addEventListener('click', (e) => {
			window.location.reload();
		})
	}
}
// Token Number Generate