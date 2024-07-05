// import { v4 as uuidv4 } from 'uuid';
 const uuid = require('uuid').v4;

class Band{
    constructor(name='no-name'){
      this.id = uuid();// unique ID
      this.name = name;
      this.votes = 0;
    }
}

module.exports = Band;