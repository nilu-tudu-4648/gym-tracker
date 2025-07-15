export interface Member {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  membershipType: string;
  membershipStart: string;
  membershipEnd: string;
  status: 'active' | 'expired' | 'suspended';
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  notes?: string;
  profilePhoto?: string;
} 