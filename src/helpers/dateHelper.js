export const getTodaysDateStringForCode = () => {
    let todaysDate = new Date();
    let day = todaysDate.getDate();
    day = day > 10 ? day : "0" + day;
    let month = todaysDate.getMonth();
    month = month > 10 ? month + 1 : "0" + (month + 1);

    return `${todaysDate.getFullYear()}-${month}-${day}`;
};

export const getDateStringForView = (date) => {
    let dateObject = new Date(date);
    let day = dateObject.getDate();
    day = day > 10 ? day + 1 : "0" + (day + 1);
    let month = dateObject.getMonth();
    month = month > 10 ? month + 1 : "0" + (month + 1);

    return `${month}/${day}/${dateObject.getFullYear()}`;
};