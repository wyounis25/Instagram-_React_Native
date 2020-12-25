import React, { useState } from 'react'
import {Text, View, Button, TextInput} from 'react-native'
function Register() {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const  onSignUp = () => {
        
    }
    return (
        <View>
            <TextInput
            placeholder="name"
            onChangeText={(name) => setName({name})}
            />
            <TextInput
            placeholder="email"
            onChangeText={(email) => setName({email})}
            />
            <TextInput
            placeholder="password"
            //Secure the password entry
            secureTextEntry={true}
            onChangeText={(password) => setName({password})}
            />
            <Button
            
                onPress={()=> this.onSignUp()}
                title="Sign Up"
            >
                
            </Button>
        </View>
    )
}

export default Register
