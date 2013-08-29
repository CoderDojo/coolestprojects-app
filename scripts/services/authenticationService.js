coolestProjectsApp.factory("authenticationService", function($http, sessionService) {
    var cacheSession = function(data, status, headers, config) {
        sessionService.set('authenticated', true);
        sessionService.set('session_hash',data.sessionKey);
    };

    var uncacheSession = function() {
        sessionService.unset('authenticated');
        sessionService.unset('session_hash');
    };

    return {
        login: function(credentials) {
            var login = $http.post(API_URL + "/user/login", credentials);
            login.success(cacheSession);
            return login;
        },
        logout: function() {
            var logout = $http.get(API_URL + "/auth/logout");
            logout.success(uncacheSession);
            return logout;
        },
        isAuthenticated: function() {
            return sessionService.get('authenticated');
        }
    };
});
