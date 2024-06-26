import {PRESSICON} from '@assets/icons';
import ClashArena from '@components/ClashArena';
import CustomText from '@components/CustomText';
import FeedLastSection from '@components/FeedLastSection';
import Header from '@components/Header';
import Wrapper from '@components/Wrapper';
import {setUser} from '@redux/reducers/userReducer';
import {navigate} from '@services/nav.service';
import {COLORS} from '@theme/colors';
import {RF} from '@theme/responsive';
import {ROUTES} from '@utils/routes';
import React, { useState } from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {useDispatch} from 'react-redux';
import { styles } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('Proximas');

  return (
    <Wrapper noPaddingBottom bgColor={COLORS.WHITE}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: RF(15),
          backgroundColor: COLORS.WHITE,
          flexGrow: 1,
        }}>
        <View
          style={{
            marginTop: RF(30),
            backgroundColor: COLORS.darkBlue,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: RF(20),
            padding: RF(15),
            paddingHorizontal: RF(20),
            borderRadius: RF(20),
          }}>
          <Pressable
            onPress={() => {
              navigate(ROUTES.STORE);
              // dispatch(setUser(null));
            }}>
            <Image
              source={PRESSICON}
              // tintColor={COLORS.WHITE
              resizeMode="contain"
              style={{width: RF(55), height: RF(55)}}
            />
          </Pressable>
          <View style={{alignItems: 'center'}}>
            <CustomText
              size={30}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              17
            </CustomText>
            <CustomText
              size={10}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              Clases restantes
            </CustomText>
          </View>
        </View>
        <View style={{marginHorizontal: RF(20), marginTop: RF(30)}}>
          <CustomText
            size={25}
            color={COLORS.darkBlue}
            // style={styles.boldHeading}
          >
            Sesiones
          </CustomText>
        </View>
        {/* <View
          style={{
            marginTop: RF(30),
            // alignItems: 'flex-end',
            marginHorizontal: RF(20),
            // padding: RF(10),
            height: RF(38),
            backgroundColor: '#F0F2F4',
            borderRadius: RF(20),
          }}>
          <View
            style={{
              backgroundColor: COLORS.darkBlue,
              alignSelf: 'flex-end',
              width: '55%',
              height: '100%',
              borderRadius: RF(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              size={16}
              color={COLORS.WHITE}
              // style={styles.boldHeading}
            >
              Pasadas
            </CustomText>
          </View>
        </View> */}
     <View style={styles.containernew}>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'Proximas' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => setActiveButton('Proximas')}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === 'Proximas' ? styles.activeButtonText : styles.inactiveButtonText,
          ]}
        >
          Proximas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeButton === 'Pasadas' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => setActiveButton('Pasadas')}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === 'Pasadas' ? styles.activeButtonText : styles.inactiveButtonText,
          ]}
        >
          Pasadas
        </Text>
      </TouchableOpacity>
    </View>

{
activeButton === 'Proximas'

&&
<>

    <View
    style={{
      marginHorizontal:RF(20),
      marginTop:RF(10)
    }}
    >
      <Text
        style={{
          fontSize:18,
          fontWeight:"400",
          color:'#00284D',
          marginBottom:RF(5)
        }}
      
      >JUEVES 15 DE MARZO</Text>
      <View
      style={{
        flexDirection:"row",
        width:RF(270),
        height:RF(75),
        backgroundColor:'#F0F3F4',
        borderRadius:RF(10),
        justifyContent:'space-between',
        alignItems:"center",
        paddingHorizontal:RF(10)
      }}    
      >
        <View>
          <Text
          style={{
            fontSize:20,
            fontWeight:"700",
            color:'#00284D'
          }}
          >8:00 AM</Text>
          <View
          style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:RF(5)
          }}
          >
            <View
           style={{
            width:RF(10),
            height:RF(10),
            borderRadius:RF(10),
            backgroundColor:"#31BC50",
            marginRight:RF(5)
           }} 
            />
                <Text
                style={{
                  color:'#31BC50',
                  fontSize:15
                }}
                >
          Reserva confirmada
          </Text>
          </View>
      
       
        </View>
        <View>
          <Text
          style={{
            color:'#00284D',
            fontSize:12
          }}
          >Nombre de la coach</Text>
          <Text
          style={{
            color:'#00284D',
            fontSize:12,
            textAlign:"right",
            marginTop:RF(5)
          }}
          >Lugar 1</Text>
        </View>

      </View>
    </View>
    <View
    style={{
      marginHorizontal:RF(20),
      marginTop:RF(10)
    }}
    >
      <Text
        style={{
          fontSize:18,
          fontWeight:"400",
          color:'#00284D',
          marginBottom:RF(5)
        }}
      
      >
        VIERNES 16 DE MARZO
      </Text>
      <View
      style={{
        flexDirection:"row",
        width:RF(270),
        height:RF(75),
        backgroundColor:'#F0F3F4',
        borderRadius:RF(10),
        justifyContent:'space-between',
        alignItems:"center",
        paddingHorizontal:RF(10)
      }}    
      >
        <View>
          <Text
          style={{
            fontSize:20,
            fontWeight:"700",
            color:'#00284D'
          }}
          >8:00 AM</Text>
          <View
          style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:RF(5)
          }}
          >
            <View
           style={{
            width:RF(10),
            height:RF(10),
            borderRadius:RF(10),
            backgroundColor:"#FF6800",
            marginRight:RF(5)
           }} 
            />
                <Text
                style={{
                  color:'#FF6800',
                  fontSize:15
                }}
                >
        En waiting list
          </Text>
          </View>
      
       
        </View>
        <View>
          <Text
          style={{
            color:'#00284D',
            fontSize:12
          }}
          >Nombre de la coach</Text>
        </View>

      </View>
    </View>
    </>
}
        {/* <View
          style={{
            marginHorizontal: RF(20),
            marginTop: RF(30),
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <CustomText
            size={10}
            color={COLORS.darkBlue}
            // style={styles.boldHeading}
          >
            Aún no tienes clases pasadas
          </CustomText>
        </View> */}
        <View style={{height: RF(15)}} />
      </ScrollView>
    </Wrapper>
  );
};

export default Home;
