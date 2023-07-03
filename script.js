const content = document.getElementById('content');
const form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault(); // フォームのデフォルトの送信動作をキャンセル

  const addressInput = form.elements.address;
  const address = addressInput.value;

  // APIのURLを構築し、入力された住所情報を取得
  const apiUrl = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${address}`;
  fetch(apiUrl)
    .then(response => { return response.json() })
    .then(data => {
      const tag = document.createElement('h1');
      if (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      tag.textContent = data.results[0].address3;
      content.appendChild(tag);
    })
    .catch(error => { console.log(error) });
}

// フォーム要素を取得してイベントリスナーを設定
form.addEventListener('submit', handleSubmit);
