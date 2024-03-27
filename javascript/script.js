// const check = document.getElementsByClassName('form-control');

// check.addEventListener('click' , function() {
//     alert("hii");
//     // document.style.display = 'none';
// })
// check.addEventListener('click' , ()=>{
//     alert("hii");
// })

function clearerrors() {
    errors = document.getElementsByClassName('formerror');

    for(let item of errors){
        item.innerHTML ="";
    }
    
}


function seterror(id,error) {
    Element = document.getElementById(id);
    Element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validatePassword(password) {
    // Regular expressions to check for uppercase letter and special character
    var uppercaseRegex = /[A-Z]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    // Check if password contains at least one uppercase letter and one special character
    var containsUppercase = uppercaseRegex.test(password);
    var containsSpecialChar = specialCharRegex.test(password);

    // Return true if password meets all criteria, otherwise return false
    return containsUppercase && containsSpecialChar;
}

 

function validateForm() {
    // document.forms take all form elements in one 
    // to dom by name 
    let returnval = true;
    clearerrors();

    // perform validation and if validation falis set the value of return val false 
    let name = document.forms['myForm']['fname'].value;
    console.log(name)
    // confirm("hii")

    if (name.length <= 4) {

        seterror("name" , "*length is too short");
        returnval = false;
        
    }
    
    let email = document.forms['myForm']['femail'].value;
    console.log(email)
    // confirm("hii")
    
    if (email.length <= 10) {
        
        seterror("email" , "*length is too short");
        returnval = false;
        
    }
    else if (email.length > 35) {
        
        seterror("email" , "*length is too long");
        returnval = false;
        
    }

    let mobile = document.forms['myForm']['fmobile'].value;
    console.log(mobile)
    // confirm("hii")

    if (mobile.length <10 ) {

        seterror("mobile" , "*mobile no must be 10 characters");
        returnval = false;
        
    }
    
    // let email = document.forms['myForm'][''].value;
    
    // if(email.length > 15){
        //     seterror("email","*email is too long.");
        //     returnval = false;
        // }
        
        let password = document.forms['myForm']['fpassword'].value;
    
        if (password.length <6) {
    
            seterror("password" , "*password must be 6 character");
            returnval = false;
            
        }
        
        

        if (validatePassword(password)) {
            // Here you can proceed with whatever action you want after a valid password is entered
            console.log("hii")
        }
        else{
            
            seterror("password" , "*please fulfil conditions");
            returnval = false;
        }


// confirm 

        let cpassword = document.forms['myForm']['fcpassword'].value;
    
        if (cpassword != password) {
    
            seterror("cpassword" , "*password must equal");
            returnval = false;
            
        }


        return returnval ;
}