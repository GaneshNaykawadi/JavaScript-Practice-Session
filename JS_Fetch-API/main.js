(async() => {
	try {
  	let response = await fetch("https://game-of-thrones-quotes.p.rapidapi.com/api/quote/random", {
  	'method': 'GET',
    'headers':  {
		"x-rapidapi-host": "game-of-thrones-quotes.p.rapidapi.com",
		"x-rapidapi-key": "5e664e3d80msh69e9b4164061afep10adfcjsnd9836c34f042"
	}
  })

  let result = await response.json();
	 quote.innerHTML = result.quote;
   quoter.innerHTML = result.quoter;
  }
  catch(error) {
    console.log(error.message);
  }

})();
