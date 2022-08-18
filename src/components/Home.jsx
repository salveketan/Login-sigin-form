import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  // c230e2caa0936df5de7d73f98aa0438e
  const getData = () => {

    axios({
      method: 'get',
      url: ' https://masai-api-mocker.herokuapp.com/user/shakal',
      headers: {
        "Authorization": "Bearer c230e2caa0936df5de7d73f98aa0438e"
      }
    })
      .then((r) =>
        setData(r.data)
      )
      .catch((e) => console.log(e))
  }
  console.log("ketandata", data);

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.username}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {data.email}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={5}>
          <h3>{data.description}</h3>{" "}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}