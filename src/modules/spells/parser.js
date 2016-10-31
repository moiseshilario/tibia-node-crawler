var Spells = moduleManager.loadObject('spells');

/**
 * Spells Parser
 */

module.exports = function(body){
  var SpellsParser;

  SpellsParser = new Parser(body)

    .setData(new Spells())

    .setParser(function(){
      var self = this;
      var $ = this.$;

    });

  return SpellsParser;
};
