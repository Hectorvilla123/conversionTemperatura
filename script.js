function conversionTemperatura (){
    let celsius = prompt("Ingrese un numero para la conversion: ");

    if (isNaN(celsius)){
        alert("Error, este dato no es un numero.");
        conversionTemperatura();
    }else{
        celsius = parseFloat(celsius);
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = celsius + 273.5;

        console.log(`Temperatura en Fahrenheit: ${fahrenheit}°F`);
        console.log(`Temperatura en Kelvin: ${kelvin}K`);

    }
}
conversionTemperatura();
