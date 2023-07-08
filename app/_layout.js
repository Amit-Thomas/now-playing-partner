// The first piece that is the root for all other routes
import { Stack } from "expo-router";
import { useCallback } from "react";
// Implementing custom fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Makes native splash screen visible until hide async is called
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // Loading fonts on to the screen
  const onLayoutRootView = useCallback(async () => {
    // Only show homepage if fonts have been loaded
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
