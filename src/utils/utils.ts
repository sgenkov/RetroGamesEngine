
export function getRandomColor(): number {
    return Math.floor(Math.random() * 16777215);
};

export function iterateOverLevel(level: any[], callback: (...rest) => any, acc) {

    level.forEach((row, rowIndex, wholeLevel) => {
        row.forEach((element, elementIndex) => {
            callback({row, rowIndex, wholeLevel, element, elementIndex});
        });
    });
    return acc;
};