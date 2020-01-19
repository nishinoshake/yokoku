<script>
  export let title = '電影予告集会'
  export let description =
    '日本全国の隠れ予告ファンのみなさん、たぶん15分ぐらいここで潰せますよ。'
  export let keywords = '木村カエラ'
  export let siteUrl = 'https://yokoku.c'
  export let image = 'https://yokoku.cc/og.png?d=2020011601'
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="image" content={image} />
<meta property="og:url" content={siteUrl} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
