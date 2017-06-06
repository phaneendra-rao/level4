angular.module('chemistry', [])
    .controller('MainCtrl', function ($scope, $http) {
 
        //  was trying to get json from separate .json file, but just returns lots of '-'s:
    // $http.get('cards.json')
    //  .then(function(result){
    //  $scope.cards2 = result.data;
    // });

    //18 cards in total:
    $scope.cards = [{
        name: 'Sniper',
        attrs: ['shooting', 'dribbling']
    }, {
        name: 'Finisher',
        attrs: ['shooting', 'physical']
    }, {
        name: 'Deadeye',
        attrs: ['shooting', 'passing']
    }, {
        name: 'Marksman',
        attrs: ['shooting', 'dribbling', 'physical']
    }, {
        name: 'Hawk',
        attrs: ['pace', 'shooting', 'physical']
    }, {
        name: 'Artist',
        attrs: ['passing', 'dribbling']
    }, {
        name: 'Architect',
        attrs: ['passing', 'physical']
    }, {
        name: 'Powerhouse',
        attrs: ['passing', 'defending']
    }, {
        name: 'Maestro',
        attrs: ['shooting', 'passing', 'dribbling']
    }, {
        name: 'Engine',
        attrs: ['pace', 'passing', 'dribbling']
    }, {
        name: 'Sentinel',
        attrs: ['defending', 'physical']
    }, {
        name: 'Guardian',
        attrs: ['dribbling', 'defending']
    }, {
        name: 'Gladiator',
        attrs: ['shooting', 'defending']
    }, {
        name: 'Backbone',
        attrs: ['passing', 'defending', 'physical']
    }, {
        name: 'Anchor',
        attrs: ['pace', 'defending', 'physical']
    }, {
        name: 'Hunter',
        attrs: ['pace', 'shooting']
    }, {
        name: 'Catalyst',
        attrs: ['pace', 'passing']
    }, {
        name: 'Shadow',
        attrs: ['pace', 'defending']
    }];

    $scope.options = [{
        name: 'pace',
        selected: false
    }, {
        name: 'shooting',
        selected: false
    }, {
        name: 'passing',
        selected: false
    }, {
        name: 'dribbling',
        selected: false
    }, {
        name: 'defending',
        selected: false
    }, {
        name: 'physical',
        selected: false
    }];

    $scope.num = function (arr) {
        return arr.length > 2 ? 2 : 3;
    }

    $scope.count = true;

    $scope.itemFilter = function (item) {
        var filters = $scope.options.filter(function (element, idx, array) {
            return element.selected;
        }) || [];

        var matched = true;
        filters.forEach(function (option) {
            matched = matched && item.attrs.indexOf(option.name) >= 0;

        })
        return matched;
    };
});
