var orm = require('../config/orm.js');

//call ORM functions
var burger = {
    selectAllBurgers: function (callback) {
        orm.selectAllBurgers(function (res) {
            callback(res);
        });
    },

    insertBurger: function (burger_name, callback) {
        orm.insertBurger(burger_name, function (res) {
            callback(res);
        });
    },

    updateBurger: function (burger_id, callback) {
        orm.updateBurger(burger_id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;
