window.onload = function()
{
	sort();
	readLocalData();
}

function playAgain()
{
	window.location.href = "battleship.html";
}

var winner = localStorage.getItem("winner");
localStorage.removeItem("winner");

if(winner != null)
{
	add(winner);
}

function addListItem(item) {
	var winnerList = document.getElementById("winnerList");
	var listItem = document.createElement("li");
	listItem.appendChild(document.createTextNode(item));
	winnerList.appendChild(listItem);
	}

function sort()
{
	for(var i = 0; i < localStorage.length; i++)
	{
		if(getNumber(localStorage.getItem(localStorage.length-1)) > getNumber(localStorage.getItem(i)))
		{
			var temp = localStorage.getItem(i);
			localStorage.setItem(i, localStorage.getItem(localStorage.length-1));
			localStorage.setItem(localStorage.length-1, temp);
		}
	}

	trim();
}

function trim()
{
	if(localStorage.length > 9)
	{
		for(var i = 10; i < localStorage.length; i++)
		{
			localStorage.removeItem(i);
		}
	}
}

function getNumber(string)
{
	return parseInt(string.substring(0,2));
}


function readLocalData() 
{
	if (typeof(Storage) !== "undefined") {
		theList = document.getElementById("winnerList");
		for (var i = 0; i < localStorage.length; i++) 
		{
			addListItem(localStorage.getItem(i));	
		}
	}	
}

function add(item)
{
	if (typeof(Storage) !== "undefined") 
	{
		var i = localStorage.length;
		localStorage.setItem(i, item);
	}
}