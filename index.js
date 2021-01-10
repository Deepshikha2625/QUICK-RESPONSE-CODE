/*working for submit button and generate QUICK RESPONSE(QR) code*/
function code(){
    var x = document.getElementById("input").nodeValue;
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
    var img = document.getElementById("img");
    img.src = url; 
}