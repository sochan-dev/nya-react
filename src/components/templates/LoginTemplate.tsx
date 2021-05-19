import React, { VFC, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { InputText, ActionButton } from '../atoms/UIkit';
import { login } from '../../lib/login';
const LoginTemplate: VFC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const inputId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnClick = async () => {
    await login(id, password);
  };

  return (
    <main>
      <div>
        <h1>管理者ログイン</h1>
        <InputText label={'ID'} value={id} onChange={(e) => inputId(e)} />
        <InputText
          label={'password'}
          value={password}
          type={'password'}
          onChange={(e) => inputPassword(e)}
        />
      </div>
      <ActionButton label={'hello'} onClick={handleOnClick} />
      <Link href="/">TOPへ</Link>
    </main>
  );
};

export default LoginTemplate;
