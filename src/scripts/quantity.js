
function addQuantity() {
  document.getElementById("quantity").stepUp(1);
}

function subtractQuantity(){
  var value = document.getElementById("quantity").value
  if (value > 1){
    document.getElementById("quantity").stepUp(-1);
  } else {
    let value = 1;
  }


}
