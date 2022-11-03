const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
	{
		imgName: { type: String, required: true },
		imgUrl: { type: String, required: true },
		imgDetails: { type: String, required: true },
	},
	{ timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
