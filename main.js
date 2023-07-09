let turn = "x"
let title = document.querySelector(".title")
let squares = []

function end(num1,num2,num3) {
    title.innerHTML = `winner`
    document.getElementById("item"+ num1).style.backgroundColor = "#000"
    document.getElementById("item"+ num2).style.backgroundColor = "#000"
    document.getElementById("item"+ num3).style.backgroundColor = "#000"
    
    setInterval(function(){title.innerHTML += '.'} , 1000)
    setTimeout(function(){location.reload()},4000)
}

function winner() {
    for (let i = 0; i < 10; i++) {
        squares[i] = document.getElementById("item" + i);
    }    

    if (squares[1].innerHTML == squares[2].innerHTML && squares [2].innerHTML == squares [3].innerHTML && squares[1].innerHTML != "") {
        end(1,2,3)
    }
    else if(squares[4].innerHTML == squares[5].innerHTML && squares [5].innerHTML == squares [6].innerHTML && squares[5].innerHTML != "") {
        end(4,5,6)
    }
    else if(squares[7].innerHTML == squares[8].innerHTML && squares [8].innerHTML == squares [9].innerHTML && squares[8].innerHTML != "") {
        end(7,8,9)
    }




    else if(squares[1].innerHTML == squares[4].innerHTML && squares [4].innerHTML == squares [7].innerHTML && squares[1].innerHTML != "") {
        end(1,4,7)
    }
    else if(squares[2].innerHTML == squares[5].innerHTML && squares [5].innerHTML == squares [8].innerHTML && squares[5].innerHTML != "") {
        end(2,5,8)
    }
    else if(squares[3].innerHTML == squares[6].innerHTML && squares [6].innerHTML == squares [9].innerHTML && squares[6].innerHTML != "") {
        end(3,6,9)
    }

    else if(squares[1].innerHTML == squares[5].innerHTML && squares [5].innerHTML == squares [9].innerHTML && squares[5].innerHTML != "") {
        end(1,5,9)
    }
    else if(squares[3].innerHTML == squares[5].innerHTML && squares [5].innerHTML == squares [7].innerHTML && squares[5].innerHTML != "") {
        end(3,5,7)
    }




}

function game(id) {
    let element = document.getElementById(id)

      if(turn === "x" && element.innerHTML == "")
      {
        element.innerHTML = "x"
        turn = "o"
        title.innerHTML = "o"
      }
      else if(turn === "o" && element.innerHTML == "" ){
        element.innerHTML = "o"
        turn = "x"
        title.innerHTML = "x"
      }
      winner()

}



