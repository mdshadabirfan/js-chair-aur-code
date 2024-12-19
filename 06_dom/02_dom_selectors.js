/* 
ID - document.getElementById("mainHeading") => Get the element that has id = mainHeading

class - document.getElementById("mainHeading").className => Get the class of the element that has ID as mainHeading

getAttribute - 
    a. document.getElementById("mainHeading").getAttribute("id") => Will give you the id of the element
    b. document.getElementById("mainHeading").getAttribute("class")
    
setAttribute - 
    a. document.getElementById("mainHeading").setAttribute("class", "test") => Set the passed class to the element
    b. document.getElementById("mainHeading").setAttribute("id", "mainHeading2") => Set the passed ID to the element
    
storing document methods in a variable - 
1. const title = document.getElementById("mainHeading")

applying style on elements - 
1. title.style.backgroundColor = "blue" => It will change the background color of the title to blue
2. title.style.padding = "20px" => It will set the padding of title to 20px
3. title.style.borderRadius = "50px" => It will apply the border radius of the element to 50px
4. title.style.fontSize = "70px" => It will set the font size of the title to 70px

get the content of the title
1. title.textContent => This will print every content inside the title even though something is hidden on the browser => text under display none
2. title.innerHTML => This will print the whole title element with nested elements with their attributes
3. title.innerText => This will print the content that is visible on the window only

get the first element of specified h, class, id
1. document.querySelector("h2") => This will select the first h2 only
2. document.querySelector("#mainHeading") => This will select the element whose id is mainHeading
3. document.querySelector(".heading") => This will select the element whose class is heading
4. document.querySelector("ul") => This will select the first ul
5. const myUl = document.querySelector("ul") => This will store the first ul in myUl variable
6. myUl.querySelector("li") => This will select the firs li of myUl
7. const greenListItem = myUl.querySelector("li") => This will store the first li of the myUl in greenListItem
8. greenListItem.style.backgroundColor = "green" => This will turn the color of the first li of myUl to green*/ 