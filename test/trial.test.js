require('jest')

var assert = require('chai').assert

describe('Running a dummy test set one', function () {

    it('Dummy test one in set one', async function () {
        assert.equal(201, 201)  
    })

//     it('should fail - Dummy test Two in set one', async function () {
//         assert.equal(201, 200)  
//     })
})

describe('Running a dummy test set Two', function () {

//     it('should fail - Dummy test one in set two', async function () {
//         assert.equal(201, 200)  
//     })

    it('Dummy test Two in set two', async function () {
        assert.equal(201, 201)  
    })
})
