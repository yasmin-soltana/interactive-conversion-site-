function validation(){
  
    var value= document.getElementById('value').value;
    var result= document.getElementById('result').value;
    if( value==''|| result == ''||)
    {
        document.getElementById("eresult").innerHTML = "All field required";

       return false;
      }

      else if(value.length<8)
{
        document.getElementById("eresult").innerHTML = "value must 8 characters";

       return false;
      }

     else if(result.length<10) {
        document.getElementById("eresult").innerHTML = "result must 10 characters";

       return false;
      }