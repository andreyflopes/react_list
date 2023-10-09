
import { StyleSheet} from 'react-native';


 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1E25',
      alignItems: 'center',
      justifyContent: 'center',
      gap:15
    },

    title: {
        fontSize:25,
        fontWeight:'bold',
        color: '#FFFFFF',
        paddingBottom:10
    },

    input:{
        width: '50%',
        height: '5%',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius:5,
        margin:10,
        padding:10,
        backgroundColor: '#fff',
        fontWeight:'bold',
        color:'gray'
        // shadowColor: '#fff',
        // shadowOffset: {width: 0, height: 0},
        // shadowOpacity: 1,
        // shadowRadius: 15,
    },

    btn:{
        width: '50%',
        height: '5%',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red',
        shadowColor: '#f44336',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 20,

    }, 

    btnTxt:{
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    },
    


  });