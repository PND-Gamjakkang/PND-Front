import * as S from './DiagramStyle'
import { useState } from 'react';

import ThemeType from './ThemeType';

function ThemeTemplate({onSaveTheme}) {
    const [selectedTheme, setSeletedTheme] = useState(null);

    const handleThemeClick = (selectedThemeName) => {
        setSeletedTheme(selectedThemeName);
        onSaveTheme(selectedThemeName);
    }

    return (
        <S.ThemeTemplateContainer>
            <h2>Theme Template</h2>
            <S.ThemeTypeContainer>
                <ThemeType
                    typeIcon={"🌝"}
                    typeName={"LIGHT"}
                    onClick={() => handleThemeClick("LIGHT")}
                    
                />
                <ThemeType
                    typeIcon={"🌚"}
                    typeName={"DARK"}
                    onClick={() => handleThemeClick("DARK")}
                />

            </S.ThemeTypeContainer>

        </S.ThemeTemplateContainer>
    )
}

export default ThemeTemplate;