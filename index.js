const date = new Date();

const renderCalender = () => {
    date.setDate(1);
    // console.log(date.getDay());

    const monthDays = document.querySelector(".days");
    //   const weekDays = document.querySelector(".weekdays");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    //   console.log(lastDay);

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    //   console.log(prevLastDay);

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();
    //   console.log(lastDayIndex);

    const nextDays = 7 - lastDayIndex;
    console.log(nextDays);

    const firstDayIndex = date.getDay() == 0 ? 6 : date.getDay() - 1;
    //   console.log(firstDayIndex);

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
    ];

    document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]
        }, ${date.getFullYear()}`;

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay + 1 - x}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
});
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
});

renderCalender();

function navigationClose() {
    document.querySelector(".navigation-mobile").classList.add("navigation-toggle-close")
}

function navigationOpen() {
    document.querySelector(".navigation-mobile").classList.remove("navigation-toggle-close")
}

function taskClose() {
    document.querySelector(".task").classList.add("task-toggle-close");
}

function taskOpen() {
    document.querySelector(".task").classList.remove("task-toggle-close");
}




