function launchBubbleSortAlg() {
    var inputArray = $('#inputArray').val();
    $.ajax({
        url: "launchBubble",
        data: {
            'inputArray': inputArray
        },
        success: function (data) {
            alert('Your input array: \n' + inputArray);
        },
        error: function (data) {
            alert("failed");
        }
    })
}