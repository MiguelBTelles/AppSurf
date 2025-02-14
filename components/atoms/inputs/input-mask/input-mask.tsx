import {TextInputMask} from "react-native-masked-text";
import React, {useEffect} from "react";
import {InputComponent} from "@/components/atoms/inputs/input-component/input-component";
import {TextInputProps} from "react-native-paper";

interface InputMaskProps extends TextInputProps {
	maskProps: any
}

export const InputMask = (props: InputMaskProps) => {

	return (
		<InputComponent
			{...props}
			render={(propsMask) => (
				// @ts-ignore
				<TextInputMask
					{...propsMask}
					{...props.maskProps}
					onChangeText={(v) => {
						propsMask?.onChangeText?.(v)
					}}
				/>
			)}
			keyboardType="numeric"
		/>
	)
}