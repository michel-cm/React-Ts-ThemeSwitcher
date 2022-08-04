import * as C from './styles';
import Switch from 'react-switch';
import { shade } from 'polished';

import React, {useContext} from 'react';

import { ThemeContext } from 'styled-components'

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext)

    return (
        <C.Container>
            Logo
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </C.Container>
    );
}

export default Header;