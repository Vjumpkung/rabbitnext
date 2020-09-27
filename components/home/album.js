import React from "react";
const Album = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <picture>
        <source data-srcset="public/image/webp/order.webp" type="image/webp"/>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzIwIDEwMDYiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNjMDZkNmEiIGQ9Ik0wIDBoMTMyMHYxMDA1SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjYgMi42KSBzY2FsZSg1LjE1NjI1KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iYXp1cmUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ2LjQgMjcuNyAtMjQpIHNjYWxlKDE1MS45NjE5MyAzNi4yNTUzKSIvPjxlbGxpcHNlIGZpbGw9IiNkMzAwMDAiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLS44MjMxNCAtMjAuNDk0MzMgOTQuODM4MzQgLTMuODA5MSAxMDIuNyA2NS45KSIvPjxlbGxpcHNlIGZpbGw9IiNmMWZmZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMTkuODU4NDkgMTI1LjI4MTU2IC0xOC43NTA4OSAyLjk3MjIyIDI1NSAyNS43KSIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIGN4PSIxMzciIGN5PSIyIiByeD0iMjUzIiByeT0iNiIvPjxlbGxpcHNlIGZpbGw9IiNkNjA5MDgiIGN4PSIxODMiIGN5PSIxMTQiIHJ4PSI1OCIgcnk9IjIwIi8+PGVsbGlwc2UgZmlsbD0iIzQ3NWE1YiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCg1Mi45NDk5IC05Ljk3MzEzIDguMTkzNDkgNDMuNTAxMzUgMjMxIDE4MCkiLz48cGF0aCBmaWxsPSJyZWQiIGQ9Ik02NiA4aDE2NnYyOEg2NnoiLz48cGF0aCBmaWxsPSIjYWFmOGZmIiBkPSJNMjU2IDM2bC02OSA1OSA5LTU5eiIvPjwvZz48L3N2Zz4="
            data-src="public/image/order.jpg"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="สั่งซื้อเสื้อ" width="1288" height="981.61"
          />
        </picture>

        <picture>
        <source data-srcset="public/image/webp/size-chart.webp" type="image/webp"/>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzIwIDc0MyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIC8+PC9maWx0ZXI+PHBhdGggZmlsbD0iI2I3YWQ4ZSIgZD0iTTAgMGgxMzIwdjc0MkgweiIvPjxnIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi42IDIuNikgc2NhbGUoNS4xNTYyNSkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiMwMDRiNTQiIGN4PSI2NiIgY3k9IjcyIiByeD0iNDIiIHJ5PSI0NSIvPjxlbGxpcHNlIGZpbGw9IiMwNmZmZmYiIGN4PSIxMzgiIGN5PSI2NiIgcng9IjMzIiByeT0iMzMiLz48ZWxsaXBzZSBmaWxsPSIjZmY1YzQ0IiBjeD0iMjIzIiBjeT0iODgiIHJ4PSI2MyIgcnk9Ijc1Ii8+PGVsbGlwc2UgZmlsbD0iIzBmZiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MS44IDIzLjkgMTE4LjEpIHNjYWxlKDMwLjkxMDg5IDIxLjY5OTYyKSIvPjxlbGxpcHNlIGZpbGw9IiNmY2ZmZmYiIGN4PSIxNjkiIHJ4PSIyNTUiIHJ5PSIzNCIvPjxlbGxpcHNlIGZpbGw9IiMwMDQwZmYiIGN4PSI1NCIgY3k9Ijg2IiByeD0iMjEiIHJ5PSIzMyIvPjxlbGxpcHNlIGZpbGw9IiNmZmIxMTEiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMTcyLjQ4NjEyIDkuOTMwNTcgLTEuMzE1MjkgMjIuODQ1NTUgODMgMTQzKSIvPjxlbGxpcHNlIGZpbGw9IiMwZjAiIGN4PSI4NyIgY3k9IjgxIiByeD0iMTYiIHJ5PSIzNCIvPjwvZz48L3N2Zz4="
            data-src="public/image/Size-Chart.png"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="ขนาดเสื้อที่คุณต้องการ" width="1288" height="724.98"
          />
        </picture>

        <picture>
        <source data-srcset="public/image/webp/send.webp" type="image/webp"/>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNlNzllOWEiIGQ9Ik0wIDBoMTkyMHYxMDgwSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCg3LjUgMCAwIDcuNSAzLjggMy44KSIgZmlsbC1vcGFjaXR5PSIuNSI+PGVsbGlwc2UgZmlsbD0iI2RmMDAwMCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTEuNCA3MS40IC02OS43KSBzY2FsZSg0OC4xNzEwNCAxNzEuODg1ODUpIi8+PGVsbGlwc2UgZmlsbD0iI2VmZmZmZiIgY3g9IjEyMSIgY3k9IjEzMCIgcng9IjI1NSIgcnk9IjY5Ii8+PGVsbGlwc2UgZmlsbD0iI2VhMDAwMCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtLjA0MzkzIC0yNS4xNjkwOCAxNDguMTMxNDYgLS4yNTg1NCAxMzMuNSAyKSIvPjxwYXRoIGZpbGw9IiMyNzFjMTkiIGQ9Ik02OCAxN2g5OHYxNEg2OHoiLz48ZWxsaXBzZSBmaWxsPSIjNDUzNzM2IiBjeD0iMTE3IiBjeT0iNTgiIHJ4PSI4NSIgcnk9IjQiLz48cGF0aCBmaWxsPSIjZmRmZmZmIiBkPSJNMSAxNDhsLTE3LTgzIDIzOCA5NHoiLz48cGF0aCBmaWxsPSIjMzE0YjM0IiBkPSJNMTM0IDEyM2g1NHY4aC01NHoiLz48ZWxsaXBzZSBmaWxsPSIjN2Y3ZTVkIiBjeD0iMTEzIiBjeT0iNzIiIHJ4PSI3NSIgcnk9IjUiLz48L2c+PC9zdmc+"
            data-src="public/image/send.jpg"
            className="img-fluid centerimg spaceonbottom spaceontop lazyload blur-up"
            alt="ส่งด่วน" width="1288" height="724.5"
          />
        </picture>

        <picture>
        <source data-srcset="public/image/webp/indyrabbit.webp" type="image/webp"/>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDMyIDMyMjQiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiNiNWIwYWMiIGQ9Ik0wIDBoMjAyN3YzMjI0SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjMgNi4zKSBzY2FsZSgxMi41OTM3NSkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiMxNjIxMmUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMTYuOTY5MyAyLjIwNzc2IC05Ljk4ODcgNzYuNzc1MDEgMzAuOSA2NC42KSIvPjxlbGxpcHNlIGZpbGw9IiM2MjU5NGIiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTU3LjE2MzIxIDkuNzA2NDEgLTUuMTQ3MDEgLTMwLjMxMTkgOTQgNjUuOSkiLz48ZWxsaXBzZSBmaWxsPSIjZmZmZmZhIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDY5LjM4ODg0IC0yNi4yNzMyNyAxMS4xMjI1OCAyOS4zNzUyMiAxMDUuMiAxMjUuMykiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iNTciIHJ4PSIxNjAiIHJ5PSIxNSIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIGN4PSIxMzUiIGN5PSIyNTQiIHJ4PSI0NyIgcnk9IjI0Ii8+PHBhdGggZD0iTTEyNCA3M2gzM3YxMmgtMzN6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgODRoNTB2MTFIMHoiLz48cGF0aCBkPSJNMTQgOTVoMjJ2NDFIMTR6Ii8+PC9nPjwvc3ZnPg=="
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
