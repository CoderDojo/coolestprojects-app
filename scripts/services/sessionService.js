coolestProjectsApp.factory("sessionService", function() {
    return {
        get: function(key) {
            return storage.getItem(key);
        },
        set: function(key, val) {
            return storage.setItem(key, val);
        },
        unset: function(key) {
            return storage.removeItem(key);
        }
    };
});
