import React, { useState } from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import { auth } from './firebase';
import firebase from 'firebase';

function Login() {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")


    const onSignUp = () => {
     
        console.log(email.email)
        auth.signInWithEmailAndPassword(email.email, password.password).then(result => {
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    console.log(email)
    console.log(password)
    return (
        <View>
            <TextInput
            placeholder="email"
            onChangeText={(email) => setemail({email})}
            />
            <TextInput
            placeholder="password"
            //Secure the password entry
            secureTextEntry={true}
            onChangeText={(password) => setPassword({password})}
            />
            <Button
                onPress={()=> onSignUp()}
                title="Sign In"
                >
                
            </Button>
        </View>
    )
}
    

export default Login
