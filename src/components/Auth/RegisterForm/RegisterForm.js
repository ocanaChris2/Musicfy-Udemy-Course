import React from 'react';
import { Form, Icon } from "semantic-ui-react";
import { Button } from 'semantic-ui-react';

export function RegisterForm(props) {
  const { openLogic, goBack } = props;


  return (
    <div className="register-form">
        <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
    

    <Form>
        <Form.Input
        type="text" 
        placeholder="Correo electrónico"
        icon="mail ouline" 
        error={true}
    />

    <Form.Input
    type="password"
    placeholder="Contraseña"
    icon={
    <Icon 
    name="eye" 
    link 
    onClick={ () => console.log("Show password") }
    />
    }
    />
   

   <Form.Input 
   type="text"
   placeholder="¿Cómo deberiamos llamarte?" 
   icon="user circle outline"
   />

   <Form.Button 
   type="submit"
   primary
   fluid>Continuar</Form.Button>

   </Form>
   </div> 
  );

}