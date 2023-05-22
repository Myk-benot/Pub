class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  matchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  dogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <div class="dog-card">
      <div class="header">
       <img class="header-img-grey" src="/images/icon-profile.png"/>
       <img class="header-img-red" src="/images/logo.png"/>
       <img class="header-img-grey" src="/images/icon-chat.png"/>
      </div>
      <div class="img-div">
      <img class="hiddenlike" src="/images/badge-like.png">
      <img class="hiddennope" src="/images/badge-nope.png">
      <img class="avatar" src="${avatar}">
      <h3>${name},${age}</h3>
      <p class="bio">${bio}</p>
      </div>
    </div>

    
    `;
  }
}

export default Dog;
