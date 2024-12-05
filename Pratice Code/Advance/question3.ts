/* 
    - Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. 
    - Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. 
    - Now, create a type Vehicle that represents either a Car or a Truck using a union type.
 */


interface Car {
    make: String;
    model: String;
}

type Bus = {
    make: String
    model: String
    playLoadCapacity: number
}

// create a type vechicle should be 'car' or 'bus'

type Vehicle = Car | Bus

// create instance of Car and Bus

const car: Car = {make: 'Audi', model: "A-240"}
const bus: Bus = {make: 'Valvo', model: "V-R34", playLoadCapacity: 40}

// create a array of the bus and car in vechile

const vaehicles: Vehicle[] = [car, bus]

