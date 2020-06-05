$(document).ready(function () {
  $(#formOne).submit(function(event) {
    event.preventDefault();
    const workplace = $("input:radio[name=workplace]:checked").val();
    const codeFun = $("input:radio[name=codeFun]:checked").val();
    const color = $("input:radio[name=color]:checked").val();
    const trait = $("input:radio[name=trait]:checked").val();
    const location = $("input:radio[name=location]:checked").val();

    
  });
});