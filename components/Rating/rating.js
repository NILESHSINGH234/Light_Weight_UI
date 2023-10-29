const ratingStars = document.querySelectorAll(
  ".star-rating .star-rating-input"
);

const toggleStars = (index) => {
  if (ratingStars[index].checked) {
    for (let j = idx - 1; j >= 0; j--) {
      ratingStars[j].checked = true;
    }
  } else {
    for (let j = idx + 1; j < ratingStars.length; j++) {
      ratingStars[j].checked = false;
    }
  }
};

ratingStars.forEach((star, index) => {
  star.addEventListener("change", () => toggleStars(index));
});
