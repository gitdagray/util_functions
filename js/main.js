// Utility Functions are time savers

// Abstract functions that you can use in many applications 
// Not coupled to a data model or specific interface 
// Like Batman's utility belt! 

// Benefits:
// 1) Add additional functionality not built-in to Javascript
// 2) Reduce tedious typing down to a simple function call 

// Usually kept in their own module and imported 
//import { properCase, log } from 'utils.js';

// ... or in a utility class as methods to call upon
// Think of objects with methods like Math.random() and JSON.stringify()
// A class like this has no constructor and no state.
/* 
class Utils {
    static myFunction() {
        // do stuff...
    }
}

Utils.myFunction() */
import Utils from '../class/Utils.js';
console.log(Utils.properCase('dave gray teaches code'))


// #1 
// proper case
const properCase = (string) => {
    return string.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(" ");
};


// #2 console log
const log = (content) => { console.log(content); }
log(properCase("rEsEaRcH"));
log(properCase("dave gray teaches code"));


// #3
// query selector with optional scope 
const select = (selector, scope) => {
    return (scope || document).querySelector(selector);
}

const body = select('body');
log(body);


// #4
// addEventListener wrapper 
const listen = (target, event, callback, capture = false) => {
    target.addEventListener(event, callback, !!capture);
}

const eventLog = (e) => console.log(e.target);
listen(body, "click", eventLog);


// #5
// Sanitize input - use RegEx or try this... 

const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}

const dirtyInput = "<script>alert('xss attack')</script>&othervalues";
const cleanInput = sanitizeInput(dirtyInput);
log(cleanInput);


// #6 
// Create an element with an optional CSS class
const createElement = (tag, className) => {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    return el;
}

const root = createElement("main", "root");
body.appendChild(root);


// #7 
// Delete all contents
const deleteChildElements = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

deleteChildElements(body);


// #8 
// add class with optional query scope
const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className);
};

addClass("body", "purple");


// #9 check for iOS
const isIOS = () => {
    return /iphone|ipod|ipad/i.test(navigator.userAgent);
}

log(isIOS());


// #10
// get parameters by name from url
const getParameterValue = (paramName, url) => {
    if (!url) url = window.location.href;
    const regex = new RegExp(`[?&]${paramName}(=([^&#]*))`);
    const results = regex.exec(url);
    if (!results) return;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const PARAM_TO_EXTRACT = 'paramTwo';
const URL = 'https://www.testURL.com/?paramOne=one&paramTwo=Dave+Gray'

log(getParameterValue(PARAM_TO_EXTRACT, URL));

