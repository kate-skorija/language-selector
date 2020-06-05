$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const workplace = parseInt($("input:radio[name=workplace]:checked").val());
    const codeFun = parseInt($("input:radio[name=codeFun]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const trait = parseInt($("input:radio[name=trait]:checked").val());
    const location = parseInt($("input:radio[name=location]:checked").val());

    // if (!workplace || !codeFun || !color || !trait || !location) {
    //   alert("Please answer all of the questions to ensure a correct result.")
    // } else if (workplace === codeFun && workplace === color || workplace === codeFun && workplace === trait || workplace === codeFun && workplace === location) {
    //   $(".languageOutput").text(workplace);
    //   $("#formResult").show();
    // } else if (codeFun === color && codeFun === trait || codeFun === color && codeFun === location || codeFun === trait && codeFun === location) {
    //   $(".languageOutput").text(codeFun);
    //   $("#formResult").show();
    // } else if (color === trait && color === location)
    // $(".languageOutput").text(color);
    // $("#formResult").show();

    if (!workplace || !codeFun || !color || !trait || !location) {
      alert("Please answer all of the questions to ensure a correct result.")
    } else {
      let ruby = 0
      let cSharp = 0
      let javaScript = 0
      if (workplace === 1) {
        ruby = ruby + 1;
      } else if (workplace === 2) {
        cSharp = cSharp + 1;
      } else if (workplace === 3) {
        javaScript = javaScript + 1;
      }
      if (codeFun === 1) {
        ruby = ruby + 1;
      } else if (codeFun === 2) {
        cSharp = cSharp + 1;
      } else if (codeFun === 3) {
        javaScript = javaScript + 1;
      }
      if (color === 1) {
        ruby = ruby + 1;
      } else if (color === 2) {
        cSharp = cSharp + 1;
      } else if (color === 3) {
        javaScript = javaScript + 1;
      }
      if (trait === 1) {
        ruby = ruby + 1;
      } else if (trait === 2) {
        cSharp = cSharp + 1;
      } else if (trait === 3) {
        javaScript = javaScript + 1;
      }
      if (location === 1) {
        ruby = ruby + 1;
      } else if (location === 2) {
        cSharp = cSharp + 1;
      } else if (location === 3) {
        javaScript = javaScript + 1;
      }
    }
  });
});