let nextMove = true;
// true === X && false === O
const box = document.getElementById("box");
const message = document.getElementById("winner__message");
const showBnt = document.getElementById("btn__reload");
let winner = false;
console.log(box)
let spacesMarked = [];
while (spacesMarked.length < 9 ) {
    spacesMarked.push(''); 
}
let count = 0
function reload() {
    location.reload()
}
function mark(event, ind) {
    if(winner) return
    const space = event.target
    space.disabled = true;
    if(nextMove) {
        space.classList = "space__X";
        spacesMarked.splice(ind, 1, 'X')
        message.innerHTML = "Vez do O!"
    } else {
        space.classList = "space__O";
        spacesMarked.splice(ind, 1, 'O')
        message.innerHTML = "Vez do X!"
    }
    checkWinner()
    counter()
    if(!winner){
        nextMove = !nextMove
        return
    }
}
function counter() {
    count++
    if (count === 9 && !winner){
        message.innerHTML = "Deu velha :(";
        showBnt.classList = "show__btn";
    }
}

function checkWinner() {
    if(won(0, 1, 2)) {
        box.classList = "winner__case1 winner";
    } else if (won(3, 4, 5)){
        box.classList = "winner__case2 winner";
    } else if (won(6, 7, 8)){
        box.classList = "winner__case3 winner";
    } else if (won(0, 3, 6)){
        box.classList = "winner__case4 winner";
    }else if (won(1, 4, 7)){
        box.classList = "winner__case5 winner";
    } else if (won(2, 5, 8)){
        box.classList = "winner__case6 winner";
    }else if (won(0, 4, 8)){
        box.classList = "winner__case7 winner";
    } else if (won(6, 4, 2)){
        box.classList = "winner__case8 winner";
    } else {
        return
    }
    setWinner()
    winner = true
}

function setWinner() {
    showBnt.classList = "show__btn";
    if(nextMove) {
        message.innerHTML = "X é o vencedor!"
        return
    }
    message.innerHTML = "O é o vencedor!"
}


function won(a, b, c) {
    return (spacesMarked[a] === spacesMarked[b]  && spacesMarked[a] === spacesMarked[c]  && spacesMarked[a] !== '')
}