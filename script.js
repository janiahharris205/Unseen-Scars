/* .js files add interaction to your website */

var factlist =[
  "Upsetting dreams or nightmares about the traumatic event",
  
  "Reliving the traumatic event as if it were happening again (flashbacks)",
  
  "Severe emotional distress or physical reactions to something that reminds you of the traumatic event",
  
  "Recurrent, unwanted distressing memories of the traumatic event",

  "Trying to avoid thinking or talking about the traumatic event",

  "Avoiding places, activities, or people that remind you of the traumatic event",

  "Negative thoughts about yourself, other people, or the world",
  
  "Hopelessness about the future",
  
  "Memory problems, including not remembering important aspects of the traumatic event ",
  
  "Feeling emotionally numb",

  "Being easily startled or frightened",

  "Always being on guard for danger",

  "Self-destructive behavior, such as drinking too much or driving too fast",

  "Irritability, angry outbursts, or aggressive behavior",

  "Overwhelming guilt or shame",
  
  "Trouble sleeping",
  
  "Trouble concentrating"];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", display);
}

function display(){
  fact.innerHTML = factlist[count];
  count++;
  if (count == factlist.length){
    count = 0;
  }
}

console.log(factlist.length);