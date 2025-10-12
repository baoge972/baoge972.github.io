var posts=["2025/10/13/模板3/","2025/10/13/模板1/","2025/05/23/模板2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };