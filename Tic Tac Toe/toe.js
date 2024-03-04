//console.log('hehe')
//RESTART BTN
var restart = document.querySelector("#b");

//Grabs all sqrs
var squares = document.querySelectorAll('td');


//Clear all sqrs

function clearBoard(){
    for (var i = 0; i < squares.length; i++){
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard);

//check the sqrs
function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    } else if (this.textContent == "X"){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

for (var i = 0; i , squares.length; i++){
    squares[i].addEventListener('click',changeMarker)
}

//For loop for adddevent