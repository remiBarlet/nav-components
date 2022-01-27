import sizePropToCssVal from '../utils/sizePropToCssVal'

describe('parameter converted to a usefull lenght/percentage value', () => {
    it('convert a number to a rem value and return it as a string', () => {
        expect(sizePropToCssVal(3)).toEqual('3rem');
    })
    it('returns the length in em unit passed as a parameter', () => {
        expect(sizePropToCssVal('3em')).toEqual('3em');
        expect(sizePropToCssVal('3 em')).toEqual('3em');
    })
    it('returns the length in rem unit passed as a parameter', () => {
        expect(sizePropToCssVal('3rem')).toEqual('3rem');
        expect(sizePropToCssVal('3 rem')).toEqual('3rem');
    })
    it('returns the length in px unit passed as a parameter', () => {
        expect(sizePropToCssVal('3px')).toEqual('3px');
        expect(sizePropToCssVal('3 px')).toEqual('3px');
    })
    it('returns the percentage of length passed as a parameter', () => {
        expect(sizePropToCssVal('85%')).toEqual('85%');
        expect(sizePropToCssVal('85 %')).toEqual('85%');
    })
    it('returns null for non positives real numbers ( n <= 0)', () => {
        expect(sizePropToCssVal(0)).toEqual(null);
        expect(sizePropToCssVal(-5)).toEqual(null);
    })
    it('returns null for non positive percentage ( p <= 0%)', () => {
        expect(sizePropToCssVal('0%')).toEqual(null);
        expect(sizePropToCssVal('-5%')).toEqual(null);
    })
    it('returns null for negative lengths or equal to zero in rem or em unit', () => {
        expect(sizePropToCssVal('-5rem')).toEqual(null);
        expect(sizePropToCssVal('-5 rem')).toEqual(null);
        expect(sizePropToCssVal('-5em')).toEqual(null);
        expect(sizePropToCssVal('-5 em')).toEqual(null);
        expect(sizePropToCssVal('-5px')).toEqual(null);
        expect(sizePropToCssVal('-5 px')).toEqual(null);
        expect(sizePropToCssVal('0rem')).toEqual(null);
    })

    it('returns null for strings which aren\'t valid length units', () => {
        expect(sizePropToCssVal('3rems')).toEqual(null);
        expect(sizePropToCssVal('4ems')).toEqual(null);
        expect(sizePropToCssVal('85,85.75reams')).toEqual(null);
    })
})
