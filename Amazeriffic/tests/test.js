var toDoObjects = [
    {
        "description": "сделать покупки",
        "tags": ["шопинг", "рутина"]
    },
    {
        "description": "сделать несколько новых задач",
        "tags": ["писательство", "работа"]
    }
];

var organizeByTags = function (toDoObjects) {
    var tags = [];
    toDoObjects.forEach(function (toDo) {
        toDo.tags.forEach(function (tag) {
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        });

    });
    console.log(tags);
    
    /*var tagObjects = tags.map(function (tag) {
        
    })*/
};
var main = function () {
    "use strict";
    organizeByTags(toDoObjects);

};
$(document).ready(main);