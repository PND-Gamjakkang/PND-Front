import * as S from './MainStyle.jsx';

import RightArrowIcon from '../../assets/images/main-right-arrow.png'
import FeatureCardBgImg from '../../assets/images/main-feature-card-bg.png'

function MainFeatureCard({featureTitle, featureDescription, btnText, featureImg}) {
    return (
        <S.MainFeatureCardContainer bgImage={FeatureCardBgImg}>
            <S.FeatureCardHeader>{featureTitle}</S.FeatureCardHeader>
            <S.FeatureCardContentBox>
                
                <S.FeatureDescription>{featureDescription}</S.FeatureDescription>
                <S.CardButton>
                    {btnText}
                    <S.ButtonIcon src={RightArrowIcon}/>
                </S.CardButton>
                <S.FeatureImg src={featureImg}/>
            </S.FeatureCardContentBox>
        </S.MainFeatureCardContainer>
    )
}

export default MainFeatureCard;