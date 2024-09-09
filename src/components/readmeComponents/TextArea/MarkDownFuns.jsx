import axios from "axios";
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
  
  const badgeButtonClicked=(content, selection, badgeURL)=>{
    const range = selection.getRangeAt(0);
    
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;
    console.log('start offset : ',startOffset,' end offset : ',endOffset);
    // content 문자열의 선택된 위치에 URL 삽입
    const beforeContent = content.slice(0, startOffset);
    const afterContent = content.slice(endOffset);
    const newContent = beforeContent + badgeURL + afterContent;

    return newContent;
  }
  const fileUploadButtonClicked = (content, selection, imgURL)=>{
    const range = selection.getRangeAt(0);
    
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;
    console.log('start offset : ',startOffset,' end offset : ',endOffset);
    // content 문자열의 선택된 위치에 URL 삽입
    const beforeContent = content.slice(0, startOffset);
    const afterContent = content.slice(endOffset);
    const newContent = beforeContent + imgURL + afterContent;

    return newContent;
  }
  const topLangsButtonClicked = (content, selection, userName) => {
    if (!content) {
      console.log('no content');
      return;
    }
  
    if (!selection) {
      console.log('no selection');
      return;
    }
    const cardURL = `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact)`;
    
    const range = selection.getRangeAt(0);
    
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;
    
    const beforeContent = content.slice(0, startOffset);
    const afterContent = content.slice(endOffset);
    const newContent = beforeContent + cardURL + afterContent;
    
    console.log("Generated newContent:", newContent);
    
    return newContent;
  };
  
const applyMarkdown = (content, selection, markdownSyntax) => {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    console.log("선택된 텍스트 : ", selectedText);
  
    if (!selectedText) return content;
  
    // 기존 문법 있는 경우 제거
    const strippedText = selectedText.replace(/^(#+)\s/, '');
    const markdownText = `${markdownSyntax} ${strippedText}`;
  
    // 정확한 인덱스 계산
    const startContainer = range.startContainer;
    const startOffset = range.startOffset;
  
    // Container가 텍스트 노드가 아닐 경우 처리 (필요 시)
    let startText = '';
    if (startContainer.nodeType === Node.TEXT_NODE) {
      startText = startContainer.textContent;
    } else if (startContainer.nodeType === Node.ELEMENT_NODE) {
      startText = startContainer.innerText || startContainer.textContent;
    }
  
    // content 내에서 텍스트 노드의 위치 계산
    const beforeSelectionText = startText.slice(0, startOffset);
    const afterSelectionText = startText.slice(startOffset + selectedText.length);
  
    // content 내에서 정확한 인덱스 계산
    const exactStartIndex = content.indexOf(beforeSelectionText) + beforeSelectionText.length;
    const exactEndIndex = exactStartIndex + selectedText.length;
  
    // 텍스트 교체
    const updatedContent =
      content.substring(0, exactStartIndex) +
      markdownText +
      content.substring(exactEndIndex);
  
    // 선택된 텍스트 영역을 새로 설정
    range.deleteContents();
    const textNode = document.createTextNode(markdownText);
    range.insertNode(textNode);
  
    selection.removeAllRanges();
    range.selectNodeContents(textNode);
    selection.addRange(range);
  
    return updatedContent;
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
    topLangsButtonClicked,
    badgeButtonClicked,
    fileUploadButtonClicked
  };
  