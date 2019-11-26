const letters = "ABCDEFGHIJ";

var p1A = 5;
var p1B = 4;
var p1S = 3;
var p2A = 5;
var p2B = 4;
var p2S = 3;
var p1Lives = 0;
var p2Lives = 0;
var p1Name, p1ShipInput, p1ShipArray;
var p2Name, p2ShipInput, p2ShipArray;

function startGame()
{
	document.getElementById("startBtn").style.display = "none";

	p1Name = prompt("Player 1, enter your name.");
	p1ShipInput = placeShips(p1Name);
	p1ShipArray = parseShips(p1ShipInput, 1);

	p2Name = prompt("Player 2, enter your name.");
	p2ShipInput = placeShips(p2Name);
	p2ShipArray = parseShips(p2ShipInput, 2);

	document.getElementById("sampleTable").style.display = "none";
	
	makeTable(p2ShipArray, "p1TargetShips", 1, 1);
	makeTable(p1ShipArray, "p1Ships", 0, 1);
	makeTable(p1ShipArray, "p2TargetShips", 1, 2);
	makeTable(p2ShipArray, "p2Ships", 0, 2);

	alert(p1Name + ", press OK to take your turn.");
	document.getElementById("playerName").innerText = p1Name;
	showTables("p1TargetShips", "p1Ships");
}

