
window.onload = function loadproductinfo(){
  //import product from javascript object
  var product = products[0]
  var checkMark = true;
  //dynamically create elements for left hand column
  var type = document.createElement("h5");
  var typeNode = document.createTextNode(product.type);
  type.appendChild(typeNode);
  var subtitle = document.createElement("p");
  var subtitleNode = document.createTextNode(product.subtitle);
  subtitle.appendChild(subtitleNode);
  var desc = document.createElement("p");
  var descNode = document.createTextNode(product.desc);
  desc.appendChild(descNode)

  //populate left column
  var leftCol = document.getElementById("info-left");
  leftCol.appendChild(type);
  leftCol.appendChild(subtitle);
  leftCol.appendChild(desc);

  //load price
  document.getElementById("price").innerHTML = "$" + product.price + ".00";
  //load colors
    document.getElementById("color-one").innerHTML = product.colors[0] + "&#10003;";
    document.getElementById("color-two").innerHTML = product.colors[1];

  loadproductimgs();

};
