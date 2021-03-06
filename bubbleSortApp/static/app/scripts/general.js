function launchBubbleSortAlg() {
    var inputArray = $('#inputArray').val();
    var size = inputArray.split(" ").length;
    if (size > 1 && size < 9) {
        var table = document.getElementById("resultTable");
        document.getElementById("launchButton").disabled = true;
        document.getElementById("quitButton").disabled = false;
        $.ajax({
            url: "launchBubble",
            data: {
                'inputArray': inputArray
            },
            success: function (data) {
                var row = table.insertRow(2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var parsed = JSON.parse(data);
                for (var i = parsed.length - 1; i >= 0; i--) {
                    var x = "";
                    var y = parsed[i][0].split(" ");
                    cell1.innerHTML = i;
                    for (var j = 0; j < y.length; j++) {
                        ix = parsed[i][1];
                        if (j == ix || j == ix + 1) {
                            x = x + " <u><span style=\"color:red\">" + y[j] + "</span></u>";
                        }
                        else
                            x = x + " <span style=\"color:black\">" + y[j];
                       
                    }
                    cell2.innerHTML = x;
                    row = table.insertRow(2);
                    cell1 = row.insertCell(0);
                    cell2 = row.insertCell(1);
                }
            },
            error: function (data) {
                alert("Bad Data");
            }
        })
    }
    else {
        alert("Invalid Input")
    }
}
function quitBubbleSortAlg() {
    var table = document.getElementById("resultTable");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 1; i--) {
        table.deleteRow(i);
    }
    document.getElementById("inputArray").value = "";
    document.getElementById("launchButton").disabled = false;
    document.getElementById("quitButton").disabled = true;


}