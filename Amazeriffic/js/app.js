$(function() {
    "use strict";
    tabActivation(1);
    tabActivation(2);
    tabActivation(3);

    console.log("Hello world!");
});

var tabActivation = function (tabNumber) {
    $(".tabs a:nth-child(tabNumber)").on("click", function () {
        //делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        //делаем активной tabNumber-ную вкладку
        $(".tabs a:nth-child(tabNumber)").addClass("active");
        //очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        //Возвращается false, так как мы не переходим по ссылке
        return false;
    });
};

