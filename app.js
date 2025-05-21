let money = document.querySelector('#money')
let coffeMain = document.querySelector('#coffeMain')
let coffeName = document.querySelector('.coffeName')
let change = document.querySelector('.change')
let procent = document.querySelector('.procent')

let takeChange = () => {
    change.innerText = 'Take your change here'
    money.value = ''
}

let takeACoffe = () => {
    coffeName.innerText = 'Take your coffe here'
}

let buyCoffe = (event) => {
    let target = event.target
    let myMoney = Number(money.value)
    let price = Number(target.innerText)
    if(target.tagName === 'BUTTON') {
        if(coffeName.innerText === 'Take your coffe here') {
            if(myMoney >= price) {
                coffeName.innerHTML = ''
                let div = document.createElement('DIV')
                coffeName.appendChild(div)
                div.style = `height: 10px; width: 90%;`
                let divPrc = document.createElement('DIV')
                div.appendChild(divPrc)
                divPrc.style = `width: 0%; height: 100%; background-color: blue;`
                let prc = 1
                let inter = setInterval(() => {
                    divPrc.style.width = `${prc}%`
                    if(prc === 100) {
                        coffeName.innerText = `Take your coffe \    n${target.parentElement.parentElement.children[0].innerText}`
                        if(myMoney === price) {
                            change.innerText = 'You have not a change'
                        } else {
                            change.innerText = `Take your change\n ${myMoney - price}`
                            money.value = `${myMoney - price}`
                        }
                        clearInterval(inter)
                    }
                    prc++
                }, 70);
            } else {
                let second = 2
                coffeName.innerText = 'Input more Money!!'
                let moreMoney = setInterval(() => {
                    if(second === 0) {
                        clearInterval(moreMoney)
                        coffeName.innerText = 'Take your coffe here'
                    }
                    second--
                }, 1000);
            }
        } else {
            let second = 2
            coffeName.innerText = 'First take a coffe!!'
            let inter = setInterval(() => {
                if(second === 0) {
                    clearInterval(inter)
                    coffeName.innerText = 'Take your coffe here'
                }
                second--
            }, 1000);
        }
    }
    change.addEventListener('click', takeChange)
    coffeName.addEventListener('click', takeACoffe)
}

coffeMain.addEventListener('click', buyCoffe)