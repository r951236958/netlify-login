function writeDarkSwitch(config) {
    document.write("\n<div class=\"custom-control custom-switch\">\n<input type=\"checkbox\" class=\"custom-control-input\" id=\"darkSwitch\">\n<label class=\"custom-control-label\" for=\"darkSwitch\">Dark Mode</label>\n</div>\n");
    var darkSwitch = document.getElementById('darkSwitch');
    darkSwitch.checked = config.getTheme() === 'dark';
    darkSwitch.onchange = function () {
        config.setTheme(darkSwitch.checked ? 'dark' : 'light');
    };
    config.themeChangeHandlers.push(function (theme) { return darkSwitch.checked = theme === 'dark'; });
    return darkSwitch;
}