import { productClass } from "./productClass";

import Dreams from "@images/products/dreams.svg";
import Spicy from "@images/products/spicy.svg";
import Waldo from "@images/products/waldo.svg";
import Classic from "@images/products/classic.svg";
import Cali from "@images/products/cali.svg";
import BaconBuddy from "@images/products/baconBuddy.svg";

export const productList = [
  new productClass(
    0,
    BaconBuddy,
    "Bacon Buddy",
    "Bacon Buddy",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.99"
  ),
  new productClass(
    1,
    Cali,
    "Cali",
    "Cali",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "8.00"
  ),
  new productClass(
    2,
    Classic,
    "Classic",
    "Classic",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "8.00"
  ),
  new productClass(
    3,
    Dreams,
    "Dreams",
    "Dreams",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.20"
  ),
  new productClass(
    4,
    Spicy,
    "Spicy",
    "Spicy",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "9.20"
  ),
  new productClass(
    5,
    Waldo,
    "Waldo",
    "Waldo",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "10.00"
  ),
];
