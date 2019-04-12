export function showInput () {

    var user= document.getElementById('user');

    user.onsubmit = function(e){
       e.preventDefault();
       
       var result_name = document.getElementById('result_name');
       result_name.innerHTML = "Name: " + user.name.value;
       var result_age = document.getElementById('result_age');
       result_age.innerHTML = "Age: " + user.age.value;
       var result_gender = document.getElementById('result_gender');
       result_gender.innerHTML = "Gender: " + user.gender.value;
       
       
       user.reset();
    }
    }
    