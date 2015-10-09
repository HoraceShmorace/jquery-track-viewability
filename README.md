# jquery-track-viewable
A simple jquery plugin that calls a callback when an element is scrolled into view. The passed callback will be called every time the `scroll` event of the window or other parent element fires.

## Usage:
```javascript
$("#my-element").trackViewable(options, function(){
    result.$element.text("I'm in view!");
});
```

## Options
Pass in an object setting the following properties.
- **scope** {Object} A reference to the element that's scrolling. This is experimental, and using anything other than `window` is entirely untested.
- **minArea** {Number} The minimum % of visible area to qualify as viewable.
- **minWidth** {Number} The minimum % of visible width to qualify as viewable.
- **minHeight** {Number} The minimum % of visible height to qualify as viewable.

## Callback argument
The callback is passed an object with the following properties:
- isViewable {Boolean}
- $element {jQuery Object} A reference to the element.
- viewableArea {Number} In pixels
- viewableAreaPercentage {Number} Between 0-100
- viewableWidth {Number} In pixels
- viewableWidthPercentage {Number} Between 0-100
- viewableHeight {Number} In pixels
- viewableHeightPercentage {Number} Between 0-100
- options {Object} The options object passed in originally.

## TODO
- Add document.ready event.
