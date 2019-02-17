import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, FlatList} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets(1)/assets/imgs/today.jpg';
import commonStyle from '../commonStyle';
import { Font } from 'expo';
import Task from '../components/Task';



export default class Agenda extends Component {

   
    // aqui eu inicio com falso e apenas quando a fonte estiver pronta, ele passa a ser verdadeiro.
  state = { 
    fontLoaded: false,

    tasks: [
        {id: Math.random(), desc: 'comprar curso',
            estimateAt: new Date(), doneAt: new Date()},
        {id: Math.random(), desc: 'concluir curso',
            estimateAt: new Date(), doneAt: null},
        {id: Math.random(), desc: 'concluir curso',
            estimateAt: new Date(), doneAt: null},
        {id: Math.random(), desc: 'concluir curso',
            estimateAt: new Date(), doneAt: new Date()},
    ]
  };
  // async e await garantem que o estado da fonte so será alterado após esse processo ser feito.
  async componentDidMount() {
    await Font.loadAsync({
         'Lato': require('../../assets(1)/assets/fonts/Lato.ttf')
     });

    this.setState({ fontLoaded: true });
   }

    render() {
        return (
            <View style={styles.container}>
            {this.state.fontLoaded? (
                <View>
                <ImageBackground source={require('../../assets(1)/assets/imgs/today.jpg')} 
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
               
                </ImageBackground>
                
                <View style={styles.tasksContainer}>
                <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item} />} />
                </View>
            </View>
                ): (<ActivityIndicator size="large"/>
            )}
            </View >    
        )
       
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        width: 180 * 2, 
        height: 100 * 2,
        flex: 1,
    },
    titleBar: {
        flex: 1,
        
        justifyContent: 'flex-start',
    },
    title: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        fontSize: 50,
        marginLeft: '5%',
        marginBottom: '2%',
        marginTop: '20%',

    },
    subtitle: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        marginLeft: '6%',
        marginBottom: '5%',

    },
    tasksContainer: {
        
        marginTop: '55%',
        flex: 7,
        

    }
})