function genQR(){
    var input = document.getElementById('qr-input');
    var output = document.getElementById('qr-output');
    var url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
    output.src = url;
}