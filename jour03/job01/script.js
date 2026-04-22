$(function () {

  $("#show-btn").click(function () {
    $("#text")
      .text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.")
      .show();
  });

  $("#hide-btn").click(function () {
    $("#text").hide();
  });

});