// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardReceiver = document.querySelector(".cards-container")
//Show Obj Axios
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(obj => {
        console.log(obj)
        obj.data.articles.javascript.forEach(art => {
            cardReceiver.appendChild(cardMachine(art))
        })

    })


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(obj => {
        obj.data.articles.node.forEach(art => {
            cardReceiver.appendChild(cardMachine(art))
        })

    })


axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(obj => {
        obj.data.articles.jquery.forEach(art => {
            cardReceiver.appendChild(cardMachine(art))
        })

    })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(obj => {
        obj.data.articles.technology.forEach(art => {
            cardReceiver.appendChild(cardMachine(art))
        })

    })

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(obj => {
        obj.data.articles.bootstrap.forEach(art => {
            cardReceiver.appendChild(cardMachine(art))
        })

    })

//Machine
const cardMachine = art => {

    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");

    //Create Structure 
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(span)
    imgContainer.appendChild(img)

    //Call CSS    
    card.classList.add("card")
    headline.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")

    //Add Context
    headline.textContent = art.headline
    span.textContent = art.authorName
    img.src = art.authorPhoto

    return card

}