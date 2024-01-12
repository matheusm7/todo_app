import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

import { useState } from "react";
 
function App() {

  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([{
    id: 1,
    task: "Fazer bolo",
    checked: true,
  }, {
    id: 2,
    task: "Fazer suco",
    checked: false,
  },
  ]);

  console.log(task)

  return (
  <Container>
    <h1 className="title">TODO LIST</h1>
    <Spacer/>

    <Flex direction="row">
      <Input placeholder="Digite sua tarefa" onChange={(e) => setTask(e.target.value)}/>
      <Button>Adicionar</Button>
    </Flex>
    <Spacer margin="16px"/>

    <ul>
      {listTask.map((task) => (
       <>
         <Item checked={task.checked} key={task.id}>
         <p>{task.task}</p>
         <Flex direction="row">
           <button>
             <i class="bx bx-check"></i>
             </button>
           <button>
             <i class="bx bx-trash"></i>
             </button>
         </Flex>
       </Item>
       <Spacer margin="12px"/></>
      ))}
   
    </ul>
  </Container>
  );
}

export default App;
