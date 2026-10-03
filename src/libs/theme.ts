export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// 画面が描かれる前に <head> で実行し、保存済みのテーマを反映する（読み込み時のちらつき防止）
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}})();`;
