"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "brenda@gmail.com",
          password: bcrypt.hashSync("brenda", SALT_ROUNDS),
          firstName: "Brenda",
          lastName: "Rietman",
          address: "Linnaeusstraat 43, 1093EG Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
        },
        {
          email: "nyckele@gmail.com",
          password: bcrypt.hashSync("nyckele", SALT_ROUNDS),
          firstName: "Nyckele",
          lastName: "Sap",
          address: "Dick Greinerstraat 60, 1019CV Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTK-ngpWCjKOd5TDmP8JmRSAD40hLharEf9PbSuT_ZArZzRBedZgWWTV1FXFvw0UO4_M&usqp=CAU",
        },
        {
          email: "david@gmail.com",
          password: bcrypt.hashSync("david", SALT_ROUNDS),
          firstName: "David",
          lastName: "Knappstein",
          address: "Laurierhof 18, 1016MA Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: true,
          imageUrl:
            "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png",
        },
        {
          email: "linda@gmail.com",
          password: bcrypt.hashSync("linda", SALT_ROUNDS),
          firstName: "Linda",
          lastName: "Smith",
          address: "Eerste Helmersstraat 106, 1054EG Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXE-cE41u6GJx-HLWLHKE6Da9-scLz9GprvC5mpWyGQ3TMPjtW6mAjoPb4xdF7KTOmRjg&usqp=CAU",
        },
        {
          email: "john@gmail.com",
          password: bcrypt.hashSync("john", SALT_ROUNDS),
          firstName: "John",
          lastName: "Jackson",
          address: "Bos en Vaartlaan, 1181AA Amstelveen",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjn8Q3yngDNIqNX6Yjdlz8oyuNnGzSWp1QftWI-1pkAhP5T7CZTOfK1Yrt-VYCf1xwSEM&usqp=CAU",
        },
        {
          email: "vesna@gmail.com",
          password: bcrypt.hashSync("vesna", SALT_ROUNDS),
          firstName: "Vesna",
          lastName: "Smith",
          address: "Overtoom 371, 1054JN Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: true,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDoZz3j3M5_nSjbofrKtObgT-FQ1juM2v4Q1Zo5KaPs0ZpW6AmZAFtZdF8hqNr9yu0_s&usqp=CAU",
        },
        {
          email: "emma@gmail.com",
          password: bcrypt.hashSync("emma", SALT_ROUNDS),
          firstName: "Emma",
          lastName: "Johnson",
          address: "Bos en Lommer, 1055RZ Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEKd9qw9jDCvB0ilymxrPlZYoYUB4K7WDGW4RA5wN93ML1Q8AB4NuMR3AKMqe3PgqgP4&usqp=CAU",
        },
        {
          email: "akke@gmail.com",
          password: bcrypt.hashSync("akke", SALT_ROUNDS),
          firstName: "Akke",
          lastName: "Reijnhoudt",
          address: "Wijnand Nuijenstraat 91, 1061WB Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3wQAMLLa3gVGPGke1csUhk0XBL5RQqZyM59PnvHbKOxCSx6Ih7-lqQGYUVne_G1B3to&usqp=CAU",
        },
        {
          email: "guido@gmail.com",
          password: bcrypt.hashSync("guido", SALT_ROUNDS),
          firstName: "Guido",
          lastName: "Los",
          address: "Johannes van der Steurstraat 24, 1066BN Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: false,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FFEG8-qN43QTGV-FfYcYZCREDy_MeOYzREiuM9EswneMyLbFVPYjCO9R2shuZWUKYQ8&usqp=CAU",
        },
        {
          email: "kees@gmail.com",
          password: bcrypt.hashSync("kees", SALT_ROUNDS),
          firstName: "Kees",
          lastName: "Smith",
          address: "Haarlemmerweg 10A, 1014BE Amsterdam",
          phoneNum: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          isOwner: true,
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDoZz3j3M5_nSjbofrKtObgT-FQ1juM2v4Q1Zo5KaPs0ZpW6AmZAFtZdF8hqNr9yu0_s&usqp=CAU",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
