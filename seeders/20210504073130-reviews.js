"use strict";

const User = require("../models").user;
const Location = require("../models").location;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "brenda@gmail.com" },
    });

    const user2 = await User.findOne({
      where: { email: "nyckele@gmail.com" },
    });

    const user4 = await User.findOne({
      where: { email: "linda@gmail.com" },
    });

    const user5 = await User.findOne({
      where: { email: "john@gmail.com" },
    });

    const user7 = await User.findOne({
      where: { email: "emma@gmail.com" },
    });

    const user8 = await User.findOne({
      where: { email: "akke@gmail.com" },
    });

    const user9 = await User.findOne({
      where: { email: "guido@gmail.com" },
    });

    const location1 = await Location.findOne({
      where: { address: "Valentijnkade, 1098 XA Amsterdam" },
    });

    const location2 = await Location.findOne({
      where: {
        address: "Haarlemmerweg 4, 1013 RW Amsterdam",
      },
    });

    const location3 = await Location.findOne({
      where: { address: "Stadhouderskade 24B, 1054 ES Amsterdam" },
    });

    const location4 = await Location.findOne({
      where: { address: "Oosterpark, 1092 CA Amsterdam" },
    });

    const location5 = await Location.findOne({
      where: { address: "Bosbaan 4, 1182 AG Amstelveen" },
    });

    const location6 = await Location.findOne({
      where: { address: "Postjesweg 124, 1057 EH Amsterdam" },
    });

    const location7 = await Location.findOne({
      where: { address: "Christoffel Plantijngracht 4, 1065 DA Amsterdam" },
    });

    const location8 = await Location.findOne({
      where: { address: "Julianaplein 1, 1097 DN Amsterdam" },
    });

    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          time: new Date(),
          content:
            "Great training! I love Flevopark. It is so green and running along water makes me relax.",
          userId: user2.id,
          locationId: location1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "Vondelpark can be busy, so watch out for the bikers and tourists. Here is perfect to run late evening, and you can find many like-minded runners on the track too.",
          userId: user4.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "Amazing! Amsterdamse bos is like designed with runners in mind. Go cross-country and find your own trail through the woods, or follow one of the designated routes. The training is just right intense!",
          userId: user5.id,
          locationId: location5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "I love this training because it suits my needs and Oosterpark is next door to my place.",
          userId: user1.id,
          locationId: location4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "After training I feel like a new person! I like to train in a small group. Usually we take coffee afterwards in Westepark Bakkerswinkel.",
          userId: user7.id,
          locationId: location2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "Here are many sandy paths, great for running, and you might find yourself having run 10 KM without much noticing it. The training has a nice variation of running and body exercises.",
          userId: user8.id,
          locationId: location6.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "Challenging training! I especially like it because of a view of sailboats, canoeists and anglers.",
          userId: user9.id,
          locationId: location7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Great variety of exercises! The trainer is great!",
          userId: user2.id,
          locationId: location4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "I love running in the city. I feel so alive, and Amstel is so beautiful.",
          userId: user1.id,
          locationId: location8.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "I love to come to Flevopark. The running round is perfect for me.",
          userId: user4.id,
          locationId: location1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "Vondelpark is a great park for running. The training is hard, but worth it.",
          userId: user9.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content:
            "I can get lost in the forest. I love running paths here. It just makes me feel I live outside of the busy city.",
          userId: user8.id,
          locationId: location5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "The training is great! I like the Sloterplas vibe!",
          userId: user5.id,
          locationId: location7.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Great for beginners! I highly recommend Oosterpark.",
          userId: user5.id,
          locationId: location4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: new Date(),
          content: "Perfect training! Close to the city center.",
          userId: user7.id,
          locationId: location3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
