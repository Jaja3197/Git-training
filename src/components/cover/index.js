import {
    Container,
    FeatureCallOut,
    PlayButton,
    Text,
    Feature
  } from './styles/cover';

  export default function Cover ({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

  Cover.Feature = function CoverFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
  };
  
  
 Cover.PlayButton = function CoverPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };
  
  Cover.FeatureCallOut = function CoverFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
  };
  
  Cover.Text = function CoverText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };