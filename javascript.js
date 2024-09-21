function validatebooking()
{
    var bname = document.getElementById("name").value;
    var bemail = document.getElementById("email").value;
    var bphone = document.getElementById("phone").value;
    var depdate = document.getElementById("depdate").value;
    var retdate = document.getElementById("retdate").value;
    
    var destination = document.getElementsByName("td[]");
    var isChecked = false;

    
    //var package = document.getElementsByName("packages");
    //var isSelected = false;

    var rd1 = document.getElementById("loc1");
    var rd2 = document.getElementById("loc2");
    var rd3 = document.getElementById("loc3");
    var rd4 = document.getElementById("loc4");



    if(namevalidate(bname) == false || mailvalidate(bemail) == false || phonevalidate(bphone) == false || depvalidate(depdate) == false || retvalidate(retdate) == false || destvalidate(destination, isChecked) == false || pckgvalidate(rd1, rd2, rd3, rd4) == false)
    {
        return false;
    }

    //return true;

    /*
    if(bname === "" && bemail == "" && bphone == "" &&  depdate == "" &&  retdate == "" )
    {
        namealert.innerHTML = "Name cannot be blank";
        emailalert.innerHTML = "Email cannot be blank";
        phonealert.innerHTML = "Phone No. cannot be blank";
        depalert.innerHTML = "Departure date cannot be blank";
        retalert.innerHTML = "Return Date cannot be blank";

        return false;
    }
    if(bname != "")
    {
        namealert.innerHTML = "";
        return false;
    }
    if(bemail != "")
    {
        emailalert.innerHTML = "";
        return false;
    }
    if(bphone != "")
    {
        phonealert.innerHTML = "";
        return false;
    }
    if(depdate != "")
    {
        depalert.innerHTML = "";
        return false;
    }
    if(retdate != "")
    {
        retalert.innerHTML = "";
        return false;
    }
    else
    {
        
        namealert.innerHTML = "";
        emailalert.innerHTML = "";
        phonealert.innerHTML = "";
        depalert.innerHTML = "";
        retalert.innerHTML = ""; 

        return true;
    }*/
    
    
}

function namevalidate(bname)
{
    if(bname == "")
    {
        namealert.innerHTML = "Name cannot be blank";
        return false;
    }
    if(bname.length <=2) 
    {
        namealert.innerHTML = "First name should contain atleast 3 characters";
        return false;
    }

    namealert.innerHTML = "";
        return true;
    
}

function mailvalidate(bemail)
{
    if(bemail == "")
    {
        emailalert.innerHTML = "Email cannot be blank";
        return false;
    }
    if(!isEmail(bemail))
    {
      
        emailalert.innerHTML = "Please enter a valid email address";
        return false;
    }
    
    emailalert.innerHTML = "";
        return true;
}

function phonevalidate(bphone)
{
    if(bphone == "")
    {
        phonealert.innerHTML = "Phone No. cannot be blank";
        return false;
    }
    if(isNaN(bphone))
    {
        phonealert.innerHTML = "Phone No. cannot contain alphabetic";
        return false;
    }
    if(bphone.length < 10)
    {
        phonealert.innerHTML = "Enter valid Phone No.";
        return false;
    }
    
    phonealert.innerHTML = "";
        return true;
}

function depvalidate(depdate)
{
    if(depdate == "")
    {
        depalert.innerHTML = "Departure date cannot be blank";
        return false;
    }
    

    depalert.innerHTML = "";
        return true;
}

function retvalidate(retdate)
{
    if(retdate == "")
    {
        retalert.innerHTML = "Return Date cannot be blank";
        return false;
    }


    retalert.innerHTML = "";
        return true;
}

function destvalidate(destination, isChecked)
{
    for (var i = 0; i < destination.length; i++) {
        if (destination[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        //alert("Please select at least one checkbox.");
        desalert.innerHTML = "Please Select at least one Destination";
        return false;
    }
    
    desalert.innerHTML = "";
    return true;
}

function pckgvalidate(rd1, rd2, rd3, rd4)
{
    if((!rd1.checked) && (!rd2.checked) && (!rd3.checked) && (!rd4.checked))
    {
        //alert("Select radio button");
        pckgalert.innerHTML = "Please Select any Package";
        return false;
    }
    else
    {
        pckgalert.innerHTML = "Please Select any Package";
        return true;
    }
}

function isEmail(email) {
    var atSymbol = email.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = email.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === email.length -1) return false;
    return true;
}


///////////////////
function validatecontact()
{
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    //var pattern = /^[A-Za-z]+$/;
    
    if(name == "" || mail == "" || subject == "" || message == "")
    {
        //alert("Fill all the columns");
        //nameAlert.style.display = "block";
        namealert.innerHTML = "Name cannot be blank";
        emailalert.innerHTML = "Email cannot be blank";
        subjectalert.innerHTML = "Subject cannot be blank";
        msgalert.innerHTML = "Message cannot be blank";

        return false;
        
    }
    else
    {
        namealert.innerHTML = "";
        emailalert.innerHTML = "";
        subjectalert.innerHTML = "";
        msgalert.innerHTML = "";
        return true;
    }
    /*
    if(name != "")
    {
        namealert.innerHTML = "";
        
    }
    if(mail != "")
    {
        emailalert.innerHTML = "";
        return false;
    }
    if(subject != "")
    {
        subjectalert.innerHTML = "";
        return false;
    }
    if(message != "")
    {
        msgalert.innerHTML = "";
        return false;
    }*/

    /*return true;*/
    
}

function name()
{
    var vname = document.getElementById("name").value;
    var nameAlert = document.getElementById("name-alert");
    
    if(!((/^[a-zA-Z]+$/.test(vname)) || vname.length == 0) )
    {
        nameAlert.style.display = "block";
        nameAlert.innerHTML = "Only Alphabets are allowed";
        //nameFlag= false;
    }
    else
    {
        nameAlert.style.display= "none";
        //nameFlag = true;
    }
}

function openPopup()
{
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closePopup()
{
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}