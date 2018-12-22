import React from 'react';
import { AsyncStorage, StyleSheet, View, } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  componentDidMount() {
    this.recuperarEnTelefono();
  }


  establecerTexto = (value) => {
    console.log(value);
    this.setState({
      texto: value,
    });
  };

  agregarTarea = () => {
    if (this.state.texto) {
      const nuevasTareas = [...this.state.tareas, {
        texto: this.state.texto,
        key: Date.now(),
      }];

      this.setState({
        texto: '',
        tareas: nuevasTareas,
      });
      this.guardarEnTelefono(nuevasTareas);
      console.log('Tareas', this.state);
    }
  };

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);

    this.guardarEnTelefono(nuevasTareas);

    this.setState({
      tareas: nuevasTareas,
    });
  };


  guardarEnTelefono = (nuevasTareas) => {
    console.log('guardarEnTelefono', nuevasTareas);

    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(nuevasTareas))
      .then((valor) => {
        console.log('Async', valor);
      })
      .catch((error) => {
        console.log('Async Error', error);
      });
  };


  recuperarEnTelefono = () => {
    console.log('recuperarEnTelefono');
    AsyncStorage.getItem('@AppCursoUdemy:tareas')
      .then((valor) => {
        setTimeout(() => {
          this.setState({ cargando: false });
        }, 1000);
        if (valor !== null) {
          this.setState({
            tareas: JSON.parse(valor)
          });
          console.log('Async', JSON.parse(valor));
        }
      })
      .catch((error) => {
        console.log('Async Error', error);
      });
  };


  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />

        <Body
          cargando={this.state.cargando}
          eliminar={this.eliminarTarea}
          tareas={this.state.tareas}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
