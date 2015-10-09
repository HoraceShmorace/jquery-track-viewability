# jquery-viewable
A simple jquery plugin that tracks how viewable an element is. The passed callback will be called on `window.load`, and every time the `scroll` event of the `window` or other parent element fires, and will be passed an object containing information about the element's viewability.

## Usage
**For an entire class of elements:** (recommended)
```javascript
$(".track-viewability").viewable(callback, scope);
```
**For an individual element:** For when you need to use a different callback for certain elements.
```javascript
$("#my-element").viewable(a_different_callback, scope);
```

## Arguments
- **callback** {*Number*} Required. Function to execute for each element. It receives one argument (an Object) with the following properties:
  - **$element** {*jQuery Object*} A reference to the element.
  - **viewableArea** {*Number*} In pixels
  - **viewableAreaPercentage** {*Number*} Between 0  -100
  - **viewableWidth** {*Number*} In pixels
  - **viewableWidthPercentage** {*Number*} Between 0  -100
  - **viewableHeight** {*Number*} In pixels
  - **viewableHeightPercentage** {*Number*} Between 0  -100
  - **options** {*Object*} The options object passed in originally.
- **scope** {*Object*} Optional. A reference to the element that's scrolling. This is experimental, and using anything other than `window` is so far entirely untested. You can safely omit this, and `window` will be used by default.
