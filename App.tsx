import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from "./firebaseConfig";
import { User, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function App() {
    const [user, setUser] = useState<User>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const doLogin = async () => {
      const {user} = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
  }

  const doSignout = async () => {
    await signOut(auth);
    setUser(undefined);
  }

  return (
    <View style={styles.container}>
      {!user ?(
        <>
        <TextInput placeholder="Email" onChangeText={setEmail}/>
        <TextInput placeholder="Senha" onChangeText={setPassword}/>
        <Button title="Criar Conta" onPress={doLogin} />
        </>
      )
      : (
        <>
        <Text>User ID: {user.uid}</Text>
        <Button title="Sair" onPress={doSignout} />
        </>
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
