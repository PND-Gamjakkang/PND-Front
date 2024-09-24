import * as S from './MainStyle.jsx';
import { useNavigate } from 'react-router-dom';

// 이미지
import RightArrowIcon from '../../assets/images/main-right-arrow.png'
import FeatureCardBgImg from '../../assets/images/main-feature-card-bg.png'

function MainFeatureCard({featureTitle, featureDescriptionTitle, featureDescription, btnText, featureImg}) {
    const navigate = useNavigate();
    const moveToPage = () => {
        if(featureTitle == 'MAKE README')  {
            navigate('/readme');
        } else if(featureTitle == 'MAKE DIAGRAM') {
            navigate('/diagram');
        } else {
            navigate('/report');
        }
    }
    return (
        <S.MainFeatureCardContainer bgImage={FeatureCardBgImg}>
            <S.FeatureCardHeader>{featureTitle}</S.FeatureCardHeader>
            <S.FeatureCardContentBox>
                <S.FeatureDescriptioTitle>{featureDescriptionTitle}</S.FeatureDescriptioTitle>
                <S.FeatureDescription>{featureDescription}</S.FeatureDescription>
                <S.CardButton onClick={moveToPage}>
                    {btnText}
                    <S.ButtonIcon src={RightArrowIcon}/>
                </S.CardButton>
                <S.FeatureImg src={featureImg}/>
            </S.FeatureCardContentBox>
        </S.MainFeatureCardContainer>
    )
}

export default MainFeatureCard;