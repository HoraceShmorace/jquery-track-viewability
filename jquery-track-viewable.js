/**
 * Calculates whether an HTML element has been viewable, according to the criteria in the options argument.
 * @param {Object} options An object with the following properties:
 *     minArea {Number} The minimum % of visible area to qualify as viewable.
 *     minWidth {Number} The minimum % of visible width to qualify as viewable.
 *     minHeight {Number} The minimum % of visible height to qualify as viewable.
 * @param {Function} next An optional callback function.
 * @returns {Boolean} Whether the element has been viewable.
 */
$.fn.trackViewable = function(options, next) {
    var VIEW_START_ATTR = "data-view-start",
        VIEWED_ATTR = "data-viewed"
    $(this).each(function(index, item) {
        (function($e) {
            if ($e.hasClass("viewed")) return;

            $(options.scope || window).scroll(function() {
                var result,
                    mA = options.minArea || 0,
                    mW = options.minWidth || 0,
                    mH = options.minHeight || 0,
                    wW = $(this).width(),
                    wH = $(this).height(),
                    sT = $(this).scrollTop(),
                    sL = $(this).scrollLeft(),
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
                    vAP = Math.round(vA / eA * 1000) / 10,
                    isViewable = vAP > mA && vWP > mW && vHP > mH;

                result = {
                    isViewable: isViewable,
                    viewableArea: vA,
                    viewableAreaPercentage: vAP,
                    viewableWidth: vW,
                    viewableWidthPercentage: vWP,
                    viewableHeight: vH,
                    viewableHeightPercentage: vHP,
                    $element: $e,
                    options: options
                };

                if (typeof next === "function") {
                    next(result);
                }

                return;
            });
        })($(item));
    });
};
