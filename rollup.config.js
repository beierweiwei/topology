import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import browsersync from 'rollup-plugin-browsersync'
import htmlTemplate from 'rollup-plugin-generate-html-template'
export default {
	input: './src/main.js',
	output: {
		name: 'Topology',
		file: './dist/bundle.js',
		format: 'umd'
	},
	plugins: [
		commonjs(),
		resolve(),
		json(),
		browsersync({ server: './dist' }),
		htmlTemplate({
			template: 'src/template.html',
			target: 'dist/index.html'
		})
	]
}
