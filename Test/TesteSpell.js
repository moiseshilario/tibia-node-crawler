/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Executar npm-install na pasta Test
//Executar node TestWorld.js

var tibia = require('../index.js');


tibia.spell('berserk', function(data){
//  console.log(data.spell);
//  console.log(data.rune);

  //etc
  console.log(data);
});