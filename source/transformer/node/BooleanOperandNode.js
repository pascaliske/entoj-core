'use strict';

/**
 * Requirements
 * @ignore
 */
const BaseNode = require('./BaseNode.js').BaseNode;


/**
 *
 */
class BooleanOperandNode extends BaseNode
{
    /**
     * @ignore
     */
    constructor(value)
    {
        super();
        this.serializeFields.push('value');
        this.value = value;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.node/BooleanOperandNode';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.BooleanOperandNode = BooleanOperandNode;
