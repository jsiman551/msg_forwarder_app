import { Text, View } from "react-native";

export default function SettingsTab() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-orange-600 dark:text-orange-300">
        ⚙️ Settings Tab
      </Text>
    </View>
  );
}
