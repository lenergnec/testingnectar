
const calcularD = document.getElementById("calcular-descuento")
const clear = document.getElementById("button_clear")

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

calcularD.addEventListener("click", CalcularDescuentos)

function CalcularDescuentos() {

    const tipoDescuento = document.querySelector('input[name="option"]:checked');

    var litros = parseFloat(document.getElementById("litros").value) || 0;
    var precio = parseFloat(document.getElementById("precio").value) || 0;
    var descuento = parseFloat(document.getElementById("descuento").value) || 0;

    if(litros)
    var subTotal = litros * precio
    var resultado = (subTotal * descuento)/100
    const discountType = tipoDescuento.value;
    const total = subTotal - resultado
    

    if(tipoDescuento){
        
        switch(discountType){

            case "Porcentual":
                   
                   document.getElementById("displaySavings").innerText = `Ahorro: ${resultado.toFixed(2)}`
                   document.getElementById("displayLitros").innerText = `Litros: ${litros.toFixed(4)}`
                   document.getElementById("displayPrecio").innerText = `Precio: ${precio.toFixed(2)}`
                   document.getElementById("displayDescuento").innerText = `Valor: ${descuento.toFixed(3)}`
                   document.getElementById("displayDescuentoTipo").innerText = `Tipo: ${discountType}`
                   document.getElementById("subtotalAmount").innerText = `Subtotal: ${subTotal.toFixed(2)}`
                   document.getElementById("totalAmount").innerText = `Total: ${total.toFixed(2)}`
                   modal.style.display = "block";
                break

            case "Fijo":
                if(precio < descuento){

                    var resultadoMenor = litros * precio

                    document.getElementById("totalAmount").innerText = `Total: ${resultadoMenor.toFixed(2)}`
                    document.getElementById("displayLitros").innerText = `Litros: ${litros.toFixed(4)}`
                    document.getElementById("displayPrecio").innerText = `Precio: ${precio.toFixed(2)}`
                    document.getElementById("displayDescuento").innerText = `Valor descuento: ${descuento.toFixed(2)}`
                    document.getElementById("displayDescuentoTipo").innerText = `Tipo: ${discountType}`                   
                    modal.style.display = "block";

                } else {
                    var calcDiscount = litros * descuento
                    var resultadoNotDiscount = litros * precio
                    var savingDiscount = resultadoNotDiscount - calcDiscount

                    document.getElementById("subtotalAmount").innerText = `Subtotal: ${resultadoNotDiscount.toFixed(2)}`
                    document.getElementById("totalAmount").innerText = `Total: ${calcDiscount.toFixed(2)}`
                    document.getElementById("displaySavings").innerText = `Ahorro: ${savingDiscount.toFixed(2)}`
                    document.getElementById("displayLitros").innerText = `Litros: ${litros.toFixed(4)}`
                    document.getElementById("displayPrecio").innerText = `Precio: ${precio.toFixed(2)}`
                    document.getElementById("displayDescuento").innerText = `Valor descuento: ${descuento.toFixed(2)}`
                    document.getElementById("displayDescuentoTipo").innerText = `Tipo: ${discountType}`
                    modal.style.display = "block";
                    
                }
                break
                
        }
    }else {
         alert("Por favor, selecciona un tipo de descuento."); 
    }
    
    

    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Cuando el usuario haga clic fuera del modal, se cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
}





