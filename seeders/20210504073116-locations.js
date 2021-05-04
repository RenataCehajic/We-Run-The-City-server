"use strict";

const Runningclub = require("../models").runningclub;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const location1 = await Runningclub.findOne({
      where: { title: "Running Amsterdam in Flevopark" },
    });

    const location2 = await Runningclub.findOne({
      where: { title: "Running group Westerpark Amsterdam" },
    });

    const location3 = await Runningclub.findOne({
      where: { title: "Running Holland in Vondelpark" },
    });

    const location4 = await Runningclub.findOne({
      where: {
        title:
          "Dutch Gay and Lesbian Atlethics and Frontrunners Amsterdam in Oosterpark",
      },
    });

    const location5 = await Runningclub.findOne({
      where: { title: "Phanos in Amsterdamse Bos" },
    });

    const location6 = await Runningclub.findOne({
      where: { title: "House of Running in Rembrandtpark" },
    });

    const location7 = await Runningclub.findOne({
      where: { title: "Running Junkies in Sloterplas" },
    });

    const location8 = await Runningclub.findOne({
      where: { title: "Running club Amsterdam in Amstel" },
    });

    await queryInterface.bulkInsert(
      "locations",
      [
        {
          address: "Valentijnkade, 1098 XA Amsterdam",
          longitude: 4.9484081,
          latitude: 52.3587419,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location1.id,
        },
        {
          address: "Haarlemmerweg 4, 1013 RW Amsterdam",
          longitude: 4.8778346,
          latitude: 52.3869719,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location2.id,
        },
        {
          address: "Stadhouderskade 24B, 1054 ES Amsterdam",
          longitude: 4.8810562,
          latitude: 52.3618897,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location3.id,
        },
        {
          address: "Oosterpark, 1092 CA Amsterdam",
          longitude: 4.9208276,
          latitude: 52.3590001,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location4.id,
        },
        {
          address: "Bosbaan 4, 1182 AG Amstelveen",
          longitude: 4.8537723,
          latitude: 52.3296137,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location5.id,
        },
        {
          address: "Postjesweg 124, 1057 EH Amsterdam",
          longitude: 4.8505565,
          latitude: 52.3650038,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location6.id,
        },
        {
          address: "Christoffel Plantijngracht 4, 1065 DA Amsterdam",
          longitude: 4.8156595,
          latitude: 52.3617246,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location7.id,
        },
        {
          address: "Julianaplein 1, 1097 DN Amsterdam",
          longitude: 4.9175758,
          latitude: 52.3466279,
          createdAt: new Date(),
          updatedAt: new Date(),
          runningclubId: location8.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
