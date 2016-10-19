
function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-3')

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
cardTextP.classList.add('overflow-ellipsis')
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
//pretty sure there is an easy way to write all this.  just how my mind worked atm.


  document.querySelector('#searchResults.row').appendChild(card)
}

var items = [
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

//// looking at this reminded me of the etsy data that we did to answer our homework from last week.  So I put everything in the array and called it items.  Used the forEach function to loop around the createResultCard.
