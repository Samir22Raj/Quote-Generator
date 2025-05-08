//Loading the quotes from json file on document load
document.addEventListener("DOMContentLoaded", async () => {
	try {
		const response = await fetch("quotes.json");
		if (!response.ok) throw new Error("Failed to load JSON");
		const data = await response.json();
		let randombutton = document.getElementById("randombtn");
		let prevbutton = document.getElementById("prevbtn");
		let nextbutton = document.getElementById("nxtbtn");
		let quoteText = document.getElementById("quote");

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

    //Event lister for generating a random quote on btnrandom
		randombutton.addEventListener("click", () => {
			let random = Math.floor(Math.random() * 15);
			console.log(random);
			quoteText.innerHTML = data[random].quote;
		});

	} catch (error) {
		console.error("Error loading JSON:", error);
	}
});
