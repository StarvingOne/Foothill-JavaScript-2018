var copyright="Christopher Young - 07/06/2018";
var MAX_SEAT_CAPACITY=555;
var ticket=500;
var pass=22;

function calculateSeats(){
  return MAX_SEAT_CAPACITY - (ticket + pass);
}

console.log(copyright);
console.log("Availible Seats: "+calculateSeats());