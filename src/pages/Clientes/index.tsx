import React, { useEffect, useState, useCallback } from 'react';
import { Container, Header, Title } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { api } from '../../services/api';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

interface ClientesData {
  id: string;
  nome: string;
  cnpj: string;
  porte: string;
  quantidade_funcionarios: number;
  telefone: string;
}

const Clientes: React.FC = () => {
  
  const [clientes, setClientes] = useState<ClientesData[]>([]);
  const [onFerramenta, setOnFerramenta] = useState(false);

  useEffect(() => {
    api.get("/listar_clientes").then((response) => {
      setClientes(response.data);
    });
  }, [clientes]);

  const CriarNovoCliente = useCallback( async () => {

  }, []);

  const DeletarCliente = useCallback( async (id) => {
    await api.delete(`/deletar_cliente/${id}`);
  }, [clientes]);

  return (
    <Container on={onFerramenta}>
      <Header>
        <Title>
          Criação de orçamento
        </Title>
      </Header>
      <Form onSubmit={CriarNovoCliente}>
        <table>
          <tr>
            <th>Cliente</th>
            <th>CNPJ</th>
            <th>Porte</th>
            <th>Quantidade de funcionários</th>
            <th>Telefone</th>
            <th>
              <Button 
                styled={false} 
                type="button" 
                width={0} 
                height={0}
                disabled
              >
                <Link to="/criar_cliente"><AiOutlinePlus/></Link>
              </Button>
            </th>
          </tr>
        
          {
            clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{`${cliente.cnpj}`}</td>
                <td>{`${cliente.porte}`}</td>
                <td>{`${cliente.quantidade_funcionarios}`}</td>
                <td>{`${cliente.telefone}`}</td>
                <td className="options">
                  <Button 
                    onClick={() => {
                      console.log("att");
                    }}
                    styled={false} 
                    type="button" 
                    width={0} 
                    height={0}>
                    <AiFillEdit color="#666"/>
                  </Button>

                  <Button 
                    onClick={() => {
                      DeletarCliente(cliente.id)
                    }}
                    styled={false} 
                    type="button" 
                    width={0} 
                    height={0}>
                    <FaTrashAlt color="#FD1013"/>
                  </Button>
                </td>
              </tr>
            ))
          }
        </table>
        {/* <Button
          type="submit" 
          width={32} 
          height={8}>
            Salvar
        </Button> */}
      </Form>
      
    </Container>
  )
};

export {Clientes}