let main = document.querySelector("main")

let posts = [{
    image: "https://www.eggoz.com/cdn/shop/articles/WhatsApp_Image_2024-09-07_at_5.05.44_PM.jpg?v=1725713796&width=1100",
    title: "You big stop eating all that fast food",
    post: "Fast Food"
},
{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLT3cQFDm_FRe_jhZF1cTj0Eg0LCQ0u6nDQ&s",
    title: "Being more heathy ",
    post:  "covered in or abounding with heath"
},
{
    image: "https://spoonuniversity.com/cdn-cgi/image/width=1200,fit=cover,format=auto/https://s3.amazonaws.com/secretsaucefiles/photos/images/000/115/554/large/Gabrielle-Taylor.jpg",
    title: "bad food you should not eat",
    post: "shut up dirty hoe"
}
];
posts.forEach(function(post){
     main.insertAdjacentHTML('beforeend',`
      <img src = ${post.image}>
     ${post.title}
     ${post.post}
     `);
});