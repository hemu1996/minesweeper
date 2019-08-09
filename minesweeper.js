var a = [[1,0,0],[0,0,0],[1,0,0]];

function displayArray() {
	let display = ''
	for(i=0; i<3; i++)
	display+= a[i] + '<br />'
	document.getElementById("initialArrayEle").innerHTML = display;
}

function revealMines() {
	let display = ''
	for (i=0; i<3; i++){
		for(j=0; j<3; j++) {
			if(a[i][j]===1){
				a[i][j]=9
			}
		}
	}
	for (i=0; i<3; i++){
		for(j=0; j<3; j++) {
			if(a[i][j]!=9){
				a[i][j]=checkcount(i, j)
			}
		}
	}
	for(i=0; i<3; i++)
	display+= a[i] + '<br />'
	document.getElementById("arrayEle").innerHTML =display;
	document.getElementById('btn1').disabled = true;
}

function checkcount(i, j)
{
count = 0
if(i>=0 && a[i][j+1]===9){count++}
if(i+1<3 && a[i+1][j+1]===9){count++}
if(i+1<3 && a[i+1][j]===9){count++}
if(i+1<3 && a[i+1][j-1]===9){count++}
if(i>=0 && a[i][j-1]===9){count++}
if(i-1>=0 && a[i-1][j+1]===9){count++}
if(i-1>=0 && a[i-1][j]===9){count++}
if(i-1>=0 && a[i-1][j-1]===9){count++}
return count
}