var pattern = ['R', 'Y', 'B', 'R', 'G', 'Y', 'B'];
var numb = 0;

$('.panel').on('click', function(e) {

	// Does the panel clicked match the current item
	// in the sequence?

	var colour = $(this).attr('data-colour');

	if ( colour == pattern[numb] ) {
		console.log("CORRECT :)")
		// Short form of: numb = numb + 1;
		numb++;

			if (numb >= pattern.length ) {
				console.log("YOU WON!");
			}
	}
	else {
		console.log("WRONG :(")
	}

});






