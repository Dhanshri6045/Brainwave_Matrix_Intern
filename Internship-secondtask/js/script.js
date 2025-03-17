const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar)
{
    bar.addEventListener('click',()=>
    {
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    addToCartButton.addEventListener('click', () => {
        const productTitle = document.querySelector('.product-title').innerText;
        const productPrice = parseFloat(document.querySelector('.product-price').innerText.replace('$', ''));

        // Add item to cart
        const listItem = document.createElement('li');
        listItem.innerText = `${productTitle} - $${productPrice.toFixed(2)}`;
        cartItemsList.appendChild(listItem);

        // Update total price
        totalPrice += productPrice;
        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
    });
});