const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

const Runningclub = require("../models").runningclub;
const Location = require("../models").location;
const Review = require("../models").review;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit || 20;
  const offset = req.query.offset || 0;
  const runningclubs = await Runningclub.findAll({
    limit,
    offset,
    include: [Location],
  });
  res.status(200).send(runningclubs);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const runningclubById = await Runningclub.findByPk(parseInt(id), {
    include: [{ model: Location, include: { model: Review, include: [User] } }],
  });

  if (!runningclubById) {
    return res.status(400).send("Runningclub doesn't exist");
  }
  if (isNaN(parseInt(id))) {
    return res.status(400).send("Id should be a number");
  }
  res.status(200).send(runningclubById);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  const runningclub = await Runningclub.findByPk(parseInt(id));
  if (!runningclub) {
    return res.status(400).send("Runningclub does not exist");
  }
  const updatedRunningclub = await runningclub.increment({
    rate: 1,
  });
  res.status(200).send(updatedRunningclub);
});

router.post("/addrunningclub", authMiddleware, async (req, res) => {
  const {
    title,
    isTraining,
    trainingPrice,
    runninglevel,
    trainingDuration,
    address,
    longitude,
    latitude,
    website,
    email,
    phoneNum,
    trainingHours,
    description,
    image,
  } = req.body;
  const user = req.user;

  if (
    !title ||
    !isTraining ||
    !trainingPrice ||
    !description ||
    !website ||
    !trainingHours
  ) {
    return res.status(400).send("Please provide all required information");
  }

  try {
    const addRunningclub = await Runningclub.create({
      title,
      isTraining,
      trainingPrice,
      runninglevel,
      trainingDuration,
      website,
      email,
      phoneNum,
      trainingHours,
      description,
      image,
      userId: user.id,
    });

    const location = await Location.create({
      address,
      longitude,
      latitude,
      runningclubId: addRunningclub.id,
    });

    res.status(200).send({ addRunningclub, location });
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/:id/review", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const { id } = req.params;
  const user = req.user;
  if (!user) {
    return res.status(400).send("User does not exist");
  }

  if (!content) {
    return res.status(400).send("Please provide some review content");
  }

  if (isNaN(parseInt(id))) {
    return res.status(400).send("Id is not a number");
  }

  try {
    const runningclub = await Runningclub.findByPk(parseInt(id), {
      include: [{ model: Location, include: [Review] }],
    });

    const postReview = await Review.create({
      time: new Date(),
      content,
      userId: user.id,
      locationId: runningclub.id,
    });

    res.status(200).send(postReview);
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.delete("/:userId/reviews/:reviewId", async (req, res, next) => {
  try {
    const reviewId = parseInt(req.params.reviewId);
    const toDelete = await Review.findByPk(reviewId);
    if (!toDelete) {
      res.status(404).send("Review not found");
      if (user.id === userId) {
        return res.status(200).send({
          message: "You can delete this review!",
        });
      }
    } else {
      const deleted = await toDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
