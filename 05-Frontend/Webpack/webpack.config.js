const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/main.js', //Permite cambiar la ruta de donde tomara el index.js o main.js,
    module: {
        rules: [
            /*Aquí se definen LOADERS -> Reglas o instrucciones que nos ayudan a procesar
            archivos para generar nuestra salida.
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
            },
            {
                test: /.(css|scss)$/,
                use: [
                    'style-loader', //Procesa los estilos en linea
                    'css-loader', //Procesa los estilos en archivos
                    'sass-loader', //Procesa los estilos en archivos sass
                ]
            }
        ]
    },
    plugins: [
        /** Agregan funcionalidades extra. */
        new HTMLWebPackPlugin({ template: './src/index.html'}),
        new MiniCssExtractPlugin()
    ]
}