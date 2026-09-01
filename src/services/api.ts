import axios from "axios";

const api = axios.create({
  baseURL: "https://msg-forwarder-backend.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export async function sendMessage(
  botToken: string,
  chatId: string,
  message: string,
) {
  try {
    const { data } = await api.post("/notify", { botToken, chatId, message });
    if (!data.success) {
      throw new Error(data.error || "Error al enviar mensaje");
    }
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
}
