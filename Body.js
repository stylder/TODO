import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, } from 'react-native';
import Tarea from './Tarea';


export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        {this.props.cargando
        && (
          <ActivityIndicator

            size="large"
            color="#640064"
          />
        )
        }

        {!this.props.cargando && (
          <FlatList
            data={this.props.tareas}
            renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar}/>}
          />
        )}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#8bffa7',
  },
});
