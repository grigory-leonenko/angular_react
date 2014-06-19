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
            var Items = React.createClass({
                render: function(){
                    var list = $scope.users.map(function(user){
                        return (<li>Name:{user.name}</li>);
                    })
                    return (<ul>{list}</ul>);
                }
            })
            React.renderComponent(<Items />, elem[0]);
        }
    }
})