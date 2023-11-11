export function numberToCurrency(num , type){
    let number = num.toLocaleString("en-US",{style : "currency", currency : "USD"})
    return type===1 ? number : number.split("").splice(0,number.length-3).join("");
}