function placeShips(pName)
{
	var shipInput = "";
	var aPlace, bPlace, sPlace;
	do
	{
		aPlace = prompt(pName + ", place your Aircraft Carrier (5 spaces)", "Ex. A1-A5");
		if(/[A-J]([1-9]|10)-[A-J]([1-9]|10)$/.test(aPlace))
		{
			if(/[A-J](10)$/.test(aPlace.substring(0,3)))
			{
				if(!aPlace.substring(5).includes("10"))
				{
					console.log("1");
					aPlace = "";
					alert("Invalid Input");
				}
				else if((aPlace.charCodeAt(4)-aPlace.charCodeAt(0)) != 4)
				{
					console.log("2");
					aPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[A-J][7-9]$/.test(aPlace.substring(0,3)))
			{
				if(aPlace.charAt(1) != aPlace.charAt(4))
				{
					console.log("3");
					aPlace = "";
					alert("Invalid Input");
				}
				else if((aPlace.charCodeAt(3)-aPlace.charCodeAt(0)) != 4)
				{
					console.log("4");
					aPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[G-J]/.test(aPlace.substring(0, 1)))
			{
				if(aPlace.charAt(0) != aPlace.charAt(3))
				{
					console.log("5");
					aPlace = "";
					alert("Invalid Input");
				}
				else if((parseInt(aPlace.substring(4))-parseInt(aPlace.substring(1, 2))) != 4)
				{
					console.log("6");
					aPlace = "";
					alert("Invalid Input");
				}
			}
			else
			{
				if(aPlace.charCodeAt(4) == aPlace.charCodeAt(1))
				{
					if((aPlace.charCodeAt(3)-aPlace.charCodeAt(0)) != 4)
					{
						console.log("7");
						aPlace = "";
						alert("Invalid Input");
					}
				}
				else if(aPlace.charCodeAt(3) == aPlace.charCodeAt(0))
				{
					if((parseInt(aPlace.substring(4))-parseInt(aPlace.substring(1, 2))) != 4)
					{
						aPlace = "";
						alert("Invalid Input");
					}
				}
				else if((aPlace.charCodeAt(3) != aPlace.charCodeAt(0)) && (aPlace.charCodeAt(4) != aPlace.charCodeAt(1)))
				{
					aPlace = "";
					alert("Invalid Input");
				}
			}
		}
	}while((!/^([A-J]([1-9]|10)-[A-J]([1-9]|10))$/.test(aPlace)));
	shipInput += "A:" + aPlace + ";";
	
	do
	{
		bPlace = prompt(pName + ", place your Battleship (4 spaces)", "Ex. A1-A4");
		if(/[A-J]([1-9]|10)-[A-J]([1-9]|10)$/.test(bPlace))
		{
			if(/[A-J](10)$/.test(bPlace.substring(0,3)))
			{
				if(!bPlace.substring(5).includes("10"))
				{
					bPlace = "";
					alert("Invalid Input");
				}
				else if((bPlace.charCodeAt(4)-bPlace.charCodeAt(0)) != 3)
				{
					bPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[A-J][8-9]$/.test(bPlace.substring(0,3)))
			{
				if(bPlace.charAt(1) != bPlace.charAt(4))
				{
					bPlace = "";
					alert("Invalid Input");
				}
				else if((bPlace.charCodeAt(3)-bPlace.charCodeAt(0)) != 3)
				{
					bPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[H-J]/.test(bPlace.substring(0, 1)))
			{
				if(bPlace.charAt(0) != bPlace.charAt(3))
				{
					bPlace = "";
					alert("Invalid Input");
				}
				else if((parseInt(bPlace.substring(4))-parseInt(bPlace.substring(1, 2))) != 3)
				{
					bPlace = "";
					alert("Invalid Input");
				}
			}
			else
			{
				if(bPlace.charCodeAt(4) == bPlace.charCodeAt(1))
				{
					if((bPlace.charCodeAt(3)-bPlace.charCodeAt(0)) != 3)
					{
						bPlace = "";
						alert("Invalid Input");
					}
				}
				else if(bPlace.charCodeAt(3) == bPlace.charCodeAt(0))
				{
					if((parseInt(bPlace.substring(4))-parseInt(bPlace.substring(1, 2))) != 3)
					{
						bPlace = "";
						alert("Invalid Input");
					}
				}
				else if((bPlace.charCodeAt(3) != bPlace.charCodeAt(0)) && (bPlace.charCodeAt(4) != bPlace.charCodeAt(1)))
				{
					bPlace = "";
					alert("Invalid Input");
				}
			}
		}
	}while(!/^([A-J]([1-9]|10)-[A-J]([1-9]|10))$/.test(bPlace));
	shipInput += "B:" + bPlace + ";";

	do
	{
		sPlace = prompt(pName + ", place your Submarine (3 spaces)", "Ex. A1-A3");
		if(/[A-J]([1-9]|10)-[A-J]([1-9]|10)$/.test(sPlace))
		{
			if(/[A-J](10)$/.test(sPlace.substring(0,3)))
			{
				if(!sPlace.substring(5).includes("10"))
				{
					sPlace = "";
					alert("Invalid Input");
				}
				else if((sPlace.charCodeAt(4)-sPlace.charCodeAt(0)) != 2)
				{
					sPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[A-J][9]$/.test(sPlace.substring(0,3)))
			{
				if(sPlace.charAt(1) != sPlace.charAt(4))
				{
					sPlace = "";
					alert("Invalid Input");
				}
				else if((sPlace.charCodeAt(3)-sPlace.charCodeAt(0)) != 2)
				{
					sPlace = "";
					alert("Invalid Input");
				}
			}
			else if(/[I-J]/.test(sPlace.substring(0, 1)))
			{
				if(sPlace.charAt(0) != sPlace.charAt(3))
				{
					sPlace = "";
					alert("Invalid Input");
				}
				else if((parseInt(sPlace.substring(4))-parseInt(sPlace.substring(1, 2))) != 2)
				{
					sPlace = "";
					alert("Invalid Input");
				}
			}
			else
			{
				if(sPlace.charCodeAt(4) == sPlace.charCodeAt(1))
				{
					if((sPlace.charCodeAt(3)-sPlace.charCodeAt(0)) != 2)
					{
						sPlace = "";
						alert("Invalid Input");
					}
				}
				else if(sPlace.charCodeAt(3) == sPlace.charCodeAt(0))
				{
					if((parseInt(sPlace.substring(4))-parseInt(sPlace.substring(1, 2))) != 2)
					{
						sPlace = "";
						alert("Invalid Input");
					}
				}
				else if((sPlace.charCodeAt(3) != sPlace.charCodeAt(0)) && (sPlace.charCodeAt(4) != sPlace.charCodeAt(1)))
				{
					sPlace = "";
					alert("Invalid Input");
				}
			}
		}
	}while(!/^([A-J]([1-9]|10)-[A-J]([1-9]|10))$/.test(sPlace));

	shipInput += "S:" + sPlace;

	return shipInput;
}

function parseShips(input, playerNum)
{
	var shipArray = new Array(11);
	for(var i = 0; i < shipArray.length; i++)
	{
		shipArray[i] = new Array(11);
	}
	for(var i = 0; i < shipArray.length; i++)
	{
		for(var j = 0; j < shipArray[i].length; j++)
		{
			if(j == 0 && i == 0)
			{
				shipArray[i][j] = '';
			}
			else if(j == 0)
			{
				shipArray[i][j] = i;
			}
			else if(i == 0)
			{
				shipArray[i][j] = letters[j-1];
			}
			else
			{
				shipArray[i][j] = 0;
			}
		}
	}
	for(var i = 0; i < input.length; i++)
	{
		if(input[i] == 'A')
		{
			i = i + 2;
			setPositions('A', shipArray, input.substring(i, i+5), playerNum);
			i = i + 5;
		}
		else if (input[i] == 'B')
		{
			i = i + 2;
			setPositions('B', shipArray, input.substring(i, i+5), playerNum);
			i = i + 5;
		}
		else if (input[i] == 'S')
		{
			i = i + 2;
			setPositions('S', shipArray, input.substring(i, i+5), playerNum);
			i = i + 5;
		}
	}
	return shipArray;
}

function setPositions(type, array, input, playerNum)
{
	var positions;
	var parsedInput = input.charCodeAt(0);
	var numSquares;
	if(type == 'A')
	{
		numSquares = 5;
	}
	else if(type == 'B')
	{
		numSquares = 4;
	}
	else
	{
		numSquares = 3;
	}
	if(input[0] == input[3] || input[0] == input[4])
	{
		for(var i = 0; i < numSquares; i++)
		{
			var col = parsedInput-64;
			var row = parseInt(input[1], 10) + i;
			array[row][col] = numSquares;
			if(playerNum == 1)
			{
				p1Lives++;
			}
			else
			{
				p2Lives++;
			}
		}
	}
	else
	{
		for(var i = 0; i < numSquares; i++)
		{
			var col = parsedInput-64 + i;
			var row = parseInt(input.substring(1, 3), 10);
			array[row][col] = numSquares;
			if(playerNum == 1)
			{
				p1Lives++;
			}
			else
			{
				p2Lives++;
			}
		}
	}
}

function makeTable(array, tableName, mode, playerNum) 
{
	var table = document.createElement('table');
	table.id = tableName;
	for (var i = 0; i < array.length; i++) 
	{
		var row = document.createElement('tr');
		var cell;
		for (var j = 0; j < array[i].length; j++) 
		{
			if(i == 0 || j == 0)
			{
				cell = document.createElement('th');
				cell.textContent = array[i][j];
				row.appendChild(cell);
			}
			else if(mode == 1)
			{
				cell = document.createElement('td');
    			cell.id = tableName + letters[j-1] + i;
				cell.addEventListener("click", checkHit.bind(this, tableName + letters[j-1] + i, array, playerNum, mode));
    			row.appendChild(cell);
			}
			else if(mode == 0)
			{
				cell = document.createElement('td');
    			cell.id = tableName + letters[j-1] + i;
    			if(array[i][j] == 5 || array[i][j] == -1)
    			{
    				cell.textContent = "A";
    			}
    			else if(array[i][j] == 4 || array[i][j] == -1)
    			{
    				cell.textContent = "B";
    			}
    			else if(array[i][j] == 3 || array[i][j] == -1)
    			{
    				cell.textContent = "S";
    			}
    			row.appendChild(cell);
			}
		}
			table.appendChild(row);
			}
	$('#tableDiv').append(table);
	document.getElementById(tableName).style.display = "none";
}

function checkHit(square, array, playerNum, mode)
{
	var row = parseInt(square.substring(square.length-1));
	if(row == 0)
	{
		row = 10;
	}
	if(row == 10)
	{
		var col = square.charCodeAt(square.length-3) - 64;
	}
	else
	{
		var col = square.charCodeAt(square.length-2) - 64;
	}
	
	if(array[row][col] != -1 && array[row][col] != 1)
	{
		if(array[row][col] > 0)
		{
			document.getElementById(square).style.backgroundColor = "red";
			var shipType = array[row][col];
			array[row][col] = -1;
			alert("HIT!");
			if(shipType == 5)
			{
				var gameOver = hit(playerNum, 'A');
			}
			else if(shipType == 4)
			{
				var gameOver = hit(playerNum, 'B');
			}
			else if(shipType == 3)
			{
				var gameOver = hit(playerNum, 'S');
			}
		}
		else
		{
			document.getElementById(square).style.backgroundColor = "white";
			array[row][col] = 1;
			alert("MISS.");
		}
		if(playerNum == 2)
		{
			p1ShipArray = array;
			updateTable("p1Ships", p1ShipArray);
			switchTurns(playerNum);
		}
		else if(playerNum == 1)
		{
			p2ShipArray = array;
			updateTable("p2Ships", p2ShipArray);
			switchTurns(playerNum);
		}
	}
}

function showTables(targetShips, userShips)
{
	document.getElementById(targetShips).style.display = "table";
	document.getElementById(userShips).style.display = "table";
}

function hideTables(targetShips, userShips)
{
	document.getElementById(targetShips).style.display = "none";
	document.getElementById(userShips).style.display = "none";
}

function updateTable(userShips, array)
{
	for(var i = 0; i < array.length; i++)
	{
		for(var j = 0; j < array[i].length; j++)
		{
			if(i == 0 || j == 0)
			{
				continue;
			}
			if(array[i][j] == 1)
			{
				document.getElementById(userShips + letters[j-1] + i).style.backgroundColor = "white";
			}
			else if(array[i][j] == -1)
			{
				document.getElementById(userShips + letters[j-1] + i).style.backgroundColor = "red";
			}
		}
	}
}

function switchTurns(playerNum)
{
	if(playerNum == 1)
	{
		hideTables("p1TargetShips", "p1Ships");
		document.getElementById("playerName").innerText = p2Name;
		setTimeout(function(){ alert(p2Name + ", press OK to begin your turn."); showTables("p2TargetShips", "p2Ships");}, 500);
	}
	else
	{
		hideTables("p2TargetShips", "p2Ships");
		document.getElementById("playerName").innerText = p1Name;
		setTimeout(function(){ alert(p1Name + ", press OK to begin your turn."); showTables("p1TargetShips", "p1Ships");}, 500);
	}
}

function hit(playerNum, ship)
{
	if(playerNum == 1)
	{
		if(ship == 'A')
		{
			p2A--;
			if(p2A == 0)
			{
				alert("You sunk the aircraft carrier!");
			}
		}
		else if(ship == 'B')
		{
			p2B--;
			if(p2B == 0)
			{
				alert("You sunk the battleship!");
			}
		}
		else
		{
			p2S--;
			if(p2S == 0)
			{
				alert("You sunk the submarine!");
			}
		}
		p2Lives--;
		checkEnd(playerNum, p2Lives);
	}
	else
	{
		if(ship == 'A')
		{
			p1A--;
			if(p1A == 0)
			{
				alert("You sunk the aircraft carrier!");
			}
		}
		else if(ship == 'B')
		{
			p1B--;
			if(p1B == 0)
			{
				alert("You sunk the battleship!");
			}
		}
		else
		{
			p1S--;
			if(p1S == 0)
			{
				alert("You sunk the submarine!");
			}
		}
		p1Lives--;
		checkEnd(playerNum, p1Lives);
	}
}

function checkEnd(player, lives)
{
	if(lives == 0)
	{
		if(player == 1)
		{
			alert(p1Name + " has won the game!");
			winString = (24-2*(12-p1Lives));
			winString = winString + " - " + p1Name;
			localStorage.setItem("winner", winString)
			window.location.href = "leaderboard.html";
		}
		else
		{
			alert(p2Name + " has won the game!");
			winString = (24-2*(12-p2Lives));
			winString = winString + " - " + p2Name;
			localStorage.setItem("winner", winString);
			window.location.href = "leaderboard.html";
		}
	}
}