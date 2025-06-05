//app/index.tsx ➝ is your home screen

// index.tsx - This is the default/home screen because it’s named index.tsx.
// When the app runs, this is the first screen you see.
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FC } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface JournalEntry {
  id: number;
  mood: string;
  title: string;
  date: string;
}

// Dummy data to simulate journal entries
const fakeJournals: JournalEntry[] = [
  {
    id: 1,
    mood: "😊 Happy",
    title: "A Good Day",
    date: "June 4, 2025",
  },
  {
    id: 2,
    mood: "😔 Sad",
    title: "Feeling Low",
    date: "June 3, 2025",
  },
  {
    id: 3,
    mood: "😡 Angry",
    title: "Lost My Temper",
    date: "June 2, 2025",
  },
];

// This is the home screen component
const Index: FC = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-300">
        <Image
          source={{ uri: "https://img.icons8.com/color/48/diary.png" }}
          className="w-8 h-8"
        />
        <Text className="text-xl font-bold">Mood Journal</Text>
        <Link href="/new-journal" asChild>
          <TouchableOpacity accessibilityLabel="Create a new journal entry">
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Journal List */}
      <ScrollView className="px-4 py-2">
        {fakeJournals.map((journal: JournalEntry) => (
          <View
            key={journal.id}
            className="border-b border-gray-200 py-3 flex-row items-center"
            accessibilityLabel={`Journal titled ${journal.title}, mood ${journal.mood}`}
          >
            <Text className="text-2xl mr-3">{journal.mood.split(" ")[0]}</Text>
            <View>
              <Text className="font-semibold text-lg">{journal.title}</Text>
              <Text className="text-gray-500">{journal.mood.split(" ")[1]}</Text>
              <Text className="text-sm text-gray-400">{journal.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-between py-5 px-10 border-t border-gray-300">
        <Link href="/" asChild>
          <TouchableOpacity accessibilityLabel="Home">
            <Ionicons name="list-outline" size={28} color="black" />
          </TouchableOpacity>
        </Link>
        <Link href="/new-journal" asChild>
          <TouchableOpacity accessibilityLabel="Add a new journal entry">
            <Ionicons name="create-outline" size={28} color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Index;
