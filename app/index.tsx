import React, { ReactNode, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyScreen() {
  const [textColor, setTextColor] = useState('rgb(255,0,0)')
  useEffect(() => {

    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Update state with the new RGB string
      setTextColor(`rgb(${r}, ${g}, ${b})`);
    }, 1000)
    return () => clearInterval(interval);
  }, []);


  return (
    <MainPage>
      <Sidebar>
        <SidebarChild>
          <Text
            style={{
              fontWeight: 'bold',
              color: textColor
            }}
          >Hi</Text>

        </SidebarChild>
      </Sidebar>

    </MainPage>
  )
}


function MainPage({ children }: { children?: ReactNode }) {
  return (
    <View style={styles.mainpage}>
      {children}
    </View>
  );
}

function Sidebar({ children }: { children?: ReactNode }) {
  return (
    <View style={styles.sidebar}>
      {children}
    </View>
  )
}


function SidebarChild({ children }: { children?: ReactNode }) {
  return (
    <View style={styles.sidebarchild}>
      {children}
    </View>
  )
}

// Create the StyleSheet here
const styles = StyleSheet.create({
  mainpage: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebar: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRightWidth: StyleSheet.hairlineWidth,
    gap: 10,
    width: '15%',
    maxWidth: '15%',
    minWidth: '15%',
  },
  sidebarchild: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    minHeight: '5%'
  }
});
