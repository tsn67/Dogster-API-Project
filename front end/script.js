$(document).ready(function () {
    
    var container = $(".container");
    for(let i = 0;i < 13;i++) {
        container.append(`<button class = "menu-button">test${i}</button>`);
    }

});