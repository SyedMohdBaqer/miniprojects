function metersToCentimeters ()
{
    let inputInMeters = document.getElementById('inputForMeters').value;
   if (isNaN(inputInMeters)|| inputInMeters<=0){
        window.alert("Enter only a number and it should be greater than zero");
    }
    else{
    let valueInCentimeters= inputInMeters*100;
    document.getElementById('outputInCm').value = valueInCentimeters;
    }

}
