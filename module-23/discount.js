/*
1.if ticket number is less than 100, per ticket price : 100
2. if ticket number is more than 100, but less than 200,First 100 ticket will be  100/tickets rest will be 90 tk per ticket price: 100
first 100 ---> 100 tk
101-200 ---> 90tk
200+ ---> 70 tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketsRate = 70;
    if (ticketQuantity <= 100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketsRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
};

const price = ticketPrice(300);
console.log(price);