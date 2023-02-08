$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


function openImage(id){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(id);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  modal.style.display = "block";


}

function closeImage() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}