/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
*/
function getUSA() {
   
    const result = document.getElementsByTagName('span');
    let element = '';
    for (const key in result) {
        if (result[key].innerText === 'USA') {
            element = result[key];
       
        }
    }
    console.log(element);
}
getUSA();
/* 
2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
*/

function getPeopleInSales() {
    //get all tr
    const result = document.getElementsByTagName('tr')
    let employees = [];

    //for every tr
    for (const key of result) {
        //get all tds
        let children = key.children;
         //if second td is sales
        if(children[1].innerText === 'Sales') {
            //add inner
            employees.push(children[0].innerText)
        }
        
    }

 console.log(employees);
}
getPeopleInSales();

/*
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
*/
  
function getAnchorChildren() {
   
    const result = document.getElementsByTagName('a')
    let spans = [];

   
    for (const key of result) {
        
        let child = key.getElementsByTagName('span');
        
         
        if(child[0]) {
            
            spans.push(child[0].innerText)
            
        }
        
    }

 console.log(spans);
}
getAnchorChildren();

/*
4. Hobbies
Define function getHobbies()
Find all checked options in the 'hobbies' select element.
Print the value and the contents.
*/

//if you dont know the number of selects you should use a for loop
function getHobbies() {
    const result = document.getElementsByTagName('select');
    let hobbies = [];

    for (const key of result) {
        
        if(key.name === 'hobbies'){
            let hobby = key
            for (const key of hobby) {
                if(key.getAttribute('selected')){
                    hobbies.push(`Value of ${key.value}: ${key.innerText}`)
                }
        
            }
        }
    }
    console.log(hobbies);
}

getHobbies();
/*  
5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
*/

function getCustomAttribute(){

    const result = document.querySelectorAll('[data-customAttr]');
    
    
    for (const key of result) {
        //looks better this way then adding it to an array
        console.log(`Value of ${key.getAttribute('data-customAttr')}:`)
        console.log(key);
    }

    
};
getCustomAttribute();
/*
6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>
Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
*/
    
    function sumEvent() {
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let sum = document.getElementById('sum');
        if(isNaN(num1) || isNaN(num2) || num1 === '' || num2 === ''){
            sum.innerText = 'Cannot add'
        }else {

            sum.innerText = `${Number(num1)+Number(num2)}`
        }


    }
document.addEventListener("change", sumEvent)
/*
7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.
*/
function skillsEvent() {
    const skills = document.getElementsByName('skills')[0];

    skills.addEventListener('change', () => {
        alert(`Are you sure ${skills.value} is one of your skills?`);
    });
}
skillsEvent();
/*
8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
*/

/*
9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
    Show the name if hidden.
*/
function employeeHover() {
    const employees = document.getElementsByClassName('empName');

    for (const key of employees){
        key.addEventListener('mouseover', () => {
            if (key.style.color === 'black') {
                key.style.color = 'transparent';
            } else {
                key.style.color = 'black';
            }
        })
    }
}
employeeHover();

/*
10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.
*/
function clock() {
    const element = document.getElementById('currentTime');
    //gmt time
    element.innerText = new Date().toISOString().substring(11, 19);

    setTimeout(clock, 1000)
}
clock();
/*
11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.
*/
function colorChange(element) {
    element.style.color ='#'+Math.random().toString(16).slice(-6);
 }
 
 function changeText() {
     const helloWorld = document.getElementById('helloWorld');
 
     helloWorld.addEventListener('click', () => {
         setTimeout(colorChange, 3000, helloWorld);
     });
 }
 changeText();

/*
12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).


*/
//should be depth first
function walkTheDOM(node, func) {
    if(node.hasChildNodes){
        for (const key of node.childNodes) {
            walkTheDOM(key, func)
        }
    }
    func(node);
    return;
}
walkTheDOM(document, (node) =>{
    console.log(`node is: ${node}`)
})