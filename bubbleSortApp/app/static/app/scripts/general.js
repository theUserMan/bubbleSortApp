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
                //alert(data);
                //alert('Your input array: \n' + inputArray);
                var row = table.insertRow(2);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var parsed = JSON.parse(data);
                for (var i = parsed.length - 1; i >= 0; i--) {
                    cell1.innerHTML = i;
                    /*var j = 0;
                    for (var w in parsed[i]) {
                        cell2.innerHTML = w;
                        if (j == parsed[i][1] || j == parsed[i][1] + 1)
                            cell2.innerHTML = "<span style=\"color:red\">" + w;
                        else
                            cell2.innerHTML = w;
                        j++;
                    }*/
                    cell2.innerHTML = parsed[i][0];
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