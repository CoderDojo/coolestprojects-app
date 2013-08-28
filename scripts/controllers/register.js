coolestProjectsApp.controller('RegisterCtrl', function($scope, $location, $http, errorService) {

    errorService.clear();

    $scope.register = function() {
        console.log('logging');
        var passed = false;
        errorService.clear();

            $http.post(API_URL + 'user/register', $scope.user)
                .success(function(data, status, headers, config) {
                    console.log(data);
                })
                .error(function(data, status, headers, config) {
                    console.log(data.error.message);
                    errorService.show(data.error.message);
                });
    };

    function validatePassword(password, repassword) {
        if (password != repassword) {
            errorService.show("Passwords do not match");
            return false;
        }
        return true;
    }

});
