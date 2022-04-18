const posts=[{
    "userId":1,
    "id":1,
    "title":"titulo1",
    "body":"body1"
},
{
    "userId":2,
    "id":2,
    "title":"titulo2",
    "body":"body2"
},
{
    "userId":3,
    "id":3,
    "title":"titulo3",
    "body":"body3"
},
];

const findPostByid=(id,callback)=> {
    const post=posts.find((item) => item.id === id);
    if(post){
        //mandamos el null ya que no existen errores
        callback(null,post)
    }else{
        //en caso de que no exita el post
        callback("No encontrado por id: " + id);
    }
};
// se recibe el err como primer arguento
findPostByid(3,(err,post)=>{
    if(err){
        return console.log(err);
    }else{
        console.log(post);
    }
})