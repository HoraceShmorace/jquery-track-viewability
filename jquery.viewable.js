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
        var result,
            wW = $(scope).width(),
            wH = $(scope).height(),
            sT = $(scope).scrollTop(),
            sL = $(scope).scrollLeft(),
            sB = wH + sT,
            sR = wW + sL,
            eT = $e.offset().top,
            eL = $e.offset().left,
            eH = $e.height(),
            eW = $e.width(),
            eA = eH * eW,
            vW = sL < eL ? Math.min(Math.max(sR - eL, 0), eW) : Math.max(eW - (sL - eL), 0),
            vWP = Math.round(vW / eW * 1000) / 10,
            vH = sT < eT ? Math.min(Math.max(sB - eT, 0), eH) : Math.max(eH - (sT - eT), 0),
            vHP = Math.round(vH / eH * 1000) / 10,
            vA = vW * vH,
            vAP = Math.round(vA / eA * 1000) / 10;

        result = {
            viewableArea: vA,
            viewableAreaPercentage: vAP,
            viewableWidth: vW,
            viewableWidthPercentage: vWP,
            viewableHeight: vH,
            viewableHeightPercentage: vHP
        };

        return result;
    };
};
