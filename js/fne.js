let one = document.querySelector(".one")
let tow = document.querySelector(".tow")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let section3 = document.querySelector(".section3")
let section4 = document.querySelector(".section4")
let section5 = document.querySelector(".section5")

one.onclick = function () {
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.add("active")
    tow.classList.remove("active")
    three.classList.remove("active")
    four.classList.remove("active")
    five.classList.remove("active")
    localStorage.setItem("active", "one")
};

tow.onclick = function () {
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.remove("active")
    tow.classList.add("active")
    three.classList.remove("active")
    four.classList.remove("active")
    five.classList.remove("active")
    localStorage.setItem("active", "tow")
};

three.onclick = function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.remove("active")
    tow.classList.remove("active")
    three.classList.add("active")
    four.classList.remove("active")
    five.classList.remove("active")
    localStorage.setItem("active", "three")
};

four.onclick = function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "block";
    section5.style.display = "none";
    one.classList.remove("active")
    three.classList.remove("active")
    tow.classList.remove("active")
    four.classList.add("active")
    five.classList.remove("active")
    localStorage.setItem("active", "four")
};

five.onclick = function () {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "block";
    one.classList.remove("active")
    three.classList.remove("active")
    tow.classList.remove("active")
    four.classList.remove("active")
    five.classList.add("active")
    localStorage.setItem("active", "five")
};

let actt = localStorage.getItem("active")

if (actt == "one") {
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.add("active")
    tow.classList.remove("active")
    three.classList.remove("active")
    four.classList.remove("active")
    five.classList.remove("active")
}
if (actt == "tow") {
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.remove("active")
    tow.classList.add("active")
    three.classList.remove("active")
    four.classList.remove("active")
    five.classList.remove("active")
}

if (actt == "three") {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
    section4.style.display = "none";
    section5.style.display = "none";
    one.classList.remove("active")
    tow.classList.remove("active")
    three.classList.add("active")
    four.classList.remove("active")
    five.classList.remove("active")
}
if (actt == "four") {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "block";
    section5.style.display = "none";
    one.classList.remove("active")
    tow.classList.remove("active")
    three.classList.remove("active")
    four.classList.add("active")
    five.classList.remove("active")
}
if (actt == "five") {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "block";
    one.classList.remove("active")
    tow.classList.remove("active")
    three.classList.remove("active")
    four.classList.remove("active")
    five.classList.add("active")
}

let reveals = document.querySelectorAll(".reveal-button,.reveal-button2,.reveal-button3")
function revealOnScroll() {
    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop =
            el.getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("activee");
        }
    })
}
window.addEventListener("scroll", revealOnScroll)

revealOnScroll()



let rit2 = document.getElementById("rit2")
let rit = document.getElementById("rit")
let leftt = document.getElementById("leftt")
let hero = document.getElementById("hero")
let contr = document.getElementById("contr")
let opt = document.getElementById("opt")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")
let green = document.getElementById("green")
let gray = document.getElementById("gray")
let saddlebrown = document.getElementById("saddlebrown")
let crimson = document.getElementById("crimson")
let darkslategrey = document.getElementById("darkslategrey")

rit.onclick = function () {
    rit.style.display = "none";
    leftt.style.display = "block";
    rit2.style.display = "block";
};
rit2.onclick = function () {
    leftt.style.display = "none";
    rit2.style.display = "none";
    rit.style.display = "block";
};
document.addEventListener("click", function (p) {
    if (!rit.contains(p.target) && !leftt.contains(p.target)) {
        leftt.style.display = "none";
        rit.style.display = "block";
        rit2.style.display = "none";
    }
})
sun.onclick = function () {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    localStorage.setItem("color", "#000")
    localStorage.setItem("back", "#fff")
};
moon.onclick = function () {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    localStorage.setItem("color", "#fff")
    localStorage.setItem("back", "#000")
};
green.onclick = function () {
    document.body.style.color = "green";
    localStorage.setItem("color", "green")

};
gray.onclick = function () {
    document.body.style.color = "gray";
    localStorage.setItem("color", "gray")

};
saddlebrown.onclick = function () {
    document.body.style.color = "saddlebrown";
    localStorage.setItem("color", "saddlebrown")

};
crimson.onclick = function () {
    document.body.style.color = "crimson";
    localStorage.setItem("color", "crimson")

};
darkslategrey.onclick = function () {
    document.body.style.color = "darkslategrey";
    localStorage.setItem("color", "darkslategrey")

};

