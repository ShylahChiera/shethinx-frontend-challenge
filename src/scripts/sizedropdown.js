

function sizeDropDown() {
    var element = document.getElementById("size-container");
    element.classList.toggle("show");

    //TODO: dynamically add sizes to list

    // var product = products[0];
    // var sizes = product.sizes;
    // for (i in sizes){
    //   console.log(sizes[i])
    //
    // }

  }
//hide dropdown when clicked outside of size container/dropdown button
  window.onclick = function(event) {
    if (!event.target.matches('#dropdown')) {

      var dropdown = document.getElementsByClassName("size-container");
      var i;
      for (i = 0; i < dropdown.length; i++) {
        var openDropdown = dropdown[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
