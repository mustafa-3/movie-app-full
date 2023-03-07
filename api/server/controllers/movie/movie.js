const Movie = require("../../../db/models/movie");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors");

const router = require("express").Router();

router.get(
  "/",
  catchAsyncErrors(async function (req, res, next) {
    let movies = await Movie.findAll({ raw: true });
    res.status(200).send(movies);
  })
);
router.post(
  "/",
  catchAsyncErrors(async function (req, res, next) {
    // const { title, desc, detailDesc, image } = req.body;
    const { form } = req.body;
    const { title, desc, detailDesc, image } = form;
    // console.log(req.body);
    // console.log(form);
    await Movie.create({
      title: title,
      desc: desc,
      detailDesc: detailDesc,
      image: image,
    });
    return res.status(201).json({
      success: true,
      message: "Movie oluşturuldu.",
    });
  })
);
router.get(
  "/:id",
  catchAsyncErrors(async function (req, res, next) {
    const { id } = req.params;
    console.log(id);
    let movie = await Movie.findByPk(id);
    res.status(200).send(movie);
  })
);
router.delete(
  "/:id",
  catchAsyncErrors(async function (req, res, next) {
    const { id } = req.params;
    console.log(id);
    let movie = await Movie.findByPk(id);
    await movie.destroy();
    res.status(200).send(movie);
  })
);
router.put(
  "/:id",
  catchAsyncErrors(async function (req, res, next) {
    const { id } = req.params;
    const { title, desc, detailDesc, image } = req.body;
    console.log(req.body);

    let movie = await Movie.findByPk(id);
    console.log(movie);
    movie.title = title;
    movie.desc = desc;
    movie.detailDesc = detailDesc;
    movie.image = image;
    await movie.save();
    res.status(200).send(movie);
  })
);

module.exports = router;
