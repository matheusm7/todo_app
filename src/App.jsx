import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
 
function App() {
  return (
  <Container>
    <h1 className="title">TODO LIST</h1>
    <Spacer/>

    <Flex direction="row">
      <Input placeholder="Digite sua tarefa"/>
      <Button>Adicionar</Button>
    </Flex>
    <Spacer margin="16px"/>

    <ul>

    <Item>Fazer</Item>
    <Spacer margin="12px"/>
    <Item>Fazer</Item>
    <Spacer margin="12px"/>
    <Item>Fazer</Item>
    <Spacer margin="12px"/>
    <Item>Fazer</Item>
    <Spacer margin="12px"/>
    <Item>Fazer</Item>
    <Spacer margin="12px"/>

    </ul>

  </Container>
  );
}
export default App;