let savecolor = localStorage.getItem("color")
let saveback = localStorage.getItem("back")

document.body.style.color = savecolor
document.body.style.backgroundColor = saveback;

let qus1 = document.querySelector(".qus1")
let qus2 = document.querySelector(".qus2")
let qus3 = document.querySelector(".qus3")
let qus4 = document.querySelector(".qus4")
let qus5 = document.querySelector(".qus5")
let qus6 = document.querySelector(".qus6")
let qus7 = document.querySelector(".qus7")
let qus8 = document.querySelector(".qus8")
let qus9 = document.querySelector(".qus9")
let gap1 = document.querySelector(".gap1")
let gap2 = document.querySelector(".gap2")
let gap3 = document.querySelector(".gap3")
let gap4 = document.querySelector(".gap4")
let gap5 = document.querySelector(".gap5")
let gap6 = document.querySelector(".gap6")
let gap7 = document.querySelector(".gap7")
let gap8 = document.querySelector(".gap8")
let gap9 = document.querySelector(".gap9")

qus1.onclick = function () {
    if (gap1.style.display === "none") {
        gap1.style.display = "block"
    } else {
        gap1.style.display = "none"
    }
}

qus2.onclick = function () {
    if (gap2.style.display === "none") {
        gap2.style.display = "block"
    } else {
        gap2.style.display = "none"
    }
}

qus3.onclick = function () {
    if (gap3.style.display === "none") {
        gap3.style.display = "block"
    } else {
        gap3.style.display = "none"
    }
}

qus4.onclick = function () {
    if (gap4.style.display === "none") {
        gap4.style.display = "block"
    } else {
        gap4.style.display = "none"
    }
}

qus4.onclick = function () {
    if (gap4.style.display === "none") {
        gap4.style.display = "block"
    } else {
        gap4.style.display = "none"
    }
}

qus5.onclick = function () {
    if (gap5.style.display === "none") {
        gap5.style.display = "block"
    } else {
        gap5.style.display = "none"
    }
}

qus6.onclick = function () {
    if (gap6.style.display === "none") {
        gap6.style.display = "block"
    } else {
        gap6.style.display = "none"
    }
}

qus7.onclick = function () {
    if (gap7.style.display === "none") {
        gap7.style.display = "block"
    } else {
        gap7.style.display = "none"
    }
}

qus8.onclick = function () {
    if (gap8.style.display === "none") {
        gap8.style.display = "block"
    } else {
        gap8.style.display = "none"
    }
}

qus9.onclick = function () {
    if (gap9.style.display === "none") {
        gap9.style.display = "block"
    } else {
        gap9.style.display = "none"
    }
}

qus7.onclick = function () {
    if (gap7.style.display === "none") {
        gap7.style.display = "block"
    } else {
        gap7.style.display = "none"
    }
}

// const forminit = new Forminit();
const FORM_ID = '4eqhq1xqclk'; // ← Replace with your Form ID
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const button = form.querySelector('input[type="submit"]');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Show loading state
    status.textContent = 'Sending...';
    status.className = 'status-loading';
    button.disabled = true;
    button.textContent = 'Sending...';

    const formData = new FormData(form);
    const { data, error } = await forminit.submit(FORM_ID, formData);

    button.disabled = false;
    button.textContent = 'Send Message';

    if (error) {
        status.textContent = error.message;
        status.className = 'status-error';
        return;
    }

    // Success
    status.textContent = 'Message sent successfully!';
    status.className = 'status-success';
    form.reset();
});

// window.localStorage.clear()
