import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

// Mock data for dashboard
const DASHBOARD_DATA = {
  totalMembers: 247,
  activeMembers: 234,
  newMembersThisMonth: 12,
  membersDueForPayment: 8,
  totalRevenue: 15420,
  monthlyRevenue: 3240,
  averageCheckinsPerDay: 45,
  peakHours: "6-8 PM",
  equipmentUtilization: 78,
  classesToday: 8,
  trainersOnDuty: 4,
};

const RECENT_ACTIVITY = [
  {
    id: "1",
    member: "Ethan Carter",
    action: "Checked in",
    time: "2 min ago",
    type: "checkin",
  },
  {
    id: "2",
    member: "Liam Harper",
    action: "Payment received",
    time: "5 min ago",
    type: "payment",
  },
  {
    id: "3",
    member: "Noah Bennett",
    action: "Booked class",
    time: "12 min ago",
    type: "booking",
  },
  {
    id: "4",
    member: "Oliver Hayes",
    action: "Checked out",
    time: "15 min ago",
    type: "checkout",
  },
  {
    id: "5",
    member: "Elijah Foster",
    action: "Renewed membership",
    time: "1 hour ago",
    type: "renewal",
  },
];

const PAYMENT_DUE = [
  {
    id: "1",
    member: "James Coleman",
    amount: 89.99,
    dueDate: "Today",
    status: "overdue",
  },
  {
    id: "2",
    member: "William Brooks",
    amount: 89.99,
    dueDate: "Tomorrow",
    status: "due",
  },
  {
    id: "3",
    member: "Benjamin Reed",
    amount: 89.99,
    dueDate: "Dec 15",
    status: "upcoming",
  },
];

