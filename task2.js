let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Jeans", price: 1200, quantity: 1 }
];


function calculateTotal() {
    let total = 0;

    
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    if (total > 2000) {
        total = total - (total * 0.10);
        console.log("10% Discount Applied");
    }

    
    let paymentMode = "card";

    switch (paymentMode) {
        case "card":
            console.log("Payment Mode: Card");
            break;
        case "cash":
            console.log("Payment Mode: Cash");
            break;
        default:
            console.log("Invalid Payment Mode");
    }

    console.log("Final Amount:", total);
}