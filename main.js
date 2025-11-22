<<<<<<< HEAD

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";


const appSetting = {
    databaseURL: "https://todolist-mava-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSetting);

const database =  getDatabase(app);
const cartData = ref(database, "cartDataInfo");


const inputButton = document.getElementById("hero-main-addCart-input-button");
const addToCartButton = document.getElementById("hero-main-addCart-submit-button");
addToCartButton.addEventListener("click", function hero() {
 let a = inputButton.value;
 push(cartData, a);
 console.log(a);
=======

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";


const appSetting = {
    databaseURL: "https://todolist-mava-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSetting);

const database =  getDatabase(app);
const cartData = ref(database, "cartDataInfo");


const inputButton = document.getElementById("hero-main-addCart-input-button");
const addToCartButton = document.getElementById("hero-main-addCart-submit-button");
addToCartButton.addEventListener("click", function hero() {
 let a = inputButton.value;
 push(cartData, a);
 console.log(a);
>>>>>>> cfd8c38 (upload new changes and fix some bugs)
});  //working and connected to the index.html and main.css