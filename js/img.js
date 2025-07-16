document.addEventListener("DOMContentLoaded", () => {
  const imageList = [
    "img/it.jpeg",
    "img/kensetsu.jpeg",
    "img/hair.jpeg",
    "img/pre1.jpeg",
    "img/pre2.jpeg",
    "img/pre3.jpeg",
    "img/nishitetsu/top.jpg",
    "img/kamiyama/top.jpg",
  ];

  // ランダム表示対象のimg要素たち
  const imgElements = Array.from(
    document.querySelectorAll('img[data-random="top-img"]')
  );

  // 要素数より画像が少ないとエラーになるので制限
  const usableImages = imageList.slice(0, imgElements.length);

  // シャッフル関数
  const shuffledImages = usableImages.sort(() => Math.random() - 0.5);

  // 各imgに重複なく画像を割り当てる
  imgElements.forEach((img, i) => {
    img.src = shuffledImages[i];
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const topElement = document.querySelector(".top");

  const setBgPosition = () => {
    const height = window.innerHeight;
    let yPos;

    if (height > 1000) {
      yPos = "30%"; // 高い画面では中央近く
    } else if (height > 900) {
      yPos = "70%"; // 中くらいの画面
    } else if (height > 600) {
      yPos = "80%"; // やや上寄せ
    } else {
      yPos = "40%"; // 高さが小さいときは上寄せ
    }

    topElement.style.setProperty("--bg-pos", yPos);
  };

  // 初期設定
  setBgPosition();

  // リサイズ時にも反映（オプション）
  window.addEventListener("resize", setBgPosition);
});
