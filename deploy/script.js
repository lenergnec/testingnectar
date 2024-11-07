const rendimiento_configurado = document.getElementById("unit-rend");
const tolerancia_configurada = document.getElementById("unit-tolerancia");
const guardar_datos_unidad = document.querySelector("#save_datos_unidad");
const displayT = document.getElementById("resp_tolerancia");
const displayR = document.getElementById("resp_rendimiento");
const volumen = document.getElementById("volumen-litros");
const displayVolumen = document.getElementById("volumen_ingresado");
const calcular_tolerancias = document.getElementById("calculo-tolerancia-boton");
const display_Tolerancia_calculada_menor = document.getElementById("tolerancia_menor_calculada");
const display_Tolerancia_calculada_mayor = document.getElementById("tolerancia_mayor_calculada");
const display_tolerancia_porcentual = document.getElementById("tolerancia_porcentual");
const clearText = document.getElementById("button_clear");
const display_rend_optimo = document.getElementById("rendimiento_optimo");
const display_rend_menor = document.getElementById("km_rendimiento_menor");
const display_rend_mayor = document.getElementById("km_rendimiento_mayor");
const odometroAnterior = document.getElementById("odometro-anterior");
const display_odometro_anterior = document.getElementById("odometro-anterior-text");
const display_odometroOptimo = document.getElementById("odometro-actual-optimo");
const display_odometroMenor = document.getElementById("odometro-actual-menor");
const display_odometroMayor = document.getElementById("odometro-actual-mayor");
const display_odometro_rend_menor = document.getElementById("rendimiento-menor");
const display_odometro_rend_mayor = document.getElementById("rendimiento-mayor");

guardar_datos_unidad.addEventListener("click", guardar);
clearText.addEventListener("click", Clear);

function guardar() {
const tolerancia = tolerancia_configurada.value;
const rendimiento = rendimiento_configurado.value;
const litros = volumen.value;

      let toleranciaPorcentual = parseFloat((rendimiento * tolerancia) / 100);
      let toleranciaMayor = parseFloat(rendimiento) + toleranciaPorcentual;
      let toleranciaMenor = parseFloat(rendimiento) - toleranciaPorcentual;
    
      displayT.innerText = `Tolerancia configurada: ${tolerancia} km/lts`;
      displayR.innerText = `Rendimiento configurado: ${rendimiento} km/lts`;
      display_tolerancia_porcentual.innerText = `Tolerancia calculada porcentual: ${toleranciaPorcentual}%`;
      display_Tolerancia_calculada_mayor.innerText = `Tolerancia Mayor: ${toleranciaMayor} km/lts`;
      display_Tolerancia_calculada_menor.innerText = `Tolerancia Menor: ${toleranciaMenor} km/lts`;
  
    const rendimientoOptimo = litros * rendimiento;
    const rendimientoMenor = rendimientoOptimo - toleranciaMenor;
    const rendimientoMayor = rendimientoOptimo + toleranciaMayor;

      displayVolumen.innerText = `Litros ingresados: ${litros} lts`;
      display_rend_optimo.innerText = `Rendimiento optimo: ${rendimientoOptimo} km/lts`;
      display_rend_menor.innerText = `Rendimiento Tolerancia Menor: ${rendimientoMenor} km/lts`;
      display_rend_mayor.innerText = `Rendimiento Tolerancia Mayor: ${rendimientoMayor} km/lts`;


  const odometro_Anterior = odometroAnterior.value;

    let odometroOptimo = parseFloat(odometro_Anterior) + rendimientoOptimo;
    let odometroToleranciaMenor = parseFloat(odometro_Anterior) + rendimientoMenor;
    let odometroToleranciaMayor = parseFloat(odometro_Anterior) + rendimientoMayor
  
    display_odometro_anterior.innerText = `Odometro anterior: ${odometro_Anterior} km`;
    display_odometroOptimo.innerText = `Odometro optimo: ${odometroOptimo} km`;
    display_odometroMenor.innerText = `Odometro con Tolerancia Menor: ${odometroToleranciaMenor} km`;
    display_odometroMayor.innerText = `Odometro con Tolerancia Mayor: ${odometroToleranciaMayor} km`;
  

}

function Clear() {
    // Selecciona todos los inputs dentro del formulario
    const inputs = document.querySelectorAll('input');

    // Recorre cada input y lo limpia
    inputs.forEach(input => {
        input.value = '';
    });

}


