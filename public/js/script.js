window.onload=()=>{
console.log("loaded");

const headings = document.querySelectorAll('.newsHead');
const paragraphs = document.querySelectorAll('.newsContent');
console.log(paragraphs[2]);

for(var i = 0; i<headings.length; i++){
    headings[i].addEventListener('click', () => {
        console.log(paragraphs[i]);
        if (paragraphs[i].style.display === 'none') {
          paragraphs[i].style.display = 'block';
        } else {
          paragraphs[i].style.display = 'none';
        }
      }); 
}

// headings.forEach((heading, index) => {
//   heading.addEventListener('click', () => {
//     if (paragraphs[index].style.display === 'none') {
//       paragraphs[index].style.display = 'block';
//     } else {
//       paragraphs[index].style.display = 'none';
//     }
//   });
// });


}