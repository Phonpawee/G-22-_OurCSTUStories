document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('guestbook-form');
    const entriesList = document.getElementById('comments-list');
    
    function validateForm(event) {
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
    
      if (name === "" || message === "") {
        event.preventDefault(); 
        alert("Please fill in all required fields.");
        return false;
      }
      return true;
    }
    
    function addEntry(event) {
      event.preventDefault(); 
  
      if (!validateForm(event)) return;
    
      const name = document.getElementById('name').value;
      const Faculty = document.getElementById('Faculty').value;
      const message = document.getElementById('message').value;
      const Date = document.getElementById('Date').value;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        Name : ${name} <br>
        Faculty : ${Faculty} <br>
        Message : ${message} <br>
        Date : ${Date} <br>
      `;
      entriesList.appendChild(listItem);
    
      form.reset();
    }
    
    form.addEventListener('submit', addEntry);
  });
  