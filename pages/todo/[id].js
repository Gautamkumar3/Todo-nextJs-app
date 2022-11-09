import { AlertTitle, Box, Button, Flex, Heading, Input, Text, tokenToCSSVar } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

const getSingleTodo = async (id) => {
    let res = await axios.get(`http://localhost:3000/api/todo/${id}`)
    return res;
}

const TodoDetails = () => {

    const router = useRouter()
    let id = router.query.id
    const [data, setData] = useState({})
    const [text, setText] = useState("")


    const singleTodo = (id) => {
        getSingleTodo(id).then((res) => {
            setData(res.data)
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/api/todo/${id}`).then((res) => {
            singleTodo(id)
        })
        console.log(id)
    }

    const handleToogle = (id, status) => {
        axios.put(`http://localhost:3000/api/todo/${id}`, { status: !status }).then((res) => {
            console.log(res.data)
            singleTodo(id)
        })
    }

    const handleDesctiption = (id) => {
        axios.put(`http://localhost:3000/api/todo/${id}`, { description: text }).then((res) => {
            console.log(res.data)
            singleTodo(id)
            setText("")
        })
    }

    useEffect(() => {
        singleTodo(id)
    }, [id])

    return (
        <Box>
            <Heading textAlign={"center"} mb={5}>Todo details page</Heading>

            {data ?
                <Box fontWeight={"bold"} w={"40%"} margin="auto" border={"2px solid black"} textAlign="center">
                    <Flex px={10} my={5}>
                        <Input borderColor={"black"} border="2px solid black" placeholder='type description' onChange={(e) => setText(e.target.value)} value={text} />
                        <Button onClick={() => handleDesctiption(data._id)} px={10} colorScheme={"teal"}>Add Desctiption</Button>
                    </Flex>

                    <Text>Title : {data.title}</Text>
                    <Text>Status : {data.status ? "Done" : "Not Done"}</Text>
                    <Text>Description: {data.description ? data.description : ""}</Text>
                    <Button onClick={() => handleToogle(data._id, data.status)} colorScheme={"teal"} m={2}>Toogl</Button>
                    <Button onClick={() => handleDelete(data._id)} colorScheme={"red"}>Delete</Button>

                </Box>
                : <Heading textAlign={"center"} my={5}>No data found</Heading>}
            <Text color={"blue"} fontWeight="bold" textAlign={"center"}>
                <Link href={"/"}>Go Back to Dashboard</Link>
            </Text>
        </Box>
    )
}

export default TodoDetails
