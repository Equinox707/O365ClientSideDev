

function doConvert() {
    debugger;
    $.ajax({
        url: "http://api.fixer.io/latest?symbols=THB",
        cache: false
    }).done(function (data) {
        var p = $("#price").val();
        var result = p + " THB are approx. " + parseFloat(p / data.rates.THB).toFixed(2) + " €";
        $("#result").text(result);
  });
}