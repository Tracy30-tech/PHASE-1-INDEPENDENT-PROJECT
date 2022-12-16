

// Event Listeners
document.querySelector('#upload_form').addEventListener('submit', handleSubmit)

// Event handlers
function handleSubmit(e) {
  e.preventDefault()
  let properties = {
    price: e.target.price.value,
    imageUrl: e.target.image_url.value,  
    agent: e.target.agent.value,
    description:e.target.description.value,
    deposit:0
  }
  singleListing(properties)
  // buyHouse(house)
}

function singleListing(home){
  //Build Home
  let card = document.createElement('li')
  card.className = 'card'
  card.innerHTML = `
    <img src="${home.imageUrl}">
    <div class="content">
     <h4 id= "price">${home.price}</h4>
     <p>${home.agent}</p>
     <p>
       KES: <span class = "deposit-count">${home.deposit}</span> Bought
     </p>
     <p>${home.description}</p>
    </div>
   
    
  `
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let buyButton = document.createElement('button')
  buyButton.addEventListener('click',(e) =>{
    let deposit= document.querySelector(".deposit-count")
    let price = document.querySelector("#price").value
    console.log(price,deposit)
    deposit.textContent= price
    
  })
  buyButton.textContent= 'Buy House'
  let deleteHouse = document.createElement('button')
  deleteHouse.textContent= 'Not interested'
  buttons.append(buyButton,deleteHouse)
  card.appendChild(buttons)

  //Add home card to DOM
  document.querySelector('#listings').appendChild(card)     
}

// function depositCount() {
//   let deposit= document.querySelector(".deposit-count")
//   // let price= document.querySelector("#price")
//    deposit.textContent= properties.price
// }


//Fetch Requests
function allListings(){
  fetch('http://localhost:3000/properties')
  .then(res => res.json())
  .then(properties => properties.forEach(home => singleListing(home)))
}

function buyHouse(house){
  fetch('http://localhost:3000/properties',{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(house)
  })
  .then(res => res.json())
  .then(home => console.log(home))
}

function initialize(){
  allListings()
}
initialize()




function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Continue";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// console.log(dots, moreText, btnText);

