//var radios = document.getElementsByName("submit-for");
var project =  document.getElementById("project");
var stage =  document.getElementById("stage");
var radios = document.querySelectorAll(".radios");


for (var i = 0; i < radios.length; i++) {
   radios[i].onclick = function() {
     var val = this.value;
     if(val == 'project' ){
        //project.style.display = 'block';   // show
        //stage.style.display = 'none';   // hide
         //project.classList.toggle("show");
         project.classList.remove("hide");
         stage.classList.add("hide");
     }
     else if(val == 'stage'){
         //project.style.display = 'none';
         //stage.style.display = 'block';
        // stage.classList.toggle("show");
         stage.classList.remove("hide");
         project.classList.add("hide");
     }

  }
}


