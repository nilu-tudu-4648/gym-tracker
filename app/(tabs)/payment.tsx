import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const PAYMENTS = [
  {
    id: "1",
    name: "Liam Carter",
    due: "Due on 20th May",
    amount: "$120",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Sophia Bennett",
    due: "Due on 20th May",
    amount: "$120",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Ethan Harper",
    due: "Due on 20th May",
    amount: "$120",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Olivia Hayes",
    due: "Due on 20th May",
    amount: "$120",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "5",
    name: "Noah Foster",
    due: "Due on 20th May",
    amount: "$120",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function PaymentsScreen() {
  const [tab, setTab] = useState<"pending" | "upcoming">("pending");

  return (
    <ThemedView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={[styles.header, { alignItems: 'center', justifyContent: 'center' }]}>
        <ThemedText type="title" style={styles.headerTitle}>
          Payments
        </ThemedText>
      </View>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setTab("pending")}
          style={[styles.tab, tab === "pending" && styles.tabActive]}
        >
          <ThemedText
            style={[styles.tabText, tab === "pending" && styles.tabTextActive]}
          >
            Pending
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab("upcoming")}
          style={[styles.tab, tab === "upcoming" && styles.tabActive]}
        >
          <ThemedText
            style={[styles.tabText, tab === "upcoming" && styles.tabTextActive]}
          >
            Upcoming
          </ThemedText>
        </TouchableOpacity>
      </View>
      {/* List */}
      <FlatList
        data={PAYMENTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.paymentRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold" style={styles.name}>
                {item.name}
              </ThemedText>
              <ThemedText type="default" style={styles.due}>
                {item.due}
              </ThemedText>
            </View>
            <ThemedText type="defaultSemiBold" style={styles.amount}>
              {item.amount}
            </ThemedText>
          </View>
        )}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
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
    backgroundColor: "#fff",
  },
  backBtn: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginHorizontal: 0,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: Colors.light.tint,
  },
  tabText: {
    fontSize: 16,
    color: "#687076",
    fontWeight: "600",
  },
  tabTextActive: {
    color: Colors.light.tint,
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    color: "#222",
  },
  due: {
    color: "#687076",
    fontSize: 14,
    marginTop: 2,
  },
  amount: {
    fontSize: 18,
    color: "#222",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
