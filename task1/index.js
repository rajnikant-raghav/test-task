
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const fName = document.getElementById("f-name").value;
  const lName = document.getElementById("l-name").value;

  console.log(fName, lName)
  document.getElementById("preview").innerHTML = fName+" "+lName;
});
