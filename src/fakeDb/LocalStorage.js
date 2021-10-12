// chack cart
const getCart = () =>{
let cart = localStorage.getItem('food_order');
return cart ? JSON.parse(cart) : {};
}
// add to db
const addToCart = id =>{
    let cart = getCart();
    if(cart[id]){
        cart[id] = cart[id]+1;
    }
    else{
        cart[id] = 1
    }
    addToDB(cart);
}

const addToDB = cart =>{
    localStorage.setItem('food_order', JSON.stringify(cart))
}


export {addToCart}