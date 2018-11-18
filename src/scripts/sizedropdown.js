

function sizeDropDown() {
    var element = document.getElementById("container");
    element.classList.toggle("show");
    console.log(products[0])
    var product = products[0];
    var sizes = product.sizes;
    for (i in sizes){
      console.log(sizes[i])

    }

  }

function showDropDown() {

}
