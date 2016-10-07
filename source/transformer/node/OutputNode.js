'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeList = require('./NodeList.js').NodeList;


/**
 *
 */
class OutputNode extends NodeList
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.node/OutputNode';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.OutputNode = OutputNode;
