const router = require("express").Router();
let Image = require("../models/image.model");

router.route("/").get((req, res) => {
	Image.find()
		.then((images) => res.json(images))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/search/:name").get((req, res) => {
	const query = { imgName: req.params.name };
	Image.find(query)
		.then((images) => res.json(images))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:page").get((req, res) => {
	const page = parseInt(req.params.page) - 1;
	Image.find()
		.skip(page * 9)
		.limit(9)
		.exec()
		.then((images) => {
			return Image.countDocuments().exec((count_error, count) => {
				if (count_error) {
					return res.json(count_error);
				}
				return res.json({
					total: count,
					page: page + 1,
					pageSize: 9,
					images: images,
				});
			});
		})
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/show/:id").get((req, res) => {
	Image.findById(req.params.id)
		.then((images) => res.json(images))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
	const imgName = req.body.imgName;
	const imgUrl = req.body.imgUrl;
	const imgDetails = req.body.imgDetails;

	const newImage = new Image({
		imgName,
		imgUrl,
		imgDetails,
	});

	newImage
		.save()
		.then(() => res.json("Image added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/edit").get((req, res) => {
	Image.findById(req.params.id)
		.then((images) => res.json(images))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/edit").put((req, res) => {
	const id = req.params.id;
	const imgName = req.body.imgName;
	const imgUrl = req.body.imgUrl;
	const imgDetails = req.body.imgDetails;

	const updatedImage = {
		imgName,
		imgUrl,
		imgDetails,
	};

	Image.findByIdAndUpdate(id, updatedImage)
		.then(() => res.json("Image updated!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
	Image.findByIdAndDelete(req.params.id)
		.then(() => res.json("Image deleted!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
