function launchBubbleSortAlg() {
    var inputArray = $('#inputArray').val();
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
            var parsedData = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                cell1.innerHTML = i;
                cell2.innerHTML = "<span style=\"color:red\">" + data;
                row = table.insertRow(2);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
            }
        },
        error: function (data) {
            alert("failed");
        }
    })
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