import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-blue-600 dark:text-blue-300">
        🚀 Bienvenido a NativeWind v5
      </Text>

      <Text className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Este es tu Home inicial
      </Text>

      <Pressable className="mt-6 px-6 py-3 rounded-lg bg-green-500 dark:bg-green-700">
        <Text className="text-white dark:text-gray-200 font-semibold">
          Ir a Settings
        </Text>
      </Pressable>
    </View>
  );
}
