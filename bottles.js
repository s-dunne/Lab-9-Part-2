//To print out the song lyrics, it was best to use if statements until the countdown reach zero.


const lyricsDiv = document.getElementById("lyrics");

let songLyrics = "";

//with songLyrics being the chosen variable, the math was added to repeatedly subtract one every time

for (let i=99; i > 0; i--) {
	
	songLyrics += i + " bottles of beer on the wall<br>" + i + " bottles of beer.<br>" + "Take one down, pass it around,<br>";
	
//the condition of reaching zero had to be first to prevent the other statements from going first
	
	if (i - 1 === 0) {
		
	songLyrics += "No more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall"; 
	
	}
	
	else { 
	
	 songLyrics += (i - 1) + " bottles of beer on the wall.<br>"
	
	}
	
	songLyrics+= "<br>";
	
}
	
	lyricsDiv.innerHTML = songLyrics;