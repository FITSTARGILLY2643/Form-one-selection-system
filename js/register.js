var student = [{
        index: "1194",
        password: "1234"
    },
    {
        index: "2643",
        password: "0000"
    },
    {
        index: "1950",
        password: "1111"
    }


]



function getInfo() {
    var index = document.getElementById("index-L").value;
    var password = document.getElementById("password-L").value
    for (i = 0; i < student.length; i++) {
        if (index == student[i].index && password == student[i].password) {
            alert("You are logged in");

            //     // return true;
            // } else {
            //     alert("Incorrect credentials")
            //         // return false;
            // }
        }

    }

}

// function Student(index, password) {
//     this.studentIndex = index;
//     this.studentPassword = password;

// }

// $(document).ready(function() {

//             $("form#myform").submit(function(event) {
//                     event.preventDefault();

//                     // Get register details
//                     var inputtedIndex = $("input#index").val();
//                     var inputtedPassword = $("input#password1").val();
//                     var newStudent = new Student(inputtedIndex, inputtedPassword);

//                     // Get login details
//                     var index = document.getElementById("index-L").value;
//                     var password = document.getElementById("password-L").value

//                     if (index == newStudent.index && password == newStudent.password) {
//                         alert("You are logged in");


//                     }

//                 }


//             });