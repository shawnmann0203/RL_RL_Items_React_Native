import React from "react";
import{
    StyleSheet,
    View,
    Text
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { COLORS, images, icons, FONTS, SIZES } from "../constants";

const Home = () => {
    
    //Made up Data
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "NRG Pro Jersey",
            img: images.nrgJersey,
            type: "Clothing",
            price: "$70",
            sizes: ["S", "M", "L"]
        },
        {
            id: 1,
            name: "Vitality Pro Jersey",
            img: images.vitJersey,
            type: "Clothing",
            price: "$70",
            sizes: ["S", "M", "L"]
        },
    ]);
    
    function renderTrendingItems(item, index) {
        return (
            <View>
                <Text>{item.type}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold}}>TRENDING</Text>

            {/*Trending*/}
            <View style={{ height: 260, marginTop: SIZES.radius}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderTrendingItems(item, index)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})

export default Home;