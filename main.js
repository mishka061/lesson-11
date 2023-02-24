//Первое задание
let b = [1,2,3]
let a = new Set(b)
a.add('e'), 
a.add('r'), 
a.add('i'), 
a.add('k'), 
a.add('t'), 
a.add('h'), 
a.add('e'), 
a.add('b'),
a.add('e'), 
a.add('s'), 
a.add('t') 
console.log(a)

// Второе задание 
let inPut = document.querySelector('.text')
let btn = document.querySelector('.btn')
let c = []

btn.onclick = () => {
    c.push(inPut.value)
    inPut.value = ' '
    console.log(c)
    let out = ' '
    for( let i = 0; c.length > i; i ++){
        out += c[i]
        document.querySelector('.out').innerHTML = out
    }
}
// Третье задание не могу сделать  
let inPut1 = document.querySelector('.text1')
let btn1 = document.querySelector('.btn1')

let arr =[7, 8, 9]
btn1.onclick = () => {
    arr.push(inPut1.value)
    inPut1.value = ' '
    console.log(arr)
    let out1 = ' '
    for( let i = 0; arr.length > i; i ++){
        out1 += arr[i] + ' '
        document.querySelector('.out1').innerHTML = out1
        // if (out1.indexOf(inPut1.value)) {
        //     console.log(true)
        // }else{
        //     console.log(false)
        // }
    }
}

//Четвертое задание
let btn2 = document.querySelector('.btn2')
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num1 = ' '
    for (let i of num){
        console.log(i)
    }
    document.querySelector('.out2').innerHTML += num 
btn2.onclick = () =>{
    for(let i = 5; num.length > i; i++){
        num1 += num[i] + ' '
    }
    console.log(num1)
    document.querySelector('.out3').innerHTML += num1 + ' '
}
