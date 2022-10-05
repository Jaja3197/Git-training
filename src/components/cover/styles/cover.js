import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0 56px;
  height: 100px;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`; 

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  margin: 0;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;