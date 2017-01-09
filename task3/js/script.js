"use strict";

    function Kid(obj) {
        this.url = obj.url;
        this.name = obj.name;
        this.age = obj.age;
        this.color = obj.color;
        this.food = obj.food;
    }

   Kid.prototype.toHTML = function () {
        var model = kid
            .replace("PUT-HERE-kids-IMAGE", this.url)
            .replace("PUT-HERE-kid-name", this.name)
            .replace("PUT-HERE-kid-age", this.age)
            .replace("PUT-HERE-kid-color", this.color)
            .replace("PUT-HERE-kid-food", this.food)

        return model;

    }

    function displayKids(kidsList) {
        kidsList.forEach(function (kid) {
            $('#container').append(kid.toHTML());

        });
    }

    $.getJSON("kids.json", function (data) {
        var kids = [];

        data.forEach(function (obj) {
            var kid = new Kids(obj);
            kids.push(kid);
        })
        dsiplayKids(kids);
    });




});