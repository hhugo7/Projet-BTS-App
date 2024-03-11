import { StyleSheet, Text, TextInput, View } from 'react-native';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { Icon } from '@rneui/themed';
import { PieChartOutlined } from '@ant-design/icons';
import { EuroOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.dashbord} >Dashbord</Text>
      <button style={styles.logout}>Log out</button>
      </View>
      <View styles={styles.item}>
        <backgroundColor>
        <PieChartOutlined />
        <Text>Total Items</Text>
        <Text>{}</Text>
        </backgroundColor>
      </View>
      <EuroOutlined />
      <Text>Total Value</Text>
      <Text>{}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    color: 'black',
    flexDirection: 'row',
  },
  logout: {
    width: 100,
    marginLeft: 'auto',
  },
  dashbord: {
    fontSize: 30,
  },
  item: {
    width: 500,
    justifyContent: 'center',
    display: 'flex',
    
  },
});
