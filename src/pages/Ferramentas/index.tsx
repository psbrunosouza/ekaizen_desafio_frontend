import React, { useEffect, useState, useCallback } from 'react';
import { Container, Header, Title } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { api } from '../../services/api';
import { Form } from '@unform/web';

interface ferramentaData {
  id: string;
  produto: string;
  pequeno_porte: number;
  medio_porte: number;
  grande_porte: number;
}

const Ferramentas: React.FC = () => {
  
  const [ferramentas, setFerramentas] = useState<ferramentaData[]>([]);
  const [ferramenta, setFerramenta] = useState<ferramentaData>({} as ferramentaData);
  const [onFerramenta, setOnFerramenta] = useState(false);

  useEffect(() => {
    api.get("/listar_ferramentas").then((response) => {
      setFerramentas(response.data);
    });
  }, [ferramentas]);

  const alterarStatusInput = useCallback(() => {
    if(onFerramenta){
      setOnFerramenta(false);
    }else{
      setOnFerramenta(true);
    }
  }, [onFerramenta]);

  const CriarNovoProduto = useCallback( async (data) => {
    await api.post("/criar_ferramenta", data); 
  }, []);

  const DeletarProduto = useCallback( async (id) => {
    await api.delete(`/deletar_ferramenta/${id}`);
  }, []);

  const AtualizarProduto = useCallback(async (id) => {
    
  }, []);

  return (
    <Container on={onFerramenta}>
      <Header>
        <Title>
          Cadastro de ferramentas
        </Title>
      </Header>
      <Form onSubmit={CriarNovoProduto}>
        <table>
          <tr>
            <th>Produto</th>
            <th>Base - Pequeno porte</th>
            <th>Base - Médio porte</th>
            <th>Base - Grande porte</th>
            <th>
              <Button 
                onClick={(e) => {
                  alterarStatusInput();
                }} 
                type="button"
                width={18} 
                height={8}>
                  <AiOutlinePlus/>
              </Button>
            </th>
          </tr>

          <tr className="tr-input">
            <td><Input 
              name="produto" 
              type="text" 
              placeholder="Produto"
            />
            </td>
            <td><Input name="pequeno_porte" type="text" placeholder="Valor"/></td>
            <td><Input name="medio_porte" type="text" placeholder="Valor"/></td>
            <td><Input name="grande_porte" type="text" placeholder="Valor"/></td>
            <td></td>
          </tr>
        
          {
            ferramentas.map((ferramenta) => (
              <tr key={ferramenta.id}>
                <td>{ferramenta.produto}</td>
                <td>{`R$ ${ferramenta.pequeno_porte}`}</td>
                <td>{`R$ ${ferramenta.medio_porte}`}</td>
                <td>{`R$ ${ferramenta.grande_porte}`}</td>
                <td className="options">
                  <Button 
                    onClick={() =>
                      {
                        setFerramenta(ferramenta);
                        AtualizarProduto(ferramenta.id);
                      }
                    }
                    type="button"
                    styled={false} 
                    width={0} 
                    height={0}>
                    <AiFillEdit color="#666"/>
                  </Button>

                  <Button 
                    type="button"
                    onClick={() => DeletarProduto(ferramenta.id)}
                    styled={false} 
                    width={0} 
                    height={0}>
                    <FaTrashAlt color="#FD1013"/>
                  </Button>
                </td>
              </tr>
            ))
          }
        </table>
        <Button 
          onClick={() => setOnFerramenta(false)}
          type="submit" 
          width={32} 
          height={8}>
            Salvar
        </Button>
      </Form>
      
    </Container>
  )
};

export {Ferramentas}