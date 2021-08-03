function validation(){
    var product1= document.getElementById('product1').value;
    var product2= document.getElementById('product2').value;
    var product3= document.getElementById('product3').value;
    var product4= document.getElementById('product4').value;
 

    if(product1=='' || product2== ''|| product3 == ''|| product4  == ''||)
    {
        document.getElementById("result").innerHTML = "All field required";

       return false;
      }
      else if(product1.length<5)
      {
        document.getElementById("result").innerHTML = "Must be 5 characters";

       return false;
      }
      else if(product2.length<5)

{
        document.getElementById("result").innerHTML = "Must be 5 characters";

       return false;
      }
       else if(product3.length<10)

{
        document.getElementById("result").innerHTML = "Must be 10 characters";

       return false;
      }
      else if(product4.length<6)
{
        document.getElementById("result").innerHTML = "gender must 6 characters";

       return false;
      }
 