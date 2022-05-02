import { Button, Card, Grid, TextInput, PasswordInput, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import type { NextPage } from 'next';
import { useCallback } from 'react';
import { schemas } from '../../utils/schema';

import styles from './index.module.css';

type Params = {
  account: string;
  password: string;
};

const Login: NextPage = () => {
  const onSubmitHandler = useCallback((value: Params) => {
    console.log(value);
  }, []);

  const { getInputProps, onSubmit } = useForm<Params>({
    initialValues: {
      account: '',
      password: ''
    },
    schema: yupResolver(schemas().pick(['account', 'password']))
  });

  return (
    <Grid justify="center" align="center" className={styles.root}>
      <Card className={styles.card} radius="md">
        <Grid justify="center" mt={30}>
          <Text size="lg">ログイン画面</Text>
        </Grid>
        <Grid justify="center" align="center" mt={50}>
          <form className={styles.form} onSubmit={onSubmit((values) => onSubmitHandler(values))}>
            <TextInput
              type="text"
              placeholder="アカウントID"
              name="account"
              size="md"
              {...getInputProps('account')}
            />
            <PasswordInput
              placeholder="パスワード"
              name="password"
              size="md"
              mt={20}
              {...getInputProps('password')}
            />
            <Grid mt={40} justify="center">
              <Button type="submit">ログイン</Button>
            </Grid>
          </form>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Login;
