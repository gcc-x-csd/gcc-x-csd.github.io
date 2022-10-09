

var e = document.getElementById("departments");
var value = e.value;
var text = e.options[e.selectedIndex].text;

console.log(text)


function visitDept(text) {
    if(value == 1 && text === 'Computer Science') {
        fetch('comp-sc.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);
        
        console.log('Department of Computer Science Selected')
    }
    if(value == 2 && text === 'Physics') {
        fetch('comp-sc.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);

        console.log("Department of Physics Selected");
    }
    if(value == 3 && text === 'Chemistry') {
        fetch('comp-sc.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);

        console.log("Department of Chemistry Selected");
    }
    if(value == 4 && text === 'Mathematics') {
        fetch('comp-sc.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);

        console.log("Department of Mathematics Selected");
    }
    if(value == 5 && text === 'Statistics') {
        fetch('comp-sc.html')
        .then(response=> response.text())
        .then(texts=> document.querySelector('html').innerHTML = texts);
        
        console.log("Department of Statistics Selected");
    }
   
}