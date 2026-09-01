import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { sendMessage } from "../../services/api";

export default function SendScreen() {
  const [botToken, setBotToken] = useState("");
  const [chatId, setChatId] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!botToken || !chatId || !message) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    try {
      const data = await sendMessage(botToken, chatId, message);
      Alert.alert("Éxito", `Mensaje enviado: ${data.data.text}`);
      setMessage("");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-6">
      <Text className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-6">
        ✉️ Enviar Mensaje
      </Text>

      <TextInput
        placeholder="Bot Token"
        value={botToken}
        onChangeText={setBotToken}
        className="w-full border rounded-lg px-4 py-2 mb-4 dark:bg-gray-800 dark:text-white"
      />

      <TextInput
        placeholder="Chat ID"
        value={chatId}
        onChangeText={setChatId}
        className="w-full border rounded-lg px-4 py-2 mb-4 dark:bg-gray-800 dark:text-white"
      />

      <TextInput
        placeholder="Mensaje"
        value={message}
        onChangeText={setMessage}
        multiline
        className="w-full border rounded-lg px-4 py-2 mb-6 dark:bg-gray-800 dark:text-white"
      />

      <Pressable
        onPress={handleSend}
        className="w-full bg-green-500 dark:bg-green-700 py-3 rounded-lg"
      >
        <Text className="text-center text-white font-semibold">Enviar</Text>
      </Pressable>
    </View>
  );
}
