let lunches=[];


function addLunchToEnd(items,choice){
    items.push(choice);
    console.log(`${choice} added to the end of the lunch menu.`);
    return items;
}


function addLunchToStart(items,choice){
    items.unshift(choice);
    console.log(`${choice} added to the start of the lunch menu.`);
    return items;
}

function removeLastLunch(items){
    if (items.length === 0){
        console.log("No lunches to remove.")
    }
    else{
        const itemRemoved=items.pop();
        console.log(`${itemRemoved} removed from the end of the lunch menu.`) 
        }
    return items;     
    
}

function removeFirstLunch(items){
    if (items.length === 0){
        console.log("No lunches to remove.")
    }
    else{
        const itemRemoved=items.shift();
        console.log(`${itemRemoved} removed from the start of the lunch menu.`)
        }
    return items;
}

function getRandomLunch(items){
    if (items.length === 0){
        console.log("No lunches available.")
    }
    else{
        let min=0;
        let max=items.length-1;
        const randNum=Math.floor(Math.random()*items.length);
        console.log(`Randomly selected lunch: ${items[randNum]}`);
    }
    
}

function showLunchMenu(items){
    if (items.length === 0){
        console.log("The menu is empty.");
    }
    else{
        console.log("Menu items: " +items.join(", "));
    }
}