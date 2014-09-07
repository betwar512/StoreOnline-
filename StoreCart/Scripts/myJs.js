
var order=[];
function addToOrder(item) {
    order.push(item);
    var orderItem = item;
    
}
//caculate sum for array 
function total() {
    var sum;
    if(order.length>0){
    order.reduce(function (a, b) {
        sum = a + b;
        return sum;
    });
}
    order = [];
    $("#myTotal").html("<p>"+sum +"</p>");
    console.log(sum);
}