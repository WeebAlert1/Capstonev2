const showsContainer = document.querySelector('#show-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/shows`

//const showsCallback = ({ data: shows }) => displayShows(shows)
//const errCallback = err => console.log(err)

//const getAllShows = () => axios.get(baseURL).then(showsCallback).catch(errCallback)
//const createShow = body => axios.post(baseURL, body).then(showsCallback).catch(errCallback)
//const deleteShow = id => axios.delete(`${baseURL}/${id}`).then(showsCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let showName = document.querySelector('#showName')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        showName: showName.value,
        imageURL: imageURL.value
    }

    //createShowCard(bodyObj)


    axios.post(`http://localhost:4004/api/shows`, bodyObj)
        .then(() => {
          
            getAllShows()
        })
}
/* function createShowCard(show) {
   

    const showCard =  `<div class="show-card"><img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
    <p class="show">${show.showName}</p>

     <button onclick="deleteShow(${show.id})">delete</button> 
     </div>
    `

    return showCard
}
 */
/* function getAllShows() {

    //showsContainer.innerHTML = ''
    
    axios.get('http://localhost:4004/api/shows')
        .then(res => {
            res.data.forEach(show => {
                let showCard = createShowCard(show)

                showsContainer.innerHTML += showCard
            })
        })
        .catch(err => console.log(err))
} */

/* function deleteCard(id) {
    axios.delete(`http://localhost:4004/api/shows/${id}`)
    .then(() => getAllShows())
    .catch(err => console.log(err))
} */

//getAllShows()
/* function createShowCard(show) {
    /* const showCard = document.createElement('div')
    showCard.classList.add('show-card')

    showCard.innerHTML = `<img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
    <p class="show">${show.showName}</p>
    
    <button onclick="deleteShow(${show.id})">delete</button> 
    `


    showsContainer.appendChild(showCard) */
    /* showsContainer.innerHTML = ''

    axios.get('http://localhost:4004/shows/')
    .then(res => {
        res.data.forEach(elem => {
            const showCard =  `<div class="show-card"><img alt='show cover image' src=${elem.imageURL} class="show-cover-image"/>
            <p class="show">${elem.showName}</p>
    
             <button onclick="deleteShow(${elem.id})">delete</button> 
             </div>
            `

            showsContainer.innerHTML += showCard
        })
    }) */

   // const showCard =  `<div class="show-card"><img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
  //  <p class="show">${show.showName}</p>

    // <button onclick="deleteShow(${show.id})">delete</button> 
  //   </div>
  //  `

    //return showCard
//} 

/* function getAllShows() {
    axios.get('http://localhost:4004/shows')
} */

/* function displayShows(arr) {
    showsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createShowCard(arr[i])
    }
}  */

form.addEventListener('submit', submitHandler)

