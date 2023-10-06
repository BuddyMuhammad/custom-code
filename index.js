export const applyCustomCode = (externalCodeSetup: any) => {
	// call custom code api here

	externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
		<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
			<Text>Hello from custom Login Screen</Text>
			<TextInput placeholder={"login"} />
			<TextInput placeholder={"password"} />
		</View>
	));
	
};