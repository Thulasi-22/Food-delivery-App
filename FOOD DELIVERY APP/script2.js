console.log("hello dvbfh")
let order1=document.getElementById('order1')
let order2=document.getElementById('order2')
let order3=document.getElementById('order3')
let order4=document.getElementById('order4')
let order5=document.getElementById('order5')
let order6=document.getElementById('order6')
let order7=document.getElementById('order7')
let order8=document.getElementById('order8')
let order9=document.getElementById('order9')
let cancel=document.getElementById('cancel')
order1.addEventListener('click',()=>{
    order1.textContent='Confirm';
    document.getElementById('cancel').style.display='inline-block';
})
order2.addEventListener('click',()=>{
    order2.textContent='Confirm';
})
order3.addEventListener('click',()=>{
    order3.textContent='Confirm';
})
order4.addEventListener('click',()=>{
    order4.textContent='Confirm';
})
order5.addEventListener('click',()=>{
    order5.textContent='Confirm';
})
order6.addEventListener('click',()=>{
    order6.textContent='Confirm';
})
order7.addEventListener('click',()=>{
    order7.textContent='Confirm';
})
order8.addEventListener('click',()=>{
    order8.textContent='Confirm';
})
order9.addEventListener('click',()=>{
    order9.textContent='Confirm';
})
cancel.addEventListener('click',()=>{
    cancel.textContent='Cancelled'
})