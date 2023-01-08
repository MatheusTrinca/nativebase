import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      {...rest}
      bg="gray.700"
      h="16"
      mb={4}
      fontSize="md"
      _focus={{ bg: 'gray.200', borderWidth: 2, borderColor: 'green.500' }}
    />
  );
}
