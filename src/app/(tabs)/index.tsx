import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-blue-600 dark:text-blue-300">
        🚀 Pantalla Home
      </Text>
    </View>
  );
}
