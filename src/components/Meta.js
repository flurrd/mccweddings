import Head from 'next/head'
const Meta = (props) => (
<Head>
<title>Celebrant | Maureen Catherine Crawley</title>
<meta name="description" content={props.desc} />
<link rel="icon" type="image/png" href="../static/favicon.ico" />
<link rel="apple-touch-icon" href="../static/favicon.ico" />
<script src="https://kit.fontawesome.com/595162865f.js" crossOrigin="anonymous"></script>
</Head>
)
export default Meta