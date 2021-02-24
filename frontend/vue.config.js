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
	}
};