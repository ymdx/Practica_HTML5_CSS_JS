var separador = " ";
var form = document.getElementById("form-contact");

var nombreInput = document.getElementsByName("nombre");
var emailInput = document.getElementsByName("email");
var conocerInput = document.getElementsByName("conocer");
var numeroContactoInput = document.getElementById("numero-contacto");
var textAreaInput = document.getElementById("textarea");
var palabraSpan = document.getElementById("palabras");

var otrosInput = document.createElement("input");
otrosInput.setAttribute("id", "otro");
otrosInput.setAttribute("type", "text");
otrosInput.setAttribute("name", "otro");
otrosInput.setAttribute("placeholder", "Otro");
otrosInput.setAttribute("required", "");

for (var i = 0; i < conocerInput.length; i++) {
    conocerInput[i].addEventListener('click', function(event) {
        if (this.value == "Otro") {
            this.parentNode.appendChild(otrosInput);
        } else {
            if (document.getElementById("otro")) {
                this.parentNode.removeChild(otrosInput);
            }
        }
    });
}

// textAreaInput.addEventListener("keyup", function(event) {
//     if (textAreaInput.value.split(separador).length > 150) {
//         palabraSpan.style.display = "block";
//         textAreaInput.innerHtml = "'onkeypress=return false;'";
//     } else {
//         palabraSpan.style.display = "none";
//     }
// });

form.addEventListener("submit", function(event) {
    var inputNombre = document.getElementById("nombre");
    var otroRadioInput = {
        "conocer_1": document.getElementById("conocer_1"),
        "conocer_2": document.getElementById("conocer_2"),
        "conocer_3": document.getElementById("conocer_3"),
        "conocer_4": document.getElementById("conocer_4"),
    };
    var emailInput = document.getElementById("email");
    var numeroInput = document.getElementById("numero-contacto");

    var botonSubmit = document.getElementById("enviar");
    var textAreaInput2 = document.getElementById("textarea");

    if (inputNombre.checkValidity() == false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (emailInput.checkValidity() == false) {
        alert("Escribe tu email");
        emailInput.focus();
        event.preventDefault();
        return false;
    }

    if (otroRadioInput.conocer_1.checkValidity() == false) {
        alert("Secciona un campo en como me has conocido");
        event.preventDefault();
        return false;
    }

    if (document.getElementById("otro")) {
        if (document.getElementById("otro").checkValidity() == false) {
            alert("Escribe motivo en campo otro");
            event.preventDefault();
            return false;
        }
    }

    if (numeroInput.checkValidity() == false || numeroInput.value.length!=9) {
            alert("Escribe tu numero correctamente");
            numeroInput.focus();
            event.preventDefault();
            return false;
    }

    if (textAreaInput2.checkValidity() == false) {
            alert("Escribe 150 palabras");
            a.focus();
            event.preventDefault();
            return false;
    }

});

$(document).ready(function() {
    $("#textarea").on('keyup', function() {
        var words = this.value.match(/\S+/g).length;
        if (words > 150) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 150).join(" ");
            // Add a space at the end to keep new typing making new words
            $(this).val(trimmed + " ");
            alert("Escribe 150 palabras");
            textAreaInputF.focus();
            event.preventDefault();
            return false;
        } else {
            $('#quedan').text(150 - words);
        }
    });
});
