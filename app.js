/*--------------- dom selectors ---------------*/

// 1) getElementsByTagName
// const listItem = document.getElementsByTagName('li');
// console.log(listItem[2]);

// 2) getElementsBtClassName
// const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

// 3) getElementById
// const clickBtn = document.getElementById('click-btn')
// console.log(clickBtn);

// 4) querySelector / querySelectorAll
// const listItem = document.querySelector('.list-item')  // Bittasini tanlab oladi | Birinchi chiqganini
// console.log(listItem);

// const listItem = document.querySelectorAll('.list-item');
// listItem.forEach(function(item) {
//     console.log(item);
// })

// const button = document.querySelector('#click-btn');
// console.log(button);


/* --------- HTML dan tanlab olingan element textlarni o'zgartirish. --------- */

// textContent - orqali elementni ichidagi textni olishimiz yoki text qo'shishimiz mumkin

// const title = document.getElementById('title');
// title.textContent += ' JavaScript'

// const listItem = document.querySelectorAll('.list-item')

// listItem.forEach((item) => {
//     item.textContent += ' darslari';
// })


// innerHTML - textContentga o'xshaydi undan farqi buni ichiga tag yozsak ishlaydi unda bulsa nima yozsa ushani chiqarib beradi

// const title = document.getElementById('title')
// title.innerHTML = '<i> New Text </i>'

// const ismlar = ['Shokhjahon', 'Yolgizbek', 'Shokh Ake'];
// const ol = document.querySelector('ol');

// ismlar.forEach((ism) => {
//     ol.innerHTML += `<li>${ism}</li>`
// });

// const harflar = ['S', 'h', 'o', 'k', 'h', 'j', 'a', 'h', 'o', 'n'];
// const text = document.querySelector('.text')

// harflar.forEach((harf) => {
//     text.innerHTML += `<span>${harf}</span>`
// });