import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PageSEO = ({ title, description, ogType, ogImage, canonicalUrl, keywords }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta name="author" content="Acid" />
      <meta property="og:url" content={`https://acidop.codes/${router.asPath}`} />
      <meta property="og:type" content={ogType ? ogType : "website"} />
      <meta property="og:site_name" content='https://acidop.codes' />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage ? ogImage : 'https://acidop.codes/images/og-image.jpg'} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `https://acidop.codes/${router.asPath}`}
      />
      {/* keywords meta tag */}
      <meta name="keywords" content={keywords ? keywords : null} />
    </Head>
  )
}

export default PageSEO