// h1~h6 버튼 클릭 함수
// 선택된 텍스트에 # 적용
const h1ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '#');
};
const h2ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '##');
};
const h3ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '###');
};
const h4ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '####');
};
const h5ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '#####');
};
const h6ButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '######');
};

const boldButtonClicked = (content, selectionStart, selectionEnd) => {
  return wrapMarkdown(content, selectionStart, selectionEnd, '**');
};

const italicButtonClicked = (content, selectionStart, selectionEnd) => {
  return wrapMarkdown(content, selectionStart, selectionEnd, '*');
};

const throughButtonClicked = (content, selectionStart, selectionEnd) => {
  return wrapMarkdown(content, selectionStart, selectionEnd, '~~');
};

const quoteButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '> ');
};

const codeButtonClicked = (content, selectionStart, selectionEnd) => {
  return wrapMarkdown(content, selectionStart, selectionEnd, '`');
};

const listItemButtonClicked = (content, selectionStart, selectionEnd) => {
  return applyMarkdown(content, selectionStart, selectionEnd, '- ');
};

const centerButtonClicked = (content, selectionStart, selectionEnd)=>{
  const selectedText = content.slice(selectionStart, selectionEnd);

  const centeredText = `<center>\n${selectedText}\n</center>`;

  const beforeContent = content.slice(0, selectionStart);
  const afterContent = content.slice(selectionEnd);

  const newContent = beforeContent + centeredText + afterContent;

  return newContent;

};
const badgeButtonClicked = (content, selectionStart, selectionEnd, badgeURL) => {
  const beforeContent = content.slice(0, selectionStart);
  const afterContent = content.slice(selectionEnd);
  const newContent = beforeContent + badgeURL + afterContent;
  return newContent;
};

const fileUploadButtonClicked = (content, selectionStart, selectionEnd, imgURL) => {
  const beforeContent = content.slice(0, selectionStart);
  const afterContent = content.slice(selectionEnd);
  const markdownImage = `![이미지 설명](${imgURL})`;
  const newContent = beforeContent + markdownImage + afterContent;
  return newContent;
};

const topLangsButtonClicked = (content, selectionStart, selectionEnd, userName) => {
  const cardURL = `![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact)`;
  const beforeContent = content.slice(0, selectionStart);
  const afterContent = content.slice(selectionEnd);
  const newContent = beforeContent + cardURL + afterContent;
  return newContent;
};

// 마크다운 문법 적용 함수 (헤딩, 인용구, 리스트 등)
const applyMarkdown = (content, selectionStart, selectionEnd, markdownSyntax) => {
  const selectedText = content.slice(selectionStart, selectionEnd);
  if (!selectedText) return content;

  const lines = selectedText.split('\n');
  const modifiedLines = lines.map(line => {
    const trimmedLine = line.trim();
    // 이미 해당 마크다운 문법이 적용되어 있으면 제거
    if (trimmedLine.startsWith(markdownSyntax)) {
      return line.replace(markdownSyntax, '').trim();
    } else {
      return markdownSyntax + ' ' + line;
    }
  });
  const modifiedText = modifiedLines.join('\n');

  const beforeContent = content.slice(0, selectionStart);
  const afterContent = content.slice(selectionEnd);
  const newContent = beforeContent + modifiedText + afterContent;
  return newContent;
};

// 선택된 텍스트를 마크다운 문법으로 감싸는 함수 (볼드, 이탤릭 등)
const wrapMarkdown = (content, selectionStart, selectionEnd, wrapper) => {
  const selectedText = content.slice(selectionStart, selectionEnd);
  if (!selectedText) return content;

  // 이미 해당 마크다운 문법으로 감싸져 있으면 제거
  if (selectedText.startsWith(wrapper) && selectedText.endsWith(wrapper)) {
    const unwrappedText = selectedText.slice(wrapper.length, -wrapper.length);
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd);
    const newContent = beforeContent + unwrappedText + afterContent;
    return newContent;
  } else {
    const wrappedText = wrapper + selectedText + wrapper;
    const beforeContent = content.slice(0, selectionStart);
    const afterContent = content.slice(selectionEnd);
    const newContent = beforeContent + wrappedText + afterContent;
    return newContent;
  }
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
  fileUploadButtonClicked,
  centerButtonClicked
};
