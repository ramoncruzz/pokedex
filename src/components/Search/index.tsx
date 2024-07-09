import React  from 'react'
import { StyleSheet, View } from 'react-native';



type Props ={
    onChangeText: (text: string) => void
    
}



const Cell: React.FC<Props> = ({onChangeText}): React.JSX.Element => {

    return (
       <View /> 
    );
}

const Styles = StyleSheet.create({
    main: {
        flex:4, 
        flexDirection: 'row',
    },
   
})
export default React.memo(Cell);    