

var money = 0;
function loadStorage() {
	let body = {
		type: 1
	}


	const url= "http://bargers.ml";

	fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		header: {
			'Content-Type': 'application/text'
		}
	}).then(response => response.json())
		.then(data => {
			localStorage.setItem("data", JSON.stringify(data));
		}).catch(console.error);
}

function loadBasket(id) {
	let body = {
		type: 4,
		id: id
	}

	
	const url= "http://bargers.ml";
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		header: {
			'Content-Type': 'application/text'
		}
	}).then(response => response.json())
		.then(data => {
			localStorage.setItem("data", JSON.stringify(data));
		}).catch(console.error);
}

function createHTML_for_Newest() {
	loadStorage();
	let object = JSON.parse(localStorage.getItem("data"));


	let code = '';


	for (let i = 0; i < object.path.length; i++) {
		code =
			"	<div class=\"col-lg-6\" data-price="+ object.price[i] + ">\n" +
			"		<div class=\"single_delicious d-flex align-items-center\">\n"+
			"			<div class=\"thumb\">\n"+
			"				<img src=\"" + object.path[i] + "\" >\n"+
			"			</div>\n"+
			"			<div class=\"info\">\n"+
			"				<h3>" + object.name[i] + "</h3>\n"+
			"				<p>Great way to make your business appear trust and relevant.</p>\n"+
			"				<span>$" + object.price[i] + "</span>\n"+
			"  				<button class=\"buy\" data_id_buy = "+ object.id[i] +" >В корзину</button> \n"+
			"			</div>\n"+
			"		</div>\n"+
			"	</div>\n"
			document.write(code);

	}

}

function upDateBasket(){
	let code = '';
	try{
	let cart = JSON.parse(localStorage.getItem('cart'));
	money = 0;
	loadStorage();
	let object = JSON.parse(localStorage.getItem("data"));

	if (login === undefined || localStorage.getItem("login")===null) {
        login=parseInt(localStorage.getItem("login"));
    }
    if (login === 1) {
        i=0;
    for(var w in cart)
    {
		i++;
		
        code =
   ` <tr id='element${object.id[w-1]}'> \n`+
   "<td class=\"cart_product_desc\"> \n"+
   "    <h5>"+i+"</h5> \n"+
   "</td> \n"+
   "<td class=\"cart_product_desc\"> \n"+
   "    <h5>"+object.name[w-1]+"</h5> \n"+
   "</td> \n"+
   "<td class=\"price\"> \n"+
   `  <span id = price_element${object.id[w-1]}>${object.price[w-1]}</span> \n`+
   "</td> \n"+
   "<td class=\"qty\"> \n"+
   " <div class=\"text-center\"> \n"+
   "<button class=\"plus_buy\" data_id = "+ object.id[w-1] +" >+</button> \n"+

   `<h5 id='count_element${object.id[w-1]}'>${cart[w]}</h5> \n`+
   "<button class=\"minus_buy\" data_id = "+ object.id[w-1] +" >-</button> \n"+
   "</div> \n"+
   "</td> \n"+
   "</tr> \n"
   money+=cart[w]*object.price[w-1];
   document.write(code);
    }
    }
    else {
		i=0;
		for(var w in cart)
		{
			i++;
			
			code =
	   ` <tr id='element${object.id[w-1]}'> \n`+
	   "<td class=\"cart_product_desc\"> \n"+
	   "    <h5>"+i+"</h5> \n"+
	   "</td> \n"+
	   "<td class=\"cart_product_desc\"> \n"+
	   "    <h5>"+object.name[w-1]+"</h5> \n"+
	   "</td> \n"+
	   "<td class=\"price\"> \n"+
	   `  <span id = price_element${object.id[w-1]}>${object.price[w-1]}</span> \n`+
	   "</td> \n"+
	   "<td class=\"qty\"> \n"+
	   " <div class=\"text-center\"> \n"+
	   
	
	   `<h5 id='count_element${object.id[w-1]}'>${cart[w]}</h5> \n`+
	   
	   "</div> \n"+
	   "</td> \n"+
	   "</tr> \n"
	   money+=cart[w]*object.price[w-1];
	   document.write(code);
		}
    }
	
} catch (err) {
	console.log(err)
	//localStorage.removeItem('cart');
	 }

}

function upDateMoney(){
	code = ` <a>Итого:$</a><a id='money_element'>${money} </a>`
	document.write(code);
}






   