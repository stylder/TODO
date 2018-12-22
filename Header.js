import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          placeholder="Aquí escribe tu texto... "
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#42ff42',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
