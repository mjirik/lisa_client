/*
 * script.js
 * Copyright (C) 2014 mjirik <mjirik@mjirik-Latitude-E6520>
 *
 * Distributed under terms of the MIT license.
 */
var data = {"name":"John Doe"}
start = $("#start")
start.on("click", function(){
    console.log("was clicked");
    var strdata = JSON.stringify(data);
    strdata = "abs(-1)"
    strdata = "osg.main()"
    console.log(strdata);
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:8080/osg.main()", 
        // data: "osg.main()",
        data: strdata,
        // data: "abs(-1)",
        contentType: "text/plain",
        // contentType: "html",
        // dataType: "text",
 //data: "{param1ID:"+ param1Val+"}",
        // contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function(msg) {
            console.log(msg);
            // UseReturnedData(msg.d);
        },
        // error: function(err, text) {
        //     console.log("vypada to na error");
        //     console.log(text);
        //     console.log(err.toString());
        //     alert(err.toString());
        //     if (err.status == 200) {
        //         ParseResult(err);
        //     }
        //     else { 
        //         alert('Error:' + err.responseText + 
        //                 '  Status: ' + err.status); }
        // }
    });
    console.log("ajax done");
});
