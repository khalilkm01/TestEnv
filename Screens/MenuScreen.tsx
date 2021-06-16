import {
    Animated,
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, { useState } from "react";

import DropDownPicker from 'react-native-dropdown-picker';
import foods from "../items";

const MenuScreen = ({route,navigation}: any) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [categories,setCategories] = useState(['Main Courses', 'Shawarmas + Burgers', 'Pizza', 'Gurasa','Beef','Chicken','Sides']);
    const [items,setItems] = useState([
      {label: 'The Main Courses',value:'Main Courses'},
      {label: 'Shawarmas & Burgers',value:'Shawarmas + Burgers'},
      {label: 'Pizzas',value:'Pizza'},
      {label: 'Gurasas',value:'Gurasa'},
      {label: 'Beef Selection',value:'Beef'},
      {label: 'Chicken Selection',value:'Chicken'},
      {label: 'The Sides',value:'Sides'},
  ])
    const [open,setOpen] = useState(false);
    const [theCategory, setTheCategory] = useState(categories[0]);

    const AddToOrder = (id: string) => {
      
    };
    
    const changeCategory = (category: string) =>{
      setTheCategory(category)
    }

    return (
        <View style={styles.container}>
          <View style={styles.dropDownContainer}>
          <TouchableOpacity style={styles.orderButton} onPress={()=>navigation.replace('Order')}>
              <Text style={styles.orderText}>Order</Text>
            </TouchableOpacity>
            <DropDownPicker
            listMode="MODAL"
            open={open}
            value={theCategory}
            items={items}
            setOpen={setOpen}
            setValue={setTheCategory}
            setItems={setItems}
            style={styles.dropDown}
            />
            
          
          </View>

          <View style={styles.scrollContainer} onLayout={()=>changeCategory(categories[0])}>
              
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

                  const { id, Name, Description, Available, Price, Img, Category} =
                  item;
                  var priceTXT = '';

                  if (Price.Small){
                      priceTXT = 'Small: N' + Price.Small + '\n'
                  }
                  if (Price.Regular){
                      priceTXT = priceTXT + 'Regular: N' + Price.Regular + '\n'
                  }
                  if (Price.Large){
                      priceTXT = priceTXT + 'Large: N' + Price.Large + '\n'
                  }

                  if ((Category === theCategory)) {
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
                          <Text style={styles.itemPrice}>{priceTXT}</Text>
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
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      },
      dropDownContainer: {
        width: '100%',
        flexDirection: "row",
        elevation: 1
      },
      dropDown:{
        borderWidth: 0,
        width: '80%'
      },
      orderButton: {
        backgroundColor: "#02ccf0",
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 1,
        padding:5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        margin: 2,
        marginHorizontal: 3,
        height: 40,
        width: '20%'
      },
      categoriesText: {
        color: 'white',
        fontSize: 16
      },
      scrollContainer: {
        flex: 8,
        width: "100%",
      },
      itemBox: {
        marginLeft: 12.5,
        marginRight: 12.5,
        marginTop: 15,
        height: 70,
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
        width: 180,
        alignItems: 'center'
      },
      imageContainer: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        paddingLeft:5,
        marginRight: 20,
        borderRadius: 20,
        left:5,
      },
      infoContainer: {
        paddingRight: 5,
        width: "85%",
        flexDirection: "column",
      },
      orderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 13,
        left: 5,
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
        paddingTop: 10,
        fontSize: 14,
        fontFamily: "Avenir-Heavy",
        fontWeight: '600'
      },
      itemDesc: {
        fontSize: 10,
        fontFamily: "Avenir-Light",
        opacity: 0.7,
      },
      itemPrice: {
        fontFamily: 'Avenir-Light',
        alignSelf: 'flex-start',
        fontSize: 10,
      },
      img: {
        width: "100%",
        height: "100%",
        borderRadius: 7,
      },
      orderText: {
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 10
      }
})
