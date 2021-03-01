import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../Navigation/AuthProvider';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';

const SignupScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Create Account</Text>
      <View style={styles.PositionForm}>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          keyboardType="email-address"
        />
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          secureTextEntry={true}
        />
        <FormInput
          labelValue={confirmPassword}
          onChangeText={(userConfirmPassword) =>
            setConfirmPassword(userConfirmPassword)
          }
          placeholderText="Comfirm Password"
          secureTextEntry={true}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.TextSex}>Sex</Text>
        <TouchableOpacity
          onPress={() => {
            alert('Boy');
          }}>
          <Image
            source={require('../Icons/boy.png')}
            style={{height: 60, width: 60}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('Girl');
          }}>
          <Image
            source={require('../Icons/girl.png')}
            style={{height: 60, width: 60, marginLeft: 60}}
          />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FormButton
          ButtonTitle="Sign Up"
          onPress={() => {
            register(email, password);
          }}
        />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 20,
  },
  PositionForm: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '105%',
  },
  HeaderText: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    margin: 20,
  },
  TextSex: {
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    marginLeft: 20,
    fontSize: 25,
    marginRight: 50,
    marginTop: 15,
  },
  ContainerScreen2: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 20,
  },
  HeaderText2: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  PositionForm2: {
    alignSelf: 'center',
    alignContent: 'center',
    flex: 1,
  },
  Text2: {
    fontSize: 20,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 5,
  },
});
