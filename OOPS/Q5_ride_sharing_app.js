// Q5 – Ride Sharing Application

class User {
  constructor(name, rating){
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle){
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance){
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare(){
    if(this.distance <= 0 || isNaN(this.distance)){
      throw new Error("Invalid distance!");
    }
    return this.distance * 10;
  }
}

// Test
try {
  const trip = new Trip("A","B",5);
  console.log("Fare:", trip.calculateFare());

  const trip2 = new Trip("A","B",-4);
  console.log(trip2.calculateFare());
} catch(err){
  console.error("Trip Error:", err.message);
}
