import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import RollbackOutlined from '@ant-design/icons';
import TableItem from '../component/TableItem';

export default function AddItem() {

    const navigation = useNavigation();

    const HandleNavigate = () => {
        navigation.replace('Home');
        console.log('Home');
    };  

    return (
        <View>
            <View>
                <RollbackOutlined style={styles.icon} onPress={HandleNavigate}/>
            </View>

            <View style={styles.inputview}>
                <TextInput
                  placeholder="Numéro de série"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Taille"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Couleur"
                  style={styles.input}
                />
                 <TextInput
                  placeholder="Marque"
                  style={styles.input}
                />
            </View>     

            <TableItem />    
        </View>
    );
}

const styles = StyleSheet.create({

    dashbord: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },

    icon: {
        fontSize: 40,
        marginRight: 10,
    },

    inputview: {
        marginTop: 30,
        marginBottom: 40,
        display: 'inline',
        width: 'fit-content',
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    input: 
    {
        height: 5,
        borderRadius: 6,
        color: '#ECECEC',
        backgroundColor: '#9E9E9E',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        width: 170,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginRight: 20,
        margin: 7   ,
        fontSize: 10,
      },
      
});

