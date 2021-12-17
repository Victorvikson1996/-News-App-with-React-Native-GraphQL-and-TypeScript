import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import { createClient, Provider as UrqlProvider } from 'urql';


const client = createClient({
    url: 'http://localhost:3000/graphql'
})

export default function App() {
    return (
        <UrqlProvider value={client}>
            <View style={styles.container}>
                <StatusBar hidden />
                <Text>Hello, World</Text>
            </View>
        </UrqlProvider>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})