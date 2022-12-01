const month = document.querySelector("h3");
const dayEi = document.querySelector(".day");
const monthEi = new Date().getMonth();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

month.innerText = months[monthEi]

const day = document.querySelector("p");

day.innerText = new Date().toDateString();

const firstDay = new Date(new Date().getFullYear(), monthEi , 1).getDay() -1;

let days= "";
for (i = firstDay; i > 0 ; i --) {
    days += `<div class="empty"></div>`
}

const lastDay = new Date( new Date().getFullYear(), monthEi +1, 0 ).getDate();
 for (i = 1; i < lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
 }
 dayEi.innerHTML= days;

