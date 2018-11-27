Requirement 1:

In service file

app.factory('CrudeService',function($http){
return{
	fetchAll:function(){
		return $http.get('https:\\localHost:5000\countries').then(
			function(response){
				return response.data.data;
			},function(error){
				return error;
			}
		);
	},
	add:function(data){
		return $http.post('https:\\localHost:5000\country',data).then(
			function(response){
				return response;
			},function(error){
				console.log('error');
			}
		);
	},
	update:function(data){
		var name={"name":data.name};
		return $http.put('https:\\localHost:5000\country'+data._id,name).then(
			function(response){
				return response;
			},function(error){
				console.log('error');
			}
		);
	},
	activate:function(id){
		return $http.put('https:\\localHost:5000\country'+id+'\activate').then(
			function(response){
				return response;
			},function(error){
				console.log('error');
			}
		);
	},
	deactivate:function(id){
		return $http.put('https:\\localHost:5000\country'+id+'\deactivate').then(
			function(response){
				return response;
			},function(error){
				console.log('error');
			}
		);
	}
}
});

In controller file


function countryList(){
	CrudeService.fecthAll().then(
		function(data){
			$scope.countries=data;
		},function(data){
			console.log('error');
		}
	);
}
countryList();

// insert within the method given for add country
CrudeService.add($scope.country).then(
	function(data){
		countryList();
	},function(data){
		console.log('error');
	}
);

// insert within the method given for update country
CrudeService.update($scope.country).then(
	function(data){
		countryList();
	},
	function(data){
		console.log('error');
	}
);

// insert within the method given for activate country
CrudeService.activate(itemsId).then(
	function(data){
		countryList();
	},
	function(data){
		console.log('error');
	}
);

// insert within the method given for deactivate country
CrudeService.deactivate(itemsId).then(
	function(data){
		countryList();
	},
	function(data){
		console.log('error');
	}
);

----------------------------------------------------------------------------------------------
Requirement 2:

filter tbale data using search box

in html file add the following content:

For the search field give the ng-model="searchValue"
In ng-repeat = "data in country |.. | filter:searchValue"

----------------------------------------------------------------------------------------------
Requirement 3:

validation and error message
 
in html file add the following content:

<span class="error" ng-if="formname.inputname.$invalid">enter correct data</span>

for disbaling save and update button in pop up

save 	- ng-disabled="formname.inputname.$invalid || formname.inputname.$pristine"
update 	- ng-disabled="formname.inputname.$invalid || formname.inputname.$pristine"
