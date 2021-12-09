import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';

import logoInter from '../../assets/images/Inter-orange.png';

import UserCircle from '../UserCircle';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                    <UserCircle initials="VF"/>
                    <div>
                        <p>Olá <span className="primary-color font-bold">Vinícius</span></p>
                        <strong>12345687-2</strong><br />
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>    
    )
}

export default Header;