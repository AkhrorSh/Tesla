let km = document.querySelector('.km h2 span')
let prc = document.querySelector('.price h2 span')

// let parent = document.querySelectorAll('.speed')
let btns = document.querySelectorAll('.btns button')

let wheel_one = document.querySelector('.wheel-1')
let wheel_two = document.querySelector('.wheel-2')


btns.forEach((btn, idx) => {
    let i = idx + 1
    btn.onclick = () => {

        if (i % 2) {
            actionPlus(idx)
        } else {
            actionMinus(idx)
        }
    }
})

let speed = 60
let temp = 20
let disc = 19
let distance = 750
let price = 89990
let toggle = 0

let switch_btns = document.querySelectorAll('.switch button')
let allSwitch = document.querySelectorAll('.switch figure')

let num = 0

let hide = document.querySelectorAll('#hide')
let color = document.querySelector('.color')

let img = document.querySelector('.tesla img')

allSwitch.forEach((sw, idx) => {
    sw.onclick = () => {
        if (num == 0) {
            sw.classList.add('switch-active')
            switch_btns[idx * 2].style.background = "rgb(68, 171, 255)"
            switch_btns[idx * 2 + 1].style.background = "rgb(68, 171, 255)"
            num = 1
            if (idx == 1) {
                price += 10000
                prc.innerHTML = price
            } else if (idx == 2) {
                hide.forEach(item => {

                    if (item.id == 'hide') {
                        item.style.display = 'none'
                        color.style.display = 'block'
                        img.src = './img/black.png'
                        wheel_one.style.display = 'none'
                        wheel_two.style.display = 'none'
                    }
                })
            } else if (idx == 0) {
                distance -= 30
                km.innerHTML = distance
            }
        } else {
            sw.classList.remove('switch-active')
            switch_btns[idx * 2].style.background = "rgb(90, 90, 90)"
            switch_btns[idx * 2 + 1].style.background = "rgb(90, 90, 90)"
            num = 0
            if (idx == 1) {
                price -= 10000
                prc.innerHTML = price
            } else if (idx == 2) {
                hide.forEach(item => {

                    if (item.id == 'hide') {
                        item.style.display = 'block'
                        color.style.display = 'none'
                        img.src = './img/photo_2023-11-15_17-26-44.jpg'
                        wheel_one.style.display = 'block'
                        wheel_two.style.display = 'block'
                    }
                })
            } else if (idx == 0) {
                distance += 30
                km.innerHTML = distance
            }
        }

    }
})



function actionPlus(number) {
    if (number == 0) {
        if (speed > 215) {
            speed = 220
        } else {
            speed += 5
            distance -= 5
        }
        km.innerHTML = distance
        document.querySelector('.speed h2 span').innerHTML = speed
    } else if (number == 2) {
        temp != 80 ? temp++ : temp
        if (temp > 10) {
            allSwitch[0].classList.remove('switch-active')
            switch_btns[1].style.background = "rgb(90, 90, 90)"
            switch_btns[0].style.background = "rgb(90, 90, 90)"
        }
        document.querySelector('.temp h2 span').innerHTML = temp
    } else if (number == 4) {
        disc = 21
        wheel_one.classList.add("active_one")
        wheel_two.classList.add("active_two")
        document.querySelector('.disc h2').innerHTML = disc
        if (toggle == 0) {
            price += 5000
            prc.innerHTML = price
            toggle = 1
        }


    }
}

function actionMinus(number) {
    if (number == 1) {
        if (speed > 0) {
            speed -= 5
            distance += 5
        }
        km.innerHTML = distance
        document.querySelector('.speed h2 span').innerHTML = speed
    } else if (number == 3) {
        temp--
        if (temp < 10) {
            allSwitch[0].classList.add('switch-active')
            switch_btns[0].style.background = "rgb(68, 171, 255)"
            switch_btns[1].style.background = "rgb(68, 171, 255)"
        }

        document.querySelector('.temp h2 span').innerHTML = temp
    } else if (number == 5) {
        disc = 19
        wheel_one.classList.remove("active_one")
        wheel_two.classList.remove("active_two")
        document.querySelector('.disc h2').innerHTML = disc
        if (toggle == 1) {
            price -= 5000
            prc.innerHTML = price
            toggle = 0
        }
    }
}

let colors = document.querySelectorAll('.colors')

let source = [
    './img/black.png',
    './img/white.png',
    './img/beige.png'
]


colors.forEach(btn => {
    btn.onclick = () => {
        if (btn.id == "black") {
            img.src = source[0]
        } else if (btn.id == "white") {
            img.src= source[1]
        } else if (btn.id == "beige") {
            img.src = source[2]
        }
    }
})

colors.forEach(btn => {
    btn.onmouseenter = () => {
        if (btn.id == "black") {
            img.src = source[0]
        } else if (btn.id == "white") {
            img.src = source[1]
        } else if (btn.id == "beige") {
            img.src = source[2]
        }
    }
})

// colors.forEach(btn => {
//     btn.onmouseleave = () => {
//         if (btn.id == "black") {
//             img.src = source[0]
//         } else if (btn.id == "white") {
//             img.src = source[1]
//         } else if (btn.id == "beige") {
//             img.src = source[2]
//         } iphone_color.innerHTML = color
//     }
// })