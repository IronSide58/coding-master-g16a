const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js', //Permite cambiar la ruta de donde tomara el index.js o main.js,
    module: {
        rules: [
            /*Aquí se definen LOADERS 
                -> Sintaxis
                {
                    * test: REGEX //Buscar archivos o extensiones en el proyecto
                    * use: Instructions de que va hacer con esos archivos
                }*/
            {
                test: /\.html$/, //Buscara los archivos .html
                use: [
                    {
                        loader : 'html-loader',
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({ template: './src/index.html'})
    ]
}