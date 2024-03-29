'use strict';
//Imports
const { readBucket } = require('./readBucket');
const { appendBucket } = require('./appendBucket');

//Const/Vars
let initJson;
let content;

/**
 * @description We initialize the bucket with an empty json object
 */
const initBucketIfEmpty = async () => {
  try {
    //Data
    initJson = [];

    content = await readBucket();

    if (content == undefined || content == null) {
      initJson = JSON.stringify(initJson);

      await appendBucket(initJson);
    } else {
      return;
    }
  } catch (error) {
    console.error(
      `ERROR in function initBucketIfEmpty(). Caused by ${error} . Specific stack is ${error.stack} `,
    );
  }
};

module.exports = {
  initBucketIfEmpty,
};
