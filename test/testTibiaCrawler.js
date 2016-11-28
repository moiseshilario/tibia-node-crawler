/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Executar npm-install na pasta Test
//Executar node testTibiaCrawler

var tibia = require('../index.js');
        
        //Test character
        tibia.character('Ed Melkior', function(data){
            console.log("\n\n======TEST CHARACTER========== ");
            console.log(data.character.world);
            console.log(data.account.created);
        });

        // Test Creature
        tibia.creature('demon', function(data){
            console.log("\n\n======TEST CREATURE========== ");
            console.log(data);
        });
        
        // Test World
        tibia.world('Kronera', function(data){
            console.log("\n\n======TEST WORLD========== ");
            console.log(data.world.pvpType); // Optional PVP
            console.log(data.world.worldQuestTitles); // ['Bewitched', ...]
            console.log(data.playersOnline); // [{}, {}, ...]
            console.log(data.isPlayerOnline('Ed Melkior')); // true or false
            console.log(data.filterPlayersBy('vocation', ['Knight', 'Elite Knight'])); // [{}, {}, ...]
        });
        
        //Test highscores
        tibia.highscores('Fidera', 'experience', 0, function(data){
            console.log("\n\n======TEST HIGHSCORES========== ");
            console.log(data.highscores); // Array
            //console.log(data.getByRank(1).name); // Nini (until now)
            //console.log(data.getByRank(1).level); // 750 (until now)
        });  
        
        
        // Test Spell
        tibia.spell('annihilation', function(data){
            console.log("\n\n======TEST SPELLs========== ");
            console.log(data);
        });