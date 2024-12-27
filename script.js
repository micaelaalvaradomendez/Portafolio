function copiar() {
    var texto= "micaelaalvaradomendez@gmail.com"
    var input = document.createElement('input');
            input.value = texto;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
}