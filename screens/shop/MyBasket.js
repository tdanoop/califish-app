import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

const MyBasket = (props) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={{flex: 1,backgroundColor:'#fff'}} >
        <View style={styles.screen}>
            

            <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop:10 ,paddingBottom:20, paddingLeft:15}}>
<View> 
    <TouchableOpacity onPress={() => goBack()}><Image style={{width:13,height:13,marginTop:13, marginRight:10}} source={require(`../../assets/app-images/back.png`)} /></TouchableOpacity>
    </View>
<View> 
    <Text style={styles.title1} onPress={() => goBack()}>Sea Food</Text>
    </View>
</View>


<View style={{paddingTop:0, paddingRight:15, paddingLeft:15, paddingBottom:20, backgroundColor:'#fff'}}>
    <View  style={{borderWidth:1,borderColor:'#b5b5b5', backgroundColor:"#f4f4f4", padding:10, }}>
    <Text style={{fontSize: 14,fontFamily: 'Montserrat_400Regular',color:'#010101'}}>Three items added to your basket</Text>
</View></View>






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
                        
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ width: '50%' }}>
                            <Text style={styles.coLightTitle}>Quantity:</Text>
                            <Text style={styles.coreRgulartTitle}>1.00 Kg</Text>
                            </View>
                            <View style={{borderRadius:3, borderWidth:1, borderColor:'#dddddd', alignContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:30,width:70,paddingTop:0,paddingLeft:0}}>
                                
                            <Image style={{width:13,height:13,marginTop:2, marginRight:5}} source={require(`../../assets/app-images/edit.png`)} />  
                            <Text style={{fontSize:13, fontFamily: 'Montserrat_500Medium', color:'#7e7e7e'}}>Edit</Text>
                    
                            </View>
                        </View>

                        <View style={{marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                            <Text style={styles.coLightTitle}>Cut type:</Text>
                            <Text style={styles.coreRgulartTitle}>Curry cut included head peace</Text>
                            </View>
                        </View>

                        <View style={{marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                            <Text style={styles.coLightTitle}>Price:</Text>
                            <Text style={styles.coreRgulartTitle}>₹550</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{paddingLeft:15 ,paddingRight:15}}>
                <View style={{borderRadius:3, borderWidth:1, borderColor:'#dddddd', alignContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:30, width:"100%",paddingTop:0,paddingLeft:0}}>
                                
                                <Image style={{width:14,height:15,marginTop:0, marginRight:5}} source={require(`../../assets/app-images/delete.png`)} />  
                                <Text style={{fontSize:13, fontFamily: 'Montserrat_500Medium', color:'#7e7e7e'}}>Remove from basket</Text>
                        
                                </View>

                                <View style={{ borderTopWidth:1, borderTopColor:'#dddddd', height:1, width:"100%", marginTop:20,marginBottom:20}}></View>
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
                        
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ width: '50%' }}>
                            <Text style={styles.coLightTitle}>Quantity:</Text>
                            <Text style={styles.coreRgulartTitle}>1.00 Kg</Text>
                            </View>
                            <View style={{borderRadius:3, borderWidth:1, borderColor:'#dddddd', alignContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:30,width:70,paddingTop:0,paddingLeft:0}}>
                                
                            <Image style={{width:13,height:13,marginTop:2, marginRight:5}} source={require(`../../assets/app-images/edit.png`)} />  
                            <Text style={{fontSize:13, fontFamily: 'Montserrat_500Medium', color:'#7e7e7e'}}>Edit</Text>
                    
                            </View>
                        </View>

                        <View style={{marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                            <Text style={styles.coLightTitle}>Cut type:</Text>
                            <Text style={styles.coreRgulartTitle}>Curry cut included head peace</Text>
                            </View>
                        </View>

                        <View style={{marginTop: 10 }}>
                            <View style={{ width: '100%' }}>
                            <Text style={styles.coLightTitle}>Price:</Text>
                            <Text style={styles.coreRgulartTitle}>₹550</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{paddingLeft:15 ,paddingRight:15}}>
                <View style={{borderRadius:3, borderWidth:1, borderColor:'#dddddd', alignContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:30, width:"100%",paddingTop:0,paddingLeft:0}}>
                                
                                <Image style={{width:14,height:15,marginTop:0, marginRight:5}} source={require(`../../assets/app-images/delete.png`)} />  
                                <Text style={{fontSize:13, fontFamily: 'Montserrat_500Medium', color:'#7e7e7e'}}>Remove from basket</Text>
                        
                                </View>

                                <View style={{ borderTopWidth:1, borderTopColor:'#dddddd', height:1, width:"100%", marginTop:20,marginBottom:20}}></View>
                                </View>

                                <View style={{ paddingLeft:15, paddingRight:15, paddingTop:10, paddingBottom:10, marginBottom:0, }} >
<TouchableOpacity><Text style = {{padding: 13, backgroundColor: '#0d5399', fontSize: 13, color: '#ffffff', fontFamily: 'Montserrat_600SemiBold', textAlign: "center", borderRadius: 5, marginBottom: 0}}> Place Order </Text></TouchableOpacity>
</View>

        </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor:'#fff',paddingLeft: 0, paddingRight: 0,paddingBottom: 15 }, //justifyContent: 'center', alignItems: 'center', 
    title1: {
        fontSize: 14, color: '#000a11', paddingLeft: 0, paddingTop: 10, paddingBottom: 0, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },


    contentWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, width: '60%' },
    cotitle: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'left',
        color: '#0d539a',
        fontFamily: 'Montserrat_800ExtraBold'
    },
    coLightTitle: {
        marginTop: 1,
        fontSize: 13,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_300Light', marginBottom:2
    },
    coreRgulartTitle: {
        marginTop: 1,
        fontSize: 13,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_600SemiBold'
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
    },


});

export default MyBasket;