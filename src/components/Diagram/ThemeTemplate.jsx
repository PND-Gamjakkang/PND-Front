import * as S from './DiagramStyle'
import { useEffect, useState } from 'react';

import ThemeType from './ThemeType';

function ThemeTemplate({onSaveTheme}) {
    const [selectedTheme, setSeletedTheme] = useState("LIGHT");
    const [isClickLightBtn, setIsClickLightBtn] = useState(true);
    const [isClickDarkBtn, setIsClickDarkBtn] = useState(false);

    const handleThemeClick = (selectedThemeName) => {
        setSeletedTheme(selectedThemeName);
        onSaveTheme(selectedThemeName);
        if (selectedThemeName === "LIGHT") {
            setIsClickLightBtn(true);
            setIsClickDarkBtn(false);
        } else if (selectedThemeName === "DARK") {
            setIsClickLightBtn(false);
            setIsClickDarkBtn(true);
        }
 
    }


    return (
        <S.ThemeTemplateContainer>
            <S.ThemeTItleText>Theme Template</S.ThemeTItleText>
            <S.ThemeTypeContainer>
                <ThemeType
                    typeIcon={"🌝"}
                    typeName={"LIGHT"}
                    onClick={() => handleThemeClick("LIGHT")}
                    isActive={isClickLightBtn} // 활성화 상태 전달

                />
                <ThemeType
                    typeIcon={"🌚"}
                    typeName={"DARK"}
                    onClick={() => handleThemeClick("DARK")}
                    isActive={isClickDarkBtn} // 활성화 상태 전달
                />

            </S.ThemeTypeContainer>

        </S.ThemeTemplateContainer>
    )
}

export default ThemeTemplate;