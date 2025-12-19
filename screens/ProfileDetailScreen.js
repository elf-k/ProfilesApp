import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { api } from '../api/client';

export default function ProfileDetailScreen({ route }) {
  const { id } = route.params; 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/profiles/${id}`); 
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{flex: 1}} />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{profile?.name}</Text>
        <Text style={styles.label}>Email: {profile?.email}</Text>
        <Text style={styles.label}>Age: {profile?.age}</Text>
        <Text style={styles.bio}>{profile?.bio}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  card: { margin: 16, padding: 20, backgroundColor: 'white', borderRadius: 12 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  bio: { marginTop: 15, fontStyle: 'italic' }
});
