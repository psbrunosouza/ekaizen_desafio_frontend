import React, { useCallback } from 'react';
import { Container, Header, Title } from './styles';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { Form } from '@unform/web';
import { InputWithLabel } from '../../components/InputWithLabel';
import {Select} from '../../components/Select';
import { useHistory } from 'react-router-dom';

const CriarClientes: React.FC = () => {

  const options = ["pequeno porte", "grande porte", "medio porte"];
  const history = useHistory();

  const CriarNovoCliente = useCallback( async (data) => {
    await api.post("/criar_cliente", data);
    history.push("/listar_clientes");
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          Criação de orçamento
        </Title>
      </Header>
      <Form onSubmit={CriarNovoCliente}>
         <div className="group">
           <div>
            <InputWithLabel name="nome" label="Nome do cliente (Contato)" type="text"/>
            <InputWithLabel name="email" label="E-mail (Contato)" type="text"/>
            <InputWithLabel name="telefone" label="Telefone/Ramal (Contato)" type="text"/>
           </div>
           <div>
            <InputWithLabel name="nome_fantasia" label="Nome Fantasia" type="text"/>
            <InputWithLabel name="email_comercial" label="E-mail (Comercial)" type="text"/>
            <InputWithLabel name="telefone_comercial" label="Telefone/Ramal (Comercial)" type="text"/>
           </div>
           <div>
            <InputWithLabel name="cnpj" label="CNPJ" type="text"/>
            <InputWithLabel name="cep" label="CEP" type="text"/>
            <InputWithLabel name="endereco" label="Endereço" type="text"/>
           </div>
           <div>
            <InputWithLabel name="bairro" label="Bairro" type="text"/>
            <InputWithLabel name="cidade" label="Cidade" type="text"/>
            <InputWithLabel name="estado" label="Estado" type="text"/>
           </div>
           <div>
            <Select label="porte da empresa" options={options} name="porte" />
            <InputWithLabel name="quantidade_funcionarios" label="Quantidade de funcionários" type="text"/>
           </div>
         </div>

         <Button
          type="submit" 
          width={32} 
          height={8}>
            Continuar
        </Button>
      </Form>
      
    </Container>
  )
};

export {CriarClientes}