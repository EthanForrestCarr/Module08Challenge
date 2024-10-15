// import the classes
import Truck from "../classes/Truck.ts";
import Motorbike from "../classes/Motorbike.ts";
import Car from "../classes/Car.ts";

// define the interface
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;
