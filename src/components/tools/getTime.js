const getTime = (input) => {
    var date = input ? new Date(input) : new Date();

    const newDate = {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear(),
        h: date.getHours(),
        min: date.getMinutes(),
        s: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
        getFullDate: () => {
            return {
                details: {
                    day: newDate.day,
                    month: newDate.month,
                    year: newDate.year,
                },
                formatted: `${newDate.day}/${newDate.month}/${newDate.year}`,
            };
        },
        getFullTime: () => {
            return {
                details: {
                    h: newDate.h,
                    min: newDate.min,
                    s: newDate.s,
                },
                formatted: `${newDate.h}h${newDate.min}min${newDate.s}s`,
            };
        },
        getAllFormatted: () => {
            return {
                date: `${newDate.day}/${newDate.month}/${newDate.year}`,
                time: `${newDate.h}h${newDate.min}min${newDate.s}s`,
            };
        },
    };

    return newDate;
};

console.log(getTime(new Date()).getFullDate().details);
