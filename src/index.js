fetch(`http://localhost:3000`, {
    method: 'POST',
})
.then(res => res.json())
.then(data =  function() {

//  console.log(data)

let addToDom = function(id, name, restaurant, image, rating, comment){
data.forEach(() => {
    addToDom(data.id, data.name, data.restaurant, data.image, data.rating, data.comment);
    })

//  console.log(addToDom);

    let idNode = id;
    let nameNode = document.createElement('name');
    nameNode.innerText = name;
    let restNode = document.createElement('rest');
    restNode.innerText = restaurant;
    let imgNode = document.createElement('img');
    imgNode.src = image;
    let ratingNode = document.createElement('rating');
    ratingNode = rating;
    let cmntNode = document.createComment('cmnt');
    cmntNode = comment;
    document.querySelector('#ramen-menu').append(imgNode);
    document.querySelector('name').append(nameNode);
    document.querySelector('.restaurant').append(restNode);
    document.querySelector('#rating-display').append(ratingNode);
    document.querySelector('#comment-display').append(cmntNode);
    

// insert.correctanswer.document(please, thanks);


}




})
.catch(err => console.log(err));