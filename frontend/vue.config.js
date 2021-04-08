module.exports = {
	// runtimeCompiler: true,
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				additionalData: 
				`@import '@/sass/index.scss';`
			}
		}
	},

	module.exports = {
		publicPath: process.env.NODE_ENV === 'production'
		? '/sinus-webshop/'
		: '/'
	}
};