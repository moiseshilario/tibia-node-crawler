/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Executar npm-install na pasta Test
//Executar node TestWorld.js

var tibia = require('../index.js');


tibia.world('Kronera', function(data){
  console.log(data.world);
  console.log(data.playersOnline);
  
  //etc
  console.log(data);
});