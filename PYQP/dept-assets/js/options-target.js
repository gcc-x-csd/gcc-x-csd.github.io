
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
        fetch('physics.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);
    }
    if(value == 3 && text === 'Chemistry') {
        fetch('chemistry.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);

    }
    if(value == 4 && text === 'Mathematics') {
        fetch('maths.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);
    }
    if(value == 5 && text === 'Statistics') {
        fetch('statistics.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);
    }
   
}