app.controller('Convert', function ($scope) { //Main Controller
	$scope.output = ""; //stores all the final data to display
	$scope.upload = function () { //Function called when 'Convert' Button is clicked
		if(custom){
			c = $("#a").val() + "," + $("#b").val();
			$scope.handleCSV();
			return;
		};

		event.preventDefault(); //Security reasons
		//Some handlers for older browsers or errors
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported in this browser.');
			return;
		}
		input = document.getElementById('file'); //Get data from input
		if (!input) {
			alert("Couldn't find the fileinput element.");
		}
		else if (!input.files) {
			alert("This browser doesn't seem to support the `files` property of file inputs.");
		}
		else if (!input.files[0]) {
			alert("Please select a file before clicking 'Convert'");               
		}
		else {
			file = input.files[0]; //Store Input in variable
			fr = new FileReader(); //new FileReader to handle input
			fr.onload = $scope.handleCSV; //Call function as soon as loaded
			fr.readAsText(file); //Read the file as text file
		}
	};
	$scope.handleCSV = function () {
		if(custom) result = $.csv.toArrays(c);
		else result = $.csv.toArrays(fr.result); //Convert Text to Array via plugin
		for (var i = 0; i < result.length; i++) { //For every line in the CSV file
			$scope.output += '<rule name="' + result[i][0] + '" stopProcessing="' + $scope.s.stopProcessing + '"><match url="^(' + result[i][0] + '.*)" ignoreCase="' + $scope.s.ignoreCase + '" /><conditions logicalGrouping="' + $scope.s.logicalGrouping + '" trackAllCaptures="' + $scope.s.trackAllCaptures + '"/><action type="' + $scope.s.type + '" url="/' + result[i][1] + '{R:1}" redirectType="' + $scope.s.redirectType + '" /></rule>\n'; //Create rule
		};
		$scope.$apply(); //Update view
	};
	$scope.s = {
		stopProcessing: true,
		ignoreCase: true,
		logicalGrouping: 'MatchAll',
		trackAllCaptures: false,
		type: 'Redirect',
		redirectType: 'Found'
	};
	$scope.toggle = function () {
		if($scope.s.redirectType == 'Found') $scope.s.redirectType = 'Permanent';
		else $scope.s.redirectType = 'Found';
	};
	$scope.n = {
		redirect: '',
		rto: ''
	};
});