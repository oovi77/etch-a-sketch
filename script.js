console.log("ya I'm an etch-a-sketch");

const gridContainer = document.querySelector(".grid-container");

console.log(gridContainer);

for (let j = 0; j <= 6; j++) {
    //create a row in this loop and then 
    //append the divs created in the next loop
    //to the row 

    //still try to do the above even though this
    //somehow works
    
    const row = document.createElement('div');
    gridContainer.appendChild(row);
    row.style.padding = "0px";
    row.style.margin = "0px";
    row.style.width  = "0px";
    row.style.height  = "0px";
    



    for (let i = 0; i <= 6; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.display = 'inline-block';
        gridContainer.appendChild(div);

        gridContainer.style.margin = '0px';
        gridContainer.style.padding = '0px';

        /*
        if (i === 6) {
            div.style.display = "block";
        }*/

    }

}



