const sozElement = document.getElementById('soz')
const inputEl = document.getElementById('user-word')
const natijaEl = document.getElementById('natija')
const timeEl = document.getElementById('times')
const modalEl = document.getElementById('modal')
const ballEl = document.getElementById('bal')
const restartEl = document.getElementById('restart')
const ballarEl = document.querySelector('.ballar')
let randomWorld
let userScore = 0
let usertime = 10
inputEl.focus( )


const changeWord = () => {
    let randomnumber = Math.floor(Math.random() * words.length)
    randomWorld = words[randomnumber]
    sozElement.textContent = randomWorld
}
changeWord()
inputEl.addEventListener('input', () => {
    const userword = inputEl.value

    if (userword == randomWorld) {
        changeWord()
        userScore++
        usertime += 3
        natijaEl.textContent = userScore
        ballEl.textContent = userScore
        inputEl.value = ''
    }
})

restartEl.addEventListener('click', () => {
    modalEl.classList.remove('hidden')
    usertime = 10
    userScore = 0;
    natijaEl.textContent = 0;
    inputEl.value = "";
    const timeInterval = setInterval(() => {
        if (usertime > 0) {
            usertime--
            timeEl.textContent = `${usertime}s`
        } else {
            clearInterval(timeInterval)
            modalEl.classList.add('hidden')
        }
    }, 1000)
})

const timeInterval = setInterval(() => {
    if (usertime > 0) {
        usertime--
        timeEl.textContent = `${usertime}s`
    } else {
        clearInterval(timeInterval)
        modalEl.classList.add('hidden')
    }
}, 1000)

