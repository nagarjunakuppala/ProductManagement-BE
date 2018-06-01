const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	productId:{
		type: Number,
		required: true
	},
	productName: {
		type: String,
		required: true
	},
	productCode: {
		type: String,
		required: true
	},
	releaseDate: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: true
	},
	starRating: {
		type: Number,
		required: true
	},
	imageUrl:{
		type: String,
		required: false
	}
});

const Product  = module.exports = mongoose.model('Product', productSchema);

        