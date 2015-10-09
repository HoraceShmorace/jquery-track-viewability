$.fn.viewable = function(e, t) {
    if ("function" != typeof e) throw new Error("Whoops! You need to pass a callback.");
    t || (t = window), $(this).each(function(a, i) {
        ! function(a) {
            var i = function() {
                var i, h = $(this).width(),
                    o = $(this).height(),
                    n = $(this).scrollTop(),
                    l = $(this).scrollLeft(),
                    r = o + n,
                    c = h + l,
                    w = a.offset().top,
                    f = a.offset().left,
                    s = a.height(),
                    d = a.width(),
                    u = s * d,
                    v = f > l ? Math.min(Math.max(c - f, 0), d) : Math.max(d - (l - f), 0),
                    M = Math.round(v / d * 1e3) / 10,
                    b = w > n ? Math.min(Math.max(r - w, 0), s) : Math.max(s - (n - w), 0),
                    g = Math.round(b / s * 1e3) / 10,
                    m = v * b,
                    p = Math.round(m / u * 1e3) / 10;
                i = {
                    viewableArea: m,
                    viewableAreaPercentage: p,
                    viewableWidth: v,
                    viewableWidthPercentage: M,
                    viewableHeight: b,
                    viewableHeightPercentage: g,
                    $element: a,
                    scope: t
                }, e(i)
            };
            $(t).scroll(i), $(window).load(i)
        }($(i))
    })
};
