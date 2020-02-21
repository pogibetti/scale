import jss from 'jss';
import preset from 'jss-preset-default';
jss.setup(preset());

export function CssInJs(styles: object) {
	return function (target: object, key: string | symbol) {
		let value = target[key];

		console.log('styles', styles)
		console.log('target', target)
		console.log('key', key)

		const getter = () => {
			return value;
		}

		const setter = (next) => {
			// console.log('setting:::', key, next);
			return value = next
		}

		Object.defineProperty(target, key, {
			get: getter,
			set: setter,
			enumerable: true,
			configurable: true
		})
	}
}
