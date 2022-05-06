'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('index', '../index.html', true),
            new Route('static-page', 'static-page.html'),
        ]);
    }
    init();
}());