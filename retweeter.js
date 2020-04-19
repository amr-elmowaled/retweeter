

let counter = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function retweetTweet(button) {
	button.click();
	await sleep(150);
	const retweet = document.getElementsByClassName("css-1dbjc4n r-1loqt21 r-18u37iz r-1j3t67a r-9qu9m4 r-o7ynqc r-6416eg r-13qz1uu")[0];
	retweet.click();
}

function retweet() {
	const button  = document.querySelector('div[aria-label$="Retweets. Retweet"]');
	if(button) {
		retweetTweet(button);
		counterDiv.innerText = counterDiv.innerText = "retweets done: " + (++counter);
		setTimeout(retweet, 300);
		
	}else {
		window.scrollTo(0,document.body.scrollHeight - Math.random()*200);
		setTimeout(retweet, 2000);
	}
}

const counterDiv = document.createElement("div");
counterDiv.innerText = "retweets done: " + counter;
counterDiv.setAttribute("id", "counter-div");
const style = document.createElement("style");
style.innerHTML = `
#counter-div {
	position: fixed;
	background-color: #fff;
	color: black;
	right: 10px;
	bottom: 10px;
	padding: 10px;
	border: 1px solid dodgerblue;
	border-radius: 10px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;

}
`
document.body.appendChild(style);
document.body.appendChild(counterDiv);

retweet();

