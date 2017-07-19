$(function() {
    "use strict";
    var toDos = [
        "1 - Закончить писать эту книгу",
        "2 - Вывести Грейси на прогулку в парк",
        "3 - Ответить на электронные письма",
        "4 - Подготовиться к лекции в понедельник",
        "5 - Обновить несколько новых задач",
        "6 - Купить продукты"
    ];

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
                    $("main .content").append($content);
                };
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Щелчок на третьей вкладке!");
                var $input = $("<input>");
                var $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });
                $content = $("<div>").append($input).append($button);
                $("main .content").append($content);
            }
            return false;
        })
    });
    $(".tabs a:first-child span").trigger("click");
});
