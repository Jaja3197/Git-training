import React from "react";
import { Container, Input, Button } from "./styles/emform";

export default function EmForm({children, ...restProps}){

    return <Container {...restProps}>{children}</Container>;
}

EmForm.Input = function EnFormInput ({...restProps}) {
    return <Input {...restProps} />;
}

EmForm.Button = function EnFormButton ({children, ...restProps}) {
    return (
            <Button {...restProps} >
            {children} 
           </Button>
    );
}













