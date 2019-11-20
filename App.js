import React , {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
 
  export default class App extends Component {

   constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
      sayi1:0,
      sayi2:0,
      sonuc:0,

    };
  }

topla(){
  this.setState({
sonuc:parseInt(this.state.sayi1)+parseInt(this.state.sayi2)
  })
}
cikar(){
  this.setState({
    sonuc:(this.state.sayi1>=this.state.sayi2)?(this.state.sayi1-this.state.sayi2):(this.state.sayi2-this.state.sayi1)
      
    
  })
}
carp(){
  this.setState({
    sonuc:this.state.sayi1*this.state.sayi2
  })
}
bol(){
  this.setState({
    sonuc:(this.state.sayi2!=0)?(this.state.sayi1/this.state.sayi2):(0)
  });
}


  render(){
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Hesap Makinesi
        
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          width: '100%',
          height: '100%',
          backgroundColor: '',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: 50, height: 50 }}>1. Sayı</Text>
          <TextInput
                   onChangeText={(sayi1) => this.setState({sayi1})}

           style={{ width: 200, height: 50, borderWidth: 1 }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ width: 50, height: 50 }}>2. Sayı</Text>
          <TextInput 
          onChangeText={(sayi2) => this.setState({sayi2})}
          style={{ width: 200, height: 50, borderWidth: 1 }} />
        </View>
      </View>

      <View
        style={{
          flex: 3,
          width: '100%',
          height: '100%',
          backgroundColor: '',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{ flexDirection: 'row', backgroundColor:'' }}>
          <TouchableOpacity
            style={{
              marginRight:'5%',
              width: 60,
              height: 40,
              backgroundColor: 'yellow',
              borderWidth: 1,
            }} 
            onPress={()=>this.topla()}
            >
            
           <Text style={{margin:9}}>Topla</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 40,
              backgroundColor: 'yellow',
              borderWidth: 1,
            }}
            onPress={()=>this.cikar()}
            >
            <Text style={{margin:9}}>Çıkar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginRight:'5%',
              width: 60,
              height: 40,
              backgroundColor: 'yellow',
              borderWidth: 1,
            }}
            onPress={()=>this.carp()}
            >
            <Text style={{margin:9}}> Çarp </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 40,
              backgroundColor: 'yellow',
              borderWidth: 1,
            }}
            onPress={()=>this.bol()}
            >
            <Text style={{margin:9}}>Böl</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems:'center',
          justifyContent:'center',
          backgroundColor: '',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'normal', color: 'red' }}>
          Sonuc : 
        </Text>
        <Text style={{ fontSize: 25, fontWeight: 'normal', color: 'black' }} >
        {this.state.sonuc}
        </Text>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6ffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
