//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField input");

inputBox.onkeyup = ()=>{
    let userData = inputBox.Value; //getting user entered Value
    if(userData.trim() != 0){  //if user values aren't only spaces
        addBtn.classList.add("active"); //activates the add button

    }
}
