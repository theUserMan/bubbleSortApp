function launchBubbleSortAlg() {
    var inputArray = $('#inputArray').val();
    var table = document.getElementById("resultTable")
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
            for (var i = 0; i < data.length; i++) {
                cell1.innerHTML = i;
                cell2.innerHTML = data;
            }
        },
        error: function (data) {
            alert("failed");
        }
    })
}