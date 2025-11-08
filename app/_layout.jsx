
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
           <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' , headerShown: false,}}>
      <Tabs.Screen
        name="index" options={{title: 'Inicio',
          tabBarIcon: ({ color }) => <Entypo size={28} name="home" color={color} />,
        }}
      />

       <Tabs.Screen
        name="pageone" options={{title: 'Obrigatorio',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="exclamation-thick" color={color} />,
        }}
      />

       <Tabs.Screen
        name="pagetwo" options={{title: 'Livre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="puzzle-piece" color={color} />,
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