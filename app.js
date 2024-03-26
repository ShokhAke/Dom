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

// const input = document.getElementById('username');  // Element qiymatini o'zgartirish
// // input.value = 'Shokh_Ake';
// input.placeholder = 'Yangi placeholder' // Placeholder o'zgartirish

// const title = document.querySelector('#title') 
// title.innerHTML = '<i>Shokh Ake</i>'; // Element tanasini o'zgartirish


     
            // setAttribute & getAttribute !!!

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));  // Attribute ni tanlab oladi

// link.setAttribute('href', 'https://youtube.com')  // Attribute ni o'zgartirish | yangi attribute o'rnatadi
// link.textContent = 'Go To Youtube Main Page';

// const text = document.querySelector('p');
// console.log(text.getAttribute('class'));

// text.setAttribute('class', 'new-class')

// text.setAttribute('style', 'color: green;')



            // CSS stylelarini o'zgartirish
            
// const heading = document.querySelector('h1')
// // heading.setAttribute('style', 'margin: 50px;')   // Bunda faqat o'zgartirib bulgani uchun margin qushilganiga html da berilgan color uchib ketyabdi
// console.log(heading.style);
// heading.style.textAlign = 'center'  // Style berish | Qo'shimcha sifatida qo'shadi
// heading.style.margin = '100px'
// heading.style.color = 'red'
// heading.style.fontSize = '50px'
// heading.style.margin = ''  // Marginni 0 ga tenglab qo'yish

// const body = document.querySelector('body')
// body.style.background = '#333'



        // Element yaratish && Element qo'shish && Element o'chirish !!!
    // Element yaratish
// const paragraph = document.createElement('p');  // Htmlda yo'q elementni yaratish
// console.log(paragraph);

// const text = document.createTextNode("Bu yerda text bor");  // Faqatgina textni o'zini yaratish
// console.log(text);

    // Element qo'shish !  Yaratilgan elementni DOM ga qo'shish