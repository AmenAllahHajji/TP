async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    for (let i = 0; i < 5; i++) {
      console.log(`${i + 1}. ${data[i].title}`);
    }
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
  }
  
}

getPosts();
