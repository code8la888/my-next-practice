import React from "react";

export default function Loading() {
  // 在伺服器完成資料加載之前，會顯示 loadind 畫面，避免使用者看到空白畫面
  // loading.js 必須在 app 目錄下，與 page.js 同層，且檔案名稱必須為 loading.js 才會生效
  return <p>Loading Data...</p>;
}
