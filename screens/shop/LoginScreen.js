import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

const LoginScreen = (props) => {
    return (
        // <Image style={styles.backgroundImage} source={require(`../../assets/app-images/loginBg.png`)}></Image>
       

<View style={{ flex: 1, }} >

<Image style={styles.backgroundImage} source={require(`../../assets/app-images/loginBg.png`)}></Image>

<View style={{paddingLeft:15, paddingRight:15, position:'absolute', top:'10%', right:0, left:0, }} >
<Image style={{width:98, height:104, marginLeft:'auto', marginRight:'auto'}} source={require(`../../assets/app-images/logoFull.png`)}></Image>
</View>

<View style={{paddingLeft:15, paddingRight:15, position:'absolute', top:'38%', right:0, left:0, }}><Text style={{fontSize:14,color:'#000a11',fontFamily:'Montserrat_700Bold', textAlign:'center'}}>Choose your location</Text></View>

<View style={{ position:'absolute', top:'50%', width:'100%'}}>
<View style={{marginBottom:30}} >
<View><Text style={{fontSize:20,color:'#7a8151',fontFamily:'Montserrat_700Bold', textAlign:'center',marginBottom:5}}>Calicut</Text></View>
<View><Text style={{fontSize:14,color:'#7a8151',fontFamily:'Montserrat_700Bold', textAlign:'center'}}>കോഴിക്കോട്</Text></View>
</View>


<View style={{marginBottom:30}} >
<View><Text style={{fontSize:20,color:'#154752',fontFamily:'Montserrat_700Bold', textAlign:'center',marginBottom:5}}>Trissur</Text></View>
<View><Text style={{fontSize:14,color:'#154752',fontFamily:'Montserrat_700Bold', textAlign:'center'}}>തൃശൂർ</Text></View>
</View>

<View >
<View><Text style={{fontSize:20,color:'#0dc4cd',fontFamily:'Montserrat_700Bold', textAlign:'center',marginBottom:5}}>Kochi</Text></View>
<View><Text style={{fontSize:14,color:'#0dc4cd',fontFamily:'Montserrat_700Bold', textAlign:'center'}}>കൊച്ചി</Text></View>
</View>
</View>

<TouchableOpacity style={{paddingLeft:15, paddingRight:15, position:'absolute', bottom:20, width:'100%'}}><Text style = {{padding: 13, backgroundColor: '#0d539a', fontSize: 13, color: '#ffffff', fontFamily: 'Montserrat_600SemiBold', textAlign: "center", borderRadius: 5, marginBottom: 0}}> Order Now </Text>
<Image style={{width:14,height:14,position:"absolute", top:15, right:40}} source={require(`../../assets/app-images/arrow-white.png`)}></Image></TouchableOpacity>

</View>

    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height:'100%',
        backgroundColor: '#f4fbff',
        zIndex:-1
    }
});

export default LoginScreen;