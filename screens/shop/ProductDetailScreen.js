import React from 'react';
import { View, Text, StyleSheet,Button,Image,RadioButton,TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ navigation: { goBack } },props) => {
    return (
        /*<View style={styles.screen}>
            <Button
                onPress={() => goBack()}
                title="Info"
                color="black"
            />
            <Text>Product Detail Screen</Text>
        </View>*/

        <View style={{backgroundColor:'#fff'}}>
             <Image style={{height:200,width:'100%'}} source={require(`../../assets/app-images/fish.jpg`)} />

<View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 25,marginBottom: 15, paddingLeft:15, paddingRight:15}} >
<View><Text style={{fontSize:18,color:'#000a11',fontFamily:'Montserrat_700Bold'}}>Chempalli / Red Snapper</Text></View>
<View><Text style={{fontSize:11,color:'#3a73ad',fontFamily:'Montserrat_400Regular', backgroundColor:'#cdecfc', paddingBottom:5, paddingTop:5, paddingLeft:10, paddingRight:10,marginLeft:10,borderRadius:3}}>info</Text></View>
</View>

<View style={{ paddingLeft:15 ,paddingRight:15, paddingBottom:20 }} >
<View><Text style={{fontSize:14,color:'#000a11',fontFamily:'Montserrat_600SemiBold',paddingBottom:10}}>₹550 / Kg</Text></View>
<View><Text style={{fontSize:11,color:'#a3a3a3',fontFamily:'Montserrat_400Regular'}}>*weight is calculating after cleaning</Text></View>
</View>

<View style={{ alignContent: 'flex-start', flexDirection: 'row', backgroundColor:'#eaf5fb',paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10, borderBottomColor:"#c9d7df", borderBottomWidth:1 }} >
<View style={{width:'80%',alignContent: 'flex-start', flexDirection: 'row',}}>
<Image style={{width: 19, height: 19, marginRight:10}} source={require(`../../assets/app-images/negative.png`)} />
<Text style={{fontSize:14,color:'#000a11',fontFamily:'Montserrat_600SemiBold',marginRight:10}}>1.5 kg</Text>
<Image style={{width: 19, height: 19, marginRight:0}} source={require(`../../assets/app-images/plus.png`)} /></View>
<View style={{width:'20%'}}><Text style={{fontSize:15,color:'#000a11',fontFamily:'Montserrat_700Bold',marginRight:0}}>₹825</Text></View>
</View>



<View style={{ alignContent: 'flex-start', flexDirection: 'row', paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10 }} >
<View style={{width:'80%',alignContent: 'flex-start', flexDirection: 'row',}}>
<Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>Fry / Biriyani Cut</Text>
</View>
<View style={{width:'20%'}}><Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>₹825</Text></View>
</View>
<View style={{ alignContent: 'flex-start', flexDirection: 'row', paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10 }} >
<View style={{width:'80%',alignContent: 'flex-start', flexDirection: 'row',}}>
<Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>Fry / Biriyani Cut</Text>
</View>
<View style={{width:'20%'}}><Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>₹825</Text></View>
</View>
<View style={{ alignContent: 'flex-start', flexDirection: 'row', paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10 }} >
<View style={{width:'80%',alignContent: 'flex-start', flexDirection: 'row',}}>
<Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>Fry / Biriyani Cut</Text>
</View>
<View style={{width:'20%'}}><Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>₹825</Text></View>
</View>
<View style={{ alignContent: 'flex-start', flexDirection: 'row', paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10 }} >
<View style={{width:'80%',alignContent: 'flex-start', flexDirection: 'row',}}>
<Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>Fry / Biriyani Cut</Text>
</View>
<View style={{width:'20%'}}><Text style={{fontSize:13,color:'#000a11',fontFamily:'Montserrat_500Medium',marginRight:0}}>₹825</Text></View>
</View>

<View style={{ paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:20, marginBottom:10, borderBottomWidth:1, borderBottomColor:'#c9d7df' }} >
<Text style = {{padding: 13, backgroundColor: '#0d539a', fontSize: 13, color: '#ffffff', fontFamily: 'Montserrat_600SemiBold', textAlign: "center", borderRadius: 5, marginBottom: 10}}> Order Now </Text>
<Text style = {{padding: 13, backgroundColor: '#cdecfc', fontSize: 13, color: '#0d539a', fontFamily: 'Montserrat_600SemiBold', textAlign: "center", borderRadius: 5, marginBottom: 0}}> Add to Cart </Text>
</View>
   






