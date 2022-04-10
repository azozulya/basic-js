const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersArray) {
  if(!Array.isArray(membersArray))
    return false;

    return membersArray
    .filter(member => typeof member === 'string')
    .map(member => member.trim().toUpperCase())
    .sort()
    .reduce((res, member) => res += member.slice(0,1), "")
    ;
}

module.exports = {
  createDreamTeam
};
