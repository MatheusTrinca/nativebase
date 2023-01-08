import { View, Text } from 'react-native';
import React from 'react';
import { Center, Heading, VStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Signup = () => {
  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24}>Crie sua Conta</Heading>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirme sua senha" />
        <Button title="Cadastrar" />
      </Center>
    </VStack>
  );
};

// 28
