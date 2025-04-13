import { productClass } from "./productClass";

import Dreams from "@images/products/dreams.svg";
import Spicy from "@images/products/spicy.svg";
import Waldo from "@images/products/waldo.svg";
import Classic from "@images/products/classic.svg";
import Cali from "@images/products/cali.svg";
import BaconBuddy from "@images/products/baconBuddy.svg";

export const productList = [
  new productClass(
    BaconBuddy,
    "Bacon Buddy",
    "Bacon Buddy",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.99"
  ),
  new productClass(
    Cali,
    "Cali",
    "Cali",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "8.00"
  ),
  new productClass(
    Classic,
    "Classic",
    "Classic",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "8.00"
  ),
  new productClass(
    Dreams,
    "Dreams",
    "Dreams",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.20"
  ),
  new productClass(
    Spicy,
    "Spicy",
    "Spicy",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.20"
  ),
  new productClass(
    Waldo,
    "Waldo",
    "Waldo",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "10.00"
  ),
];
