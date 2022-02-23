// POST group.
// Asseert the name is correct.
// write script for execution.
// updating to check workflow trigger...123344

require('mocha')
require('../common/util/testrail-util')
var config = require('config')
const common_utils = require('../common/util/commonUtils')
var assert = require('chai').assert

const requests = require('../common/setup/request');

let group_path
let group_name
let parent_group_id

const groupRequest = require('../common/datasource/groups');
const timeout = config.get('timeout')
describe('POST Groups (+) - Create Groups With Header Fields *end-to-end* *docker-test*', function () {
    let groupID = 0

    before(async function () {
        group_name = common_utils.randName() + common_utils.randNum(2)
        let result = await requests.getGroups()
        group_path = result.body.groups[0].group_name + "\\"
        parent_group_id = result.body.groups[0].group_id
    })

    it('C38812: Internal > Create Group > Validate SUCCESS message for group_name without path but with valid parent_group_id', async function () {

        let requestBody = groupRequest.postGroupsBasic()
        requestBody.group_name = group_name
        requestBody.parent_group_id = parent_group_id
        let result = await requests.postGroups(requestBody)

        groupID = result.body.group_id
        assert.equal(result.statusCode, 201, 'Actual status is ' + result.statusCode)
        assert.exists(result.body.group_name, group_name)
    })

    afterEach(async function () {
        await requests.deleteGroup(groupID)
    })

})
