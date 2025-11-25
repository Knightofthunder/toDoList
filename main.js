import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { processInputValue } from './ut.js';

const appSetting = {
  databaseURL: "https://todolist-mava-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);

// Element references (guarded)
const inputButton = document.getElementById("hero-main-addCart-input-button");
const addToCartButton = document.getElementById("hero-main-addCart-submit-button");

// Only attach listener if elements exist on the page
if (inputButton && addToCartButton) {
  addToCartButton.addEventListener("click", function() {
    const importedValue = processInputValue() || '';
    if (!importedValue) {
      console.warn('No user email available');
      return;
    }

    // replace forbidden characters with underscore
    const safeKey = importedValue.replace(/[.#$\[\]]/g, '_');

    const directInputValue = inputButton.value || '';
    const importedValueRef = ref(database, `cartDataInfo/${safeKey}`);

    push(importedValueRef, directInputValue)
      .then(() => console.log(`Data pushed under ${safeKey}: ${directInputValue}`))
      .catch((error) => console.error('Error pushing data:', error));
  });
}