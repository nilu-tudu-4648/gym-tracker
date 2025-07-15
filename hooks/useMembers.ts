import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Member } from '../types/Member';

const STORAGE_KEY = '@gymtracker_members';

export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    setLoading(true);
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setMembers(JSON.parse(data));
      } else {
        setMembers([]);
      }
    } catch (e) {
      setMembers([]);
    }
    setLoading(false);
  };

  const saveMembers = async (newMembers: Member[]) => {
    setMembers(newMembers);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newMembers));
  };

  const addMember = async (member: Omit<Member, 'id'>) => {
    const newMember = { ...member, id: uuidv4() };
    const newMembers = [...members, newMember];
    await saveMembers(newMembers);
    return newMember;
  };

  const updateMember = async (id: string, updates: Partial<Member>) => {
    const newMembers = members.map(m => m.id === id ? { ...m, ...updates } : m);
    await saveMembers(newMembers);
  };

  const deleteMember = async (id: string) => {
    const newMembers = members.filter(m => m.id !== id);
    await saveMembers(newMembers);
  };

  return {
    members,
    loading,
    addMember,
    updateMember,
    deleteMember,
    reload: loadMembers,
  };
} 