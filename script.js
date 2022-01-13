var input = document.getElementById("input");
var randomWord = words[Math.floor(Math.random() * words.length)];
var word = randomWord.split("");



wordBoxes();
function wordBoxes() {
	var ul = document.createElement("ul");

	for (i = 0; i < 5; i++) {
		var li = document.createElement("li");
		li.innerHTML = "test";
		ul.appendChild(li);
	}
	document.getElementById("letter").appendChild(ul);
}
