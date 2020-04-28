import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Text, Button } from 'react-native-paper';
import { FlatList} from 'react-native'
import { GradientButton, AnchorButton, Label, CurvedButton, Grid } from '../../common/components';
import BestGrid from '../../common/components/BestGrid/BestGrid';


export const Home = ({ navigation }) => {
    return (
        <View>

            <View style={{  }}>
                <Label  xxl style={{}} title={"Memory Point"} />
            </View>

            <View style={{  }}>
                <Label  l style={{}} title={"Name of the place"} />
            </View>



            <View style={{  }}>
                <Label  m style={{}} title={"Description of the place"} />
            </View>

            <BestGrid/>


            <Text>This is Home changed component </Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
             </Button>
        </View>
    )
}