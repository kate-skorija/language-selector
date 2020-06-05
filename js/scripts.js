$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const workplace = $("input:radio[name=workplace]:checked").val();
    const codeFun = $("input:radio[name=codeFun]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const trait = $("input:radio[name=trait]:checked").val();
    const location = $("input:radio[name=location]:checked").val();

    if (!workplace || !codeFun || !color || !trait || !location) {
      alert("Please answer all of the questions to ensure a correct result.")
    } else {
      let ruby = 0
      let cSharp = 0
      let javaScript = 0
      if (workplace === "ruby") {
        ruby += 1;
      } else if (workplace === "cSharp") {
        cSharp += 1;
      } else if (workplace === "javaScript") {
        javaScript += 1;
      }
      if (codeFun === "ruby") {
        ruby += 1;
      } else if (codeFun === "cSharp") {
        cSharp += 1;
      } else if (codeFun === "javaScript") {
        javaScript += 1;
      }
      if (color === "ruby") {
        ruby += 1;
      } else if (color === "cSharp") {
        cSharp += 1;
      } else if (color === "javaScript") {
        javaScript += 1;
      }
      if (trait === "ruby") {
        ruby += 1;
      } else if (trait === "cSharp") {
        cSharp += 1;
      } else if (trait === "javaScript") {
        javaScript += 1;
      }
      if (location === "ruby") {
        ruby += 1;
      } else if (location === "cSharp") {
        cSharp += 1;
      } else if (location === "javaScript") {
        javaScript += 1;
      }
      if (ruby > cSharp && ruby > javaScript) {
        $("#rubyResult").show("slide");
      } else if (cSharp > ruby && cSharp > javaScript) {
        $("#cSharpResult").show("slide");
      } else if (javaScript > ruby && javaScript > cSharp) {
        $("#javaScriptResult").show("slide");
      } else {
        $("#javaScriptResult").show("slide");
      }
    }
    $("button#reset").click(function() {
      $("#rubyResult").hide();
      $("#cSharpResult").hide();
      $("#javaScriptResult").hide();
    })
  });
});

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
