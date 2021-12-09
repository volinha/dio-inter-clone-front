import React from "react";
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles';

import Card from '../../components/card';
import Input from "../../components/Input";

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();
    const handleToSignIn = () => {
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
                <img src={logoInter} width={172} height={61} alt="logo inter"/>
                <InputContainer>
                    <Input placeholder="EMAIL"/>
                    <Input placeholder="SENHA" type="password" />
                </InputContainer>
                <ButtonContainer>
                    <Button type="button" onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já!</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;