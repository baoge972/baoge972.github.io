var posts=["2026/01/13/风华正茂/","2026/01/13/资料整理2/","2026/01/13/资料整理1/","2025/05/23/怀念青春/","2025/05/23/活着就是王道/","2025/03/13/一场游戏一场梦/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };