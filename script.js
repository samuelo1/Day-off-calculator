document.getElementById("dateSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "") {
        return;
    }

    const url = "http://isdayoff.ru/" + value + "?cc=us";
    fetch(url)
        .then(function (response) {
            return response.json();
            console.log("It worked.");
        }).then(function (response) {
            const date = getWrittenDate(value);

            if (response == "0") {
                document.getElementById("DateResults").innerHTML = date + " is a working day";
            } else if (response == "1") {
                document.getElementById("DateResults").innerHTML = date + " is not a working day!";
            } else {
                return;
            }
        })
});

function getWrittenDate(value) {
    // Month
    let monthNum = value[5];
    monthNum += value[6];
    let writtenDate = convertMonthToText(monthNum);
    writtenDate += " ";
    
    // Day
    if (value[8] != 0) {
        writtenDate += value[8];
    } 
    writtenDate += value[9];
    writtenDate += ", "

    // Year
    for (let i = 0; i < 4; i++) {
        writtenDate += value[i];
    }

    return writtenDate;
}

function convertMonthToText(monthNum) {
    let monthString = "undefined";
    if (monthNum == "01") {
        monthString = "January";
    } else if (monthNum == "02") {
        monthString = "February";
    } else if (monthNum == "03") {
        monthString = "March";
    } else if (monthNum == "04") {
        monthString = "April";
    } else if (monthNum == "05") {
        monthString = "May";
    } else if (monthNum == "06") {
        monthString = "June";
    } else if (monthNum == "07") {
        monthString = "July";
    } else if (monthNum == "08") {
        monthString = "August";
    } else if (monthNum == "09") {
        monthString = "September";
    } else if (monthNum == "10") {
        monthString = "October";
    } else if (monthNum == "11") {
        monthString = "November";
    } else if (monthNum == "12") {
        monthString = "December";
    }

    return monthString;
}