
function visitDept() {
    var e = document.getElementById("departments");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
  
    // console.log(text);


    if(value == 1 && text === 'Computer Science') {
        // fetch('comp-sc.html')
        // .then(response=> response.text())
        // .then(texts=> document.querySelector('html').innerHTML = texts);
        window.location.assign("comp-sc.html")
    }
    if(value == 2 && text === 'Physics') {
        window.location.assign("physics.html")
    }
    if(value == 3 && text === 'Chemistry') {
        window.location.assign("chemistry.html")

    }
    if(value == 4 && text === 'Mathematics') {
        window.location.assign("maths.html")
    }
    if(value == 5 && text === 'Statistics') {
        window.location.assign("statistics.html")
    }
   
}