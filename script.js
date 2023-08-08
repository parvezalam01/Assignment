const cartItems = document.querySelectorAll('.card'); //get all the cart items

cartItems.forEach(item => {
    item.addEventListener('click', () => { //add a click listener
        cartItems.forEach(card => {
            if(card != item){
                card.classList.remove('active');   //remove existing active class from current selected item
            }
        });
        item.classList.add("active"); //add active class on selected item
    })
})

console.log(cartItems)