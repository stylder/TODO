import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Tarea extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          {this.props.item.texto}
        </Text>

        <TouchableOpacity onPress={() => {
          this.props.eliminar(this.props.item.key);
        }}
        >
          <Ionicons
            name="md-trash"
            size={24}
            color="gray"
          />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  texto: {
    fontSize: 24,
  },
});
