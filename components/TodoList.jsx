import React, { useEffect, useState } from 'react'
import axios from "axios"
import TodoItem from './TodoItem';
import Link from "next/link"
import { Flex } from '@chakra-ui/react';



const TodoList = ({ data }) => {


    return (
        <div>
            <Flex flexWrap={"wrap"} mt={5}>
                {data?.map((todo) =>
                    <Link key={todo._id} href={`/todo/${todo._id}`}>
                        <TodoItem todo={todo} />
                    </Link>
                )}
            </Flex>

        </div>
    )
}

export default TodoList
