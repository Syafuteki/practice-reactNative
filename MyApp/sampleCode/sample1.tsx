import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// ここから　props
interface Props {
  color: string;
  children?: React.ReactNode;
  label: string;
}

function MyComponent(props: Props) {
  const {color, children, label} = props;

  return (
    <View>
      <Text style={{color}}>{label}</Text>
      {children}
    </View>
  );
}
// ここまで　props

// ここから　ref
const styles = StyleSheet.create({
  input: {
    width: 160,
    height: 32,
    borderWidth: 1,
    padding: 4,
  },
});
// ここまで　ref

//ここからDB
interface Data {
  count: number;
}

async function hydrate() {
  try {
    const data = await AsyncStorage.getItem('keyForData');
    if (data == null) {
      return {count: 0};
    }
    return JSON.parse(data);
  } catch {
    return {count: 0};
  }
}

async function persist(data: Data) {
  await AsyncStorage.setItem('keyForData', JSON.stringify(data));
}
//ここまでDB

export default function sample1() {
  const ref = React.useRef<TextInput>(null);
  const [count, setCount] = React.useState<number | null>(null);
  async function loadCount() {
    const data = await hydrate();
    const newCount = data.count + 1;
    setCount(newCount);
    persist({count: newCount});
  }
  React.useEffect(() => {
    loadCount();
  }, []);

  const onPress = React.useCallback(async () => {
    AsyncStorage.clear();
    loadCount();
  }, []);

  if (count === null) {
    return <View />;
  }
  return (
    <View>
      <View>
        <Text>Hello</Text>
        <MyComponent color="red" label="new">
          <Text>GoodBye</Text>
        </MyComponent>
      </View>

      <View>
        <TextInput ref={ref} style={styles.input} />
        <TextInput style={styles.input} />
        <Text
          onPress={() => {
            ref?.current?.focus();
          }}>
          focus
        </Text>
      </View>

      <View>
        <Text onPress={onPress}>{count}</Text>
      </View>
    </View>
  );
}
