/**
 * Person.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  table:'Person',

  attributes: {

    id: {  type: 'number',autoIncrement: true},
    PhotoUrl: { type: 'string', required: true },
    Phone: { type: 'string',required: true },
    FullName: { type: 'string',required: true },
    Email: { type: 'string',required: true },
  },

};

