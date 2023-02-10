const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "The setup of the joke is required"],
		minlength: [10, "The setup of the joke must be 10 characters long at least"]
	},
    punchline: {
		type: String,
		required: [true, "The punchline is required"], 
		minlength: [4, "The punchline must be at least 3 characters long"],
	},
	},
	{timestamps: true}
);

const Joke = mongoose.model("broma", JokeSchema);

module.exports = Joke;
