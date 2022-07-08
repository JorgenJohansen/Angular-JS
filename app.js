const myApp = angular.module('myApp', []);

myApp.config(() => {

});

myApp.run(() => {

});

myApp.controller('AppController',  ['$scope', ($scope) => {
    $scope.removeNinja = (ninja) => {
        let removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);

    }

    $scope.addNinja = () => {
        console.log("hello");
        console.log($scope.newNinja.name);
        console.log($scope.newNinja.belt);
        console.log($scope.newNinja.rate);
        $scope.ninjas.push({
            name: $scope.newNinja.name,
            belt: $scope.newNinja.belt,
            rate: parseInt($scope.newNinja.rate),
            available: true,
        });
        $scope.newNinja.name = "";
        $scope.newNinja.belt = "";
        $scope.newNinja.rate = "";
    }
    $scope.ninjas = [
        {
            name: 'Yoshi P',
            belt: 'green',
            rate: 50,
            available: true,
            thumb: "img/yoshi-p.jpg",
        },
        {
            name: 'Crystal',
            belt: 'yellow',
            rate: 30,
            available: true,
            thumb: "img/crystal.jpg",
        },
        {
            name: 'Ryu',
            belt: 'blue',
            rate: 10,
            available: true,
            thumb: "img/ryu.png",
        },
        {
            name: 'Horge',
            belt: 'Black',
            rate: 1000,
            available: true,
            thumb: "img/profil.jpg",
        },
    ];
}]);

