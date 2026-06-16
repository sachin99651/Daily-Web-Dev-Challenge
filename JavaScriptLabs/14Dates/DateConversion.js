const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(dateObj) {
    const month = dateObj.getMonth() + 1; 
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

function formatDateLong(dateObj) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const formattedDate = `${monthName} ${day}, ${year}`;
    return `Formatted Date (Month Day, Year): ${formattedDate}`;
}
