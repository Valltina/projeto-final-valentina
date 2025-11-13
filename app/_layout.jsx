
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';


export default function Layout() {
    return (
           <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#420703ff' , 
            tabBarInactiveTintColor: '#e7c077ff',
            headerShown: false,
            tabBarStyle: {
        backgroundColor: '#9c2323ff', 
    }
            }}>
      <Tabs.Screen
        name="index" options={{title: 'Inicio',
          tabBarIcon: ({ color }) => <Entypo size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="pagetwo" options={{title: 'Livre',
          tabBarIcon: ({ color }) => <MaterialIcons name="videocam" size={28} color={color} />,
        }}
      />


       <Tabs.Screen
        name="pageone" options={{title: 'Obrigatorio',
          tabBarIcon: ({ color }) => <FontAwesome5 name="film" size={24} color={color} />,
        }}
      />

       

      <Tabs.Screen
        name="aboutme" options={{title: 'Sobre Mim',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle-o" color={color} />,
        }}
      />
    </Tabs>
    ); 
    
}

