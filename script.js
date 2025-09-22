/* =================================
    finding maximum number
    ================================= */
document.getElementById("max").addEventListener("submit", find_max);

// local messages
const num1_error = document.getElementById("num1-error");
const num2_error = document.getElementById("num2-error");

// globel messages
const error = document.getElementById("error-max");
const max_value = document.getElementById("max-value");

// Validates the first number input field
function num1_input_data(event) {
    error.innerText = "";
    max_value.innerText = "";
    if (event.target.value.trim() === '') {
        num1_error.innerText = "Invalid input";
    }
    else {
        num1_error.innerText = "";
    }
    if (event.key === "Enter") {
        find_max(event);
    }
}

// Validates the second number input field
function num2_input_data(event) {
    error.innerText = "";
    max_value.innerText = "";
    if (event.target.value.trim() === '') {
        num2_error.innerText = "Invalid input";
    }
    else {
        num2_error.innerText = "";
    }
    if (event.key === "Enter") {
        find_max(event);
    }
}

// finding the max value
function find_max(event) {
    event.preventDefault();
    const num1 = parseInt(document.getElementById("max-num1").value.trim());
    const num2 = parseInt(document.getElementById("max-num2").value.trim());

    error.innerText = "";
    max_value.innerText = "";
    let tag = false;
    // checking is numbers or not
    if (isNaN(num1)) {
        num1_error.innerText = "Invalid input";
        tag = true;
    }
    if (isNaN(num2)) {
        num2_error.innerText = "Invalid input";
        return;
    }
    if (tag)
    {
        return;
    }

    // above 10 digits
    if (num1.toString().length > 10 || num2.toString().length > 10) {
        max_value.innerText = "";
        error.innerHTML = "The number field must not exceed 10 digits";
        return;
    }
    
    error.innerText = "";
    // finding max value
    if (num1 > num2) {
        max_value.innerHTML = `Max value is: ${num1}`;
    }
    else {
        max_value.innerHTML = `Max value is: ${num2}`;
    }
}

/* =================================
    reverse string section
    ================================= */

document.getElementById("stringreverse").addEventListener("submit", reverse_string);
const string_error = document.getElementById("string-error");
const stringreverse_result = document.getElementById("stringreverse-result");
const stringreverse_error = document.getElementById("stringreverse-error");

// Validates the string input field
function string_input_data(event) {
    stringreverse_error.innerText = "";
    stringreverse_result.innerText = "";
    if (event.target.value.trim() === "") {
        string_error.innerText = "Invalid input";
        return;
    }
    else {
        string_error.innerText = "";
    }
    if (event.key === "Enter") {
        reverse_string(event);
    }
}
// reverse string
function reverse_string(event) {
    event.preventDefault();
    const input_string = document.getElementById("stringInput").value.trim();

    if (input_string === "") {
        string_error.innerText = "Invalid input";
        return
    }
    // checking more the 20 characters or not
    if (input_string.length > 20) {
        stringreverse_error.innerText = "The field must not exceed 20 characters";
        return;
    }
   
    let result = "";

    // convert reverse string
    for ( let i = input_string.length-1; i >= 0; i-- ) {
        result += input_string.charAt(i);
    }

    string_error.innerText = "";
    stringreverse_result.innerText = result;
}

/* =================================
    longest word finder
    ================================= */

document.getElementById("longest-word").addEventListener("submit",find_longest_word);
const longest_word_string_error = document.getElementById("longest-word-string-error");
const longest_word_result = document.getElementById("longest-word-result");
const longest_word_error = document.getElementById("longest-word-error");

// Validates the String input field
function check_longest_word_string(event) {
    longest_word_result.innerText = "";
    longest_word_error.innerText = "";
    if (event.target.value.trim() === "") {
        longest_word_string_error.innerText = "Invalid input";
        return;
    }
    else {
        longest_word_string_error.innerText = "";
    }
    if (event.key === "Enter") {
        find_longest_word(event);
    }
}

// finding the largest word in a string
function find_longest_word(event) {
    event.preventDefault();
    const input_string = document.getElementById("input-string").value.trim();
    
    if (input_string === "") {
        longest_word_string_error.innerText = "Invalid input";
        return;
    }

    // spliting to words
    const words = input_string.split(",");

    let longest_word = "";
    // finding large word
    for (const word of words) {
        if(word.trim().length > 20)
        {
            longest_word_error.innerText = "The word must not exceed 20 characters";
            return;
        }
        if (longest_word.length < word.trim().length) {
            longest_word = word.trim();
        }
    }
    longest_word_string_error.innerText = "";
    longest_word_result.innerText = longest_word;
}

/* ================================
   Cookie Handling Section
   ================================ */

document.getElementById("cookies").addEventListener("submit",set_cookies);

const name_error = document.getElementById("name-error");
const phone_error = document.getElementById("phone-error");
const global_error = document.getElementById("global-error");

// Validates the name input field
function cookie_name_input_data(event) {
    global_error.innerText = "";
    if (event.target.value.trim() === "") {
        name_error.innerText = "Invalid input";
    }
    else {
        name_error.innerText = "";
    }
    if (event.key === "Enter") {
        set_cookies(event);
    }
}

// Validates the phone number input field
function cookie_phone_input_data(event) {
    global_error.innerText = "";
    if (event.target.value.trim() === "") {
        phone_error.innerText = "Invalid input";
    }
    else if (/[^0-9]/.test(event.target.value.trim())) {
        phone_error.innerText = "Invalid input";
        return;
    }
    else if (event.target.value.trim().length != 10) {
        phone_error.innerText = "phone number should be 10 digits";
    }
    else {
        phone_error.innerText = "";
    }
    if (event.key === "Enter") {
        set_cookies(event);
    }
}

// set the name and phone to cookie
function set_cookies(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    global_error.innerText = "";

    if (name === "") {
        name_error.innerText = "Invalid input";
    }
    if (phone === "") {
        phone_error.innerText = "Invalid input";
        return;
    }
    if (Number(phone[0]) < 6) {
        global_error.innerText = "phone number should starts with 6 to 9";
        return;
    }
    if (phone.length != 10) {
        phone_error.innerText = "phone number should be 10 digits";
        return;
    }
    
    document.cookie = `name=${encodeURIComponent(name)}`;
    document.cookie = `phone=${encodeURIComponent(phone)}`;
    document.getElementById("cookie-result").innerText = "Data saved";
}

// getting the values from cookie
function load_cookie_details() {
    const cookies = document.cookie.split(";");
    const name = document.getElementById("header-name");
    const phone = document.getElementById("footer-phone");

    for (const cookie of cookies) {
        const [key, value] = cookie.split("=").map(c => c.trim());
        if (key === "name") {
            name.innerText = decodeURIComponent(value);
        }
        else if (key === "phone") {
            phone.innerText = decodeURIComponent(value);
        }
    }
}

// load the page and execute the function
window.onload = load_cookie_details;