import Head from 'next/head'
const Meta = (props) => (
<Head>
<title>Celebrant | Maureen Catherine Crawley</title>
<meta name="description" content={props.desc} />
<link rel="icon" type="image/png" href="../static/favicon.ico" />
<link rel="apple-touch-icon" href="../static/favicon.ico" />
<script src="https://kit.fontawesome.com/595162865f.js" crossOrigin="anonymous"></script>
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
</Head>
)
export default Meta