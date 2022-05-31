    // 요소노드 생성하기
    const aEl = document.createElement("a");
    document.body.append(aEl);

    // 텍스트노드 추가하기
    const txtEl = document.createTextNode("구글");
    document.querySelector("a").append(txtEl);

    // href 속성 추가하기
    const hrefAttr = document.createAttribute("href");
    hrefAttr.value = 'https://google.com';
    document.querySelector("a").setAttributeNode(hrefAttr);