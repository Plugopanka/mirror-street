import { useState } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFieldAuth from '../textfieldAuth/textfieldAuth.tsx';
import SubmitBtnColor from '../btns/SubmitBtnColor.tsx';
import TextPersonalData from '../textPersonalData/TextPersonalData.tsx';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

interface LoginForm {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email('Введите адрес почты вида Ivan@mail.ru').required('Введите адрес почты вида Ivan@mail.ru'),
    password: yup.string().required('Введите пароль не менее 6 символов').min(6),
});

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        // register,
        handleSubmit,
        formState: { isValid },
    } = useForm<LoginForm>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: LoginForm) => {
        if (!isValid) {
            console.error('Ошибка валидации:');
        } else {
            console.log('вход:', data);
            onLogin(data.email, data.password);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const input = [
        { id: 'email', label: 'Электронная почта', placeholder: 'Введи электронную почту', value: email, onChange: handleEmailChange },
        { id: 'password', label: 'Пароль', placeholder: 'Придумай пароль, минимум 6 символов', value: password, onChange: handlePasswordChange },
    ];

    const styles = {
        container: { marginTop: '32px' },
        text: { fontSize: '16px', marginTop: '16px', fontFamily: 'Roboto', textAlign: 'start' },
    };

    return (
        <Container maxWidth="sm">
            <Box sx={styles.container}>
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    {input.map(({ id, label, placeholder, value, onChange }) => (
                        <TextFieldAuth label={label} placeholder={placeholder} value={value} onChange={onChange} id={id} margin="16px 0 0 0" />
                    ))}
                    <Typography component="p" sx={styles.text}>
                        Если ты являешься членом организации, можешь найти свой пароль на почте, которую указывал при вступлении.
                    </Typography>
                    <SubmitBtnColor title="Войти" margin="16px 0 0  0" />
                    <TextPersonalData />
                </form>
            </Box>
        </Container>
    );
}
