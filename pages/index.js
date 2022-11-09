import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TodoList from '../components/TodoList'


const getAllTodos = async () => {
  let res = await axios.get("http://localhost:3000/api/todo");
  return res;
}

export default function Home() {

  const [text, setText] = useState("")
  const [data, setData] = useState([])

  const getTodo = () => {
    getAllTodos().then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  const handleAddTodo = () => {
    axios.post("http://localhost:3000/api/todo", { title: text }).then((res) => {
      getTodo();
      setText("")
    })
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      <Heading textAlign={"center"}>Dashboard</Heading>
      <Box w={"80%"} m="auto" mt={10}>
        <Flex w={"40%"} m="auto">
          <Input placeholder='type something' value={text} onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleAddTodo} colorScheme={"teal"}>Add Todo</Button>
        </Flex>
        <Box>
          <TodoList data={data} />
        </Box>
      </Box>


    </div>
  )
}
