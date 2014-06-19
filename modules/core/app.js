/** @jsx React.DOM */
var app = angular.module('reactApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.users = [
        {'name': 'Boris', 'city': 'Ufa'},
        {'name': 'Vova', 'city': 'Ufa'},
        {'name': 'Julia', 'city': 'Moskva'},
        {'name': 'Ivan', 'city': 'Piter'},
    ];
}]);

app.directive('reactRepeat', function(){
    return {
        link: function($scope, elem, attrs){
            var Items = React.createClass({displayName: 'Items',
                render: function(){
                    var list = $scope.users.map(function(user){
                        return (React.DOM.li(null, "Name:",user.name));
                    })
                    return (React.DOM.ul(null, list));
                }
            })
            React.renderComponent(Items(null ), elem[0]);
        }
    }
})