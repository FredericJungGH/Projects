document.getElementById("homeBtn").addEventListener("click", openPage('homeBtn'));
document.getElementById("newsBtn").addEventListener("click", openPage('newsBtn'));
document.getElementById("contactBtn").addEventListener("click", openPage('contactBtn'));
document.getElementById("aboutBtn").addEventListener("click", openPage('aboutBtn'));

function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

    function doThis() {
      var testElem = document.getElementById("2").value;
      document.getElementById('3').value = testElem;
    }