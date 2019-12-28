console.log("Welcome to notes app.This is app.js");
//If user adds a note, add it to local storage
let addBtn = document.getElementById("addBtn");
let addTxt = document.getElementById("addTxt");
addTxt.value = "Enter your data here";
showNotes();
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "Enter your data here";
  showNotes();
});

//function to show elements from local storage
function showNotes() {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="my-2 mx-2 noteCard" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}
            </p>
            <button onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete Note</button>
          </div>
        </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length === 0) {
    html = `Add some notes dude!!!`;
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = html;
  }
}
//function to delete note
function deleteNote(index) {
//   console.log("I am deleting ", parseInt(index) + 1);
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener('input',function(e) {
    let inputVal=search.value.toLowerCase();
    // console.log("Input event fired",inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        // let cardTxt=element.getElementsByClassName("card-text")[0];
        let cardTxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    });
});
//further additions
/* 
1. Add Title
2. Mark Imp
3. Seperate Notes by User
4. Sync and host to web server
*/
