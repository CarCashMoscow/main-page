$(document).ready(function () {
  $("#request_onpage #phone").mask("+7-(000)-000-00-00", {
    placeholder: "+7-(___)-___-__-__",
  });
  $("#menu_button").click(function () {
    $("#menu").toggleClass("show");
  });
});
/*$("#request_onpage").submit(function(event) {
  event.preventDefault();

});*/
function showMore(id) {
    $( "#" + id ).toggleClass( "show" );
}
function showMessage(type) {
  if (type == true) {
    var h2 = "Успешно";
    var description = "Данные отправлены.";
    var color = "green";
  } else if (type == false) {
    var h2 = "Ошибка";
    var description = "Проверьте данные и попробуйте снова.";
    var color = "red";
  }
  var html = '<div id="modal_message" class="modal animate-opacity">';
  html = html + '<div class="modal-content" style="padding:32px">';
  html =
    html +
    '<div class="container white" id="modal_message_content"><div class="center"><h2>' +
    h2 +
    '</h2><p class="opacity">' +
    description +
    "</p>";
  html =
    html +
    '<hr><i id="modal_message_close" class="center button large ' +
    color +
    ' round-xlarge">Закрыть</i></div>';
  html = html + "</div></div></div>";
  $("body").append(html);
  $("#modal_message_close").click(function () {
    $("#modal_message").fadeOut("slow");
    $("#modal_message").remove();
  });
  $("#modal_message").fadeIn("slow");
}
