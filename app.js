var firebaseConfig = {
    apiKey: "AIzaSyCgaO2AKTQ1z6Jiiqc0NyoofQ4zOnRA9Lo",
    authDomain: "client-website-aa0e1.firebaseapp.com",
    databaseURL: "https://client-website-aa0e1-default-rtdb.firebaseio.com",
    projectId: "client-website-aa0e1",
    storageBucket: "client-website-aa0e1.firebasestorage.app",
    messagingSenderId: "156452961222",
    appId: "1:156452961222:web:efaaa32e7c01624e0350c7"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);





firebase.database().ref('comments').on("child_added", function(data){
    // console.log(data.val());
    var h5Element = document.createElement('h5');
    var pElement = document.createElement('p');
    var divReview = document.createElement('div');
    var sectionReview = document.getElementById('reviewSec');
    

    var h5Text = document.createTextNode(data.val().name);
    var textFeedback = document.createTextNode(data.val().feedback);

    h5Element.appendChild(h5Text);
    h5Element.setAttribute("class", "h5review");
    pElement.appendChild(textFeedback);
    pElement.setAttribute("class", "paraReview");


    

    var anchor = document.createElement('a');
    anchor.setAttribute("onclick", "like(this)");
    anchor.setAttribute("href", "#reviewSec");

    var icon = document.createElement("i");
    icon.className = "fa-solid fa-heart";

    var spanElement = document.createElement('span');
    spanElement.setAttribute('class', 'numbering');
    spanElement.innerText = "0";

    // icon.appendChild(spanElement);
    // anchor.appendChild(icon);
    // pElement.appendChild(anchor);

    divReview.appendChild(h5Element);
    divReview.appendChild(pElement);
    divReview.setAttribute('class', 'div_review');
    divReview.style.animation = "comment 4s";

    sectionReview.appendChild(divReview);


})



function review() {
    var inputName = document.getElementById('inputReview');
    var inputFeedback = document.getElementById('feedback');
    var id = firebase.database().ref('comments').push().key;
    if (inputName.value === ""){
        inputName.value = "Anonymous:"
    }
    else{
        inputName.value = `${inputName.value.toUpperCase()}:`
    }
    if (inputFeedback.value === "") {
        alert("Please write feedback...");
        return;
    }

    var obj = {
        name:inputName.value,
        feedback:inputFeedback.value,
        likes:0,
        id:id,
    }

    firebase.database().ref(`comments/${id}`).set(obj);

    inputName.value = "";
    inputFeedback.value = "";
}

// function like(a) {
//     var icon = a.firstElementChild;
//     var span = a.querySelector(".numbering");
//     var currentCount = parseInt(span.innerText);

//     if (icon.style.color === "red") {
//         icon.style.color = "black";
//         span.innerText = currentCount - 1;
//     } else {
//         icon.style.color = "red";
//         span.innerText = currentCount + 1;
//     }
// }

function menuBtn(){
    var menuButton = document.getElementById('menuBtn');
    menuButton.childNodes[0].className = "fa-solid fa-xmark";
    menuButton.setAttribute('onclick', 'crossBtn()')
    console.log(menuButton.childNodes[0]);
    console.log(menuButton);

    var menuSection = document.getElementById('menuSection');
    menuSection.style.display = "block";
}

function crossBtn(){
    var crossButton = document.getElementById('menuBtn');
    crossButton.childNodes[0].className = "fa-solid fa-bars";
    crossButton.setAttribute('onclick', 'menuBtn()')
    console.log(crossButton.childNodes[0]);
    console.log(crossButton);

    var menuSection = document.getElementById('menuSection');
    menuSection.style.display = "none";
}

function whatsapp() {
    window.location.href = "https://wa.me/+923125983334";
}


// Home page section 2



  var satisfiedClients = document.getElementById("oneData");
  var dealDone = document.getElementById("twoData");
  var successRate = document.getElementById("threeData");
  
  var satisfied = 7521;
  var deal = 15579;
  var span1 = document.getElementById('satisfied_span');
  var span2 = document.getElementById('deal_span');

  

  var dealInterval = setInterval(function timer() {
    deal++;
    dealDone.innerText = deal;
    console.log(satisfiedClients.innerText);
    span2.style.animation = "moving 10s infinite"
    
  }, 10000);

  var satisfiedInterval = setInterval(function timer() {
    satisfied++;
    satisfiedClients.innerText = satisfied;
    span1.style.animation = "moving 20s infinite"
  }, 20000);

  

  