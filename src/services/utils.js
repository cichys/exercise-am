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


    /**
     * @param {string} date format 3:03 AM - 13 Nov 2018
     * @returns {string} format Nov 13, 2018
     */
    static parseDate(date) {
        const arr = date.split('-');
        const dateOnly = arr[1].trim();
        const [d, m, y] = dateOnly.split(' ');
        return `${m} ${d}, ${y}`;
    }
}


export default Utils;
