import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

// Mock customer data - in a real app, this would come from an API
const CUSTOMER_DATA = {
  "1": {
    id: "1",
    name: "Ethan Carter",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "ethan.carter@email.com",
    phone: "+1 (555) 123-4567",
    joinDate: "January 15, 2024",
    membershipType: "Premium",
    lastVisit: "2 days ago",
    totalVisits: 45,
    personalTrainer: "Sarah Johnson",
    emergencyContact: "Emma Carter",
    emergencyPhone: "+1 (555) 987-6543",
    address: "123 Main Street, City, State 12345",
    notes: "Prefers morning workouts. Allergic to peanuts.",
  },
  "2": {
    id: "2",
    name: "Liam Harper",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "liam.harper@email.com",
    phone: "+1 (555) 234-5678",
    joinDate: "February 3, 2024",
    membershipType: "Standard",
    lastVisit: "1 week ago",
    totalVisits: 23,
    personalTrainer: "Mike Davis",
    emergencyContact: "Olivia Harper",
    emergencyPhone: "+1 (555) 876-5432",
    address: "456 Oak Avenue, City, State 12345",
    notes: "Focuses on strength training. Enjoys group classes.",
  },
  "3": {
    id: "3",
    name: "Noah Bennett",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "noah.bennett@email.com",
    phone: "+1 (555) 345-6789",
    joinDate: "March 10, 2024",
    membershipType: "Premium",
    lastVisit: "Today",
    totalVisits: 67,
    personalTrainer: "Alex Chen",
    emergencyContact: "Sophia Bennett",
    emergencyPhone: "+1 (555) 765-4321",
    address: "789 Pine Street, City, State 12345",
    notes: "Cardio enthusiast. Training for marathon.",
  },
  "4": {
    id: "4",
    name: "Oliver Hayes",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "oliver.hayes@email.com",
    phone: "+1 (555) 456-7890",
    joinDate: "December 20, 2023",
    membershipType: "Standard",
    lastVisit: "3 days ago",
    totalVisits: 34,
    personalTrainer: "Jessica Wilson",
    emergencyContact: "Ava Hayes",
    emergencyPhone: "+1 (555) 654-3210",
    address: "321 Elm Street, City, State 12345",
    notes: "Yoga and flexibility focus. Recovering from injury.",
  },
  "5": {
    id: "5",
    name: "Elijah Foster",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "elijah.foster@email.com",
    phone: "+1 (555) 567-8901",
    joinDate: "January 8, 2024",
    membershipType: "Premium",
    lastVisit: "Yesterday",
    totalVisits: 89,
    personalTrainer: "David Brown",
    emergencyContact: "Isabella Foster",
    emergencyPhone: "+1 (555) 543-2109",
    address: "654 Maple Drive, City, State 12345",
    notes: "Bodybuilding focus. Competes in local competitions.",
  },
  "6": {
    id: "6",
    name: "James Coleman",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "james.coleman@email.com",
    phone: "+1 (555) 678-9012",
    joinDate: "February 28, 2024",
    membershipType: "Standard",
    lastVisit: "5 days ago",
    totalVisits: 12,
    personalTrainer: "Lisa Garcia",
    emergencyContact: "Mia Coleman",
    emergencyPhone: "+1 (555) 432-1098",
    address: "987 Cedar Lane, City, State 12345",
    notes: "New member. Learning basic exercises.",
  },
  "7": {
    id: "7",
    name: "William Brooks",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "william.brooks@email.com",
    phone: "+1 (555) 789-0123",
    joinDate: "November 15, 2023",
    membershipType: "Premium",
    lastVisit: "1 day ago",
    totalVisits: 156,
    personalTrainer: "Robert Taylor",
    emergencyContact: "Charlotte Brooks",
    emergencyPhone: "+1 (555) 321-0987",
    address: "147 Birch Road, City, State 12345",
    notes: "Long-time member. Fitness enthusiast.",
  },
  "8": {
    id: "8",
    name: "Benjamin Reed",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "benjamin.reed@email.com",
    phone: "+1 (555) 890-1234",
    joinDate: "March 5, 2024",
    membershipType: "Standard",
    lastVisit: "4 days ago",
    totalVisits: 28,
    personalTrainer: "Amanda White",
    emergencyContact: "Luna Reed",
    emergencyPhone: "+1 (555) 210-9876",
    address: "258 Spruce Court, City, State 12345",
    notes: "Functional training focus. Wants to improve mobility.",
  },
};

