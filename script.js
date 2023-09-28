// document.getElementsByTagName('nav')[0].children.onclick=()=>{
//     preventDefault();

// }//children is a collection of elements, so you can't directly attach an onclick event to the entire collection. You need to loop through the child elements and attach the event to each one individually.

const nav = document.getElementsByTagName('nav')[0];
const childElements = nav.children;

for (const childElement of childElements) {
  childElement.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the clicked element
  });
}
