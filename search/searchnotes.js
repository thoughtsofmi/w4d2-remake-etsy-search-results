var container = document.createElement('div')
//console.dir(container)

container.classList.add('container')
var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)//need to put this inside the row

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.innerHTML = 'Column A'
row.appendChild(col)

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.innerHTML = 'Column B'
row.appendChild(col)

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.innerHTML = 'Column C'
row.appendChild(col)


document.getElementById('searchResults').appendChild(container)
