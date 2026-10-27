const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.documentElement.setAttribute("data-theme", button.dataset.theme);
    });
});
