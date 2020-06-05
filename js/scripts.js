$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const workplace = $("input:radio[name=workplace]:checked").val();
    const codeFun = $("input:radio[name=codeFun]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const trait = $("input:radio[name=trait]:checked").val();
    const location = $("input:radio[name=location]:checked").val();

    if (workplace === codeFun && workplace === color || workplace === codeFun && workplace === trait || workplace === codeFun && workplace === location) {
      $(".languageOutput").text(workplace);
      $("#formResult").show();
    } else if (codeFun === color && codeFun === trait || codeFun === color && codeFun === location || codeFun === trait && codeFun === location) {
      $(".languageOutput").text(codeFun);
      $("#formResult").show();
    } else if (color === trait && color === location)
    $(".languageOutput").text(color);
    $("#formResult").show();
  });
});