export const computeDuration = (start, end) => {
    let startTime = new Date('01/01/2000 '+start);
    let endTime = new Date('01/01/2000 '+end);
    return (endTime - startTime) / 1000 / 60;
};