import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo"
import "lazysizes"
const DTG = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <SEO/>
      <div className="container" align="center">
        <div className="row">
          <div className="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/order.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzIwIDEwMDYiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNiZjZlNmEiIGQ9Ik0wIDBoMTMyMHYxMDA1SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjYgMi42KSBzY2FsZSg1LjE1NjI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iI2NmMDAwMCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTMuMyA4NS45IC0xNykgc2NhbGUoMTkuMDA3MiA4Ni43MzIwNCkiLz48ZWxsaXBzZSBmaWxsPSIjZjFmZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDQxLjggLTUuNCA0NS45KSBzY2FsZSgzMi43MDc5NyAxMTAuODE5NDkpIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0NC44LTE2LjZsNDYgMTYuNy0yNS42IDcwLjUtNDYtMTYuN3oiLz48ZWxsaXBzZSBmaWxsPSIjYzIwMDAwIiBjeD0iNjkiIGN5PSI2NiIgcng9IjQ4IiByeT0iMjEiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xNDUuMzM1ODUgLjcxMzEzIC0uMDMyNDcgLTYuNjE3OTMgMTUxLjMgMS40KSIvPjxlbGxpcHNlIGZpbGw9IiM0ODU4NWEiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoMjguOCAtMjU3LjUgNTE3LjQpIHNjYWxlKDQyLjU3NzI2IDU2LjIyMTE2KSIvPjxlbGxpcHNlIGZpbGw9IiNmZjA4MDgiIGN4PSIxNTAiIGN5PSIyMiIgcng9Ijg5IiByeT0iMTQiLz48ZWxsaXBzZSBmaWxsPSIjZmJmZmZmIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xMDkuMzcxMDQgLjA5OTI4IC0uMDA1MjMgLTUuNzU4MjkgMTQxLjYgNDEpIi8+PC9nPjwvc3ZnPg=="
                data-src="../public/image/order.jpg"
                className="img-fluid lazyload blur-up"
                alt="สั่งซื้อเสื้อ"
              />
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/size1.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDgwIDE3MzkiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNiODljOGYiIGQ9Ik0wIDBoMTA4MHYxNzM5SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjQgMy40KSBzY2FsZSg2Ljc5Mjk3KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzE0OTdmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgzNS4zODczIC0uMDk1NzggLjIzOTcgODguNTU5MjggNTYuMSAxMDkuNCkiLz48ZWxsaXBzZSBmaWxsPSIjZmY3MjAwIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDMuNiAtMTMxNiAxOTk4LjcpIHNjYWxlKDMxLjEyNzY1IDExNi4wODEwMikiLz48ZWxsaXBzZSBmaWxsPSJyZWQiIGN4PSI3NSIgY3k9IjEzIiByeD0iMTM5IiByeT0iMTEiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjIyLjkgMjI0LjdsLS44IDQ3LTI1NS00LjQuOC00N3oiLz48ZWxsaXBzZSBmaWxsPSIjMWQ5ZDAwIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEwLjkzMDEgMCAwIDEwNC4yOTg3OSAxNS43IDExNS4zKSIvPjxlbGxpcHNlIGZpbGw9IiM2MWEyZmYiIGN4PSI1NiIgY3k9IjE2MyIgcng9IjM1IiByeT0iMzUiLz48ZWxsaXBzZSBmaWxsPSIjZmZhMjFkIiBjeD0iMTI5IiBjeT0iMTUxIiByeD0iNDAiIHJ5PSI0NiIvPjxwYXRoIGZpbGw9IiMwNmFmMDAiIGQ9Ik02IDIxMWgxNTN2MTFINnoiLz48L2c+PC9zdmc+"
                data-src="../public/image/size1.jpg"
                className="img-fluid lazyload blur-up"
                alt="เสื้อผู้ใหญ่"
              />
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/size2.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDgwIDE3ODciPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNkZGRmZDkiIGQ9Ik0wIDBoMTA3NHYxNzg3SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUgMy41KSBzY2FsZSg2Ljk4MDQ3KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iIzZiZjYxZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjAxNzggMTAuMjAzOTIgLTk4LjA2MzM3IC0uMTcxMTUgNzcuMyAxOC45KSIvPjxlbGxpcHNlIGZpbGw9IiNhM2M3ZmYiIGN4PSIxMzUiIGN5PSI3MSIgcng9IjQ1IiByeT0iNDUiLz48ZWxsaXBzZSBmaWxsPSIjZjNkZjg2IiBjeD0iNjEiIGN5PSI1MyIgcng9IjI5IiByeT0iMjgiLz48cGF0aCBmaWxsPSIjZmY0NzQ4IiBkPSJNMTAwLjIgMjE3LjRsLS40IDEzLTUwLTEuOC40LTEzeiIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIGN4PSIxNDAiIGN5PSIyNDAiIHJ4PSI0MCIgcnk9IjQwIi8+PGVsbGlwc2UgZmlsbD0iIzk4YmFmMSIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMS41OTYzNCAyNi44Njk0IC0yOC41MjMyOSAtMS42OTQ2IDEyMC4zIDE0Ni44KSIvPjxlbGxpcHNlIGZpbGw9IiM4MTdiNzgiIGN4PSIxMTUiIGN5PSIxNjAiIHJ4PSIxMTMiIHJ5PSI0Ii8+PHBhdGggZmlsbD0iIzJlMDAzZCIgZD0iTTggNDFoMjF2N0g4eiIvPjwvZz48L3N2Zz4="
                data-src="../public/image/size2.jpg"
                className="img-fluid lazyload blur-up"
                alt="เสื้อเด็ก"
              />
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/socialrbs.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODY3IDI1NjIiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNlMWQwYzEiIGQ9Ik0wIDBoMTg2MXYyNTYySDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDUpIHNjYWxlKDEwLjAwNzgxKSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iI2RjYWQ3YSIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgxMC41OTc3NSAxMjcuNzM2MTYgLTU3LjY5NDc0IDQuNzg2NyAzMS4xIDIyOS42KSIvPjxwYXRoIGZpbGw9IiNmN2Y5ZmYiIGQ9Ik0xOTItOWwtNCAyNjdMOTEtMTJ6Ii8+PGVsbGlwc2UgZmlsbD0iI2ZmMjgzMiIgY3g9IjEyNSIgY3k9IjIzIiByeD0iMTc1IiByeT0iNCIvPjxwYXRoIGZpbGw9IiM0MTM5MmMiIGQ9Ik0yMS41IDIyNi41di01aDE1N3Y1eiIvPjxlbGxpcHNlIGZpbGw9IiNmZmZmZWEiIGN5PSI5IiByeD0iMjYiIHJ5PSI5MyIvPjxlbGxpcHNlIGZpbGw9IiM0NjQ4NDIiIGN4PSIxMzUiIGN5PSIxODAiIHJ4PSIxNzgiIHJ5PSIzIi8+PHBhdGggZmlsbD0iIzRiNTM1NCIgZD0iTTE3MC40IDUxLjJsMTEuOS4yLTYuNi02LjZMLTE2IDUwLjR6Ii8+PGVsbGlwc2UgZmlsbD0iI2ZmZiIgY3g9IjExMiIgcng9IjE2MSIgcnk9IjE3Ii8+PC9nPjwvc3ZnPg=="
                data-src="../public/image/socialrbs.jpg"
                className="img-fluid lazyload blur-up"
                alt="มาร่วมงานกับเรา"
              />
            </picture>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block spaceontop spaceonbottom centerimg"
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
export default DTG;
