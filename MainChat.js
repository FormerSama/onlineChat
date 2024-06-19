for (let i = 0; i < 10; i++) {
    let article = document.createElement('label');
    article.setAttribute('class', 'article');
    article.innerHTML = "測試文章" + (i+1).toString() +"<br>";

    document.getElementById('articleArea').appendChild(article);
}