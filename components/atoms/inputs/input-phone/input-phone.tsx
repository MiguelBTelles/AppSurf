import React from "react";
import { TextInputMask } from 'react-native-masked-text';
import {TextInputProps} from "react-native-paper";
import {InputComponent} from "@/components/atoms/inputs/input-component/input-component";

interface InputPhoneProps extends TextInputProps {

}

export const InputPhone = (props: InputPhoneProps) => {
	return (
		<InputComponent
			{...props}
			keyboardType="numeric"
			render={(propsMask) => (
				// @ts-ignore
				<TextInputMask
					{...propsMask}
					type="cel-phone"
					options={{
						maskType: 'BRL',
						withDDD: true,
						dddMask: '(99) ',
					}}
					onChangeText={(formatted) => propsMask?.onChangeText?.(formatted)}
				/>
			)}
		/>
	)
}