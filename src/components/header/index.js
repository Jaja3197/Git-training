
import React, { useState } from "react";
import {Link as ReactRouterLink} from "react-router-dom";
import { ButtonLink, Container, Logo, Link, Frame, Group, Profile, Picture, Dropdown, Search, SearchIcon, SearchInput } from "./styles/header";

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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };

  Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

  Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };
  
  Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`images/users/${src}.png`} />;
  };

  Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
  };

  Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps
  }) {
    // Change styling if user is trying to search for a feature
    const [searchActive, setSearchActive] = useState(false);
  
    return (
      <Search {...restProps}>
        <SearchIcon
        //after click change the state of 
          onClick={() => setSearchActive((searchActive) => !searchActive)}
          data-testid="search-click"
        >
          <img src="images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Search films and series"
          active={searchActive}
          data-testid="search-input"
        />
      </Search>
    );
  };