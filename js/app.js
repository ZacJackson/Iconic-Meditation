// ********** set date ************
// select span
const date = (document.getElementById(
	"date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		// prevent default
		e.preventDefault();
		links.classList.remove("show-links");

		const id = e.target.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		//
		let position = element.offsetTop - 62;

		window.scrollTo({
			left: 0,
			// top: element.offsetTop,
			top: position,
			behavior: "smooth",
		});
	});
});
// comment section

console.log("hdcomments");

const hdc_el = {
	submit: document.getElementById("hdc_submit"),
	comment: document.getElementById("hdc_comment_input"),
	email: document.getElementById("hdc_email_input"),
	name: document.getElementById("hdc_name_input"),
	reactions: document.getElementsByClassName("hdc_reaction"),
};

function hdc_can_Submit() {
	let comment = hdc_el.comment.value.trim();
	let email = hdc_el.email.value.trim();
	let name = hdc_el.name.value.trim();

	if (comment.length > 4 && email.length > 4 && name.length > 4) {
		if (hdc_validate_email_address(email)) {
			hdc_el.submit.classList.add("hdc_submit_enabled");
			hdc_el.submit.disabled = false;
			console.log("good to go");
		} else {
			hdc_el.submit.classList.remove(
				"hdc_submit_enabled"
			);
			hdc_el.submit.disabled = true;
		}
	} else {
		hdc_el.submit.classList.remove("hdc_submit_enabled");
		hdc_el.submit.disabled = true;
	}
}

function hdc_set_event_listeners() {
	hdc_el.comment.addEventListener("keyup", hdc_can_submit);
	hdc_el.email.addEventListener("keyup", hdc_can_submit);
	hdc_el.name.addEventListener("keyup", hdc_can_submit);
}
function hdc_set_event_listeners();
function hdc_validate_email_address(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// hdc_set_event_listeners();
