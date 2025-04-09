import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[theme].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          // headerLeft: () => (
          //   <Icon
          //     name={isDarkMode ? "sun-o" : "moon-o"}
          //     onPress={toggleTheme}
          //     style={{ marginLeft: 20 }}
          //   />
          // ),
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          // tabBarIcon: ({ color }) => <Icon name="list-ol" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          // headerTitle: `Hi, ${user?.name}`,
          // tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
          // headerRight: () => (
          //   <Pressable>
          //     {({ pressed }) => (
          //       <Icon
          //         name="sign-out"
          //         onPress={() => onLogout()}
          //         style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
          //       />
          //     )}
          //   </Pressable>
          // ),
        }}
      />
    </Tabs>
  );
}
