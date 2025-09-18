function startquiz() {
  const nameInput = document.querySelector('.inputname').value;
  if (nameInput.trim() === "") {
    alert("Please enter your name!");
    return;
  }
  localStorage.setItem('spelernaam', nameInput);
  window.location.href = "../themascherm/themascherm.html";
} 
