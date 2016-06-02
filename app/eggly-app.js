angular.module('Eggly', [])

.controller('MainCtrl', function($scope){
	$scope.hello = "world";

	$scope.categories = [
		{id:0, name:"Dev"},
		{id:1, name:"Design"},
		{id:2, name:"Exercise"},
		{id:3, name:"Humor"}
	];

	$scope.bookmarks = [
		{id:0, title: "AngularJS", category: "Dev"},
		{id:1, title: "React", category: "Dev"},
		{id:2, title: "A list Apart", category: "Design"},
		{id:3, title: "codepen", category: "Design"},
		{id:4, title: "Tim Ferriss", category: "Exercise"},
		{id:5, title: "Gymnasticbodies", category: "Exercise"},
		{id:6, title: "Wimp", category: "Humor"},
		{id:7, title: "Dump", category: "Humor"}

	];

	$scope.currentCategory = null;

	$scope.setCurrentCategory = function(category){
		$scope.currentCategory = category;

		$scope.cancelEditing();
		$scope.cancelCreating();
	};


	$scope.isCurrentCategory = function(category){
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	};

	// ------------------------------------------------------
	// CREATING AND EDITING STATES
	// ------------------------------------------------------

	$scope.isCreating = false;
	$scope.isEditing = false;

	$scope.startCreating = function() {
		$scope.isCreating = true;
		$scope.isEditing = false;

		// resetCreateForm();
	}

	$scope.cancelCreating = function() {
		$scope.isCreating = false;
	}

	$scope.startEditing = function() {
		$scope.isCreating = false;
		$scope.isEditing = true;
	}

	$scope.cancelEditing = function() {
		$scope.isEditing = false;
	}

	$scope.shouldShowCreating = function() {
		return $scope.currentCategory && !$scope.isEditing;
	}

	$scope.shouldShowEditing = function() {
		return $scope.isEditing && !$scope.isCreating;
	}

	//
	// CRUD
	//

	$scope.resetCreateForm = function(){
			$scope.newBookmark = {
				title: '',
				category: $scope.currentCategory
			}
	}

	$scope.createBookmark = function(bookmark){
			bookmark.category = $scope.currentCategory.name;
			bookmark.id = $scope.bookmarks.length;
			$scope.bookmarks.push(bookmark);
			console.log($scope.bookmarks);
			// resetCreateForm();
	}

});