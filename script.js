const tiles = [...document.querySelectorAll(".tile")];
const restart = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
const playerTurn = document.querySelector(".playerTurn");
const btns = document.querySelectorAll(".btns button")

let player;
let Xcolor = "orange";
let Ocolor = "rgb(0, 247, 255)"

btns.forEach((btn, btns) => {
   btn.addEventListener("click", ()=> {
    if(btn.innerHTML == "X"){
        player = "X"
        playerTurn.textContent = "X"
        
    } else {
        player = "O"
        console.log(btn.innerHTML)
        playerTurn.textContent = "O"
    }
    document.querySelector(".btns").style="display:none"
   })
   

})




tiles.forEach((tile, index, tiles) => {
    tile.addEventListener("click", showTiles);
});
announcer.classList.add("hide")


function showTiles() {
    if (this.textContent === "") {
      
        if (player === "X") {
            this.textContent = "X";
            playerTurn.textContent = "O";
            this.style = `color:${Xcolor}`
            player="O"
            playerTurn.classList.add(`${player}`)
        }
        else {
            this.textContent = "O";
            playerTurn.textContent = "X";
            this.style = `color:${Ocolor}`
            player="X"
            playerTurn.classList.add(`${player}`)
        }
        winnerCase();
        drawCase();
    }

   
    
}

restart.addEventListener("click", restartHandler)

function restartHandler(e){
    window.location.reload ()
}

function winnerCase (){
    if(tiles[0].innerHTML == tiles[1].innerHTML && tiles[1].innerHTML == tiles [2].innerHTML && tiles[0].innerHTML != "" ) {
       announceWinner(announcer, tiles, 0)
    } 
    else if(tiles[3].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML ==tiles [5].innerHTML && tiles[3].innerHTML != ""){
        announceWinner(announcer, tiles, 3)
    }

    else if(tiles[6].innerHTML == tiles[7].innerHTML && tiles[7].innerHTML == tiles [8].innerHTML && tiles[6].innerHTML != ""){
        announceWinner(announcer, tiles, 6)
    }

    else if(tiles[0].innerHTML == tiles[3].innerHTML && tiles[3].innerHTML == tiles [6].innerHTML && tiles[0].innerHTML != ""){
        announceWinner(announcer, tiles, 0)
    }

    else if(tiles[1].innerHTML == tiles[4].innerHTML  && tiles[4].innerHTML == tiles [7].innerHTML && tiles[1].innerHTML != ""){
        announceWinner(announcer, tiles, 1)
    }

    else if(tiles[2].innerHTML == tiles[5].innerHTML  && tiles[5].innerHTML == tiles [8].innerHTML && tiles[2].innerHTML != ""){
        announceWinner(announcer, tiles, 2)
    }

    else if(tiles[0].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles [8].innerHTML && tiles[0].innerHTML != ""){
        announceWinner(announcer, tiles, 0)
    }

    else if(tiles[2].innerHTML == tiles[4].innerHTML && tiles[4].innerHTML == tiles [6].innerHTML && tiles[2].innerHTML != ""){
        announceWinner(announcer, tiles, 2)
    }

    else{
        return
    }
}

function drawCase(){

    if(tiles[0].innerHTML !== "" && tiles[1].innerHTML !== "" && tiles[2].innerHTML !== ""&& tiles[3].innerHTML !== "" && tiles[4].innerHTML !== "" && tiles[5].innerHTML !== ""&& tiles[6].innerHTML !== "" && tiles[7].innerHTML !== "" && tiles[8].innerHTML !== ""  ){
       announcer.innerHTML = "THIS IS A DRAW!!!"
       announcer.classList.remove("hide")
    }
}

function announceWinner (announcer, tiles, number){
    announcer.innerHTML = `${tiles[number].innerHTML} wins`
    announcer.classList.remove("hide")
    playerTurn.innerHTML = ""
}

