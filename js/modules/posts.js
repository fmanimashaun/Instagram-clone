const postsUI = (postArr) => {
  const postContainer = document.querySelector('.posts');

  const posts = postArr.map((postItem) => `
     <div class='post'>
                    <div class='post-header'>
                        <img class="post-header__img" src="${postItem.avatar}" alt="profile image">
                        <div class="post-user">
                            <h2 class="post-user__name">${postItem.name}</h2>
                            <p class="post-user__location">${postItem.location}</p>
                        </div>
                    </div>
                    <figure class='post-body'>
                        <img class="post-body__img" src="${postItem.post}" alt="courbet portrait">
                        <figcaption class="post-body__caption">
                            <div class="post-body__caption-btns">
                                <button class="post-body__caption-btn"><img class="post-body__caption-btn-img" src="img/icon-heart.png"
                                        alt="heart icon"></button>
                                <button class="post-body__caption-btn"><img class="post-body__caption-btn-img"
                                        src="img/icon-comment.png" alt="comment icon"></button>
                                <button class="post-body__caption-btn"><img class="post-body__caption-btn-img" src="img/icon-dm.png"
                                        alt="share icon"></button>
                            </div>
                            <p class="post-body__caption-text">${postItem.likes} likes</p>
                            <p class="post-body__caption-text">${postItem.username} <span class='post-body__caption-comment'>${postItem.comment}</span>
                            </p>
                        </figcaption>
                    </figure>
                </div>
  `).join('');

  postContainer.insertAdjacentHTML('afterbegin', posts)
};

export default postsUI;