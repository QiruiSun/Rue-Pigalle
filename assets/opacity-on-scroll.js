/** [PURE]
 * Return the number if it falls within the current range.
 * @param {Number} value The candidate value to be evaluated against.
 * @param {Number} min Minimum allowed value.
 * @param {Number} max Maximum allowed value.
 */
function clamp(value, min, max) {
  var range = [value, min, max]
  var sortedRange = range.sort(function(a, b) {
    return a - b
  })
  var clampedValue = sortedRange[1]
  return clampedValue
}

// Constants
var topBar = $('.top_bar')
var navBar = $('.nav-bar')
var transition = 200 // px

// jQuery Event Listener, listens for scrolling.
$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop()  

  var offset = topBar.offset().top
  var height = topBar.outerHeight()

  offset = offset + height / 2

  var calc = (scrollTop - offset + transition) / transition
  var opacity = clamp(calc, 0, 1)
  const backgroundColor = { 'background-color': 'rgba(255, 255, 255,' + String(opacity) + ')' }
  topBar.css('background-color') = backgroundColor
  navBar.css('background-color') = backgroundColor
})