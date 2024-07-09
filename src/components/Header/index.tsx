import React  from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Header,Icon, Badge } from '@rneui/themed';
import { fonts } from '../../utils/fonts';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

type Props ={
    title: string,
    amount: number,
    showBackButton?: boolean,
    showPokeDexButton? : boolean
}

const Cell: React.FC<Props> = ({title,amount, showBackButton = false, showPokeDexButton = false }): React.JSX.Element => {

    const navigation = useNavigation<any>();
    return (
        <Header 
            backgroundColor={colors.backgroundColorExtra}
            testID='' 
            centerComponent={<Text style={Styles.title}>{title}</Text>}
            leftComponent={
                showBackButton ? <Icon 
                    size={25}
                    name='arrow-back-ios'
                    type='material-icons'
                    color='white'
                    onPress={()=> navigation.goBack()}
                    style={{padding: 10}}
                 />:
                <View/>
            }
            rightComponent={
                showPokeDexButton?<>
                        <Icon
                            size={25}
                            name='catching-pokemon'
                            type='material-icons'
                            color='red'
                            onPress={()=> navigation.navigate("pokedex")}
                            />
                        <Badge
                            status="success"
                            value={amount}
                            textStyle={{fontFamily: fonts.fontFamilyPrimary, letterSpacing: 3}}
                            badgeStyle={{backgroundColor: colors.darkGreen, borderColor: colors.darkGreen,}}
                            containerStyle={{ position: 'absolute', top: 0, left: 35, zIndex: -1 }}/>
                        </>
                        : <View/>
               
            }
            rightContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
         />
    );
}

const Styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontFamily: fonts.fontFamilyPrimary,
        color: colors.fontColorPrimary,
        letterSpacing: 5 , 
        
    },
})
export default Cell;    