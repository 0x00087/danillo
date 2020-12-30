var cart = {};

$('.buy').on('click',upBasket );



function upBasket(){
    checkCart();
    var articul = $(this).attr('data_id_buy');
    if( cart[articul] != undefined )
    cart[articul]++; 
    else
    cart[articul] = 1; 
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);
}




function checkCart(){

    try{
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    
} catch (err) {
	console.log(err)
	localStorage.removeItem('cart');
	}

}

