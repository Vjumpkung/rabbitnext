import React from "react";
const Placeholder = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20251%2090'%3E%3C/svg%3E";
const Album = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <picture>
        <source data-srcSet="public/image/webp/order.webp" type="image/webp"/>
          <img
            src={Placeholder}
            data-src="public/image/order.jpg"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="สั่งซื้อเสื้อ" width="1288" height="981.61"
          />
        </picture>

        <picture>
        <source data-srcSet="public/image/webp/size-chart.webp" type="image/webp"/>
          <img
            src={Placeholder}
            data-src="public/image/Size-Chart.png"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="ขนาดเสื้อที่คุณต้องการ" width="1288" height="724.98"
          />
        </picture>

        <picture>
        <source data-srcSet="public/image/webp/send.webp" type="image/webp"/>
          <img
            src={Placeholder}
            data-src="public/image/send.jpg"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="ส่งด่วน" width="1288" height="724.5"
          />
        </picture>

        <picture>
        <source data-srcSet="public/image/webp/indyrabbit.webp" type="image/webp"/>
          <img
            src={Placeholder}
            data-src="public/image/indyrabbit.jpg"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up mx-auto"
            alt="รับสกรีนและปักงานผ้าทุกชนิด" width="1108" height="1758"
          />
        </picture>
      </div>
    </div>
  </div>
);
export default Album;
