const ratingContainer = document.querySelector('.rating')
const spots = document.querySelectorAll('.spot')
const ratingValue = parseInt(ratingContainer.getAttribute('data-rating'))

spots.forEach((spot, index) => {
  if (index < ratingValue) {
    spot.classList.add('active')
  }
})
