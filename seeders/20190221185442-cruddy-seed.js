'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('games',[
      {
        name: "Betrayal at House on the Hill",
        description: "A fun haunted house game",
        players: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dominion",
        description: "A fun deck-building game",
        players: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coup",
        description: "A fun game of intrigue, deception, and MURDER!",
        players: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Battleship",
        description: "Awesome naval combat game",
        players: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "UNO",
        description: "Fun card game with a spanish-language flair",
        players: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Settlers of Catan",
        description: "Awesome game for ruining relationships and destroying lives",
        players: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('games', null, {})
  }
};
