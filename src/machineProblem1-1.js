const data = [
  {
    id: 1,
    brand: "Honda",
    model: "CBR1000RR",
    year: 2022,
    color: "Red",
    engineSize: 1000,
    topSpeed: 186,
    features: [
      "ABS",
      "Quick Shifter",
      "LED Headlights",
      "Adjustable Suspension",
      "Riding Modes",
    ],
    price: 15000,
  },
  {
    id: 2,
    brand: "Harley-Davidson",
    model: "Sportster Iron 883",
    year: 2021,
    color: "Black",
    engineSize: 883,
    topSpeed: 110,
    features: [
      "Cruiser Style",
      "Belt Drive",
      "Forward Controls",
      "Custom Exhaust",
    ],
    price: 9999,
  },
  {
    id: 3,
    brand: "Kawasaki",
    model: "Ninja ZX-6R",
    year: 2023,
    color: "Green",
    engineSize: 636,
    topSpeed: 156,
    features: [
      "Quick Shifter",
      "Traction Control",
      "Slipper Clutch",
      "Adjustable Windscreen",
    ],
    price: 12000,
  },
  {
    id: 4,
    brand: "Yamaha",
    model: "MT-09",
    year: 2022,
    color: "Blue",
    engineSize: 847,
    topSpeed: 135,
    features: [
      "Naked Bike Design",
      "TFT Display",
      "Quick Shifter",
      "Adjustable Suspension",
    ],
    price: 11000,
  },
  {
    id: 5,
    brand: "Ducati",
    model: "Panigale V4",
    year: 2024,
    color: "Yellow",
    engineSize: 1103,
    topSpeed: 211,
    features: [
      "Ohlins Suspension",
      "Brembo Brakes",
      "Power Modes",
      "Quick Shifter",
    ],
    price: 25000,
  },
  {
    id: 6,
    brand: "BMW",
    model: "S1000RR",
    year: 2023,
    color: "White",
    engineSize: 999,
    topSpeed: 186,
    features: [
      "Dynamic Traction Control",
      "Launch Control",
      "Up/Down Quick Shifter",
      "Adjustable Riding Modes",
    ],
    price: 18000,
  },
  {
    id: 7,
    brand: "Suzuki",
    model: "GSX-R750",
    year: 2022,
    color: "Black/Blue",
    engineSize: 750,
    topSpeed: 165,
    features: [
      "Race-Ready Design",
      "Brembo Monobloc Calipers",
      "Quick Shifter",
      "Traction Control",
    ],
    price: 13000,
  },
  {
    id: 8,
    brand: "Indian",
    model: "Chieftain",
    year: 2023,
    color: "Brown",
    engineSize: 1811,
    topSpeed: 115,
    features: [
      "Touring Bike",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Keyless Ignition",
    ],
    price: 22000,
  },
  {
    id: 9,
    brand: "Triumph",
    model: "Street Triple RS",
    year: 2022,
    color: "Silver",
    engineSize: 765,
    topSpeed: 166,
    features: [
      "Brembo Brakes",
      "Quick Shifter",
      "Adjustable Suspension",
      "Triumph Shift Assist",
    ],
    price: 14000,
  },
  {
    id: 10,
    brand: "Aprilia",
    model: "Tuono V4 1100",
    year: 2024,
    color: "Red",
    engineSize: 1077,
    topSpeed: 175,
    features: [
      "Semi-Active Suspension",
      "Cornering ABS",
      "Quick Shifter",
      "Ride-By-Wire Throttle",
    ],
    price: 19000,
  },
];

function getMotorcycles() {
  return data;
}
function getMotorcycle(id) {
  return data.find((d) => d.id === id);
}

// const motocycles = getMotorcycle();
// console.log(motorcycles);

//1
// const motorcycles = getMotorcycle(1);
// const {brand, model, year} =motorcycles;
// console.log(brand, model, year);

//2
// const motorcycles = getMotorcycle(3);
// const {brand, color, topSpeed} =motorcycles;
// console.log(brand, color, topSpeed);

//3
// const motorcycles = getMotorcycle(5);
// const {model, engineSize, price} =motorcycles;
// console.log(model, engineSize, price);

//4
// const motorcycles = getMotorcycle(10);
// const {features} =motorcycles;
// console.log(features[0], features[1]);

//5
const motorcycles = getMotorcycle(10);
const {features} =motorcycles;
const [primaryCast, secondaryCast, ... otherCast] =features;
console.log(primaryCast, secondaryCast, otherCast);

//6
// const motorcycles = getMotorcycle(1);
// const {features} =motorcycles;
// const addFeature = [...features,"GPS Navigation"];
// console.log(addFeature);

//7
// const motorcycles = getMotorcycle(5);
// const update = {...motorcycles, type: "Sports Bike"};
// console.log(update)

//8
// const motorcycles = getMotorcycle(3);
// const changeColor ={...motorcycles,color:"Black", topSpeed:166};
// console.log(changeColor);

//9
// const motorcycles = getMotorcycle(1);
// const {price, year} =motorcycles;
// const pri = PperY(price, year);
// const changeColor ={...motorcycles,price:pri};
// console.log(changeColor);

// function PperY(price, year){
//   data.find((d) => d.price === price)
//   data.find((n) => n.year === year)

//   if (year === 2022){
//     const pricer = price + price * 0.05;
//     return pricer;
//   }

//   else {const priceless =price - price *0.03;
//       return priceless;
//   }
// }

//10
// const motorcycles = getMotorcycle(1);
// const {price, year} =motorcycles;
// const pri = PperY(price, year);
// const changeColor ={...motorcycles,price:pri};
// console.log(changeColor);

// function PperY(price, year){
//   data.find((d) => d.price === price)
//   data.find((n) => n.year === year)

//   if (year === 2022){
//     const pricer = price + price * 0.05;
//     return pricer;
//   }

//   else {const priceless =price - price *0.03;
//       return priceless;
//   }
// }