var container = document.createElement('div')
//console.dir(container)

container.classList.add('container')
var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)//need to put this inside the row
//cloning.. make a master copy, then photo copy.
var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column') //adding an attribute for column
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)

col.innerHTML = 'Column A'
col2.innerHTML = 'Column B'
col3.innerHTML = 'Column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

//bootstrap, components input groups- button add ons
// {/* <div class="input-group">
//       <input type="text" class="form-control" placeholder="Search for...">
//       <span class="input-group-btn">
//         <button class="btn btn-default" type="button">Go!</button>  </span>
//     </div> */}

var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className ='btn btn-default'
button.innerHTML = 'Search!!!'


// <input type = "text" id="search" placeholder="Search....">
var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.id = 'search'
searchInput.className = 'form-control'//className sets the class attribute, classList
//searchInput.setAttribute('class', 'form-control')  can use this instead but it will wipe out the previous class word
//container.prepend(searchInput) not working
searchDiv.appendChild(searchInput)//append to add to our html
span.appendChild(button)//row refers to where its in the dom
searchDiv.appendChild(span)


container.insertBefore(searchDiv, row)
container.insertBefore(document.createElement('br'), searchDiv) //gives it a br on top
container.insertBefore(document.createElement('br'), row)
// is no insert after.  use this or next sibling instead of row

button.addEventListener('click', search) //action, name handler
searchInput.addEventListener('keypress', searchEnter) //action, name handler, added the keypress because not all users use the click on search.  most use enter.

function searchEnter(event) {
    if (event.key === 'Enter'){
        search()
    }//if the enter key is enter then search.  if not, then don't
}
function search() {
        var searchTerm = document.querySelector('#search').value
        var searchResult = {
            term: searchTerm,
            image: 'http://unsplash.it/400?random',
    }
    createSearchResult(searchResult)
    document.querySelector('#search').value = '' //after it complete we want to clear out the field. so we leave it blank.
}
function createSearchResult(result) {//making a box to show search
    var card = document.createElement('div')
    card.className = 'well'
    card.innerHTML = result.term
    document.querySelector(' .col-sm-4:first-child').appendChild(card)
}//trying to find the col and append the child


document.getElementById('searchResults').appendChild(container)


//use sm-col-3 and width 300

// Declare your builder function
function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-3')
//card.innerHTML = "Hello"
var cardImage = document.createElement('div')
card.appendChild(cardImage)
var image = document.createElement('img')
image.setAttribute('src', item.image)
image.classList.add('pictures')
cardImage.appendChild(image)
//
var cardText = document.createElement('div')
cardImage.appendChild(cardText)
var cardTextP = document.createElement('div')
cardText.appendChild(cardTextP)
cardTextP.innerHTML = item.title
var cardTextLandR = document.createElement('div')
cardTextP.appendChild(cardTextLandR)

var cardTextLeft = document.createElement('div')
cardTextLandR.appendChild(cardTextLeft)
cardTextLeft.classList.add('text-muted', "col-sm-6", "text-left")
cardTextLeft.innerHTML = item.seller

var cardTextRight = document.createElement('div')
cardTextLandR.appendChild(cardTextRight)
cardTextRight.classList.add('text-success', "col-sm-6", "text-right")
cardTextRight.innerHTML = '$' + item.price + '.00'

// your code here to build up the card
  // keep in mind you'll be nesting tags

  document.querySelector('#searchResults.row').appendChild(card)
}

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.

// items.forEach(function(){
//   createResultCard({
//     image: 'http://unsplash.it/400?random',
//     title: 'Vintage Board Game Art Wall Home Decor',
//     seller: 'franz66',
//     price: 15.00
//   })
// })
var items = [
//createResultCard({
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
},
{
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game Art Wall Home Decor',
  seller: 'franz66',
  price: 15.00
}
]
items.forEach(function(item){
  createResultCard(item)
})
console.log(items)
