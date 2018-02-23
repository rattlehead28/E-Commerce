angular.module('eCart').service('dataService',function($http,$q){
	console.log("service reached");
	this.cartId={};
	this.fetchData = function(){
		var defer = $q.defer();
	$http.get('../../assets/data/mock.json').then(function(res){
		
		// this.testData = res.data;
		// console.log(res.data);
		defer.resolve(res.data);
		this.dataTest = res.data;

	})
		
	return defer.promise;
}

this.setId = function(id){

	this.productId = id;
	localStorage.setItem("productId",this.productId);
}

this.getId = function(){
 return (localStorage.getItem("productId"));
	//return this.productId;
}

this.setCartData = function(id,productCount){

	
	if(localStorage.getItem('cart')){
		this.cartId = JSON.parse(localStorage.getItem('cart'));
		if(this.cartId.hasOwnProperty(id)){
			console.log(this.cartId[id].count);
			this.cartId[id].count = this.cartId[id].count+1;
			localStorage.setItem("cart",JSON.stringify(this.cartId));
		}
		else{
		this.cartId[id]=productCount;
		 localStorage.setItem("cart",JSON.stringify(this.cartId));
		}
}
else{
	this.cartId[id]=productCount;
	localStorage.setItem("cart",JSON.stringify(this.cartId));
}

}

this.getCartData = function(){

	if(localStorage.getItem('cart')){
	this.cartId = JSON.parse(localStorage.getItem('cart'));
	
	return this.cartId;
}
}



})


