# Flickr
A Flickr clone developed with React🚀 and Flickr API


### Features
- Search Images
- Download Images
- Suggestions
- Preview
- Infinite Scroll

### Technology Used
* **React**
    * **Material-UI** - Icons and Prebuilt Components
     * **react-router-dom** - To manage routing between different pages
* **Netlify** (Hosting service)


### Desktop Preview
<img src="./public/desktop.gif" />

### Mobile Preview
<img src="./public/mobile.gif" />


### To run this on Local machine
* Clone the repo, install all the dependcies from package.json by typing `npm install`
* Create a API KEY from [Flickr](https://www.flickr.com/services/api/flickr.photos.getRecent.html)
* Create a file with name `secrets.js` inside `src` and place your api key as shown below
```javascript 
        export const API_KEY = 'PLACE YOUR API KEY HERE'   
```
* Run app by typing `npm start`