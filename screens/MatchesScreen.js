import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Betty Smith",
          theirProps: ["propA", "propC"],
          yourProps: ["propD", "propF"],
          ]
        },
        {
          name: ""
        },
      ]
    }
  }
  render() {
  return (
      <View>
        <Text style={styles.header}>Your Matches:</Text>
        <View style={styles.userCard}>
          <View>
            <Image source={{uri: 'https://lh3.googleusercontent.com/krCwFebMCIlM85NsthWyFdnB_wBcKCutRGMc7tnlLZUwC_XQ3t7PQwRcFDRXkDF_5cbCj3Qby1427rBGHSp8WWiHdLr5TKxyG18Li2BBaqp7JhiIzRY1Q4OGw_62vt4zsp-BsXrSchgV8tXH1YMo5jGP34r6mL1jpzpKlzxDweYPo5mDfhQBG2Zop7RzAEOlKaaFdm6AC95fnuZlJug9bgRNut_LmexcIPybN_4Hf4myVSWKfs-n8S2OHwN_5yI9DxHx_vlIbUAjY-ZT7cktQrwnB40DP-gKcdqiPo0aiEAhWxJmEiel0ZLoB9W4vXpcYF8RopOVC6beeMAYuk4NBEj-78CvJZXn1B8s74djEYXnmApA8-XvnCtlBirqiE46ryCxVbxGljMlW0FyNORZwP71jj0_7tSoNrXhwXlc5jS9WGLYaf8MVVWRw-5b-Et97RCMZnF5eyh9XekyRLoz1BO1vcvrO71IBkf_5wGPiN_xyTAO8-RfDo-UD5Le8PllQSPXC2hvYDI3Lk6Uiew1GWkMvHKUbgIg6lNWmRw56gYrlunMIPvdVGq4Xt3hlzIRrQ1b0ZEAAuCdjs1azvu_nbV9xpb88PcHLAmKW8UmW4_m0tOGniD7FlmFAwmOw6pt0THJjIGM8sOb1AzaQ1ZFCCV5zc7o1k5N5Gg88DXO7fAKlnofUeHeZ7jJ=w224-h225-no' }},
            style={{width: 50, height: 50}}/>
            
          </View>
        </View>

      </View>
  );  
  }
  
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    fontSize: 30,
    fontWeight: bold
  }, 
  userCard: {

  }
});
