import {
    Animated,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";

import foods from "../items";

const MenuScreen = ({route,navigation}: any) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const [food, setFood] = useState(foods);
    
    const [theOrder,setTheOrder]= useState(route.params.order);

    const AddToOrder = (id: string) => {
      const arrHold= theOrder
      arrHold.push(id)
      setTheOrder(arrHold)
    };

    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.menuTitle}>{theOrder}</Text>
          </View>

          <View style={styles.scrollContainer}>
              
              <Animated.FlatList
              data={foods}
              onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: true }
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                  const inputRange = [-1, 0, 95 * index, 95 * (index + 2)];

                  const opacityInputRange = [-1, 0, 95 * index, 95 * (index + 0.5)];

                  const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0],
                  });
                  const opacity = scrollY.interpolate({
                  inputRange: opacityInputRange,
                  outputRange: [1, 1, 1, 0],
                  });

                  const { id, Name, Description, Available, Price, Img} =
                  item;

                  if (Available) {
                  return (
                      <Animated.View
                      style={[
                          styles.itemBox,
                          { transform: [{ scale }] },
                          { opacity },
                      ]}
                      >
                       
                      <View style={styles.imageContainer}>
                          <Image
                          style={styles.img}
                          source={Img}
                          />
                      </View>

                      <View style={styles.mainContainer}>
                          <View style={styles.infoContainer}>
                          <Text style={styles.itemName}>{Name}</Text>

                          <Text style={styles.itemDesc}>{Description}.</Text>
                          <Text style={styles.itemPrice}>N{Price}</Text>
                          </View>
                          <View >
                          <TouchableOpacity style={styles.orderContainer} onPress={() => AddToOrder(id)}>
                              <Text style={styles.orderText}>Add To Order</Text>
                          </TouchableOpacity>
                          </View>
                      </View>
                      
                      </Animated.View>
                  );
                  }
              }}
              />
          </View>
        </View>
    );
}

export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(224,224,224,0.3)",
        alignItems: "center",
        justifyContent: "center",
      },
      header: {
        flex: 1,
        backgroundColor: "#02ccf0",
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column-reverse",
      },
      scrollContainer: {
        flex: 8,
        width: "100%",
      },
      itemBox: {
        marginLeft: 12.5,
        marginRight: 12.5,
        marginTop: 15,
        height: 80,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#383838",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2,
      },
      
      mainContainer: {
        flexDirection: "row",
        width: 180
      },
      imageContainer: {
        height: 60,
        width: 64,
        alignSelf: 'center',
        paddingLeft:5,
        marginRight: 10,
        borderRadius: 20,
      },
      infoContainer: {
        paddingRight: 20,
        width: "80%",
        flexDirection: "column",
      },
      orderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
        borderRadius: 5,
        backgroundColor: '#02ccf0',
        height: 35,
        textAlign: 'center',
      },
      menuTitle: {
        fontSize: 32,
        padding: 7,
        color: "#f2f2f2",
        fontFamily: "Avenir-Heavy",
      },
      itemName: {
        fontSize: 24,
        fontFamily: "Avenir-Medium",
        fontWeight: '400'
      },
      itemDesc: {
        fontSize: 18,
        fontFamily: "Avenir-Light",
        opacity: 0.7,
      },
      itemPrice: {
        fontFamily: 'Avenir-Heavy',
        alignSelf: 'flex-start',
        left: 0
      },
      img: {
        width: "100%",
        height: "100%",
        borderRadius: 7,
      },
      orderText: {
        color: 'white',
        padding: 10,
      }
})
