import React, {Component} from 'react';
import { TextBase,View ,StyleSheet} from 'react-native';
import Simples from './componentes/Simples'



export default class App extends Component{
render(){
return (
<View style={estilos.container}>
<Simples/>
</View>


);
}

}