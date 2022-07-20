import React from "react";
import {Link as ReactRouterLink} from "react-router-dom";
import { ButtonLink, Container, Logo, Frame} from "./styles/header";

export default function Header ({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
    <ReactRouterLink to={to} >
       <Logo {...restProps}/>
    </ReactRouterLink>
    );
};

Header.Frame = function HeaderFrame({ children, ...restProps}) {
    return <Frame{...restProps}>{children}</Frame>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
    return <ButtonLink{...restProps}>{children}</ButtonLink>
}


