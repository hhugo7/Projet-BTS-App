import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { PieChartOutlined } from '@ant-design/icons';
import { EuroOutlined } from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigation } from '@react-navigation/core'


export default function Home() {

  const navigation = useNavigation()

  HandleNavigate = (path) => {
    navigation.replace(path)
    console.log(path)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dashbord}>Dashboard</Text>
      <View style={styles.item}>
        <View style={styles.itemContent}> 
          <PieChartOutlined style={styles.icon} />
          <Text style={styles.text}>Total Items : </Text>
        </View>
        <View style={styles.itemContent}>
          <EuroOutlined style={styles.icon} />
          <Text style={styles.text}>Total Value : </Text>
        </View>
        <TouchableOpacity onPress={() => HandleNavigate('Stock')} style={styles.logout}>
          <Text>Check Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => HandleNavigate('EditItem')} style={styles.logout}>
          <Text>Edit Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => HandleNavigate('AddItem')}  style={styles.logout}>
          <Text>Add Items</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity>
      <SettingOutlined style={styles.icon} />
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    color: '#3D3D3D',
    backgroundColor: '#fff',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    userSelect: 'none',
    margin: 10,
  },
  dashbord: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  item: {
    borderRadius: 6,
    color: 'grey',
    backgroundColor: '#D9D9D9',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    margin: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 6,
    color: '#3D3D3D',
    backgroundColor: '#fff',
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    margin: 10,
    width: '90%',
  },
  icon: {
    fontSize: 40,
    marginRight: 10,
},
  text: {
    fontSize: 17,
  },
});
