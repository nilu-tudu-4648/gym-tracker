import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import React, { useState } from "react";
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
    dueDate: "20th May",
    amount: "120",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "pending",
  },
  {
    id: "2",
    name: "Sophia Bennett",
    dueDate: "20th May",
    amount: "120",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    status: "pending",
  },
  {
    id: "3",
    name: "Ethan Harper",
    dueDate: "20th May",
    amount: "120",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Olivia Hayes",
    dueDate: "20th May",
    amount: "120",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    status: "pending",
  },
  {
    id: "5",
    name: "Noah Foster",
    dueDate: "20th May",
    amount: "120",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    status: "upcoming",
  },
];

const tabs = [
  { key: "pending", label: "Pending" },
  { key: "upcoming", label: "Upcoming" },
];

export default function PaymentScreen() {
  const [activeTab, setActiveTab] = useState("pending");
  const { currentTheme } = useTheme();
  const themeColors = Colors[currentTheme];

  const getFilteredPayments = () => {
    return PAYMENTS.filter(payment => payment.status === activeTab);
  };

  const handlePaymentPress = (paymentId: string) => {
    // Handle payment press - could navigate to payment details
    console.log('Payment pressed:', paymentId);
  };

  return (
    <ThemedView style={{ flex: 1 }}>

      {/* Tabs */}
      <View style={[styles.tabs, { borderBottomColor: themeColors.icon + '20' }]}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tab,
              activeTab === tab.key && [styles.tabActive, { borderBottomColor: themeColors.tint }],
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <ThemedText
              style={[
                styles.tabText,
                { color: themeColors.icon },
                activeTab === tab.key && [styles.tabTextActive, { color: themeColors.tint }],
              ]}
            >
              {tab.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Payment List */}
      <FlatList
        data={getFilteredPayments()}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.paymentRow, { 
              backgroundColor: themeColors.background,
              borderBottomColor: themeColors.icon + '20'
            }]}
            onPress={() => handlePaymentPress(item.id)}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.paymentInfo}>
              <ThemedText type="defaultSemiBold" style={[styles.name, { color: themeColors.text }]}>
                {item.name}
              </ThemedText>
              <ThemedText style={[styles.due, { color: themeColors.icon }]}>
                Due: {item.dueDate}
              </ThemedText>
            </View>
            <View style={styles.paymentAmount}>
              <ThemedText type="defaultSemiBold" style={[styles.amount, { color: themeColors.text }]}>
                ${item.amount}
              </ThemedText>
            </View>
          </TouchableOpacity>
        )}
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
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
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
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
  },
  due: {
    fontSize: 14,
    marginTop: 2,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentAmount: {
    alignItems: "flex-end",
  },
});
