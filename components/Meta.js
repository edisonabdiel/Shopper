import Head from 'next/head';

import icon from '../public/favicon.ico';

const Meta = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="web development, e-commerce" />
                <meta name="description" content="description" />
                <link rel="icon" type="image/ico" href={icon} />
                <title>MyShop</title>
            </Head>
        </>
    )
}

export default Meta;
