import { Carousel } from "react-responsive-carousel";
import dynamic from "next/dynamic"
import "lazysizes"
import Layout from "../components/Layout"
import SEO from "../components/seo"
const Album = dynamic(() => import("../components/home/album"));
export default function Home() {
  return (
    <Layout>
      <SEO/>
      <div>
        <Carousel autoPlay showArrows={false} infiniteLoop showThumbs={false}>
          <div>
            <picture>
              <source media="(max-width: 899px)" type="image/webp" srcset="../public/image/webp/mobilebanner.webp"/>
              <source media="(max-width: 899px)" srcset="../public/image/mobilebanner1.jpg"/>
              <source media="(min-width: 900px)" type="image/webp" srcset="../public/image/webp/banner1.webp"/>
              <source media="(min-width: 900px)" srcset="../public/image/banner1.jpg"/>
              <img
                className="d-block w-100 img-fluid"
                src="../public/image/banner1.jpg"
                alt="EnglishRabbitsstorelogo"
                height="414"
                width="1903"
              />
            </picture>
          </div>
          <div>
            <picture>
              <source
                data-srcset="../public/image/webp/banner.webp"
                type="image/webp"
              />
              <img
                className="d-block w-100 img-fluid lazyload blur-up-2"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDQxNCI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIC8+PC9maWx0ZXI+PHBhdGggZmlsbD0iI2ZkZDNkMiIgZD0iTTAgMGgxOTIwdjQxMkgweiIvPjxnIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJtYXRyaXgoNy41IDAgMCA3LjUgMy44IDMuOCkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiNmZDVhNTgiIGN4PSIxMTQiIGN5PSI3IiByeD0iMzYiIHJ5PSIzNiIvPjxlbGxpcHNlIGZpbGw9IiNmYzVkNWEiIGN4PSIxNjkiIGN5PSIyMyIgcng9IjMyIiByeT0iMTciLz48cGF0aCBmaWxsPSIjZmM0NzQ1IiBkPSJNNTcgNmg3MHYzM0g1N3oiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMjQ0IiBjeT0iMjciIHJ4PSI0NyIgcnk9IjQ3Ii8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgY3g9IjI1IiBjeT0iMzEiIHJ4PSIzMSIgcnk9IjE0MyIvPjxwYXRoIGZpbGw9IiNmYmZmZmQiIGQ9Ik0xMTEgMzUuMWwtNTEuNy0yLjhMNjMuNiAxNWw0My42LTN6Ii8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgY3g9IjEzMCIgcng9IjI0OCIgcnk9IjYiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTEgMzloMjA1djE2SDUxeiIvPjwvZz48L3N2Zz4="
                data-src="../public/image/banner.jpg"
                alt="ThaiRabbitsstorelogo"
                height="414"
                width="1903"
              />
            </picture>
          </div>
        </Carousel>

        <br />
        <br />

        <div className="container">
          <h1 className="h1home">
            รับผลิตเสื้อยืด เสื้อโปโล และกระเป๋าผ้าทุกชนิด พร้อมสกรีนและปัก
            ทุกแบบ ไม่มีขั้นต่ำ <br />
            ยินดีให้คำปรึกษาในเรื่องของแบบสกรีน
          </h1>
          <div className="row row-eq-height top-buffer">
            <div className="col-md-6">
              <picture>
                <source
                  srcset="../public/image/webp/dtg.webp"
                  type="image/webp"
                />
                <img
                  src="../public/image/DTG.jpg"
                  alt="สกรีนเสื้อ 1 ล้านสี ด้วยระบบ DTG Direct To Garment"
                  className="img-fluid center spaceonbottom"
                  width="632"
                  height="356"
                />
              </picture>

              <a>
                รับสกรีนและผลิตเสื้อยืดคอตตอนและกระเป๋าผ้าแคนวาส ด้วยระบบ DTG
                ผ่านการสั่งงานด้วยคอมพิวเตอร์ รับสกรีนไม่จำกัดจำนวนขั้นต่ำ เพียง
                1 ตัว 1 ใบ ก็สกรีนให้ได้เลย จะใส่เป็นแก๊งค์ เป็นก๊วน เป็นคู่
                เป็นครอบครัว ในราคาและคุณภาพสมราคา
              </a>
            </div>

            <div className="col-md-6">
              <picture>
                <source
                  srcset="../public/image/webp/dst.webp"
                  type="image/webp"
                />
                <img
                  src="../public/image/DST.jpg"
                  alt="Digital Screen Transfer DST สกรีนบล๊อกเดียวหลายสี"
                  className="img-fluid center spaceonbottom"
                  width="632"
                  height="356"
                />
              </picture>

              <a>
                ระบบล่าสุดในการสกรีนเสื้อยืดและกระเป๋า ไม่จำกัดเนื้อผ้า ด้วยระบบ
                DST Digital Screen Transfer รูปแบบสกรีนด้วยฟิลม์ลงบนเนื้อผ้า
                สีสันสวยสดใส คมชัดทุกสัดส่วนของแบบสกรีน เพียง 1 บล๊อก
                ทำได้หลายสี ทุกแบบ
              </a>
            </div>
          </div>
          <div className="row row-eq-height top-buffer">
            <div className="col md-6">
              <a href="/DTG">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block spaceontop spaceonbottom"
                >
                  DTG
                </button>
              </a>
            </div>
            <div className="col md-6">
              <a href="/DST">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block spaceontop spaceonbottom"
                >
                  DST
                </button>
              </a>
            </div>
          </div>
          <div className="row row-eq-height top-buffer">
            <div className="col-md-6">
              <picture>
                <source
                  data-srcset="../public/image/webp/silkscreen.webp"
                  type="image/webp"
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTMgNDgwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjOWU5OTkyIiBkPSJNMCAwaDg1M3Y0NzlIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNyAxLjcpIHNjYWxlKDMuMzMyMDMpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKC05Ny4yIDQyLjIgNDcuMykgc2NhbGUoODguNjg0MyAyNi4zOTkzMikiLz48ZWxsaXBzZSBmaWxsPSIjZjhmMmYzIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC03Ljk3MjIgLTI1LjIzMTc4IDUyLjk0MjU1IC0xNi43Mjc2NyAxODIuMSAyNC44KSIvPjxlbGxpcHNlIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTM4LjU2MzQ2IC0uMzE1MSAuMTI1ODIgLTE1LjM5ODg1IDY2LjEgMTQzKSIvPjxlbGxpcHNlIGZpbGw9IiMzYTFhMTUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTYzLjI2OTI2IDMzLjc4MjY0IC02LjA5NzExIC0xMS40MTg4OCAyMzAuNCA0NCkiLz48ZWxsaXBzZSBmaWxsPSIjZTBkZWNlIiBjeD0iMjEzIiBjeT0iMTA1IiByeD0iNzAiIHJ5PSIzNCIvPjxlbGxpcHNlIGZpbGw9IiM1NjZjODciIGN4PSIyMCIgY3k9IjIzIiByeD0iNTYiIHJ5PSIyNyIvPjxlbGxpcHNlIGZpbGw9IiNlM2Q4YzUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoNy42OTkwNSAtMTkuOTg2NyA0My4yNDU2IDE2LjY1ODYgMTEwLjQgNjUpIi8+PHBhdGggZmlsbD0iI2VlZjFmOCIgZD0iTTgxIDEwNGg0N3YyNUg4MXoiLz48L2c+PC9zdmc+"
                  data-src="../public/image/silkscreen.jpg"
                  alt="บล๊อกสกรีน Silk-Screen สำหรับงานจำนวนมาก"
                  className="img-fluid center spaceonbottom lazyload blur-up"
                  width="632"
                  height="356"
                />
              </picture>

              <a>
                รับสกรีนและผลิตเสื้อ การสกรีนด้วยระบบ Silk Screen
                ขึ้นบล๊อกสกรีนด้วยระบบดิจิตอล แบบสวยคมชัดตามต้นฉบับ Made to
                Order
              </a>
            </div>
            <div className="col-md-6">
              <picture>
                <source
                  data-srcset="../public/image/webp/embroidery.webp"
                  type="image/webp"
                />
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NTMgNDgwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjYTVhNWEyIiBkPSJNMCAwaDg1M3Y0NzlIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNyAxLjcpIHNjYWxlKDMuMzMyMDMpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBmaWxsPSIjMTUxZTQ1IiBjeD0iMTg3IiBjeT0iNTEiIHJ4PSIyNCIgcnk9IjI3Ii8+PGVsbGlwc2UgZmlsbD0iI2NkZDBjYyIgY3g9Ijc5IiByeD0iODQiIHJ5PSI4NCIvPjxlbGxpcHNlIGZpbGw9IiM3ZDYwNGIiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjczNjkgMTQuMDgxNzcgLTE1OC4zMTMxNyA4LjI4NDQzIDE0Mi43IDEzOC4yKSIvPjxlbGxpcHNlIGZpbGw9IiMyZTMwNDEiIGN4PSIxMjEiIGN5PSI4MiIgcng9IjE3IiByeT0iMTUiLz48ZWxsaXBzZSBmaWxsPSIjZDNkNmRlIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDYxLjI5NTE5IDkuODE4MjEgLTMuMDY2MzUgMTkuMTQzMjcgMjA4IDguMykiLz48ZWxsaXBzZSBmaWxsPSIjY2VjZmNkIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0zLjE4MzAzIDE5Ljc3ODc5IC0zOC4zMzMzNiAtNi4xNjkwNSA3OCAxMTMuNSkiLz48cGF0aCBkPSJNNzcgMTU5bC0xNC0yMCA4NiA0eiIvPjxlbGxpcHNlIGZpbGw9IiM3YTgzODUiIGN4PSIyMzkiIGN5PSIxMTYiIHJ4PSI2MyIgcnk9IjMwIi8+PC9nPjwvc3ZnPg=="
                  data-src="../public/image/Embroidery.jpg"
                  alt="งานปัก"
                  className="img-fluid center spaceonbottom lazyload blur-up"
                  width="632"
                  height="356"
                />
              </picture>

              <a>
                รับปักเสื้อโปโล เสื้อนักเรียน ไม่ว่าจะเป็น โลโก้ บริษัท ห้างร้าน
                อักษรย่อโรงเรียน ชื่อนักเรียน ในระบบดิจิตอลด้วยเครื่องปักทันสมัย
                คุณภาพของไหมปัก และลายปัก สวยงามตามมาตรฐาน
              </a>
            </div>
          </div>
          <div className="row row-eq-height top-buffer">
            <div className="col md-6">
              <a href="/blockscreen">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block spaceontop spaceonbottom"
                >
                  บล็อกสกรีน
                </button>
              </a>
            </div>
            <div className="col md-6">
              <a href="embroidery">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block spaceontop spaceonbottom"
                >
                  งานปัก
                </button>
              </a>
            </div>
          </div>
        </div>
        <br />
          <Album />
      </div>

    </Layout>
  )
}
