

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";


const appSetting = {
    databaseURL: "https://todolist-mava-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSetting);

const database =  getDatabase(app);
//const cartData = ref(database, "cartDataInfo");





 const b = document.getElementById("login-input");
const c = b.value;
 console.log(c);
  const submitButton = document.getElementById("login-div-submit");
  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log('Submit button clicked');
      location.assign('/todo.html');
    });
  } else {
    console.error("Element with id 'login-div-submit' not found");
  }



const inputButton = document.getElementById("hero-main-addCart-input-button");
const addToCartButton = document.getElementById("hero-main-addCart-submit-button");
addToCartButton.addEventListener("click", function hero() {
 let a = inputButton.value;
 //push(cartData, a);
 set(ref(database, `cartDataInfo/${c}`), a);

 console.log(a);
}
);
