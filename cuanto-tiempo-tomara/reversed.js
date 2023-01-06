const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let newString = ""
// let newString = []
// for(item of story){
//     newArray.unshift(item)
// }
// newArray.join("")
// let result = reverse(story);

for(let i = story.length-1; i >=0;i--){
    newString += story[i];
}
console.log(newString);