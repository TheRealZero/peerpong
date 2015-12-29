var PeerPongApp = angular.module('PeerPongApp', ['ngRoute'])

.run(function() {
    new FastClick(document.body);
});

PeerPongApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
        
            .when('/', {
                templateUrl:    '/www/pages/main.html',
                controller:     'MainCtrl'
            })
            .when('/index', {
                templateUrl:    '/www/pages/main.html',
                controller:     'MainCtrl'
            })
            .when('/newgame', {
                templateUrl:    '/www/pages/main.html',
                controller:     'NewGameCtrl'
            })
            .when('/newtournament', {
                templateUrl:    '/www/pages/newgame.html',
                controller:     'NewGameCtrl'
            })
            .when('/addplayer', {
                templateUrl:    '/www/pages/newplayer.html',
                controller:     'PlayerCtrl'
            })
            .when('/addteam', {
                templateUrl:    '/www/pages/newgame.html',
                controller:     'NewGameCtrl'
            })
            .otherwise({redirect:'/'});
}]);

PeerPongApp.controller('NewGameCtrl',['$scope',function($scope){
    $scope.greeting='NewGame!';
    $scope.menuOptions =[{title: 'PLAYER NAME', ref: '#index'},
                        {title: 'DRINK', ref: '#index'}]
}]);


PeerPongApp.controller('MainCtrl',['$scope', function($scope){
    $scope.greeting= 'Hello!';
    $scope.menuOptions =[{title: 'New Game', ref: '#newgame'},
                         {title: 'New Tournament', ref: '#newtournament'},
                         {title: 'Add Player', ref: '#addplayer'},
                         {title: 'Add Team', ref: '#addteam'}];
                         
    $scope.addPlayer = [{title: 'PLAYER NAME', ref: '#index'},
                        {title: 'DRINK', ref: '#index'}]
    
}]);


PeerPongApp.controller('PlayerCtrl',['$scope', '$location',function($scope){
    $scope.players = [
                        {Name:'Lucas',Drink:'Bud Light',Nickname:'Lucky Duke',Level:'Aimless'},
                        {Name:'Natasha',Drink:'Canadian',Nickname:'Bojangles',Level:'Thirsty'},
                        {Name:'Beth',Drink:'Mamosa',Nickname:'DGL',Level:'Dirrty'}
                        
                     ]
    
    
}]);