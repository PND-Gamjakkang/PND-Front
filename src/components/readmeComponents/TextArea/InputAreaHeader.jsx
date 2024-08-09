import Button from '../Button';
import { Toolbar,Toolbar2,InputAreaHeaderContainer } from './InputAreaHeaderStyle';
import styled from 'styled-components';

const H1Button = styled(Button)``;
const H2Button = styled(Button)``;
const H3Button = styled(Button)``;
const H4Button = styled(Button)``;
const H5Button = styled(Button)``;
const H6Button = styled(Button)``;
const BoldButton = styled(Button)``;
const ItalicButton = styled(Button)``;
const ThroughButton = styled(Button)``;
const CodeButton = styled(Button)``;
const QuoteButton = styled(Button)``;
const TopLangsButton = styled(Button)``;

const InputAreaHeader = ({ onButtonClick }) => {
  return (
    <InputAreaHeaderContainer>
      <Toolbar>
        <H1Button onClick={() => onButtonClick('h1')}>h1</H1Button>
        <H2Button onClick={() => onButtonClick('h2')}>h2</H2Button>
        <H3Button onClick={() => onButtonClick('h3')}>h3</H3Button>
        <H4Button onClick={() => onButtonClick('h4')}>h4</H4Button>
        <H5Button onClick={() => onButtonClick('h5')}>h5</H5Button>
        <H6Button onClick={() => onButtonClick('h6')}>h6</H6Button>
        <BoldButton onClick={() => onButtonClick('bold')}>Bold</BoldButton>
        <ItalicButton onClick={() => onButtonClick('italic')}>Italic</ItalicButton>
        <ThroughButton onClick={() => onButtonClick('throughLine')}>Through</ThroughButton>
        <CodeButton onClick={() => onButtonClick('code')}>Code</CodeButton>
        <QuoteButton onClick={() => onButtonClick('quote')}>Quote</QuoteButton>
        <Toolbar2>
          <TopLangsButton onClick={() => onButtonClick('Lan')}>Top Langs</TopLangsButton>
        </Toolbar2>
      </Toolbar>
    </InputAreaHeaderContainer>
  );
};

export default InputAreaHeader;
