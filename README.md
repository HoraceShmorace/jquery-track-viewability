# jquery.viewable
A simple jquery plugin that measures how viewable an element is. The passed callback will be called on `window.load`, and every time the `scroll` event of the `window` or other parent element fires, and will be passed an object containing information about the element's viewability.

## Usage
**For an entire class of elements:** (recommended)
```javascript
// Start all
$(".track-viewability").viewable(next);

// Stop all
$(".track-viewability").viewable(false);
```
**For an individual element:** For when you need to use a different callback for certain elements.
```javascript
// Start all
$("#my-element").viewable(a_different_callback);

// Stop all
$("#my-element").viewable(false);
```

## Arguments
- **next** {*Function* || *false*} Required. Either a callback function to execute for each element, or *false*, which will stop an previously tracked element from having its viewability tracked. When the callback is called, it receives one argument (an Object) with the following properties:
  - **viewableArea** {*Number*} In pixels
  - **viewableAreaPercentage** {*Number*} Between 0  -100
  - **viewableWidth** {*Number*} In pixels
  - **viewableWidthPercentage** {*Number*} Between 0  -100
  - **viewableHeight** {*Number*} In pixels
  - **viewableHeightPercentage** {*Number*} Between 0  -100
- **scope** {*jQuery Object* || *HTMLElement* || *String*} Optional. A reference to the element that's scrolling. This is experimental, and using anything other than `window` is so far entirely untested. You can safely omit this, and `window` will be used by default.
