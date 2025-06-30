import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

const CUSTOMERS = [
  {
    id: "1",
    name: "Ethan Carter",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Liam Harper",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Noah Bennett",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Oliver Hayes",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "5",
    name: "Elijah Foster",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "6",
    name: "James Coleman",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: "7",
    name: "William Brooks",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "8",
    name: "Benjamin Reed",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

export default function CustomersScreen() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");
  const { currentTheme } = useTheme();
  const themeColors = Colors[currentTheme];

  const handleCustomerPress = (customerId: string) => {
    router.push(`/customer/${customerId}` as any);
  };

  return (
    <GestureHandlerRootView>
      <ThemedView style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            Customers
          </ThemedText>
          <TouchableOpacity>
            <Ionicons name="add" size={28} color={textColor} />
          </TouchableOpacity>
        </View>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={18}
            color={iconColor}
            style={{ marginLeft: 8 }}
          />
          <TextInput
            placeholder="Search"
            style={[styles.searchInput, { color: textColor }]}
            placeholderTextColor={iconColor}
          />
        </View>
        {/* Filter/Sort */}
        <View style={styles.filterSortRow}>
          <TouchableOpacity style={styles.filterSortBtn}>
            <ThemedText>Status</ThemedText>
            <Ionicons name="chevron-down" size={16} color={textColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterSortBtn}>
            <ThemedText>Sort</ThemedText>
            <Ionicons name="chevron-down" size={16} color={textColor} />
          </TouchableOpacity>
        </View>
        {/* Customer List */}
        <FlatList
          data={CUSTOMERS}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.customerRow,
                {
                  borderBottomColor: themeColors.icon + "20",
                },
              ]}
              onPress={() => handleCustomerPress(item.id)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.customerInfo}>
                <ThemedText type="defaultSemiBold" style={{ fontSize: 16 }}>
                  {item.name}
                </ThemedText>
                <ThemedText type="default" style={{ color: "#3B82F6" }}>
                  {item.status}
                </ThemedText>
              </View>
              <Ionicons name="chevron-forward" size={20} color={iconColor} />
            </TouchableOpacity>
          )}
        />
      </ThemedView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  filterSortRow: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  filterSortBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  customerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabItemActive: {
    // Optionally highlight active tab
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  tabLabelActive: {
    fontWeight: "bold",
  },
  customerInfo: {
    flex: 1,
  },
});
