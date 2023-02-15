/*
    ===========================================

    -> Template Name:- Phoenix - Dashboard.
    -> Author       :- Dev :- Ibrahim Kassab.
    -> Author URL   :- ---------------------
    -> Version      :- 1.0

    ===========================================
*/


/*
==> JS INDEX

    -> 01. load
    -> 02. Mode [Light && Dark]
    -> 03. sidebar
    -> 04. spend section
    -> 05. Reports-1 section 
    -> 06. Reports-2 section
    -> 07. signature section
    -> 08. Alert
    -> 09. order page
    -> 10. group chat
    -> 11. trash
    -> 12. form
*/

/* 
    ============
    = 01. load = 
    ============
*/
let load = document.getElementById("load");
let page = document.getElementById("page");

load.style.display = "none";
page.style.display = "grid";

/* 
    ============
    = 02. Mode = 
    ============
*/

let btnLightMode = document.getElementById("mode-light");
let btnDarkMode = document.getElementById("mode-dark");

// active class save in local storage
localStorageMode();

let mode = {
    "bg eee": [
        document.querySelectorAll(".container-fluid "),                                        // container fluid
        document.querySelectorAll("aside nav > ul > li > div.active"),                         // nav bar -> aside
        document.querySelectorAll("aside nav > ul li .menu ul"),                               // menu group -> nav -> aside
        document.querySelectorAll("aside .mode-page > .mode"),                                 // btn mode -> aside
        document.querySelectorAll(".filter .sort-day .box"),                                   // btn sort-day
        document.querySelectorAll(".dashboard > section .card .box"),                          // report-2 section
        document.querySelectorAll(`input:not([type="submit"])`),                               // All input not type submit
        document.querySelectorAll(`select`),                                                   // All select 
        document.querySelectorAll(".dashboard .top-search .product-search .sear-item > span"), // top search section
        document.querySelectorAll(".dashboard .signature .box-body ul > li "),                 // signature section
        document.querySelectorAll(".responsive-table table thead tr"),                         // table section > thead > tr
        document.querySelectorAll(".responsive-table table tbody tr:nth-of-type(even)"),       // table section > tbody > tr > type(even)
        document.querySelectorAll(".cont-page .controle-box .left-box .remove-all a"),         // btn remove all > tbody > tr > table 
        document.querySelectorAll(".cont-page .controle-box .right-box a"),                    // btn rebort > table
        document.querySelectorAll(".trash .box .head-box"),                                    // head-box > trash page
        document.querySelectorAll(".grop-chat .key-room .form"),                               // form inter key-room > chat page
        document.querySelectorAll(".grop-chat .chat .chat-head .call-vi > div"),               // [call & video call] icon > chat section > chat page
        document.querySelectorAll(".chat-body ul li > div .msg-text"),                         // li > ul > chat section > chat page
        document.querySelectorAll(".chat-body ul li > div .msg-file .file"),                   // li.file > ul > chat section > chat page
        document.querySelectorAll(".grop-chat .chat .chat-foot .upload"),                      // btn upload file > chat section > chat page
        document.querySelectorAll(".grop-chat .chat .chat-foot > div .menu"),                  // menu group > chat section > chat page
        document.querySelectorAll(".new-cust .form form label .img"),                          // box > form > add & edit product > product page
    ],
    "bg fff": [
        document.querySelectorAll("aside nav > ul li .menu ul li.active"),                     // menu group > nav > aside
        document.querySelectorAll(".alert textarea"),                                          // alert textarea
        document.querySelectorAll(".section"),                                                 // section > container-fluid
        document.querySelectorAll(".grop-chat .chat .chat-foot"),                              // foot-box > chat section > chat page
    ],
    "col fff": [
        document.querySelectorAll(".scroll-top"),                                              // btn scroll top
    ],
    "box sha": [
        document.querySelectorAll("#wrapper header"),                                          // header page
    ]
}

// dark mode an light mode
modeEx();

/* 
    ===============
    = 03. sidebar = 
    ===============
*/

let btnGroup = document.querySelectorAll(".btn-group > .menu-link");

// btn group menu
btnGroupMenu("click",btnGroup);


let ModeCont = document.querySelectorAll(".mode > div");

// swap between dark mode and light mode
active("click",ModeCont);


/*
    =====================
    = 04. spend section = 
    =====================
*/

let progress = document.querySelectorAll(".prog > span");

// increase width progress
Progress(progress);


/*
    =========================
    = 05. Reports-1 section = 
    =========================
*/
let sortDaySch = document.querySelectorAll(".reports-sch .filter .sort-day .box");

// delete active class from all child and add this on click child ==> reports-sch   [ section ]
active("click",sortDaySch);

/*
    =========================
    = 06. Reports-2 section = 
    =========================
*/

let sortDayCar = document.querySelectorAll(".reports-car .filter .sort-day .box");

// delete active class from all child and add this on click child ==> reports-car   [ section ]
active("click",sortDayCar);


let allNumsTask = document.querySelectorAll(".reports-car .card .box .tot-num > p");

// increase numbers of taskes from zero and target number
increaseNums(allNumsTask);

/* 
    =========================
    = 07. signature section = 
    =========================
*/

let sortDaysign = document.querySelectorAll(".signature .filter .sort-day .box");

// delete active class from all child and add this on click child ==> Signature   [ section ]
active("click",sortDaysign);


/* 
    =============
    = 08. Alert = 
    =============
*/


let buttonAlert = document.querySelectorAll(".alert");

// all alert in dashbord
alert();


/* 
    ==================
    = 09. Order page = 
    ==================
*/

// Delivery order numbers day
let deleve = document.querySelectorAll(".deleve > .prog > span");

// change background-color of progress in order table
delivery();


/* 
    ==================
    = 10. group chat = 
    ==================
*/

let btnUpload = document.querySelector(".chat .chat-foot .upload");
let menuUpload = document.querySelector(".chat .chat-foot .menu");

// show and hide menu upload
if (btnUpload != null) {
    btnShowHide("click",btnUpload,menuUpload);
};

let recordMsg = document.querySelector(".recor-msg .record");
let sendMsg   = document.querySelector(".recor-msg .send-msg");
let writeMsg  = document.querySelector(".text-msg  input");

// Swap Between record and send message
if (recordMsg != null) {
    swapChat();
};


let btnScroll = document.querySelector(".scroll-top");
let sectionScroll = document.querySelector(".grop-chat .chat .chat-body");

// scroll to end page chat
if (btnScroll != null) {
    btnScroll.onclick = function () {
        sectionScroll.scrollTo({
            top:10000,
            behavior:"smooth"
        });
    };
};



/* 
    =============
    = 11. trash = 
    =============
*/

let allTrashBox = document.querySelectorAll(".trash > section .head-box");

// Show Box On Click And Hide All Box
showOneBox(allTrashBox);

/* 
    ============
    = 12. form = 
    ============
*/

let colorProd = document.getElementById("color-name");
let secColor = document.getElementById("color-one");

// show color of product befour submit
if (colorProd != null) {
    printColor(colorProd,secColor);
};


let showPass = document.querySelector(".new-cust .swap-pass .show-pass");
let hidePass = document.querySelector(".new-cust .swap-pass .hide-pass");
let inputPassword = document.querySelector(`.new-cust .passord-s input[type="password"]`);

// swap between show and hide password
if (showPass != null) {
    swapPassword();
};
