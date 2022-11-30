const showsContainer = document.querySelector('#show-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/shows`

const showsCallback = ({ data: shows }) => displayHouses(shows)
const errCallback = err => console.log(err)

const getAllShows = () => axios.get(baseURL).then(showsCallback).catch(errCallback)
const createShow = body => axios.post(baseURL, body).then(showsCallback).catch(errCallback)
const deleteShow = id => axios.delete(`${baseURL}/${id}`).then(showsCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let showName = document.querySelector('#showName')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        showName: showName.value,
        imageURL: imageURL.value
    }

    createShow(bodyObj)

    showName.value = ''
    imageURL.value = ''
}

function createShowCard(show) {
    const showCard = document.createElement('div')
    showCard.classList.add('show-card')

    showCard.innerHTML = `<img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
    <p class="show">${show.showName}</p>
    
    <button onclick="deleteShow(${show.id})">delete</button>
    `


    showsContainer.appendChild(showCard)
}

function displayShows(arr) {
    showsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createShowCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllShows()