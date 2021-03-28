var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
click = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    function openModal() {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal").style.display = "block"
        document.getElementById("exampleModal").className += "show"
    }
    function closeModal() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal").style.display = "none"
        document.getElementById("exampleModal").className += document.getElementById("exampleModal").className.replace("show", "")
    }
    // Get the modal
    var modal = document.getElementById('exampleModal');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal()
      }
    }
    function openModal2() {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal2").style.display = "block"
        document.getElementById("exampleModal2").className += "show"
    }
    function closeModal2() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal2").style.display = "none"
        document.getElementById("exampleModal2").className += document.getElementById("exampleModal").className.replace("show", "")
    }
	    function openModal3() {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal3").style.display = "block"
        document.getElementById("exampleModal3").className += "show"
    }
	    function closeModal3() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal3").style.display = "none"
        document.getElementById("exampleModal3").className += document.getElementById("exampleModal").className.replace("show", "")
    }
	    function openModal4() {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal4").style.display = "block"
        document.getElementById("exampleModal4").className += "show"
    }
	    function closeModal4() {
        document.getElementById("backdrop").style.display = "none"
        document.getElementById("exampleModal4").style.display = "none"
        document.getElementById("exampleModal4").className += document.getElementById("exampleModal").className.replace("show", "")
    }
    // Get the modal
    var modal = document.getElementById('exampleModal2');
	    window.onclick = function(event) {
      if (event.target == modal) {
        closeModal2()
      }
    }
setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 15000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 30000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 45000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 60000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 75000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 90000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 115000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 130000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 145000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 160000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 175000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 190000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 205000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 220000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 235000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 250000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 265000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 280000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 295000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 310000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 325000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 340000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 355000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 370000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 385000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 400000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 415000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 430000);


setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 445000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 460000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 475000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 490000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 505000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 520000);

setTimeout(function() {
  console.log('modal 1 displayed');
  openModal();
}, 535000);

setTimeout(function() {
  console.log('modal 2 displayed');
  openModal2();
}, 550000);

setTimeout(function() {
  console.log('modal 3 displayed');
  openModal3();
}, 565000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 580000);

setTimeout(function() {
  console.log('modal 4 displayed');
  openModal4();
}, 595000);
