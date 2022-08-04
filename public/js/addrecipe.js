const addBtn = document.getElementById('addNewIngredient');

// Add a new ingredient box and delete button.
addIngredientBox => {
    const newDiv = document.createElement("div");
    newDiv.className = 'ingredient';

    const inputElem = document.createElement("input");
    inputElem.type = "text";
    newDiv.appendChild(inputElem);
    
    const btnElem = document.createElement("button");
    btnElem.type = "button";
    btnElem.textContent = '🗑';
    btnElem.addEventListener("click", removeUrlBox);
    newDiv.appendChild(btnElem);
    
    const element = document.getElementById("TextAreaBtn");
    element.appendChild(newDiv);
}

// Deletes ingredient box and button.
deleteIngredientBox => {
    this.closest('.ingredient').remove
}