export default function CustomerDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { currentTheme } = useTheme();
  const themeColors = Colors[currentTheme];
  const customer = CUSTOMER_DATA[id as keyof typeof CUSTOMER_DATA];

  if (!customer) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Customer not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: themeColors.background, borderBottomColor: themeColors.icon + '20' }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={themeColors.text} />
        </TouchableOpacity>
        <ThemedText type="title" style={[styles.headerTitle, { color: themeColors.text }]}>
          Customer Profile
        </ThemedText>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={24} color={themeColors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={[styles.profileSection, { backgroundColor: themeColors.background }]}>
          <Image source={{ uri: customer.avatar }} style={styles.profileAvatar} />
          <View style={styles.profileInfo}>
            <ThemedText type="title" style={[styles.customerName, { color: themeColors.text }]}>
              {customer.name}
            </ThemedText>
            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />
              <ThemedText style={styles.statusText}>{customer.status}</ThemedText>
            </View>
            <ThemedText style={[styles.membershipType, { color: themeColors.icon }]}>{customer.membershipType} Member</ThemedText>
          </View>
        </View>

        {/* Contact Information */}
        <View style={[styles.section, { borderBottomColor: themeColors.icon + '20' }]}>
          <ThemedText type="defaultSemiBold" style={[styles.sectionTitle, { color: themeColors.text }]}>
            Contact Information
          </ThemedText>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>{customer.email}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>{customer.phone}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>{customer.address}</ThemedText>
          </View>
        </View>

        {/* Membership Details */}
        <View style={[styles.section, { borderBottomColor: themeColors.icon + '20' }]}>
          <ThemedText type="defaultSemiBold" style={[styles.sectionTitle, { color: themeColors.text }]}>
            Membership Details
          </ThemedText>
          <View style={styles.infoRow}>
            <Ionicons name="calendar-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>Joined: {customer.joinDate}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>Last Visit: {customer.lastVisit}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="fitness-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>Total Visits: {customer.totalVisits}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>Trainer: {customer.personalTrainer}</ThemedText>
          </View>
        </View>

        {/* Emergency Contact */}
        <View style={[styles.section, { borderBottomColor: themeColors.icon + '20' }]}>
          <ThemedText type="defaultSemiBold" style={[styles.sectionTitle, { color: themeColors.text }]}>
            Emergency Contact
          </ThemedText>
          <View style={styles.infoRow}>
            <Ionicons name="person-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>{customer.emergencyContact}</ThemedText>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color={themeColors.icon} />
            <ThemedText style={[styles.infoText, { color: themeColors.icon }]}>{customer.emergencyPhone}</ThemedText>
          </View>
        </View>

        {/* Notes */}
        <View style={[styles.section, { borderBottomColor: themeColors.icon + '20' }]}>
          <ThemedText type="defaultSemiBold" style={[styles.sectionTitle, { color: themeColors.text }]}>
            Notes
          </ThemedText>
          <View style={[styles.notesContainer, { backgroundColor: themeColors.icon + '10' }]}>
            <ThemedText style={[styles.notesText, { color: themeColors.icon }]}>{customer.notes}</ThemedText>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: themeColors.tint }]}>
            <Ionicons name="call" size={20} color="#fff" />
            <ThemedText style={styles.actionButtonText}>Call</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: themeColors.tint }]}>
            <Ionicons name="mail" size={20} color="#fff" />
            <ThemedText style={styles.actionButtonText}>Email</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: themeColors.tint }]}>
            <Ionicons name="calendar" size={20} color="#fff" />
            <ThemedText style={styles.actionButtonText}>Schedule</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  customerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#10B981",
    marginRight: 6,
  },
  statusText: {
    color: "#10B981",
    fontSize: 14,
    fontWeight: "500",
  },
  membershipType: {
    fontSize: 14,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 14,
    flex: 1,
  },
  notesContainer: {
    padding: 12,
    borderRadius: 8,
  },
  notesText: {
    fontSize: 14,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    paddingBottom: 40,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
}); 