// components/CustomHead.js

import Head from 'next/head';

const CustomHead = ({pageTitle, description, keywords}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
    <link rel='icon' href='/project.png' />
    {/* Other head elements */}
  </Head>
);

export default CustomHead;
