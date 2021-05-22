import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/router";

import { Button, Flex, Stack } from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { replace } = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);

    replace('/dashboard');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack space="4">
          <Input
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
