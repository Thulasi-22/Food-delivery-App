//selecting navbar linkes
let list=document.getElementById('list')
list.addEventListener('click',()=>{
  window.location.href="index2.html"
})


//selecting items from item to item4 in page1
let item=document.getElementById('item')
let item1=document.getElementById('item1')
let item2=document.getElementById('item2')
let item3=document.getElementById('item3')
let item4=document.getElementById('item4')
 item1.addEventListener('click',()=>{
    item.style.backgroundImage='url(images/food2.png)';
   //  item1.style.backgroundImage='url(images/food1.png)';
 })
 item2.addEventListener('click',()=>{
    item.style.backgroundImage='url(images/food3.png)';
   //  item2.style.backgroundImage='url(images/food1.png)';
 })
 item3.addEventListener('click',()=>{
    item.style.backgroundImage='url(images/food4.png)';
   //  item3.style.backgroundImage='url(images/food1.png)';
 })
 item4.addEventListener('click',()=>{
    item.style.backgroundImage='url(images/food5.png)';
   //  item4.style.backgroundImage='url(images/food1.png)';
 })
let button=document.querySelector('button')
button.addEventListener('click',()=>{
  window.location.href="index2.html"
})
