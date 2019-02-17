import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/pt-br';
import commonStyle from '../commonStyle';

// aqui vamos verificar se a tarefa ja foi concluida
export default props => {
    let check = null
    if (props.doneAt !== null) { // se a tarefa foi concluida, ela precisa estar checada
        check = (
            <View style={styles.done}>
                <Ionicons name='md-checkmark' size={20} 
                    color={commonStyle.colors.secondary} />
               
                
            </View>
        )
    } else {
        check = <View style={styles.pending} />
    }

    const descStyle = props.doneAt !== null ? 
    { textDecorationLine: 'line-through' } : {}

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>{check}</View>
            <View>
                <Text style={[styles.description, descStyle]}>
                    {props.desc}
                </Text>
                <Text style={styles.date}>{moment(props.estimateAt).locale('pt-br').format('ddd, D[de] MMMM')}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyle.fontFamily,  
        color: commonStyle.colors.subText,
        fontSize: 12,
    }


})