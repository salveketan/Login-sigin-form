
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
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [user, setUser] = useState({
        password: "",
        username: "",
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
        axios.post('https://masai-api-mocker.herokuapp.com/auth/login', user)
            .then(r => {
                console.log(r);
                alert("Login Successfull");
                navigate('/home', { replace: true })
            }
            )
            .catch((e) => {
                console.log(e);
                alert("Invalid Credential");
               }
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
                    <Heading fontSize={'4xl'}>Login in to your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" value={user.password} name="password" onChange={handle} />
                        </FormControl>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <Input type="text" value={user.username} name="username" onChange={handle} />
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

