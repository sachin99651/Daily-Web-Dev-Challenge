const lunches=[];

const addLunchToEnd=(items,item)=>{
  items.push(item);
  console.log(`${item} added to the end of the lunch menu.`)
  return items;
}

const addLunchToStart=(items,item)=>{
  items.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return items;
} 

const removeLastLunch= (items)=>{
  if(items.length===0){
    return console.log("No lunches to remove.")
  }else{
   const removedItem=items.pop();
   console.log(`${removedItem} removed from the end of the lunch menu.`);
   return items;
  }
}

const removeFirstLunch= (items)=>{
  if(items.length===0){
    return console.log("No lunches to remove.")
  }else{
   const removedItem=items.shift();
   console.log(`${removedItem} removed from the start of the lunch menu.`);
   return items;
  }
}
const getRandomLunch=(items)=>{
  const randomIndex=Math.floor(Math.random()*items.length);
  if(items.length===0){
    console.log("No lunches available.");
  }
  else{
    console.log(`Randomly selected lunch: ${items[randomIndex]}`)
  }
}
const showLunchMenu = (items) => {
  if (items.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${items.join(", ")}`);
  }
};