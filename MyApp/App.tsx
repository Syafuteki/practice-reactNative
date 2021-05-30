import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import AsyncStorageDB from 'async-storage-db';

// ここから　props
interface Props {
    color: string;
    children: ReactNode;
    label: string;
}

function MyComponent(props: Props) {
    const { color, children, label } = props;

    return (
        <View>
            <Text style={{ color }}>{label}</Text>
            {children}
        </View>
    )
}
// ここまで　props

// ここから　ref
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 160,
        height: 32,
        borderWidth: 1,
        padding: 4,
    }
})
// ここまで　ref

export default function App() {
    const ref = React.useRef<TextInput>(null);
    const db = new AsyncStorageDB.PouchDB('test');

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <MyComponent color="red" label="new">
                <Text>GoodBye</Text>
            </MyComponent>

            <TextInput ref={ref} style={styles.input} />
            <TextInput  style={styles.input} />

            <Text
                onPress={() => {
                    ref?.current?.focus();
                }}>
                focus
                </Text>
        </View>
    )
}