export default function DashboardScreen() {
  const { currentTheme } = useTheme();
  const themeColors = Colors[currentTheme];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue":
        return "#EF4444";
      case "due":
        return "#F59E0B";
      case "upcoming":
        return "#3B82F6";
      default:
        return "#10B981";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "checkin":
        return "log-in";
      case "checkout":
        return "log-out";
      case "payment":
        return "card";
      case "booking":
        return "calendar";
      case "renewal":
        return "refresh";
      default:
        return "ellipse";
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "checkin":
        return "#10B981";
      case "checkout":
        return "#6B7280";
      case "payment":
        return "#3B82F6";
      case "booking":
        return "#8B5CF6";
      case "renewal":
        return "#F59E0B";
      default:
        return "#6B7280";
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: themeColors.background }]} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <ThemedView style={styles.header} lightColor="#1A1A1A" darkColor="#fff">
        <View>
          <ThemedText type="title" style={styles.headerTitle}>
            Gym Dashboard
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Welcome back! Here&apos;s your gym overview
          </ThemedText>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color={themeColors.icon} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </ThemedView>

      {/* Key Metrics */}
      <ThemedView style={styles.metricsContainer} lightColor="#1A1A1A" darkColor="#fff">
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Key Metrics
        </ThemedText>
        <View style={styles.metricsGrid}>
          <View style={[styles.metricCard, { backgroundColor: themeColors.background }]}>
            <View style={styles.metricIconContainer}>
              <Ionicons name="people" size={20} color="#3B82F6" />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.metricValue}>
              {DASHBOARD_DATA.totalMembers}
            </ThemedText>
            <ThemedText style={styles.metricLabel}>Total Members</ThemedText>
          </View>

          <View style={[styles.metricCard, { backgroundColor: themeColors.background }]}>
            <View
              style={[
                styles.metricIconContainer,
                { backgroundColor: "#FEF3C7" },
              ]}
            >
              <Ionicons name="checkmark-circle" size={20} color="#F59E0B" />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.metricValue}>
              {DASHBOARD_DATA.activeMembers}
            </ThemedText>
            <ThemedText style={styles.metricLabel}>Active Members</ThemedText>
          </View>

          <View style={[styles.metricCard, { backgroundColor: themeColors.background }]}>
            <View
              style={[
                styles.metricIconContainer,
                { backgroundColor: "#DBEAFE" },
              ]}
            >
              <Ionicons name="trending-up" size={20} color="#3B82F6" />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.metricValue}>
              {DASHBOARD_DATA.newMembersThisMonth}
            </ThemedText>
            <ThemedText style={styles.metricLabel}>New This Month</ThemedText>
          </View>

          <View style={[styles.metricCard, { backgroundColor: themeColors.background }]}>
            <View
              style={[
                styles.metricIconContainer,
                { backgroundColor: "#FEE2E2" },
              ]}
            >
              <Ionicons name="alert-circle" size={20} color="#EF4444" />
            </View>
            <ThemedText type="defaultSemiBold" style={styles.metricValue}>
              {DASHBOARD_DATA.membersDueForPayment}
            </ThemedText>
            <ThemedText style={styles.metricLabel}>Payment Due</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Revenue Overview */}
      <ThemedView style={styles.revenueContainer} lightColor="#1A1A1A" darkColor="#fff">
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Revenue Overview
        </ThemedText>
        <View style={styles.revenueCards}>
          <View style={styles.revenueCard}>
            <ThemedText style={styles.revenueLabel}>Total Revenue</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.revenueValue}>
              ${DASHBOARD_DATA.totalRevenue.toLocaleString()}
            </ThemedText>
            <ThemedText style={styles.revenuePeriod}>All time</ThemedText>
          </View>
          <View style={styles.revenueCard}>
            <ThemedText style={styles.revenueLabel}>This Month</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.revenueValue}>
              ${DASHBOARD_DATA.monthlyRevenue.toLocaleString()}
            </ThemedText>
            <ThemedText style={styles.revenuePeriod}>December 2024</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Gym Activity */}
      <ThemedView style={styles.activityContainer} lightColor="#1A1A1A" darkColor="#fff">
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Gym Activity
        </ThemedText>
        <View style={styles.activityGrid}>
          <View style={styles.activityCard}>
            <Ionicons name="time" size={20} color="#10B981" />
            <ThemedText type="defaultSemiBold" style={styles.activityValue}>
              {DASHBOARD_DATA.averageCheckinsPerDay}
            </ThemedText>
            <ThemedText style={styles.activityLabel}>
              Avg Check-ins/Day
            </ThemedText>
          </View>
          <View style={styles.activityCard}>
            <Ionicons name="flash" size={20} color="#F59E0B" />
            <ThemedText type="defaultSemiBold" style={styles.activityValue}>
              {DASHBOARD_DATA.peakHours}
            </ThemedText>
            <ThemedText style={styles.activityLabel}>Peak Hours</ThemedText>
          </View>
          <View style={styles.activityCard}>
            <Ionicons name="fitness" size={20} color="#8B5CF6" />
            <ThemedText type="defaultSemiBold" style={styles.activityValue}>
              {DASHBOARD_DATA.equipmentUtilization}%
            </ThemedText>
            <ThemedText style={styles.activityLabel}>
              Equipment Usage
            </ThemedText>
          </View>
          <View style={styles.activityCard}>
            <Ionicons name="calendar" size={20} color="#3B82F6" />
            <ThemedText type="defaultSemiBold" style={styles.activityValue}>
              {DASHBOARD_DATA.classesToday}
            </ThemedText>
            <ThemedText style={styles.activityLabel}>Classes Today</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Payment Due */}
      <ThemedView style={styles.paymentContainer}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Payment Due
          </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.viewAllText}>View All</ThemedText>
          </TouchableOpacity>
        </View>
        {PAYMENT_DUE.map((payment) => (
          <View key={payment.id} style={styles.paymentRow}>
            <View style={styles.paymentInfo}>
              <ThemedText type="defaultSemiBold" style={styles.paymentMember}>
                {payment.member}
              </ThemedText>
              <ThemedText style={styles.paymentDueDate}>
                Due: {payment.dueDate}
              </ThemedText>
            </View>
            <View style={styles.paymentAmount}>
              <ThemedText type="defaultSemiBold" style={styles.paymentValue}>
                ${payment.amount}
              </ThemedText>
              <View
                style={[
                  styles.paymentStatus,
                  { backgroundColor: getStatusColor(payment.status) },
                ]}
              />
            </View>
          </View>
        ))}
      </ThemedView>

      {/* Recent Activity */}
      <ThemedView style={styles.recentContainer}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Recent Activity
          </ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.viewAllText}>View All</ThemedText>
          </TouchableOpacity>
        </View>
        {RECENT_ACTIVITY.map((activity) => (
          <View key={activity.id} style={styles.activityRow}>
            <View
              style={[
                styles.activityIcon,
                { backgroundColor: getActivityColor(activity.type) + "20" },
              ]}
            >
              <Ionicons
                name={getActivityIcon(activity.type) as any}
                size={16}
                color={getActivityColor(activity.type)}
              />
            </View>
            <View style={styles.activityInfo}>
              <ThemedText type="defaultSemiBold" style={styles.activityMember}>
                {activity.member}
              </ThemedText>
              <ThemedText style={styles.activityAction}>
                {activity.action}
              </ThemedText>
            </View>
            <ThemedText style={styles.activityTime}>{activity.time}</ThemedText>
          </View>
        ))}
      </ThemedView>

      {/* Quick Actions */}
      <ThemedView style={styles.quickActionsContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Quick Actions
        </ThemedText>
        <View style={styles.quickActionsGrid}>
          <TouchableOpacity style={styles.quickActionCard}>
            <Ionicons name="person-add" size={24} color="#3B82F6" />
            <ThemedText style={styles.quickActionText}>Add Member</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <Ionicons name="card" size={24} color="#10B981" />
            <ThemedText style={styles.quickActionText}>
              Process Payment
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <Ionicons name="calendar" size={24} color="#8B5CF6" />
            <ThemedText style={styles.quickActionText}>
              Schedule Class
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionCard}>
            <Ionicons name="analytics" size={24} color="#F59E0B" />
            <ThemedText style={styles.quickActionText}>View Reports</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  notificationButton: {
    position: "relative",
    padding: 8,
  },
  notificationBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },
  metricsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  metricCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: "#6B7280",
    textAlign: "center",
  },
  revenueContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  revenueCards: {
    flexDirection: "row",
    gap: 12,
  },
  revenueCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  revenueLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  revenueValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  revenuePeriod: {
    fontSize: 10,
    color: "#9CA3AF",
  },
  activityContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  activityGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  activityCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginVertical: 4,
  },
  activityLabel: {
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
  },
  paymentContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    color: "#3B82F6",
    fontWeight: "500",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  paymentInfo: {
    flex: 1,
  },
  paymentMember: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 2,
  },
  paymentDueDate: {
    fontSize: 12,
    color: "#6B7280",
  },
  paymentAmount: {
    alignItems: "flex-end",
  },
  paymentValue: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 4,
  },
  paymentStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  recentContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityMember: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 2,
  },
  activityAction: {
    fontSize: 12,
    color: "#6B7280",
  },
  activityTime: {
    fontSize: 11,
    color: "#9CA3AF",
  },
  quickActionsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  quickActionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quickActionText: {
    fontSize: 12,
    color: "#374151",
    marginTop: 8,
    textAlign: "center",
  },
});
