"use strict";

/**
 * Requirements
 */
let nunjucks = require('nunjucks');
let Environment = require(SOURCE_ROOT + '/nunjucks/Environment.js').Environment;
let PathesConfiguration = require(SOURCE_ROOT + '/model/configuration/PathesConfiguration.js').PathesConfiguration;


/**
 * Spec
 */
describe(Environment.className, function()
{
    describe('#constructor', function()
    {
        xit('should register the debug filter', function()
        {
            let testee = new Environment(new PathesConfiguration());
            expect(testee.getFilter('debug')).to.be.ok;
        });
    });
});