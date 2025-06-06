import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { FC, useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NewJournalScreen: FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [mood, setMood] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSave = (): void => {
    if (!title || !mood || !description) {
      Alert.alert("Missing Information", "Please fill out all fields.");
      return;
    }
    // Simulate saving to DB or API
    Alert.alert("Saved", "Your journal has been saved.");
    router.push("/");
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">New Journal Entry</Text>

      <Text className="text-sm text-gray-600">Mood (e.g. 😊 Happy)</Text>
      <TextInput
        className="border p-2 my-2 rounded"
        placeholder="Enter your mood"
        value={mood}
        onChangeText={(text: string) => setMood(text)}
      />

      <Text className="text-sm text-gray-600">Title</Text>
      <TextInput
        className="border p-2 my-2 rounded"
        placeholder="Title of your entry"
        value={title}
        onChangeText={(text: string) => setTitle(text)}
      />

      <Text className="text-sm text-gray-600">Description</Text>
      <TextInput
        className="border p-2 my-2 rounded h-40 text-start text-black"
        placeholder="How are you feeling today?"
        value={description}
        onChangeText={(text: string) => setDescription(text)}
        multiline
      />

      <TouchableOpacity
        className="bg-blue-500 py-3 mt-4 rounded items-center"
        onPress={handleSave}
        accessibilityLabel="Save journal entry"
      >
        <Text className="text-white font-semibold">Save</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View className="flex-row justify-between py-5 px-10 border-t border-gray-300 absolute w-screen bottom-0 bg-white">
        <Link href="/" asChild>
          <TouchableOpacity accessibilityLabel="Home">
            <Ionicons name="list-outline" size={28} color="black" />
          </TouchableOpacity>
        </Link>
        <Link href="/new-journal" asChild>
          <TouchableOpacity accessibilityLabel="Clear new journal entry">
            <Ionicons name="trash" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

export default NewJournalScreen;