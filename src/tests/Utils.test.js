import Utils from '../services/utils';

describe('Utils', () => {

    it('display number of items', () => {
        expect(Utils.displayNumberOfItems(20)).toBe(20);
        expect(Utils.displayNumberOfItems(1)).toBe(1);
        expect(Utils.displayNumberOfItems(0)).toBe('-');
    });

    it('display hashtags', () => {
        expect(Utils.displayHashtags(['python', 'js', 'go'])).toBe('python, js');
        expect(Utils.displayHashtags(['python'])).toBe('python');
    });

    it('parse date', () => {
        expect(Utils.parseDate('3:03 AM - 13 Nov 2018')).toBe('Nov 13, 2018');
    });
});
