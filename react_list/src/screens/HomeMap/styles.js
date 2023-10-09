
import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
   container: {
        backgroundColor: '#1F1E25',

        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
       
   },

   title: {
       fontSize:25,
       fontWeight:'bold',
       color: '#f44336',

       paddingBottom:10,

       marginTop:50
   },

   itemList:{
    fontSize:16,
    fontWeight:'400',
    borderRadius:5,
    color: '#000',
    backgroundColor:'#ffe',
    width:'60%',
    margin:10,
    padding:10
   }

 });