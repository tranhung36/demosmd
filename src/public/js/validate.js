function Validation(element) {
    element.input.forEach((e) => {
        const ele = document.getElementById(e);
        // add event when user blur input field
        ele.onblur = (e) => {
            if (!ele.value) {
                const mess = ele.parentElement.querySelector(".form-message");
                mess.innerText = "This field must be require";
                ele.parentElement.classList.add("invalid");
            } else {
                const mess = ele.parentElement.querySelector(".form-message");
                mess.innerText = "";
                ele.parentElement.classList.remove("invalid");
            }
        };
        // add event when user input value
        ele.oninput = (e) => {
            if (!ele.value) {
                const mess = ele.parentElement.querySelector(".form-message");
                mess.innerText = "This field must be require";
                ele.parentElement.classList.add("invalid");
            } else {
                const mess = ele.parentElement.querySelector(".form-message");
                mess.innerText = "";
                ele.parentElement.classList.remove("invalid");
            }
        };
    });
}