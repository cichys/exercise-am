class Utils {

    /**
     * @param {number} number
     * @returns {string|number}
     */
    static displayNumberOfItems(number) {
        return number === 0 ? '-' : number;
    }

    /**
     * @param {array} items
     * @returns {string}
     */
    static displayHashtags(items) {
        const arr = items.length > 2 ? items.slice(0, 2) : items;
        return arr.join(', ');
    }
}


export default Utils;
