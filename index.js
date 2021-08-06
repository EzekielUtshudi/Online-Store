

let cart = []
let total = 0;
const cartDOM = document.querySelector('.cart')
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]')
addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode
        const product = {
            image: productDOM.querySelector('.image').getAttribute('src'),
            name: productDOM.querySelector('.brand').innerText,
            price: productDOM.querySelector('.price').innerText
        }
		
		alert( total += parseFloat( GetPriceWithVat(product.price)));
				
        const isInCart = (cart.filter(cartItem => (cartItem.brand === product.brand)).length > 0)

        if(!isInCart) {
            cartDOM.insertAdjacentHTML('beforeend', `
                <div class="cart__item">
                    <img class="cart__item__image" src="${product.image}" alt="${product.brand}"/>
                    <h3 class="cart__item__brand">${product.brand}</h3>
                    <h3 class="cart__item__price">${product.price}</h3>
                </div>
				<h3>${total}</h3>
            `)
            cart.push(product)
            addToCartButtonDOM.innerText = 'In Bag'
        }
    })
})

function GetPriceWithVat(price)
{
	return (parseFloat(price) * 0.15) + parseFloat(price);
}

// the coupon 
var finalOffer;
var withCoupon;
function validate() {
    var valid= true;
     if(valid){
		withCoupon = ( total / 100 )*30;
		finalOffer = total - withCoupon;
		alert(finalOffer);
     }

     if(valid == false) {
         $('#error-msg-span').text("Discount Coupon Required");
     }
     return valid;
}



function collect(){
	alert(total);
}

function deliver(){
	var del=total+50;
	alert(del);
}




//

	$(".finishOrder").on("click", function () {
     $("#finalOrderList > ol").children().remove();
		$(".orderName").children("span").each(function(){
			var finalOrder = '<li>' + $(this).text() + '</li>';
			$("#finalOrderList > ol").append(finalOrder);
		})

		$("#finishOrderDialog").dialog({
			hide: "blind",
	    	show : "blind",
	    	width: "500px",
        closeText: "X"
	    });
	})

	$(".order").on("click", function () {
		var name = $("#buyerName").val();
		var number = $("#buyerNumber").val();
		var address = $("#buyerAddress").val();

		if (name != "" && number != "" && address != "") {
			$("#finishOrderDialog").dialog("close");
			$("#buyerInfo").children("p").remove();
			$("#thanksMessage").dialog({
				hide: "blind",
		    	show : "blind",
		    	width: "400px"
		    });
		    setTimeout(function(){
		    	$("#thanksMessage").dialog("close");
		    }, 3000);
		}else{
			$("#buyerInfo").append('<p>Fill up all the inputs</p>');
		}
	})


