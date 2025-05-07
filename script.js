//Loading the quotes from json file on document load
document.addEventListener("DOMContentLoaded", async () => {
	try {
		const response = await fetch("quotes.json");
		if (!response.ok) throw new Error("Failed to load JSON");
		const data = await response.json();
		console.log(data);
		let randombutton = document.getElementById("btnrandom");
		let quoteText = document.getElementById("quote");

    //Event lister for generating a random quote on btnrandom
		randombutton.addEventListener("click", () => {
			let random = Math.floor(Math.random() * 15);
			console.log(random);
			quoteText.innerHTML = data[random].quote;
			quoteText.classList.remove("hide");
		});

	} catch (error) {
		console.error("Error loading JSON:", error);
	}
});
