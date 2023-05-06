import { StyleSheet, View, Image, Text } from 'react-native';

const Profile = ({ uri, name, message = '', isMine = false }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image(isMine)} />
      <View style={styles.textContainer}>
        <Text style={styles.name(isMine)}>{name}</Text>
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image(isMine) {
    return {
      width: isMine ? 60 : 50,
      height: isMine ? 60 : 50,
      borderRadius: 20,
    };
  },
  textContainer: {
    marginLeft: 10,
  },
  name(isMine) {
    return {
      fontWeight: 'bold',
      fontSize: isMine ? 17 : 15,
    };
  },
  message: {
    color: '#888',
    marginTop: 8,
  },
});

export default Profile;
