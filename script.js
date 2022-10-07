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
const verificacao = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

function checkWinner() {
    verificacao.forEach((arr, ind) => {
       if(won(...arr)){
        winner = true
        box.classList = `winner__case${ind + 1} winner`
       }
    })
    if(winner) setWinner()
}

function won(a, b, c) {
    return (spacesMarked[a] === spacesMarked[b]  && spacesMarked[a] === spacesMarked[c]  && spacesMarked[a] !== '')
}


function setWinner() {
    showBnt.classList = "show__btn";
    if(nextMove) {
        message.innerHTML = "X é o vencedor!"
        return
    }
    message.innerHTML = "O é o vencedor!"
}