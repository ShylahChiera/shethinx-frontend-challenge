//declare zoom feature closed
let notOpen = true;


function loadproductimgs(){
  var product = products[0];
  var images = product.image;
  //for each image create img element and make clickable
  for (i in images){

      var img = document.createElement("img");
      img.src = images[i];
      img.className = "img";
      //zoom feature
      img.onclick = toggleImages;
      //dynamically add images into container
      var imgContainer = document.getElementById("imgs");
      imgContainer.appendChild(img);

  }
}

//expand image container to 100% for zoom appearance
//TODO: grab image indexes to zoom in on particular image
function toggleImages() {

  var imgContainer = document.getElementById("imgs");
  if(notOpen) {
    imgContainer.setAttribute("style", "width: 100%; margin:0; background-color: #F8F8F9; cursor: zoom-out; ");
    notOpen = !notOpen;
  } else if (!notOpen) {
    imgContainer.setAttribute("style", "width: 35%; margin-left: 32%; margin-right: 32%; background-color: transparent; cursor: zoom-in; ");
    notOpen = true;
  }

}
