var better = require('../../libs/better');
var Creature = moduleManager.loadObject('creature');

/**
 * Creature Parser
 */

module.exports = function(body){
  var CreatureParser;

  CreatureParser = new Parser(body)

    .setData(new Creature())

    .setParser(function(){
      var self = this;
      var $ = this.$;



    var wrap = function(key) {
        return $('p:contains("' + key + '")').text();

      };


      var expRegex = /([0-9]+)\ experience/g;
      var hpRegex =  /([0-9]+)\ hitpoints/g;


     var experience = expRegex.exec(wrap("experience"));
     var hitPoints = hpRegex.exec(wrap("hitpoints"));
     self.data.description = wrap('');
     self.data.exp = experience[1];
     self.data.hitPoints = hitPoints[1];
         });

  return CreatureParser;
};
