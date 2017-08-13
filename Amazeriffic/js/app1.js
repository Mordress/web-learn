var main = function (toDoObjects) {
    "use strict";
    var toDos = toDoObjects.map(function (toDo) {
        return toDo.description;
    })

    $(".tabs a span").toArray().forEach(function (element) {
        // создаем обработку щелчков для этого элемента
        $(element).on("click", function () {
            var $element = $(element);
            var $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (var i = toDos.length-1; i >= 0; i-- ) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                //Код для вкладки теги
                var organizedByTags = [
                    {
                        "name": "покупки",
                        "toDos": ["купить продукты"]
                    },
                    {
                        "name": "рутина",
                        "toDos": ["купить продукты", "вывести грейси на прогулку"]
                    }
                ];
                organizedByTags.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name)
                    var $content = $("<ul>");
                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });
                    $("main .content").append($tagName);
                    $("main .content").append($content);
                })
            }
            else if ($element.parent().is(":nth-child(4)")) {
                var $input = $("<input>");
                var $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });
                $content = $("<div>").append($input).append($button);
            }
            $("main .content").append($content);
            return false;
        })
    });
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});
