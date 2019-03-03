import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../Component/App/auth";

const SignIn = ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  </View>
);

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SignIn;
