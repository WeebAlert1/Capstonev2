const showsContainer = document.querySelector('#show-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/shows`


function submitHandler(e) {
    e.preventDefault()

    let showName = document.querySelector('#showName')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        showName: showName.value,
        imageURL: imageURL.value
    }

    
    axios.post(`http://localhost:4004/api/shows`, bodyObj)
        .then(() => {
          
            getAllShows()
        })
}

function createShowCard(show) {
   

    const showCard =  `<div class="show-card"><img alt='show cover image' src=${show.imageURL} class="show-cover-image"/>
    <p class="show">${show.showName}</p>

     <button onclick="deleteShow(${show.id})">delete</button> 
     </div>
    `

    return showCard
}

function getAllShows() {
    axios.get('http://localhost:4004/api/shows')
        .then(res => {
            res.data.forEach(show => {
                const showCard = createShowCard(show)

                showList.innerHTML += showCard
            })
        })
        .catch(err => console.log(err))
}

function deleteCard(id) {
    axios.delete(`http://localhost:4004/api/shows/${id}`)
    .then(() => getAllShows())
    .catch(err => console.log(err))
} 

getAllShows()

form.addEventListener('submit', submitHandler)

