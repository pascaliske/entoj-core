'use strict';

/**
 * Requirements
 * @ignore
 */
const Base = require('../Base.js').Base;
const DocumentationArray = require('./documentation/DocumentationArray.js').DocumentationArray;
const BaseArray = require('../base/BaseArray.js').BaseArray;
const map = require('../utils/map.js');

/**
 * @namespace model
 */
class BaseValueObject extends Base
{
    /**
     *
     */
    constructor()
    {
        super();

        // Add initial values
        this._properties = map.create();
        this._documentation = new DocumentationArray();
        this._files = new BaseArray();
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'model/BaseValueObject';
    }


    /**
     * @property {*}
     */
    get uniqueId()
    {
        return this;
    }


    /**
     * @property {Map}
     */
    get properties()
    {
        return this._properties;
    }


    /**
     * @property {Array}
     */
    get documentation()
    {
        return this._documentation;
    }


    /**
     * @property {Array}
     */
    get files()
    {
        return this._files;
    }


    /**
     * @param {BaseValueObject} other
     * @returns {Bool}
     */
    isEqualTo(other)
    {
        return this.uniqueId === other.uniqueId;
    }


    /**
     * Updates the internal state with the provided data
     *
     * @param {*} data
     * @param {Bool} clear
     * @returns {Promise}
     */
    update(data, clear)
    {
        if (data)
        {
            this._properties.load(data.properties, clear);
            this._documentation.load(data.documentation, clear);
            this._files.load(data.files, clear);
        }
        return Promise.resolve();
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.BaseValueObject = BaseValueObject;
