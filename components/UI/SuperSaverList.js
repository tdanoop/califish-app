import React from "react";
import { StyleSheet, Text, View , Image,TouchableOpacity } from "react-native"


const SuperSaverList = props => {

    return (
        <View style={styles.SaveWrap} >


        <Text style={styles.title}>Fish on Demand</Text>


        <View style={{justifyContent:'space-between',flexDirection: 'row',marginBottom:20}}> 

<View style={{width:'50%',paddingLeft:5, paddingRight:5, paddingBottom:20}}>
<TouchableOpacity style={styles.imgWrap}>
        <Image style={styles.image}
            source={require('../../assets/app-images/backwater.png')}
        />
    </TouchableOpacity>
    <TouchableOpacity style={styles.imgWrap2}>
        <Image style={styles.image}
            source={require('../../assets/app-images/backwater.png')}
        />
    </TouchableOpacity>
</View>

<View style={{width:'50%'}}>
<Text style={styles.titleName}>Mathi(Curry Piece) + 
Chempalli(Fry Piece)
</Text>
<Text style={styles.kilogram}>0.5 kg + 0.5 kg</Text>
    <View style={{alignContent: 'flex-start',flexDirection: 'row',marginTop:5}}> 
<Text style={styles.price}>₹325</Text>
<Image style={styles.plusIcon} source={require(`../../assets/app-images/plus.png`)} />
</View>


</View>

</View>






<View style={{justifyContent:'space-between',flexDirection: 'row',marginBottom:20}}> 

<View style={{width:'50%',paddingLeft:5, paddingRight:5, paddingBottom:20}}>
<TouchableOpacity style={styles.imgWrap}>
        <Image style={styles.image}
            source={require('../../assets/app-images/backwater.png')}
        />
    </TouchableOpacity>
    <TouchableOpacity style={styles.imgWrap2}>
        <Image style={styles.image}
            source={require('../../assets/app-images/backwater.png')}
        />
    </TouchableOpacity>
</View>

<View style={{width:'50%'}}>
<Text style={styles.titleName}>Mathi(Curry Piece) + 
Chempalli(Fry Piece)
</Text>
<Text style={styles.kilogram}>0.5 kg + 0.5 kg</Text>
    <View style={{alignContent: 'flex-start',flexDirection: 'row',marginTop:5}}> 
<Text style={styles.price}>₹325</Text>
<Image style={styles.plusIcon} source={require(`../../assets/app-images/plus.png`)} />
</View>


</View>

</View>





        
        <View>
        <TouchableOpacity>
            <Text style = {styles.button}>
            View More
            </Text>
         </TouchableOpacity>
        </View>

        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,backgroundColor: '#0d539a', fontSize:13,color:'#ffffff',fontFamily:'Montserrat_400Regular',textAlign:"center",borderRadius:5, marginBottom:20,
     },
     title: {
        fontSize:14,color:'#000a11',  paddingLeft:5,  paddingTop:40,paddingBottom:10, backgroundColor: '#fff', fontFamily:'Montserrat_800ExtraBold'
    },
    SaveWrap:{
        paddingLeft:10, paddingRight:10,backgroundColor: '#fff',
    },
    titleName:{
        fontSize:14,color:'#0d539a',  paddingLeft:0,  paddingTop:0,paddingBottom:5,  fontFamily:'Montserrat_800ExtraBold'
    },
    kilogram: {
        //borderWidth:2
        marginTop:0, fontSize:12,color:'#000a11', textAlign:'left', fontFamily:'Montserrat_300Light'
    },
    price: {
        //borderWidth:2
        marginTop:0, fontSize:13,color:'#000a11', textAlign:'left', fontFamily:'Montserrat_800ExtraBold',
    },
    plusIcon:{ width:18,height:18,marginLeft:15},
    imgWrap: { 
        alignItems: 'center', justifyContent: 'center', width: 67, height: 67, borderRadius: 100, backgroundColor: '#e8ecdf', marginBottom:0, borderWidth:3,borderColor:'#ffffff',position:"absolute",top:0,left:0
    },
    imgWrap2: { 
        alignItems: 'center', justifyContent: 'center', width: 67, height: 67, borderRadius: 100, backgroundColor: '#e8ecdf', marginBottom:0, borderWidth:3,borderColor:'#ffffff',position:"absolute",top:0,left:50
    },
    image: { width: '80%', height: '80%', resizeMode: 'contain' },
    
});

export default SuperSaverList;