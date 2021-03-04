function createElement (data) {
  let paragraph = document.createElement('p');
  let textNode = document.createTextNode(data);
  paragraph.appendChild(textNode);
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  let rq = new XMLHttpRequest();
  rq.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  rq.onload = () => {
    callback(JSON.parse(rq.responseText).query.pages['21721040'].extract);
  };
  rq.send();
}

queryWikipedia(createElement);
