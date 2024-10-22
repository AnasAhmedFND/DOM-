// heading............................
let topItem = document.getElementById('heading');
topItem.style.textAlign = 'center'
topItem.style.borderBottom = '2px solid black'
topItem.style.width = '30%'
topItem.style.marginLeft = '35%'
topItem.style.paddingBottom = '5px'


let section = document.getElementById('section')
section.style.display = 'flex'
section.style.gap = '10px'
section.style.border = '3px solid black'
section.style.width = '50%'
section.style.marginLeft = '25%'
section.style.justifyContent = 'space-around'
section.style.padding = '10px'
section.style.borderRadius = '25px'
section.style.marginTop = '5%'

// cards......................................................
let card = document.getElementsByClassName('cards');
for(cardItem of card){
    cardItem.style.border = '1px solid black'
    cardItem.style.padding = '5px'
    cardItem.style.borderRadius = '15px'


}


let bookHeading = document.getElementsByClassName('book');
for(bookH1 of bookHeading){
    bookH1.style.color = 'green'
    
}

// li ........................
let listItem = document.getElementsByClassName('liOne');
listItem[0].style.color = 'red'
listItem[1].style.color = 'blue'


let listTwo = document.getElementsByClassName('liTwo');
listTwo[0].style.color = 'red'
listTwo[1].style.color = 'blue'

let listThree = document.getElementsByClassName('liThree');
listThree[0].style.color = 'red'
listThree[1].style.color = 'blue'


