var randomWord = words[Math.floor(Math.random() * words.length)];
var word = randomWord.split("");
var guess = 0;
console.log(randomWord);
console.log(word);


wordBoxes();
function wordBoxes() {
	var ul = document.createElement("ul");

	for (i = 0; i < 5; i++) {
		let li = document.createElement("li");
		li.id = "letter" + i;
		console.log(li)
		
		ul.appendChild(li);
	}
	document.getElementById("letter").appendChild(ul);
	guess++
}

function check() {
	var input = document.getElementById("input").value;
	var inputWord = input.split("");
	console.log(inputWord)

	for (var i = 0; i < 5; i++) {
		if (inputWord[i] == word[i]) {
			document.getElementById(`letter${i}`).innerHTML = inputWord[i];
			document.getElementById(`letter${i}`).style.backgroundColor = "green";
		} else if (word.includes(inputWord[i])){
			document.getElementById(`letter${i}`).innerHTML = inputWord[i];
			document.getElementById(`letter${i}`).style.backgroundColor = "yellow";			
		} else {
			document.getElementById(`letter${i}`).innerHTML = " ";		
		}
	}
}

if (inputWord.every(element => element ==="")) {
	var win = true;
    setTimeout(function(){
        alert("Je hebt het woord goed geraden!");
        location.reload();},5000)
}


if (guess === 5) {
	setTimeout(function(){
        alert("Het juiste woord was " + randomWord);
        location.reload();},5000)
}