<View style={{ paddingLeft:15, paddingRight:15,paddingBottom:10}}>
<Text style={styles.title1}>You may also like</Text>
</View>

<View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 0,marginBottom: 20,paddingLeft:15 ,paddingRight:15 }}>

                    <View style={styles.sliderWrap}>
                        <TouchableOpacity style={styles.slcard}>
                            <Image
                                style={styles.slimage}
                                source={require(`../../assets/app-images/backwater.png`)}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.contentWrap}>
                        <Text style={styles.cotitle}>Mathi / Sardine Fish / ചാള  </Text>

                        <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 5 }}>

                            <View style={{ width: '50%', alignContent: 'flex-start', flexDirection: 'row' }}>
                                <Image style={styles.coplusIcon} source={require(`../../assets/app-images/negative.png`)} />
                                <Text style={styles.cokilogram}>1.00 Kg</Text>
                            </View>
                            <View style={{ width: '50%', aligtent: 'flexnCon-start', flexDirection: 'row' }}>
                                <Image style={styles.coplusIcon} source={require(`../../assets/app-images/plus.png`)} />
                                <Text style={styles.coprice}>₹550</Text>
                            </View>


                        </View>
                    </View>


                </View>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 0,marginBottom: 20, paddingLeft:15 ,paddingRight:15 }}>

<View style={styles.sliderWrap}>
    <TouchableOpacity style={styles.slcard}>
        <Image
            style={styles.slimage}
            source={require(`../../assets/app-images/backwater.png`)}
        />
    </TouchableOpacity>
</View>


<View style={styles.contentWrap}>
    <Text style={styles.cotitle}>Mathi / Sardine Fish / ചാള  </Text>

    <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 5 }}>

        <View style={{ width: '50%', alignContent: 'flex-start', flexDirection: 'row' }}>
            <Image style={styles.coplusIcon} source={require(`../../assets/app-images/negative.png`)} />
            <Text style={styles.cokilogram}>1.00 Kg</Text>
        </View>
        <View style={{ width: '50%', aligtent: 'flexnCon-start', flexDirection: 'row' }}>
            <Image style={styles.coplusIcon} source={require(`../../assets/app-images/plus.png`)} />
            <Text style={styles.coprice}>₹550</Text>
        </View>


    </View>
</View>


</View>

<View style={{ alignContent: 'flex-start', flexDirection: 'row', backgroundColor:'#428edb',paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10 }} >
<View style={{width:'33.333%'}}>
<Text style={{fontSize:13,color:'#ffffff',fontFamily:'Montserrat_400Regular',marginRight:0}}>1 item</Text></View>
<View style={{width:'33.333%'}}>
<Text style={{fontSize:15,color:'#ffffff',fontFamily:'Montserrat_700Bold',marginRight:0, textAlign:'center'}}>1 item</Text></View>
<View style={{width:'33.333%'}}>
<Text style={{fontSize:15,color:'#ffffff',fontFamily:'Montserrat_700Bold',marginRight:0,textAlign:'right'}}>1 item</Text></View>
</View>

</View> 
    )
}

const styles = StyleSheet.create({
    
    title1: {
        fontSize: 14, color: '#000a11', paddingLeft: 0, paddingTop: 10, paddingBottom: 0, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },

    contentWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, width: '60%' },
    cotitle: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'left',
        color: '#0d539a',
        fontFamily: 'Montserrat_800ExtraBold'
    },
    cokilogram: {
        marginTop: 1,
        fontSize: 12,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_300Light'
    },
    coprice: {
        marginTop: 0,
        fontSize: 13,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_800ExtraBold',
    },
    coplusIcon: {
        width: 18,
        height: 18,
        marginRight: 10
    },

    sliderWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, width: '40%' },
    slcard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 85,
        backgroundColor: '#fff',
        borderRadius: 8,
        backgroundColor: 'red',
    },
    slimage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    }
});

export default ProductDetailScreen;