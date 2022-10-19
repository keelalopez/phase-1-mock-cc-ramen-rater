// write your code here
// url http://localhost:3000/ramens/:id

// DELIVERABLE 1
// Load images from DOM = fetch function. See all images displayed = Iteration
// with for each since [{},{}]. Then append to DOM

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(menu => menu.forEach((item) => renderRamen(item)))

function renderRamen (item) {
    const ramenMenuDiv = document.querySelector('#ramen-menu')

    const ramenImg = document.createElement('img')
    ramenImg.src = item.image
    ramenMenuDiv.append(ramenImg)

    // DELIVERABLE 2
    // Adding click event to all images
    ramenImg.addEventListener('click', (eventObj) => {
        const detailsDiv = document.querySelector('#ramen-detail')

        const detailsImg = document.querySelector('.detail-image')
        const detailsName = document.querySelector('.name')
        const detailsRestaurant = document.querySelector('.restaurant')

        const detailsRating = document.querySelector('#rating-display')
        const detailsComment = document.querySelector('#comment-display')

        detailsImg.src = item.image
        detailsName.textContent = item.name
        detailsRestaurant.textContent = item.restaurant
        detailsRating.textContent = item.rating
        detailsComment.textContent = item.comment
    })
}

// DELIVERABLE 3
// adding click event to FORM. Harnessing info and 
// running back to function to renderRamen

const form = document.querySelector('#new-ramen')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newRamenName = e.target.name.value
    const newRamenRestaurant = e.target.restaurant.value
    const newRamenImage = e.target.image.value
    const newRamenRating = e.target.rating.value
    const newRamenComment = e.target['new-comment'].value

    // Creating and passing the ramen object into render fnc
    const newRamenObj = {
        id: 0,
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    form.reset() //added line before it worked
    renderRamen(newRamenObj)
})





































// //EMERGENCY CODE SAVED AT MIN 55
// // write your code here
// // url http://localhost:3000/ramens/:id

// // DELIVERABLE 1
// // Load images from DOM = fetch function. See all images displayed = Iteration
// // with for each since [{},{}]. Then append to DOM

// fetch('http://localhost:3000/ramens')
// .then(response => response.json())
// .then(menu => renderRamen(menu))

// function renderRamen(menu) {
//     const ramenMenuDiv = document.querySelector('#ramen-menu')
    
//     menu.forEach(item => {
//         const ramenImg = document.createElement('img')
//         ramenImg.src = item.image
//         ramenMenuDiv.append(ramenImg)

//         // DELIVERABLE 2
//         // Adding click event to all images
//         ramenImg.addEventListener('click', (eventObj) => {
//             const detailsDiv = document.querySelector('#ramen-detail')

//             const detailsImg = document.querySelector('.detail-image')
//             const detailsName = document.querySelector('.name')
//             const detailsRestaurant = document.querySelector('.restaurant')

//             const detailsRating = document.querySelector('#rating-display')
//             const detailsComment = document.querySelector('#comment-display')

//             detailsImg.src = item.image
//             detailsName.textContent = item.name
//             detailsRestaurant.textContent = item.restaurant
//             detailsRating.textContent = item.rating
//             detailsComment.textContent = item.comment
//         })
//     })
// }

// // DELIVERABLE 3
// // adding click event to FORM. Harnessing info and 
// // running back to function to renderRamen