function conversionTemperatura (){
    let celsius = prompt("Ingrese un numero para la conversion: ");

    if (isNaN(celsius)){
        alert("Error, este dato no es un numero.");
        conversionTemperatura();
    }else{
        celsius = parseFloat(celsius);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.5;

        document.getElementById("conversion").innerHTML = `
            temperatura en Celsius: ${celsius}°C<br> 
            Temperatura en Fahrenheit: ${fahrenheit}°F<br>
            Temperatura en Kelvin: ${kelvin}K
        `;
    }
}
conversionTemperatura();
