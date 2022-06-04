console.log("ya I'm an etch-a-sketch");

const gridContainer = document.querySelector(".grid-container");

//const numSquares = 5;

const setButton = document.querySelector("#set-grid");
const resetButton = document.querySelector("#reset-grid");




/* Problem, when grid gets created it doesn't
make the proper amount of squares when using the
set grid button
- need to reset the grid after set grid is pressed


*/

/* -put grid creation in a function
- set variable for making a X by X grid
- event listeners for button
- prompt user for input
- hover event listener to change color of grids
- reset grid button to redraw grid and clear all the
squares /set them to original colors


make the CSS look better
look into the add 10% black to the square

set the grid size to have a max limit say 960px

look into event bubbling for why one square
starts of black in the grid

change grid-container size and border after
the grid gets created??

*/


setButton.addEventListener('click', createGrid);
resetButton.addEventListener('click', resetGrid);

function resetGrid () {

    const allRows = document.querySelectorAll('.row');
    console.log(allRows);

    allRows.forEach(div => {
        gridContainer.removeChild(div);
        
    });

}

function createGrid () {

    resetGrid();

    let numSquares = prompt("Please enter the number of squares per side for the grid", 4);

    const gridSize = 800; //grid by default is 800px by 800px;

    const squareSize = (gridSize / numSquares)-1;
    console.log(`square size is: ${squareSize}`);
    

    gridContainer.style.width = gridSize + 'px';

    gridContainer.style.height = gridSize + 'px';
    gridContainer.style.border = "1px solid red";




    for (let j = 0; j < numSquares; j++) {
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
        


        for (let i = 0; i < numSquares; i++) {

            const div = document.createElement('div');
            div.classList.add('square');
            div.style.display = 'inline-block';
            div.style.width = squareSize + 'px';
            div.style.height = squareSize + 'px';

            div.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "black";
                console.log("in Event");
            })

            

            row.appendChild(div);

            

            /*
            if (i === 6) {
                div.style.display = "block";
            }*/


            
        }

        

    }

   




    
}


