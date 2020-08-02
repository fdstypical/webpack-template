export default class Post {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      img: this.img,
    })
  }

  addImg(document) {
    const img = document.createElement('img');
    img.src = this.img;
    document.querySelector('.container').append(img);
  }
}