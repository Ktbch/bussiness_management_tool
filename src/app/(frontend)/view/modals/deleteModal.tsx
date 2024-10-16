"use client";

import { InterceptorMessage } from "../../design-system/_components/interceptor-message";
import { MutateFunc, useMutation } from "../../hooks/useMutation";

export default function DeleteModal({
	mutateFunc,
	identifier,
	off
}: {
	mutateFunc: MutateFunc;
	identifier: number;
	off: () => void;
}) {
	const { handleMutation } = useMutation(mutateFunc, off);
	// const [identifier, setIdentifier] = useState(0);

	// find a way to optimize this

	const handleClick = () => {
		handleMutation({ productId: identifier });
	};

	// useEffect(
	// 	() => {
	// 		setIdentifier(parseInt(localStorage.getItem("id")!));
	// 	},
	// 	[handleClick]
	// );

	return (
		<InterceptorMessage
			continueFunc={handleClick}
			message="are you sure you want to delete"
		/>
	);
}
