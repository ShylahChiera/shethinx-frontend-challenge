

function sizeDropDown() {
    var element = document.getElementById("size-container");
    element.classList.toggle("show");
    console.log(products[0])
    var product = products[0];
    var sizes = product.sizes;
    for (i in sizes){
      console.log(sizes[i])

    }

  }

  window.onclick = function(event) {
    if (!event.target.matches('#dropdown')) {

      var dropdowns = document.getElementsByClassName("size-container");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
