// favorites.js

// Function to toggle a movie as favorite
function toggleFavorite(movieId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(movieId);

  if (index === -1) {
    favorites.push(movieId);
    displayNotification("Movie added to favorites");
  } else {
    favorites.splice(index, 1);
    displayNotification("Movie removed from favorites");
  }

  saveFavorites(favorites);
  updateFavoriteButton(movieId);
}

// Function to update the favorite button text
function updateFavoriteButton(movieId) {
    const favoriteButton = document.querySelector(`.favorite-toggle[data-id="${movieId}"]`);
  
    if (!favoriteButton) {
      return; // Exit if the favorite button is not found
    }
  
    const favorites = getFavorites();
  
    if (favorites.includes(movieId)) {
      favoriteButton.textContent = "Remove Favorite";
    } else {
      favoriteButton.textContent = "Add Favorite";
    }
  }
  

// Function to display a notification
function displayNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000); // Display notification for 5 seconds
}

// Function to add a movie to favorites
function addFavorite(movieId) {
  let favorites = getFavorites();
  favorites.push(movieId);
  saveFavorites(favorites);
}

// Function to remove a movie from favorites
function removeFavorite(movieId) {
  let favorites = getFavorites();
  const index = favorites.indexOf(movieId);

  if (index !== -1) {
    favorites.splice(index, 1);
    saveFavorites(favorites);
    displayNotification("Movie removed from favorites");
  }

  setTimeout(() => {
    location.reload();
  }, 1000);
}

// Function to save favorites to local storage
function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to get favorites from local storage
function getFavorites() {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}
