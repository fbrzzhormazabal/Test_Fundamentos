const assert = require('assert');

describe('Test parseConnectionParams method', function () {
    const parseConnectionParams = require('../.').parseConnectionParams;
    const testedParamString = 'booleanTrue=true&booleanFalse=false&string=foo&integer=35&float=35.8';
    const testedSingleNestedObjectString = 'subkey[string]=foo&subkey[booleanTrue]=true&subkey[booleanFalse]=false&subkey[integer]=42&subkey[float]=98.6&array[0]=0&array[1]=98.6&array2[]=0&array2[]=98.6';
    const testedMultiNestedObjectString = 'subkey[subkey][string]=foo&subkey[subkey][booleanTrue]=true&subkey[subkey][booleanFalse]=false&subkey[subkey][integer]=42&subkey[subkey][float]=98.6&subkey[subkey][array][]=0&subkey[subkey][array][]=98.6&array[0][0]=0&array[0][1]=98.6&array[1][]=0&array[1][]=98.6';

    describe('Test default not parsed values', function () {
        const result = parseConnectionParams(testedParamString);

        it('should be string true', function () {
            assert.equal(result.booleanTrue, 'true')
        });

        it('should be string false', function () {
            assert.equal(result.booleanFalse, 'false')
        });


        it('should be string', function () {
            assert.equal(result.string, 'foo')
        });


        it('should be string number', function () {
            assert.equal(result.integer, '35')
        });

        it('should be string float', function () {
            assert.equal(result.float, '35.8')
        });
    });

    it('should return empty object', function () {
        const result = parseConnectionParams('', true);
        assert.deepEqual(result, {})
    });

    describe('Test parsed values', function () {
        const result = parseConnectionParams(testedParamString, true);

        it('should be parsed', function () {
            assert.ok(typeof result === 'object', 'result not parsed');
        });

        it('should be boolean true', function () {
            assert.equal(result.booleanTrue, true)
        });

        it('should be boolean false', function () {
            assert.equal(result.booleanFalse, false)
        });

        it('should be string', function () {
            assert.equal(result.string, 'foo')
        });

        it('should be integer', function () {
            assert.equal(result.integer, 35)
        });

        it('should be float', function () {
            assert.equal(result.float, 35.8)
        });
    });

    describe('Test parsing single-level nested objects', function () {
        const result = parseConnectionParams(testedSingleNestedObjectString, true);

        it('should be parsed', function () {
            assert.ok(typeof result === 'object', 'result not parsed');
        });

        it('should have object subkey', function () {
            assert.ok(typeof result.subkey === 'object', 'result subkey is not an object');
        });

        it('subkey should be boolean true', function () {
            assert.equal(result.subkey.booleanTrue, true);
        });

        it('subkey should be boolean false', function () {
            assert.equal(result.subkey.booleanFalse, false);
        });

        it('subkey should be string', function () {
            assert.equal(result.subkey.string, 'foo');
        });

        it('subkey should be integer', function () {
            assert.equal(result.subkey.integer, 42);
        });

        it('subkey should be float', function () {
            assert.equal(result.subkey.float, 98.6);
        });

        it('should have array subkey', function () {
            assert.ok(result.array.constructor === Array, 'result array is not an array');
        });

        it('array length should be 2', function () {
            assert.equal(result.array.length, 2);
        });

        it('array item should be integer', function () {
            assert.equal(result.array[0], 0);
        });

        it('array item should be float', function () {
            assert.equal(result.array[1], 98.6);
        });

        it('should have array2 subkey', function () {
            assert.ok(result.array2.constructor === Array, 'result array2 is not an array');
        });

        it('array2 length should be 2', function () {
            assert.equal(result.array2.length, 2);
        });

        it('array2 item should be integer', function () {
            assert.equal(result.array2[0], 0);
        });

        it('array2 item should be float', function () {
            assert.equal(result.array2[1], 98.6);
        });
    });

    describe('Test parsing multi-level nested objects', function () {
        const result = parseConnectionParams(testedMultiNestedObjectString, true);

        it('should be parsed', function () {
            assert.ok(typeof result === 'object', 'result not parsed');
        });

        it('should have object subkey', function () {
            assert.ok(typeof result.subkey === 'object', 'result subkey is not an object');
        });

        it('should have object subkey object subkey', function () {
            assert.ok(typeof result.subkey.subkey === 'object', 'result subkey subkey is not an object');
        });

        it('subkey should be boolean true', function () {
            assert.equal(result.subkey.subkey.booleanTrue, true);
        });

        it('subkey should be boolean false', function () {
            assert.equal(result.subkey.subkey.booleanFalse, false);
        });

        it('subkey should be string', function () {
            assert.equal(result.subkey.subkey.string, 'foo');
        });

        it('subkey should be integer', function () {
            assert.equal(result.subkey.subkey.integer, 42);
        });

        it('subkey should be float', function () {
            assert.equal(result.subkey.subkey.float, 98.6);
        });

        it('subkey should be array', function () {
            assert.ok(result.subkey.subkey.array.constructor === Array, 'result subkey array is not an array');
        });
    });

});
