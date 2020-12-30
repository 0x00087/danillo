$('.plus_buy').on('click', upProduct);
$('.minus_buy').on('click', downProduct);


function upProduct(){

    var articul = $(this).attr('data_id');
    if( cart[articul] != undefined )
    cart[articul]++; 
    else
    cart[articul] = 1; 

    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart);

    var counter = document.querySelector(`#count_element${articul}`);
    counter.textContent = Number(counter.textContent)+1;

    money = document.querySelector(`#money_element`).textContent;
    price = document.querySelector(`#price_element${articul}`).textContent;
    var counter = document.querySelector(`#money_element`);
    counter.textContent = Number(money) + Number(price);

}


function downProduct(){

    var articul = $(this).attr('data_id');
    if( cart[articul] != undefined ){
        money = document.querySelector(`#money_element`).textContent;
        price = document.querySelector(`#price_element${articul}`).textContent;
        var counter = document.querySelector(`#money_element`);
        counter.textContent = Number(money) - Number(price);

        if(cart[articul]-1==0)
        deleteFunction(articul);
        else{
            var counter = document.querySelector(`#count_element${articul}`);
            counter.textContent = Number(counter.textContent)-1;
            cart[articul]--; 
        }
    }
    else
    cart[articul] = 1; 
    localStorage.setItem('cart', JSON.stringify(cart))
}

const deleteFunction = (articul) => {
    var counter = document.querySelector(`#element${articul}`);
    counter.remove();
    delete(cart[articul])
}

function changeCount(id, value){
  var counter = document.querySelector(`#count_element${id}`);
  counter.textContent = Number(counter.textContent)-1;
}

function changeMoney(value){
    var counter = document.querySelector(`#money_element`);
   counter.textContent = value - counter.textContent;

  }




  