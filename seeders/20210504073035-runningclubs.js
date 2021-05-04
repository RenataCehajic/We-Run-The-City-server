"use strict";

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user3 = await User.findOne({
      where: { email: "david@gmail.com" },
    });

    const user6 = await User.findOne({
      where: { email: "vesna@gmail.com" },
    });

    const user10 = await User.findOne({
      where: { email: "kees@gmail.com" },
    });

    await queryInterface.bulkInsert(
      "runningclubs",
      [
        {
          title: "Running Amsterdam in Flevopark",
          isTraining: true,
          trainingPrice: 10,
          runningLevel: "beginners, intermediate",
          trainingDuration: "1 hour 30 minutes",
          website: "https://hardlopenamsterdam.nl",
          email: "info@hardlopenamsterdam.nl",
          phoneNum: "06-21460099",
          trainingHours: "WED 18.00-19.30, SAT 10.15-11.45",
          description:
            "Did you know that the running distance in the Flevopark is 2.3 KM? So for 10 KM you have to run 4.5 laps. Fortunately, you also have many other great options at the Flevopark. From the Insulindeweg along the canal and then back along the Valentijnskade and a bit through the park is: 3.2 KM and if you also run across the bridge to the Diemerpark at the bottom of the bridge you have about 5.5 KM. Running Amsterdam offers various trainings in the Flevopark.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/12/hardlopen-amsterdam-flevopark.jpg",
          rate: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user3.id,
        },
        {
          title: "Running group Westerpark Amsterdam",
          isTraining: true,
          trainingPrice: 4,
          runningLevel: "intermediate",
          trainingDuration: "1 hour 10 minutes",
          website: "https://loopje.nl",
          email: "jokehoed@gmail.com",
          phoneNum: "06-41255027",
          trainingHours: "TUE 19.00-20.10, THU 19.00-20.10",
          description:
            "The Westerpark is a great piece of greenery near the center of Amsterdam. The park itself is larger than it initially appears. It offers all kinds of surfaces: paved, unpaved and bark paths for cross training. Close to the track we can do hill exercises and at the front of the park there are nice laps for interval training. A park that has atmosphere, is well-arranged, well-lit and well-maintained. Standard round is 5 KM.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/12/hardlopen-amsterdam-westerpark.jpg",
          rate: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Running Holland in Vondelpark",
          isTraining: true,
          trainingPrice: 8,
          runningLevel: "intermediate, advanced",
          trainingDuration: "1 hour 30 minutes",
          website: "https://runningholland.nl",
          email: "info@runningholland.nl",
          phoneNum: "06-83233546",
          trainingHours: "MON-WED 18.15-20.45, SAT 9.30-11.00",
          description:
            "The Vondelpark run of 3.3 KM has asphalted paths and small forest roads that make it suitable for good training. What makes the park fun are all those people who are also nice and active, from pregnancy gym to boxing training and from yoga to Frisbee. This gives the park a wonderful friendly atmosphere. Various facilities have been created on the site, such as climbing frames and an open-air theater that we use to participate in strength exercises.",
          image:
            "https://q-park-online-prod.azureedge.net/-/media/images/website/qpark-nl/point-of-interests-2/amsterdam/amsterdam-vondelpark.jpg?rev=8fb5d0d4-cf07-4689-883a-8ab9a4b2ad18",
          rate: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user6.id,
        },
        {
          title:
            "Dutch Gay and Lesbian Atlethics and Frontrunners Amsterdam in Oosterpark",
          isTraining: true,
          trainingPrice: 9,
          runningLevel: "intermediate, advanced",
          trainingDuration: "1 hour 30 minutes",
          website: "https://www.dgla.nl",
          email: "dgla.atletiek@gmail.com",
          phoneNum: "06-86073659",
          trainingHours: "WED 19.30-21.00, FRI 19.30-21.00",
          description:
            "The Oosterpark is an old city park, built in 1891 by the municipality of Amsterdam. A place to relax, exercise and socialize for over 100 years. In the middle of the park is a large pond, around it a large lawn, and wonderful running paths. If you run a big round in the Oosterpark, you have covered 1.2 KM.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/12/hardlopen-amsterdam-oosterpark.jpg",
          rate: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Phanos in Amsterdamse Bos",
          isTraining: true,
          trainingPrice: 10,
          runningLevel: "advanced",
          trainingDuration: "1 hour 30 minutes",
          website: "https://www.phanos.amsterdam",
          email: "info@phanos.amsterdam",
          phoneNum: "020-6716086",
          trainingHours: "TUE-THU 19.00-20.30, SAT 9.30-11.00",
          description:
            "Amsterdamse Bos might just as well have been designed with runners in mind. Go cross-country and find your own trail through the woods, or follow one of the designated routes: Five kilometres along the Bosbaan, 10 kilometres for half a lap of the Bos or, if you’re feeling particularly vigorous, lap the Bos for a half marathon. All three routes start at the Boswinkel and partly incorporate the same paths, which is handy if you’re running with someone wanting to complete a different distance.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/12/hardlopen-amsterdam-amsterdamsebos.jpg",
          rate: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: user10.id,
        },
        {
          title: "House of Running in Rembrandtpark",
          isTraining: true,
          trainingPrice: 6,
          runningLevel: "beginners, intermediate",
          trainingDuration: "1 hour 30 minutes",
          website: "https://www.houseofrunning.com",
          email: "info@houseofrunning.com",
          phoneNum: "06-41134557",
          trainingHours: "MON-FRI 18.00-20.30",
          description:
            "Because of its many sandy paths, Rembrandtpark is great for running, and you might find yourself having run 10 kilometres without much noticing it. Neighbouring canal-side Postjeskade makes for a nice variation. Standard round is 4 KM.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/12/hardlopen-amsterdam-rembrandtpark.jpg",
          rate: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Running Junkies in Sloterplas",
          isTraining: true,
          trainingPrice: 8,
          runningLevel: "intermediate, advanced",
          trainingDuration: "1 hour 30 minutes",
          website: "http://www.runningjunkies.nl",
          email: "info@runningjunkies.nl",
          phoneNum: "06-21530977",
          trainingHours: "TUE 19.30-21.00, THU 19.30-21.00",
          description:
            "Sloterplas round of 5.5 KM, around the lake in Amsterdam’s Western Garden Towns, is a local favourite for walking, running and boating. A round around the lake is five-and-a-half kilometres, with the added bonus of a view of sailboats, canoeists and anglers. The route is so popular that there is a competition taking place each year: the Sloterplasloop.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2017/07/sloterpl-adam.jpg",
          rate: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
        {
          title: "Running club Amsterdam in Amstel",
          isTraining: true,
          trainingPrice: 6,
          runningLevel: "intermediate, advanced",
          trainingDuration: "1 hour 15 minutes",
          website: "http://www.hardloopclubamsterdam.nl",
          email: "info@hardloopclubamsterdam.nl",
          phoneNum: "06-45315320",
          trainingHours: "TUE 18.15-19.30, WED 10.00-11.15, SUN 10.00-11.15",
          description:
            "Running along the River Amstel is not only beautiful, but also a great way of enjoying sights of the city. Start by Koningsplein, run past the Royal Theatre Carré and carry on to Amstelpark, and you’ve gone a distance of 5 KM. If that’s not enough, continue for another 7 KM to lovely Oudekerk aan de Amstel. From here, you can return to the city using public transport. But… if you run back along the same route, you’ve run more than a half marathon.",
          image:
            "https://hardlopenamsterdam.nl/wp-content/uploads/2018/05/amstelkwartier.jpg",
          rate: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("runningclubs", null, {});
  },
};
