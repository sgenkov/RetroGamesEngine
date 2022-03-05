class Utils {
    public getRandomColor(): number {
        return Math.floor(Math.random() * 16777215);
    };

    /**
     * Serves as 2-dimensional iterator that walks through all the elements of the level object and does specific operations over them. 
     * @param level 2-dimensional array of basic level elements
     * @param callback Custom function that determines what calculations to be executed over every element
     * @param pushResultToReturn A flag that determines whether the function returns result as an array or it is void function
     * @returns any[] | undefined
     */
    public iterateOverLevel(level: any[], callback: (...rest) => any, pushResultToReturn: boolean) {
        let acc: any[] = pushResultToReturn ? new Array<any>() : undefined;
        level.forEach((row, rowIndex, wholeLevel) => {
            row.forEach((rowSymbol, rowSymbolIndex) => {
                try {
                    callback({ row, rowIndex, wholeLevel, rowSymbol, rowSymbolIndex }, acc);
                } catch(err) {
                    console.warn("Incorrect configs passed to iterateOverLevel()\n",err);  
                };
            });
        });
        return acc;
    };

};

export default new Utils();