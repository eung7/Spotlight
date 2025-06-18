import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Hello World!</Text>
      <Link href="/notifications">Visit Notification Screen</Link>
    </View>
  );
}
