import Loader from "@/components/Loader";
import Post from "@/components/Post";
import Story from "@/components/Story";
import { STORIES } from "@/constants/mock-data";
import { COLORS } from "@/constants/theme";
import { api } from "@/convex/_generated/api";
import { styles } from "@/styles/feed.styles";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const posts = useQuery(api.posts.getFeedPosts);

  if (posts === undefined) return <Loader />;
  if (posts.length === 0) return <NoPostsFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>spotlight</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="log-out-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListHeaderComponent={<StoriesSection />}
      />
    </View>
  );
}

const StoriesSection = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storiesContainer}
    >
      {STORIES.map((story) => {
        return <Story key={story.id} story={story} />;
      })}
    </ScrollView>
  );
};

const NoPostsFound = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
    </View>
  );
};
