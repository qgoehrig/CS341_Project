(function () {
    'use strict';

    angular
        .module('app')
        .controller('CalendarController', CalendarController);

    CalendarController.$inject = ['UserService', '$rootScope'];
    function CalendarController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            loadCurrentUser();
        }

        function loadCurrentUser() {
            console.log("loading the current user");
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        $('#new-cal').click(function() {
            var balls = angular.isString("swagin");
            console.log(balls);
            $('#cal-container').append('<p>test</p>');
        });


    }

})();
