# jquery.viewable
A simple jquery plugin that measures how viewable an element is. The passed callback will be called on `window.load`, and every time the `scroll` event of the `window` or other parent element fires, and will be passed an object containing information about the element's viewability.

## Usage
**For an entire class of elements:** (recommended)
```javascript
// Start tracking all elements of this class.
$(".track-viewability").viewable(next);

// Stop tracking all elements of this class.
$(".track-viewability").viewable(false);
```
**For an individual element:** For when you need to use a different callback for certain elements.
```javascript
// Stop tracking for this element.
$("#my-element").viewable(a_different_callback);

// Stop tracking for this element.
$("#my-element").viewable(false);
```

## Arguments
- **next** {*Function* || *false*} Required. Either a callback function to execute for each element, or *false*, which will stop a previously tracked element from having its viewability tracked. When the callback is called, it receives one argument (the ***measurements*** Object) with the following properties:
  - **element**
    - **top** {*Number*} Relative position, in pixels
    - **right** {*Number*} Relative position, in pixels
    - **bottom** {*Number*} Relative position, in pixels
    - **left** {*Number*} Relative position, in pixels
    - **height** {*Number*} In pixels
    - **width** {*Number*} In pixels
  - **viewable**
    - **area** {*Number*} In pixels
    - **areaPercentage** {*Number*} Between 0  -100
    - **width** {*Number*} In pixels
    - **widthPercentage** {*Number*} Between 0  -100
    - **height** {*Number*} In pixels
    - **heightPercentage** {*Number*} Between 0  -100

## TODO
- Switch to requestAnimationFrame instead of window.scroll.
- Add support for tracking viewability when elements scroll within elements other than `window`.
- Add unit tests.
