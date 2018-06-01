var express = require('express');
var router = express.Router();

const Product = require('../model/product');
router.get('/products', (req, res, next)=>{
	Product.find(function(err, products){
		if(err){
			res.json(err);
		}else{
			res.json(products);
		}
	});
});

router.post('/insertProduct', (req, res, next)=>{
	"use strict";
	console.log(req.body);
	let product = new Product({
		productId: req.body.productId,
		productName: req.body.productName,
		productCode: req.body.productCode,
		releaseDate: req.body.releaseDate,
		description: req.body.description,
		price: req.body.price,
		starRating: req.body.starRating,
		imageUrl: req.body.imageUrl
	});
	product.save((err, product)=>{
		if(err){
			res.json(err);
		}else{
			res.json({msg:"Product has been added successfully"});
		}
	});
});

router.put('/editProduct/:id', (req, res, next)=>{
		console.log('body'+ req.body.releaseDate);
	Product.findOneAndUpdate({_id: req.params.id},{
		$set:{
			productId: req.body.productId,
			productName: req.body.productName,
			productCode: req.body.productCode,
			releaseDate: req.body.releaseDate,
			description: req.body.description,
			price: req.body.price,
			starRating: req.body.starRating,
			imageUrl: req.body.imageUrl
		}
	}, 
	function(err, result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	})
});

router.delete('/deleteProduct/:id', (req, res, next)=>{
	Product.remove({_id: req.params.id},function(err, result){
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	})
});


module.exports = router;