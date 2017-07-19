$(function() {
    "use strict";
    $(".tabs a:nth-child(1)").on("click", function () {
        //делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        //делаем активной первую вкладку
        $(".tabs a:nth-child(1)").addClass("active");
        //очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        //Возвращается false, так как мы не переходим по ссылке
        return false;
    });

    $(".tabs a:nth-child(2)").on("click", function () {
        //делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        //делаем активной первую вкладку
        $(".tabs a:nth-child(2)").addClass("active");
        //очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        //Возвращается false, так как мы не переходим по ссылке
        return false;
    });

    $(".tabs a:nth-child(3)").on("click", function () {
        //делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        //делаем активной первую вкладку
        $(".tabs a:nth-child(3)").addClass("active");
        //очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        //Возвращается false, так как мы не переходим по ссылке
        return false;
    });
    console.log("Hello world!");
});

