var posts=["2026/01/10/模板4/","2026/01/10/模板3/","2026/01/10/模板1/","2025/05/23/模板2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };