import {
  BsFillAirplaneFill,
  BsFillTrainFrontFill,
  BsFillCarFrontFill,
} from "react-icons/bs";
import { RiShipFill } from "react-icons/ri";

export const transport = [
  { id: 1, type: "Flight", icon: <BsFillAirplaneFill /> },
  { id: 2, type: "Trains", icon: <BsFillTrainFrontFill /> },
  { id: 3, type: "Ship", icon: <RiShipFill /> },
  { id: 4, type: "Cars", icon: <BsFillCarFrontFill /> },
];
