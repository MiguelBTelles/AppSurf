import React from "react";
import {TextInputProps} from "react-native-paper";
import {InputMask} from "@/components/atoms/inputs/input-mask/input-mask";

interface InputCpfProps extends TextInputProps {

}

export const InputCpf = (props: InputCpfProps) => {
	return (
		<InputMask
			{...props}
			keyboardType="numeric"
			maskProps={{
				type: 'cpf'
			}}
		/>
	)
}