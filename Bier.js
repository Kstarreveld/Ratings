import { Text, View, Button, Image} from 'react-native';

export const Bier = (props) =>
{
   return (<View>
                    <Text>Ik ben { props.naam != null ? props.naam :  "onbekend" }</Text>
                    <Button  title="like" onPress={()=>console.log("clicked "+  props.naam)}>test</Button>
                    <Image source={require('./assets/beer.jpg')} style={{width:40,height:80}} ></Image>
            </View>);
}
