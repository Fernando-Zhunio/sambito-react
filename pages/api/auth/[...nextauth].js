import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../lib/auth';
import axios from "axios";


export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {

                const url = process.env.URL;

                 const resultado = await axios.post(url+"login", {
                     email: credentials.email,
                     password: credentials.password
                 });


/*
                const resultado = {
                    data: {
                        email: 'fzhunio@hotmail.com',
                        message: 'Login Successful',
                        rol: '/_next/image?url=%2Flogo.png&w=256&q=75',
                        user: 'Fernando Zhunio'
                    }
                }
**/                
                if (resultado.data.message == 'Login Successful') {
                    return { email: resultado.data.email, image: resultado.data.rol, name: resultado.data.user };

                } else {
                    return null;
                }

            },
        }),
    ],
});