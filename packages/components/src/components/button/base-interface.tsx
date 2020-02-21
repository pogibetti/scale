import { CssClassMap } from "../../utils/utils";

export default interface Base {
	theme: any;
	stylesheet: any;
	componentWillLoad(): void;
	getCssClassMap(): CssClassMap;
}
