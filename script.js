let quoteText = document.getElementById("quote");
//Loading the quotes from json file on document load
document.addEventListener("DOMContentLoaded", async () => {
	try {
		const response = await fetch("quotes.json");
		if (!response.ok) throw new Error("Failed to load JSON");
		const data = await response.json();
		let randombutton = document.getElementById("randombtn");
		let prevbutton = document.getElementById("prevbtn");
		let nextbutton = document.getElementById("nxtbtn");

		let quoteNumber = 0;
		quoteText.innerHTML = data[quoteNumber].quote;

		//Event lister for previous qoute
		prevbutton.addEventListener("click", () => {
			quoteNumber == 0 ? quoteNumber = data.length - 1: quoteNumber--;
			quoteText.innerHTML = data[quoteNumber].quote;
		});
		
		//Event lister for next qoute
		nextbutton.addEventListener("click", () => {
			quoteNumber == data.length - 1? quoteNumber = 0: quoteNumber++;
			quoteText.innerHTML = data[quoteNumber].quote;
		});

    //Event lister for generating a random quote from selected genre on btnrandom click
		randombutton.addEventListener("click", () => {
			let randomGenre = document.getElementById("genre").value;
			let randomQuotes = data.filter((date) => {
				return randomGenre == date.genre;
			})
			let random = Math.floor(Math.random() * randomQuotes.length);
			quoteText.innerHTML = randomQuotes[random].quote;
		});

	} catch (error) {
		console.error("Error loading JSON:", error);
	}
});

/*Changing the font size on slider input and button click*/
let fontSizeChanger = document.getElementById("change-font-size");
fontSizeChanger.addEventListener("click", () => {
	let fontSize = document.getElementById("font-size").value;
	console.log(fontSize);
	quoteText.style.fontSize = fontSize+"px";
})

/*Toggling the theme from light to dark and vice versa*/
let theme = document.getElementById("theme");
let block = document.querySelector(".block");
theme.addEventListener("click",() => {
	block.classList.toggle("dark-mode");
})