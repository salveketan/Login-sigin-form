import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
    });

    let name, value;
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };
    const AddHandle = (e) => {
        e.preventDefault();
        postData(user)
        setData(user);
    };
    // console.log(data);
    const postData = (user) => {
        axios.post('https://masai-api-mocker.herokuapp.com/auth/register', user)
            .then(r =>
                // console.log(r);
                
                navigate('/login', { replace: true })
            )
            .catch((e) =>
                console.log(e)
            )
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" value={user.name} name="name" onChange={handle} />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={user.email} name="email" onChange={handle} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={user.password} name="password" onChange={handle} />
                        </FormControl>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input type="text" value={user.username} name="username" onChange={handle} />
                        </FormControl>
                        <FormControl id="mobile">
                            <FormLabel>Mobile</FormLabel>
                            <Input type="number" value={user.mobile} name="mobile" onChange={handle} />
                        </FormControl>
                        <FormControl id="description">
                            <FormLabel>Description</FormLabel>
                            <Input type="text" value={user.description} name="description" onChange={handle} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={AddHandle}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
