import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags }
    }

    render () {
        return (
            <html>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Pacifico|Montserrat:500" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossOrigin="anonymous"
                />
                {this.props.styleTags}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}