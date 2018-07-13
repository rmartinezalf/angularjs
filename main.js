"use babel";
let app = angular.module('app', []);

app.controller('ctrlMain', function($scope, rest){

   var dg = this;

   dg.resultado = 0;	
   dg.resultado_tabla = [];
   dg.calcular = function(num1, num2){
      dg.resultado = num1 * num2;
   }	


   dg.tmultiplicador = function(numero){
       multiplicador(numero);
   }

   function multiplicador(dato){
   	     dg.resultado_tabla = [];
   	     var rango = 10;
   	     for (var i = 1; i <= rango ; i++) {
   	        dg.resultado_tabla.push({"a":i, "b":dato, "c": i*dato})   	  ;   	
   	     	  }


   }
	// var dg = this;
    
 //    dg.variable ="Hola mundo";

	// $scope.saluda = "Hola mundo";
	// $scope.myFuncion = function(){
	// 	console.log("this ");
	// 	rest.absData().then(function(res){
	// 		$scope.informacion = res;
	// 	})
	// }
})

.service('rest', function($http){
	var obj = {};

	obj.absData = function(){
        return $http.post('https://casacolombiana.com/api/v1/getMyApi').then(function(res){ return res.data})
    }

    return obj;

});