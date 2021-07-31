import { API_KEY } from "./secrets"
const BASE_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.`

export function getRecentImages(page) {
    const URL = `${BASE_URL}getRecent&api_key=${API_KEY}&page=${page}&format=json&nojsoncallback=1`
    return fetch(URL)
}

export function searchImages(searchTerm, page) {
    const URL = `${BASE_URL}search&api_key=${API_KEY}&tags=${searchTerm}&page=${page}&format=json&nojsoncallback=1`
    return fetch(URL)
}


// https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b9a9ad5ded4528cfb0ebce3eb706e9fa&page=1&format=json&nojsoncallback=1

// https://www.flickr.com/services/rest/?method=flickr.photos.search&&api_key=b9a9ad5ded4528cfb0ebce3eb706e9fa&tags=cat&page=1&format=json&nojsoncallback=1