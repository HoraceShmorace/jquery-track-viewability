/**
 * Measures how viewable an element is in both pixels and percentage.
 * @param {Function} next An optional callback function.
 * @param {jQuery Object || HTMLElement || String} scope The object through which the element is scrolling (usually the window object).
 */
$.fn.viewable = function(next, scope) {

    if (typeof next !== "function" && next !== false) {
        throw new Error("Whoops! You need to pass a callback.");
        return;
    }

    if (!scope) scope = window;

    $(this).each(function(index, item) {
        $e = $(item);

        if (next === false) {
            $e.off("view");
            return;
        }

        (function($e) {
            $e.on("view", function(event) {
                next(event, measureViewability($(this), scope));
            });

            $(scope).on("scroll", function() {
                $e.trigger("view");
            });

            $(window).on("load", function() {
                $e.trigger("view");
            });
        })($e);
    });

    function measureViewability($e, scope) {
        var measurements,
            wW = $(scope).width(),
            wH = $(scope).height(),
            eR = $e[0].getBoundingClientRect(),
            eT = eR.top,
            eL = eR.left,
            eH = eR.height,
            eW = eR.width,
            eA = eH * eW,
            vH = Math.min(Math.max(eT > 0 ? wH - eT : eH + eT, 0), eH),
            vW = Math.min(Math.max(eL > 0 ? wW - eL : eW + eL, 0), eW),
            vWP = Math.round(vW / eW * 100),
            vHP = Math.round(vH / eH * 100),
            vA = vW * vH,
            vAP = Math.round(vA / eA * 100);

        measurements = {
            element: eR,
            viewable: {
                area: vA,
                areaPercentage: vAP,
                width: vW,
                widthPercentage: vWP,
                height: vH,
                heightPercentage: vHP
            }
        };

        return measurements;
    };
};
