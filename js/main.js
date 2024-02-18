// let weekday = [];
let dayValues = [];

// Fetch JSON file from live server
const chart = [...document.querySelectorAll(".chart-bar")];
const values2 = [10, 15, 53, 43, 23, 51, 65];

const fetch_JSON = fetch("/js/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log({ data });

        // weekday = data.map((name) => name.day);
        // console.log(weekday);

        dayValues = data.map((weekday) => weekday.amount);

        // checking for the highest value and add cyan classlist to mark it
        const max = Math.max(...dayValues);
        const cyan = dayValues.indexOf(max);
        chart[cyan].classList.add("cyan");

        // console.log(weekday_Value);

        for (let n = 0; n < chart.length; n++) {
            chart[n].style.height = dayValues[n] * 3 + "px";
        }
    });
