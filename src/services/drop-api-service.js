import config from '../config';

const DropApiService = {
  getDrops() {
    return fetch(`${config.API_ENDPOINT}/drops`, {
      headers: {}
    }).then((res) => {
      console.log(res.status, res.statusText);
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  postDrop(data) {
    return fetch(`${config.API_ENDPOINT}/drops`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content
      })
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  }
};

export default DropApiService;
