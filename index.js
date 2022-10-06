
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let score = 0

function add1ButtonHome() {
    score += 1
    scoreHome.textContent = score     
}

function add2ButtonHome() {
    score += 2
    scoreHome.textContent = score
}

function add3ButtonHome() {
    score += 3
    scoreHome.textContent = score
}

function add1ButtonGuest() {
    score += 1
    scoreGuest.textContent = score     
}

function add2ButtonGuest() {
    score += 2
    scoreGuest.textContent = score
}

function add3ButtonGuest() {
    score += 3
    scoreGuest.textContent = score
}