console.log("ya I'm an etch-a-sketch");

const gridContainer = document.querySelector(".grid-container");

const numSquares = 0;

const setButton = document.querySelector("#set-grid");
const resetButton = document.querySelector("#reset-grid");



/* -put grid creation in a function
- set variable for making a X by X grid
- event listeners for button
- prompt user for input
- hover event listener to change color of grids
- reset grid button to redraw grid and clear all the
squares /set them to original colors

*/


for (let j = 0; j <= 6; j++) {
    //create a row in this loop and then 
    //append the divs created in the next loop
    //to the row 

    //still try to do the above even though this
    //somehow works

    //did the above, makes more sense now
    //look into spaces between rows of divs

    const row = document.createElement('div');
    gridContainer.appendChild(row);
    row.classList.add('row');
    row.style.display = 'block';
    /*
    row.style.margin = '0px';
    row.style.padding = '0px';
    */
    


    for (let i = 0; i <= 6; i++) {

        const div = document.createElement('div');
        div.classList.add('square');
        div.style.display = 'inline-block';

        

        row.appendChild(div);

        

        /*
        if (i === 6) {
            div.style.display = "block";
        }*/

    }

}



