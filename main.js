//Первое задание

let a = new Set()
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

// Второе задание не могу сделать через set 
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


//Четвертое задание


let btn1 = document.querySelector('.btn1')
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num1 = ' '
    for (let i of num){
        console.log(i)
    }
    document.querySelector('.out1').innerHTML += num 


btn1.onclick = () =>{
    for(let i = 5; num.length > i; i++){
        num1 += num[i] + ' '
    }
    console.log(num1)
    document.querySelector('.out2').innerHTML += num1 + ' '
}










// btn1.onclick = () => {
//     c1.push(inPut1.value)
//     inPut1.value = ' '
//     console.log(c1)
//     for(let i of c1){
//         console.log(i)
//     }
//     let out1 = ' '
//     for( let i = 0; c1.length > i; i ++){
//         out1 += c1[i]
//         document.querySelector('.out1').innerHTML = out1
//     }    
// }


