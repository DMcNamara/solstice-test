import { sortBy } from './utils';

describe(' Utils', () => {
    it('should sort by object property', () => {
        const testData = [
            { name: 'Sandhya' },
            { name: 'Dan' },
            { name: 'The Rock' },
        ];

        const sorted = testData.sort((a, b) => sortBy(a, b, 'name'));
        expect(sorted[0].name).toEqual('Dan');
        expect(sorted[1].name).toEqual('Sandhya');
        expect(sorted[2].name).toEqual('The Rock');
    });
});
