import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo"
import "lazysizes"
const Blockscreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <SEO/>
      <div class="container " align="center">
        <div class="row">
          <div class="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/block01.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDY0IDExODIiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNjNWMzZGYiIGQ9Ik0wIDBoMTQ2NHYxMTc4SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjkgMi45KSBzY2FsZSg1LjcxODc1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PHBhdGggZmlsbD0iIzVlNjA0NCIgZD0iTTExLjUgMTMyLjdsMi0xMTAgMzkgLjYtMiAxMTB6Ii8+PGVsbGlwc2UgZmlsbD0iI2Y2OTVmZiIgY3g9IjIyMyIgY3k9IjQ0IiByeD0iNzYiIHJ5PSIxMTMiLz48ZWxsaXBzZSBmaWxsPSIjZDFmZmI5IiBjeD0iMTMyIiBjeT0iMTgxIiByeD0iMjUzIiByeT0iMzAiLz48ZWxsaXBzZSBmaWxsPSIjNGExN2VhIiBjeD0iMTM3IiBjeT0iMzIiIHJ4PSIxMDgiIHJ5PSI4Ii8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgY3g9IjI1NSIgY3k9IjEwMiIgcng9IjExIiByeT0iMjQ5Ii8+PGVsbGlwc2UgZmlsbD0iIzg1OTM3NSIgY3g9IjMwIiBjeT0iMTQ1IiByeD0iMjEiIHJ5PSIyMSIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIGN5PSI5OCIgcng9IjEwIiByeT0iMjU1Ii8+PGVsbGlwc2UgZmlsbD0iI2E0ZmZmZiIgY3g9IjEwMyIgY3k9IjgiIHJ4PSI1NCIgcnk9IjE3Ii8+PC9nPjwvc3ZnPg=="
                data-src="../public/image/block01.jpg"
                class="img-fluid centerimg lazyload blur-up"
                alt="block1"
              />
            </picture>
            <picture>
              <source
                data-srcSet="../public/image/webp/block02.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDY0IDExODIiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNjYWM2ZTAiIGQ9Ik0wIDBoMTQ2NHYxMTc4SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjkgMi45KSBzY2FsZSg1LjcxODc1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iI2NkYWY3MyIgY3g9IjMxIiBjeT0iNjQiIHJ4PSIyMSIgcnk9IjEzNiIvPjxlbGxpcHNlIGZpbGw9IiNiMDRmZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE3NC43IDU4IDExLjkpIHNjYWxlKDcyLjEzMjQgMjMuODUwOTEpIi8+PGVsbGlwc2UgZmlsbD0iIzE0NTlmYiIgY3g9IjIwMCIgY3k9IjMyIiByeD0iNTAiIHJ5PSIxMCIvPjxlbGxpcHNlIGZpbGw9IiNjZmIiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLjIzMjY0IC0zMC4xMDUzNCAyNDkuOTg2NTQgMS45MzE3NyAxMzYuMSAxODIuOCkiLz48ZWxsaXBzZSBmaWxsPSIjZjI5NGZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0zLjYyMjc0IC02OS43MDMyNyA1My43ODg1NyAtMi43OTU2IDEwNCA4NykiLz48ZWxsaXBzZSBmaWxsPSIjYWJmZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDQyLjAwMDkxIC02LjcwOTYzIDMuNzg1MjkgMjMuNjk1MTYgMTg3LjIgMS44KSIvPjxwYXRoIGZpbGw9IiNhOGM3ZmYiIGQ9Ik0xNDkgMzdsMTIyIDYtMTE0IDEzMnoiLz48ZWxsaXBzZSBmaWxsPSIjMmQ1YzJiIiBjeD0iOTQiIGN5PSIxOTQiIHJ4PSI4MiIgcnk9IjMiLz48L2c+PC9zdmc+"
                data-src="../public/image/block02.jpg"
                class="img-fluid centerimg lazyload blur-up"
                alt="block1"
              />
            </picture>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="/">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block spaceontop spaceonbottom centerimg"
              >
                ย้อนกลับ
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blockscreen;
