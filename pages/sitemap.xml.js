const sitemapXml = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
  <url>
    <loc>https://rabbitsstore.com/</loc>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://rabbitsstore.com/DTG/</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://rabbitsstore.com/DST/</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://rabbitsstore.com/blockscreen/</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://rabbitsstore.com/embroidery/</loc>
    <priority>0.80</priority>
  </url>
  
  
  </urlset>`;
};

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res }) => {
  
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml());
  res.end();
};
export default Sitemap
