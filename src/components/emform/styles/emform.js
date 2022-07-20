import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100%;
margin-top: 20px;
flex-wrap: wrap;

@media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
}
`;

export const Input = styled.input`
max-width: 28.5em;
width: 100%;
border: 0;
padding: 0.7em;
max-height: 60px;
height: 70px;
box-sizing: border-box;
`;

export const Button = styled.button`
display: flex;
max-height: 60px;
align-items: center;
background: #e50914;
color: white;
text-transform: uppercase;
padding: 0 32px;
margin-left: 0.08em;
font-size: 1.5em;
border: 0;
cursor: pointer;


&:hover {
    background: #f40612;
}

@media (max-width: 1000px){
    height: 50px;
    font-size: 1em;
    margin-top: 20px;
    font-weight: bold;
}

img{
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px){
        width: 16px;
    }

}
`;