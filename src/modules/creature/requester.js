/**
 * Creature Requester
 */

module.exports = function(creature, callback){
  var CreatureRequester;

  CreatureRequester = new Requester()
    .setName('Creature')
    .setPath('library/')
    .setData('subtopic', 'creatures')
    .setData('race', creature)
    .setParser(moduleManager.loadParser('creature'))
    .setCallback(callback)
    .request();
};
