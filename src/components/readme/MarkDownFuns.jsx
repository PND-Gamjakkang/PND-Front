const getNextHeadingLevel = (current) => {
    const levels = ['#', '##', '###', '####', '#####', '######'];
    const index = levels.indexOf(current);
    if (index === -1 || index === 0) {
      return current;
    }
    return levels[index - 1];
  };
  
  const getPreviousHeadingLevel = (current) => {
    const levels = ['#', '##', '###', '####', '#####', '######'];
    const index = levels.indexOf(current);
    if (index === -1 || index === levels.length - 1) {
      return current;
    }
    return levels[index + 1];
  };
  
  // 처음 +버튼 눌렀을 때 ###### 적용(h6)
  const TitlePlusButtonClicked = (content, selectedText, selectionStart, selectionEnd) => {
    if (!selectedText.includes('#')) {
      return applyMarkdown(content, selectedText, '######', selectionStart, selectionEnd);
    } else {
      const currentLevel = selectedText.match(/^(#+)\s/);
      if (currentLevel) {
        const newLevel = getNextHeadingLevel(currentLevel[1]);
        return applyMarkdown(content, selectedText, newLevel, selectionStart, selectionEnd);
      }
    }
    return content;
  };
  
  
  // -버튼 눌렀을 때 제목 레벨 한 단계 낮춤
  const TitleMinusButtonClicked = (content, selectedText, selectionStart, selectionEnd) => {
    if (selectedText.includes('#')) {
      const currentLevel = selectedText.match(/^(#+)\s/);
      if (currentLevel) {
        const newLevel = getPreviousHeadingLevel(currentLevel[1]);
        return applyMarkdown(content, selectedText, newLevel, selectionStart, selectionEnd);
      }
    }
    return content;
  };
  
    // 마크다운 문법 적용 함수
    const applyMarkdown = (content, selectedText, markdownSyntax, selectionStart, selectionEnd) => {
      if (!selectedText) return content;
  
      const strippedText = selectedText.replace(/^(#+)\s/, '');
      const markdownText = `${markdownSyntax} ${strippedText}`;
  
      return content.slice(0, selectionStart) + markdownText + content.slice(selectionEnd);
    };
  
  export { getNextHeadingLevel, getPreviousHeadingLevel, applyMarkdown, TitlePlusButtonClicked, TitleMinusButtonClicked };
  