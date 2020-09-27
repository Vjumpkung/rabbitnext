import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row spaceonbottom">
          <div className="col-4">
            <div className="center">
              <a href="https://www.google.com/maps/place/Rabbits+Store/@13.773695,100.631823,15z/data=!4m5!3m4!1s0x0:0xb0ce41b2b45e9e01!8m2!3d13.7729449!4d100.6318229?hl=en-US">
                <img
                  data-src="../public/image/map.png"
                  width="300"
                  height="200"
                  className="lazyload centerimg blur-up"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTggMTk4Ij48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjZThlNmU3IiBkPSJNMCAwaDI5OHYxOTdIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC42IC42KSBzY2FsZSgxLjE2NDA2KSIgZmlsbC1vcGFjaXR5PSIuNSI+PHBhdGggZmlsbD0iIzIzMjkxMiIgZD0iTTEyIDExN2gzMXYzN0gxMnoiLz48cGF0aCBmaWxsPSIjZTAwMDAwIiBkPSJNMTE5IDY3aDIwdjI1aC0yMHoiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKC04My41IDkyLjIgLTY5LjMpIHNjYWxlKDQwLjE4NTU0IDU4LjkyODExKSIvPjxlbGxpcHNlIGZpbGw9IiM3Mzc2NzUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjA4OTM2IDQuMDIwNCAtMzYuODY2OTYgLjgxOTQgNTQgMjMuNCkiLz48ZWxsaXBzZSBmaWxsPSIjZDk2NjYyIiBjeD0iMTcwIiBjeT0iNzgiIHJ4PSI0NyIgcnk9IjQiLz48cGF0aCBmaWxsPSIjZGMwZTAwIiBkPSJNMTQyIDc4LjVsLTEyLjQgMTEuNkwxMTYgNzUuNWwxMi40LTExLjZ6Ii8+PGVsbGlwc2UgZmlsbD0iI2Q0ZDhkYSIgY3g9IjU0IiBjeT0iMTY5IiByeD0iMjE0IiByeT0iMjAiLz48ZWxsaXBzZSBmaWxsPSIjZmVmZmZjIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDYyLjg1MTkgLTQuMzAyNyAyLjE1NjYyIDMxLjUwMjkzIDIwNyAxMjkuNSkiLz48L2c+PC9zdmc+"
                  alt="map"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h4>ร้าน Rabbitsstore</h4>
            <h5 className="spaceontop">
              30 Ladprao 130 Ladprao rd. KhlongChan Bangkapi Bangkok 10240
            </h5>
            <p></p>
            <a>
              "บริการสกรีนเสื้อ 1 ตัวก็ทำได้ รับสกรีนเสื้อ ระบบ DTG (Direct to
              garment)
            </a>
            <a>
              เครื่องพิมพ์คุณภาพมาตรฐานญี่ปุ่น ระบบ DST บล๊อกสกรีน และงานปัก"
            </a>
          </div>
          <div className="col-md-4">
            <h4>Contacts</h4>
            <a href="https://www.facebook.com/rabbitsstore/">
              <img
                data-src="../public/image/facebook.png"
                width="298"
                height="70"
                className="lazyload centerimg blur-up"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTggNzEiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiM1ZjU0NWQiIGQ9Ik0wIDBoMjk4djY5SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNiAuNikgc2NhbGUoMS4xNjQwNikiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiNmZmY4ZjciIGN4PSIyMiIgY3k9IjMyIiByeD0iMTI1IiByeT0iMjEiLz48ZWxsaXBzZSByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDI0IDUxLjMgNTEzLjkpIHNjYWxlKDkyLjU1NDA5IDQ4LjQzNDEyKSIvPjxlbGxpcHNlIGZpbGw9IiMwMDA0MDQiIGN4PSI4MiIgcng9IjMyIiByeT0iMzIiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMzAiIGN5PSIyOCIgcng9IjI1IiByeT0iMjUiLz48cGF0aCBkPSJNLTE0IDIyTDYtNXY4MHoiLz48ZWxsaXBzZSBmaWxsPSIjZmY5MDg4IiBjeD0iMTI1IiBjeT0iNTkiIHJ4PSI0MCIgcnk9IjE2Ii8+PGVsbGlwc2UgZmlsbD0iIzAwMDAwZSIgY3g9IjIyNSIgcng9IjU2IiByeT0iNTYiLz48ZWxsaXBzZSBjeD0iOTMiIGN5PSIyNiIgcng9IjQ3IiByeT0iNCIvPjwvZz48L3N2Zz4="
                alt="facebook"
              />
            </a>
            <h4 className="text-success centertext bold">LINE</h4>
            <a href="http://line.me/ti/p/@rbs2017" className="centerimg">
              <img
                data-src="../public/image/addline.png"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzQiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiMwMzFmMDMiIGQ9Ik0wIDBoMzAwdjMzSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSguNiAuNikgc2NhbGUoMS4xNzE4OCkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiMwZjhlMGYiIGN4PSIxNDUiIGN5PSIxNiIgcng9IjE2NCIgcnk9IjUiLz48ZWxsaXBzZSBjeD0iMjUxIiBjeT0iOSIgcng9IjkiIHJ5PSI0NSIvPjxlbGxpcHNlIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTgwLjIgNS43IDQuOCkgc2NhbGUoMjQuNTk2MDEgMTQuMjU3NDUpIi8+PGVsbGlwc2UgY3g9Ijg2IiBjeT0iMjMiIHJ4PSI5IiByeT0iNTYiLz48ZWxsaXBzZSBjeD0iMTI2IiBjeT0iNCIgcng9IjI1MCIgcnk9IjYiLz48cGF0aCBkPSJNNDcgMGg2djI5aC02eiIvPjxwYXRoIGQ9Ik0xMzAgNDRsODItMjMtMTY0IDF6Ii8+PGVsbGlwc2UgY3g9IjEwNiIgY3k9IjI4IiByeD0iMjU1IiByeT0iNyIvPjwvZz48L3N2Zz4="
                className="lazyload blur-up"
              />
              <br />
              <img
                data-src="../public/image/lineqr.png"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZmlsdGVyIGlkPSJiIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMiIgLz48L2ZpbHRlcj48cGF0aCBmaWxsPSIjYWNhY2FjIiBkPSJNMCAwaDI1MHYyNTBIMHoiLz48ZyBmaWx0ZXI9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC41IC41KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzUwNTA1MCIgY3g9IjEyOSIgY3k9IjEyNiIgcng9Ijk2IiByeT0iMTAxIi8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgY3g9IjIzMCIgY3k9IjI0OSIgcng9IjUwIiByeT0iNTAiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKC04OS4zIDc1IDY2LjUpIHNjYWxlKDE5Ni42NDQzNyAxOS43MjkzNikiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTU5IDE4MmwzOSA3My0yMTQgMXoiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMjM5IiBjeT0iMTEzIiByeD0iMTYiIHJ5PSIyNDgiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMTI1IiBjeT0iMTEiIHJ4PSIyNDkiIHJ5PSIxNSIvPjxlbGxpcHNlIGZpbGw9IiMyZDJkMmQiIGN4PSIxOTMiIGN5PSIxODkiIHJ4PSIzMSIgcnk9IjMxIi8+PHBhdGggZmlsbD0iIzFhMWExYSIgZD0iTTQzIDExN0wyMiAzMGwzNy04eiIvPjwvZz48L3N2Zz4="
                height="100"
                className="lazyload blur-up"
              />
            </a>
          </div>
        </div>
        <hr className="alignleft" width="100%" />
        <div className="row">
          <div className="col-12 col-md">
            <a className="d-block mb-3 text-body text-decoration-none font-weight-bold">
              © 2020 Rabbitsstore{" "}
            </a>
          </div>
          <div className="col-6 col-md">
            <h5>หน้าแรก</h5>
            <ul className="list-unstyled text-small"></ul>
          </div>
          <div className="col-6 col-md">
            <h5>บริการของเรา</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-body text-decoration-none" href="/DTG">
                  สกรีนระบบ DTG
                </a>
              </li>
              <li>
                <a className="text-body text-decoration-none" href="/DST">
                  สกรีนระบบ DST
                </a>
              </li>
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="/blockscreen"
                >
                  สกรีนระบบ บล๊อกสกรีน
                </a>
              </li>
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="/embroidery"
                >
                  งานปัก
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>เกี่ยวกับ</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="https://www.facebook.com/rabbitsstore/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="http://line.me/ti/p/@rbs2017"
                >
                  LINE
                </a>
              </li>
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="tel:096-843-1966"
                >
                  โทร : 096-843-1966
                </a>
              </li>
              <li>
                <a
                  className="text-body text-decoration-none"
                  href="tel:094-854-1177"
                >
                  โทร : 094-854-1177
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
