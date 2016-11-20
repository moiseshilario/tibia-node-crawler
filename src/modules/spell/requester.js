/**
 * Spells Requester
 */

module.exports = function(spell, callback){
  var SpellRequester;

  SpellRequester = new Requester()
    .setName('Spell')
    .setPath('library/')
    .setData('subtopic', 'spells')
    .setData('spell', spell)
    .setParser(moduleManager.loadParser('spell'))
    .setCallback(callback)
    .request();
};
