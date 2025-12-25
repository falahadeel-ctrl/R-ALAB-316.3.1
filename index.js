//Assignment-1

//part1
let mainEl =document.querySelector('main');
mainEl.style.backgroundColor="var(--main-bg)";
// mainEl.innerHTML="<h1>DOM Manipulation</h1>";
let h1=document.createElement('h1');
h1.textContent="DOM Manipulation";
mainEl.prepend(h1);
mainEl.classList.add('flex-ctr');

//part2
let topMenuEL=document.getElementById("top-menu");
topMenuEL.style.height='100%';
topMenuEL.style.backgroundColor="var(--top-menu-bg)";
topMenuEL.classList.add('flex-around');

//part3
var menuLinks = [
{ text: 'about', href: '/about' },
{ text: 'catalog', href: '/catalog' },
{ text: 'orders', href: '/orders' },
{ text: 'account', href: '/account' },
];
for(let i=0;i<menuLinks.length;i++){
let new1 =document.createElement('a');
new1.setAttribute("href",menuLinks[i].href);
new1.textContent=menuLinks[i].text;
topMenuEL.append(new1);
}

//Assignment-2

