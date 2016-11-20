/* global moduleManager: true */
/* global Parser: true */


var better = require('../../libs/better');
var Spell = moduleManager.loadObject('spell');

/**
 * Spell Parser
 */

module.exports = function(body){
  var SpellParser;

  SpellParser = new Parser(body)

    .setData(new Spells())

    .setParser(function(){
      var self = this;
      var $ = this.$;


      var wrap = function(key) {
        return $('b:contains("' + key + '")').closest('table');
      };

      wrap('Spell Information')
        .find('tr')
        .each(function() {
          var td = $(this).find('td');
          var key = better.key($(td[0]).text());
          var value = better.value($(td[1]).text());

          switch(key) {
            case 'soulPoints':
              value = better.int(value);
            break;
            case 'amount':
              value = better.int(value);
            break;
            case 'expLvl':
              value = better.int(value);
            break;
            case 'mana':
              value = better.int(value);
            break;
            case 'price':
              value = better.int(value);
            break;
          }

          self.data.spell[key] = value;
        });
    });

  return SpellParser;
};
