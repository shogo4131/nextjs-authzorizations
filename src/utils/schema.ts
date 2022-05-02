import * as yup from 'yup';

export const schemas = () => {
  return yup.object().shape({
    account: yup.string().required('アカウント名を入力してください。'),
    password: yup
      .string()
      .min(8, 'パスワードは8文字以上、16字以下で入力してください。')
      .max(16, 'パスワードは8文字以上、16字以下で入力してください。')
      .required('パスワードを入力してください。')
  });
};
