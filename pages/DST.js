import Layout from "../components/Layout";
import SEO from "../components/seo"
import "lazysizes"
const DST = () => {
  return (
    <Layout>
      <SEO/>
      <div class="container " align="center">
        <div class="row">
          <div class="col spaceonbottom spaceontop">
            <picture>
              <source
                data-srcSet="../public/image/webp/dstbanner.webp"
                type="image/webp"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzUwIDkwMiI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIC8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzlhOTg5OCIgZD0iTTAgMGgxMzUwdjkwMUgweiIvPjxnIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi42IDIuNikgc2NhbGUoNS4yNzM0NCkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiMwZjExMTIiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTc2LjIgMTQxLjYgLTEwMS44KSBzY2FsZSg0My43MTQ4MiA4Ni41NjI2NikiLz48ZWxsaXBzZSBmaWxsPSIjZmZmZWZkIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEzNi41MTgzIC0xMTIuNTM3IDQwLjM4IDQ4Ljk4NDg1IDI1IDY2KSIvPjxlbGxpcHNlIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMTkuMTk3OTQgLTMuODYyMDYgNS4zNjEyNSAyNi42NTAyNyA0NS43IDc0LjgpIi8+PHBhdGggZD0iTTM5IDExMWgyN3Y0NEgzOXoiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMTI5IiBjeT0iNCIgcng9IjE0NyIgcnk9IjgiLz48ZWxsaXBzZSBmaWxsPSIjNTM1ODRlIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDM1Ljc1MjQ5IDQwLjY0Mzg5IC0yOC4yNTk2NSAyNC44NTg2NyAxNDEuOCAxNTMuMSkiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iOCIgY3k9IjEzMyIgcng9IjMyIiByeT0iMzIiLz48ZWxsaXBzZSBmaWxsPSIjZmZmIiBjeD0iMzAiIGN5PSIxNyIgcng9IjM2IiByeT0iMzYiLz48L2c+PC9zdmc+"
                data-src="../public/image/DSTbanner.jpg"
                class="img-fluid centerimg lazyload blur-up"
                alt="DST บล๊อกเดียวล้านสี"
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
export default DST;
