$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const workplace = $("input:radio[name=workplace]:checked").val();
    const codeFun = $("input:radio[name=codeFun]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const trait = $("input:radio[name=trait]:checked").val();
    const location = $("input:radio[name=location]:checked").val();

    if (!nameInput || !workplace || !codeFun || !color || !trait || !location) {
      alert("Please answer all of the questions to ensure a correct result.")
    } else {
      let ruby = 0
      let cSharp = 0
      let javaScript = 0
      let python = 0
      if (workplace === "ruby") {
        ruby += 1;
      } else if (workplace === "cSharp") {
        cSharp += 1;
      } else if (workplace === "javaScript") {
        javaScript += 1;
      } else if (workplace === "python") {
        python += 1;
      }
      if (codeFun === "ruby") {
        ruby += 1;
      } else if (codeFun === "cSharp") {
        cSharp += 1;
      } else if (codeFun === "javaScript") {
        javaScript += 1;
      } else if (codeFun === "python") {
        python += 1;
      }
      if (color === "ruby") {
        ruby += 1;
      } else if (color === "cSharp") {
        cSharp += 1;
      } else if (color === "javaScript") {
        javaScript += 1;
      } else if (color === "python") {
        python += 1;
      }
      if (trait === "ruby") {
        ruby += 1;
      } else if (trait === "cSharp") {
        cSharp += 1;
      } else if (trait === "javaScript") {
        javaScript += 1;
      } else if (trait === "python") {
        python += 1;
      }
      if (location === "ruby") {
        ruby += 1;
      } else if (location === "cSharp") {
        cSharp += 1;
      } else if (location === "javaScript") {
        javaScript += 1;
      } else if (location === "python") {
        python += 1;
      }
      if (ruby > cSharp && ruby > javaScript) {
        $(".name").text(nameInput);
        $("#rubyResult").show("slide");
      } else if (cSharp > ruby && cSharp > javaScript) {
        $(".name").text(nameInput);
        $("#cSharpResult").show("slide");
      } else if (javaScript > ruby && javaScript > cSharp) {
        $(".name").text(nameInput);
        $("#javaScriptResult").show("slide");
      } else if (python > ruby && python > cSharp) {
        $(".name").text(nameInput);
        $("#pythonResult").show("slide");
      } else {
        $(".name").text(nameInput);
        $("#javaScriptResult").show("slide");
      }
    }
    $("button#reset").click(function() {
      $("#rubyResult").hide("slide");
      $("#cSharpResult").hide("slide");
      $("#javaScriptResult").hide("slide");
      $("#pythonResult").hide("slide");
    })
  });
});
