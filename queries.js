// Test queries
const User = require("./models").user;
const Runningclub = require("./models").runningclub;
const Review = require("./models").review;
const Location = require("./models").location;

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllUsers();

const oneRunningclub = async (id) => {
  try {
    const runningclub = await Runningclub.findByPk(id, {
      include: [
        { model: Location, include: { model: Review, include: [User] } },
      ],
    });
    console.log(runningclub.get({ plain: true }).locations[0].reviews);
  } catch (e) {
    console.log("error", e.message);
  }
};

// oneRunningclub(5);

const oneUser = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Review, include: [Location] }],
    });
    console.log(user.get({ plain: true }).reviews[0].location.address);
  } catch (e) {
    console.log("error", e.message);
  }
};

// oneUser(2);

const getAllReviews = async () => {
  try {
    const reviews = await Review.findAll();
    console.log(reviews);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllReviews();

const getAllLocations = async () => {
  try {
    const locations = await Location.findAll();
    console.log(locations);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllLocations();
