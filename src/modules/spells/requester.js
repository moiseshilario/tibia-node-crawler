/**
 * Spells Requester
 */

module.exports = function(foo, callback){
  var SpellsRequester;

  SpellsRequester = new Requester()
    .setName('Spells')
    .setPath('community/')
    .setData('subtopic', 'spells')
    .setData('foo', foo)
    .setParser(moduleManager.loadParser('spells'))
    .setCallback(callback)
    .request();
};
