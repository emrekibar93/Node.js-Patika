const posts = [
    { desc: "blog post 1", author: "Yazar 1" },
    { desc: "blog post 2", author: "Yazar 2" },
    { desc: "blog post 3", author: "Yazar 3" },
  ]; 


  const listpost = () => {
    posts.map((post) => {
      console.log(post.desc);
    });
  };
  
  const addpost = (newpost) => {
    const promise1 = new Promise((resolve, reject) => {
        resolve('Post Eklendi')
        posts.push(newpost);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
 async function blog () {
    const addedData = await addpost({ desc: "yeni post", author: "emre kibar" })
    console.log("YENI LISTE");
    console.log(addedData);
    const listData = await listpost();

 }
  
    
  blog();