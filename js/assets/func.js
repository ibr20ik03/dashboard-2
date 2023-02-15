/*
    ===========================================

    -> Template Name:- Phoenix - Dashboard.
    -> Author       :- Dev :- Ibrahim Kassab.
    -> Author URL   :- ---------------------
    -> Version      :- 1.0

    ===========================================
*/



/*
    ==================================
    ============ Function ============
    ==================================

*/

// alert 
function alert() {
    buttonAlert.forEach((ale) => {
        let uniqueAlert = ale.dataset.alert;
        let uniqueElemt = document.getElementById(uniqueAlert);
        let selcto = `.${ale.className} .btn-close`;
        let btnClose =  document.querySelectorAll(selcto);

        uniqueElemt.addEventListener("click", () => {
            ale.style = "top: 0%; background-color: rgba(65, 66, 68, 0.5);";
        })
        btnClose.forEach((clo) => {
            clo.addEventListener("click", () => {
                ale.style = "";
            })
        })
    })
}


// btn Group Menu
function btnGroupMenu(action,btns) {
    btns.forEach((btn) => {
        let btnClass = btn.className;
        btn.addEventListener(action, () => {
            if (btn.className == btnClass) {
                btn.nextElementSibling.style.display = "flex";
                btn.classList.add("X");
            }else {
                btn.nextElementSibling.style.display = "none";
                btn.classList.remove("X");
            }
        });
    })
};


// btn show and hide section
function btnShowHide(action,btn,sec) {
        let btnClass = btn.className;
        btn.addEventListener(action, () => {
            if (btn.className == btnClass) {
                sec.style.display = "flex";
                btn.classList.add("X");
            }else {
                sec.style.display = "none";
                btn.classList.remove("X");
            }
        });
};


// add and remove active class
function active(action,array) {
    
    array.forEach((ele) => {
        ele.addEventListener(action, () => {
            array.forEach((ele) => {
                ele.classList.remove("active");
            });
            
            ele.classList.add("active");
            // checkMode();
            modeEx();
        });
    });
};



// increase width of progress
function Progress(array) {
        window.addEventListener("load", () => {
            array.forEach((prog) => {
                prog.style.width = prog.dataset.width;
            })
        })
}


// increase numbers 
function increaseNums(array) {
    array.forEach((el) => {
        let goal = el.getAttribute("data-nums");
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count)
            }
        }, 30);
    })
}


// Swap Between record and send message
function swapChat() {
    writeMsg.onkeydown = () => {
        recordMsg.style.display = "none";
        sendMsg.style.display = "flex";
    }

    writeMsg.onblur = () => {
        recordMsg.style.display = "flex";
        sendMsg.style.display = "none";
    }
}



// show color in section befour submit
function printColor(color,sec) {
    color.addEventListener("blur",() => {
        sec.style = `background-color: ${color.value};`
    })
}

// swap between show and hide password
function swapPassword() {
    showPass.onclick = () => {
        inputPassword.type = "text";
        showPass.style.display = "none";
        hidePass.style.display = "inline";
    }
    
    hidePass.onclick = () => {
        inputPassword.type = "password";
        showPass.style.display = "inline";
        hidePass.style.display = "none";
    }
}



// change background-color of delivery progress
function delivery() {
    deleve.forEach((pro) => {
        if (pro.dataset.width == "100%") {
            pro.style = "background-color: var(--success-color); color: #fff;";
        }else if (pro.dataset.width == "75%") {
            pro.style = "background-color: var(--warning-color); color: #fff;";
        }else if (pro.dataset.width == "50%") {
            pro.style = "background-color: var(--information-color); color: #fff;";
        }else if (pro.dataset.width == "25%") {
            pro.style = "background-color: var(--danger-color); color: #fff;";
        }
    })
}


// hide all box and show box on click
function showOneBox(array) {
    array.forEach((box) => {
        box.addEventListener("click", () => {
            array.forEach((box) => {
                box.nextElementSibling.style.display = "none";
            });
            box.nextElementSibling.style.display = "flex";
        });
    });
};


// dark mode and light mode
function modeEx({"bg eee":one, "bg fff": two, "col fff": three, "box sha": four} = mode) {
    if (btnLightMode.classList.contains("active")) {
        window.localStorage.setItem("mode","light");
        one.forEach((el) => {
            el.forEach((item) => {
                item.style = "background-color: var(--eee-color);";
            })
        })

        two.forEach((el) => {
            el.forEach((item) => {
                item.style = "background-color: var(--white-color);";
            })
        })

        three.forEach((el) => {
            el.forEach((item) => {
                item.style = "color: var(--white-color);";
            })
        })

        four.forEach((el) => {
            el.forEach((item) => {
                item.style = "box-shadow: 0 0 10px #ddd;";
            })
        })

        document.body.style = "background-color: var(--white-color); color: var(--black-one-color);";               // body page

        document.querySelectorAll(".alert .content-box").forEach((el) => {
            el.style = "background-color: var(--eee-color); box-shadow: 0 0 10px #ddd;"                             // alert
        })    
        document.querySelectorAll(".prog").forEach((el) => {
            el.style = "background-color: var(--eee-color); color: var(--eee-color);"                               // progress
        })

    }else if (btnDarkMode.classList.contains("active")) {
        window.localStorage.setItem("mode","dark");
        one.forEach((el) => {
            el.forEach((item) => {
                item.style = "";
            })
        })

        two.forEach((el) => {
            el.forEach((item) => {
                item.style = "";
            })
        })

        three.forEach((el) => {
            el.forEach((item) => {
                item.style = "";
            })
        })

        four.forEach((el) => {
            el.forEach((item) => {
                item.style = "";
            })
        })

        document.body.style = "";                                                   // body page

        document.querySelectorAll(".alert .content-box").forEach((el) => {
            el.style = ""                                                           // alert
        })    
        document.querySelectorAll(".prog").forEach((el) => {
            el.style = ""                                                           // progress
        })
    }
}


// save active class in logal storage
function localStorageMode() {
    if (window.localStorage.mode == "light") {
        btnLightMode.classList.add("active");
    }else if (window.localStorage.mode == "dark") {
        btnDarkMode.classList.add("active");
    }
}

