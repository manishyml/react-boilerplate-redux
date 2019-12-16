const BASE_URL = "https://api.foursquare.com/v2/venues/";
const urls = {
  explore: BASE_URL + "explore?",
  getCategories:
    BASE_URL + "VENUE_ID?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=V"
};
export default urls;
