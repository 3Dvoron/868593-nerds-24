var write = document.querySelector(".open-popap");
var modal = document.querySelector(".write-us");
write.addEventListener("click",function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});
var close = document.querySelector(".modal-close");
close.addEventListener("click", function (evt){
  evt.preventDefault();
  modal.classList.remove("modal-show");
});