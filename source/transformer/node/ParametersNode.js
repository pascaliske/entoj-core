'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeList = require('./NodeList.js').NodeList;


/**
 *
 */
class ParametersNode extends NodeList
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.node/ParametersNode';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.ParametersNode = ParametersNode;
