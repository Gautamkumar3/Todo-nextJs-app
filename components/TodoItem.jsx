import { Box, Button, Input, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'

const TodoItem = ({ todo }) => {
    return (

        <Box fontWeight={"bold"} border="2px solid red"  p="5" textAlign={"center"} m={2}>
            <Text >Title : {todo.title}</Text>
            <Text>Status : {todo.status ? "Done" : "Not Done"}</Text>
        </Box>
    )
}

export default TodoItem
