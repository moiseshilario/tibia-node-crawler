/**
 * Spells Requester
 */

module.exports = function(spell, callback){
  var SpellsRequester;

  SpellsRequester = new Requester()
    .setName('Spells')
    .setPath('library/')
    .setData('subtopic', 'spells')
    .setData('spell', spell)
    .setParser(moduleManager.loadParser('spell'))
    .setCallback(callback)
    .request();
};
