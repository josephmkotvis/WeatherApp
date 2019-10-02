export const returnFixedDate = (date , timeZoneDiff) => {
    const epochDate = new Date(1970, 0, 1); 
        epochDate.setSeconds(date + timeZoneDiff);
    return epochDate;
}