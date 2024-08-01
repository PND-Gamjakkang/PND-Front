// h1~h6 버튼 클릭 함수
// 선택 텍스트에 # 적용
const h1ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '#');
  };
  const h2ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '##');
  };
  const h3ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '###');
  };
  const h4ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '####');
  };
  const h5ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '#####');
  };
  const h6ButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '######');
  };
  
  const boldButtonClicked = (content, selection) => {
    return wrapMarkdown(content, selection, '**');
  };
  
  const italicButtonClicked = (content, selection) => {
    return wrapMarkdown(content, selection, '*');
  };
  
  const throughButtonClicked = (content, selection) => {
    return wrapMarkdown(content, selection, '~~');
  };
  
  const quoteButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '>');
  };
  
  const codeButtonClicked = (content, selection) => {
    return wrapMarkdown(content, selection, '`');
  };
  
  const listItemButtonClicked = (content, selection) => {
    return applyMarkdown(content, selection, '-');
  };
  
  const topLangsButtonClicked=(content, selection, lastcursor)=>{
    if (!content) {
      console.log('no content');
      return
    }
  
  
    ///////////////////////////////////////////////////////////////////////
    //테스트용 하드코딩
    const cardURL=('![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Jun-Young-Seo&layout=compact)')
    //나중에 백에서 API 완성하면 수정하기
    ///////////////////////////////////////////////////////////////////////
    console.log('cursor at markdown funs: '+lastcursor);
      // contentEditable 요소의 innerHTML을 직접 수정하여 cardURL을 삽입
  
      
      const range = selection.getRangeAt(0);
      range.deleteContents(); 
      
      const textNode = document.createTextNode(cardURL);
      range.insertNode(textNode);
      
      // 삽입 후 커서 위치 설정
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);
  
      return content.slice(0, lastcursor) + cardURL + content.slice(lastcursor);
  
  };
  
  // 마크다운 문법 적용 함수(h1~h6용)
  const applyMarkdown = (content, selection, markdownSyntax) => {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (!selectedText) return content;
  
    // 기존 문법 있는 경우 제거
    const strippedText = selectedText.replace(/^(#+)\s/, '');
    // h1~h6인 경우 공백 있음 ex)### test
    const markdownText = `${markdownSyntax} ${strippedText}`;
  
    const textNode = document.createTextNode(markdownText);
  
    // 선택된 텍스트 삭제 후 새로운 텍스트 삽입
    range.deleteContents();
    range.insertNode(textNode);
  
    // 범위를 새로 삽입된 텍스트 노드로 설정
    range.setStartBefore(textNode);
    range.setEndAfter(textNode);
  
    // 선택 범위 초기화 및 재설정
    selection.removeAllRanges();
    selection.addRange(range);
  
    return content.replace(selectedText, markdownText).replace(/<br\s*\/?>/gi, '\n');
  };
  
  // 마크다운 문법으로 감싸는 함수(Bold,Italic 등)
  const wrapMarkdown = (content, selection, wrapper) => {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
  
    if (!selectedText) return content;
  
    const wrappedText = `${wrapper}${selectedText}${wrapper}`;
  
    const textNode = document.createTextNode(wrappedText);
  
    // 선택된 텍스트 삭제 후 새로운 텍스트 삽입
    range.deleteContents();
    range.insertNode(textNode);
  
    // 범위를 새로 삽입된 텍스트 노드로 설정
    range.setStartBefore(textNode);
    range.setEndAfter(textNode);
  
    // 선택 범위 초기화 및 재설정
    selection.removeAllRanges();
    selection.addRange(range);
  
    return content.replace(selectedText, wrappedText).replace(/<br\s*\/?>/gi, '\n');
  };
  
  export {
    h1ButtonClicked,
    h2ButtonClicked,
    h3ButtonClicked,
    h4ButtonClicked,
    h5ButtonClicked,
    h6ButtonClicked,
    quoteButtonClicked,
    boldButtonClicked,
    italicButtonClicked,
    throughButtonClicked,
    codeButtonClicked,
    listItemButtonClicked,
    applyMarkdown,
    wrapMarkdown,
    topLangsButtonClicked
  };
  