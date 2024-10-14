// Table Option Function

import { InterceptorMessage } from "@/app/(frontend)/design-system/_components/interceptor-message";
import { Product, SalesOrder } from "@/app/_backend/database/schema/types";

export interface IOptionsFuncConfig<T extends Product | SalesOrder> {
	on: () => void;
	setModalCmp: (value: React.JSX.Element) => void;
	editModalCmp: React.JSX.Element;
	off: () => void;
	actionFunc: React.JSX.Element;
	id: number;
	refresh: () => void;

	detailsModalCmp: ({ data }: { data: T }) => React.JSX.Element;
	data: T;
}

// TODO GOVE CHATGPT THIS QUESTION

type TOptions = ["edit", "delete", "view"];

export type TOption = "edit" | "delete" | "view";

export default class GenerateOptionsObj<T extends SalesOrder | Product> {
	optionsParams: IOptionsFuncConfig<T>;
	options: TOptions;

	constructor(optionsParams: IOptionsFuncConfig<T>, options: TOptions) {
		this.optionsParams = optionsParams;
		this.options = options;
	}
	openEditModal = () => {
		const { on, setModalCmp, editModalCmp, id } = this.optionsParams;
		on();
		// this is done this way because react components actually takes object as params
		setModalCmp(editModalCmp);
	};

	deleteFunc = () => {
		const {
			id,
			on,
			off,
			refresh,
			setModalCmp,
			actionFunc
		} = this.optionsParams;

		on();
		setModalCmp(actionFunc);
	};

	openDetailsModal = () => {
		const { on, detailsModalCmp, setModalCmp, data } = this.optionsParams;
		on();
		setModalCmp(detailsModalCmp({ data: data }));
	};

	generateOptionsFunction = (option: TOption) => {
		switch (option) {
			case "edit":
				return this.openEditModal;
			case "delete":
				return this.deleteFunc;
			case "view":
				return this.openDetailsModal;
		}
	};
	generateTableOptionsObj() {
		const tableOptions = this.options.map(option => {
			return {
				option,
				func: this.generateOptionsFunction(option)
			};
		});
		return tableOptions;
	}
}
