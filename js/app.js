const body = document.querySelector('body');
const photoGallery = document.querySelector("#photo-gallery")


                // <div class="card" style="width: 18rem;">
                //     <img src="img/pexels-andrea-piacquadio-864939.jpg" class="card-img-top" alt="...">
                //     <div class="card-body">
                //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //     </div>
                // </div>

const CreateEstruturaCards = (photo,text)=> {

    let div = document.createElement('div')
    div.setAttribute("class", "card");
    div.setAttribute("style" , "width: 18rem;" )
    div.innerHTML  = `  
    
         <img src="${photo}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${text}</p>
          </div>
    
    
    
    `

    photoGallery.append(div)

}



for( n = 1;  n <=5; n++) {
    CreateEstruturaCards("https://picsum.photos/200/300.jpg","ola mundo")
}
