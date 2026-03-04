import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
   <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
>
     <Tabs.Screen
     /* página inicial (talvez a página do chat seja a página inicial), onde o usuário
     vai ter acesso aos seus relatos resumidos de maneira visual, e poder usar indicadores,
     como quão bem ele se sentiu durante o dia ou semana, quantas horas e como dormiu,
     se se sentiu sozinho, ansioso, estressado
     */
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      /*página que vai conter recomendações de leituras de mini-artigos sobre saúde mental
      controle emocional, estudos sobre medicamentos, sessão de identifique-se (pessoas públicas
      que também enfretam problemas mentais), recomendações de livros, programas, músicas e obras
      de arte que abordem o tema.
      */
        name="leituras"
        options={{
          title: 'Leituras',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book-sharp' : 'book-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      /* página que vai conter a IA que vai fazer perguntas e registrar 
      1. eventos estressantes (descrição do que aconteceu);
      2. como a pessoa se sentiu
      3. como a pessoa reagiu
      4. como a pessoa se sentiu depois da reação*/
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubble-ellipses-sharp' : 'chatbubble-ellipses-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      /** página para configurações, alteração de foto de perfil, tema claro ou escuro, notificações, etc*/
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}