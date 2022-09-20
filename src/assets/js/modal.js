const content_section = document.querySelector('section.content');
const btns = document.querySelectorAll('[data-event="modal"]');
const confirm_modal = (
    `<div class="modal">
        <div class="mask">
            <div class="confirm-modal">
                <div class="header">
                    按下確認後，狀態將會無法復原或編輯，您確定要變更為ＸＸＸ狀態？
                </div>
                <div class="footer">
                    <div class="links">
                        <button type="button" class="link">取消</button>
                        <button type="button" class="link">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
)

const chat_modal = (
    `<div class="modal">
        <div class="mask">
            <div class="chat-modal">
                <div class="header">
                    <div class="user">
                        <div class="icon">
                            <img src="" alt="">
                        </div>
                        <div class="detail">
                            <div class="title">
                                賣方
                            </div>
                            <div class="name">
                                THEAPPLE
                            </div>
                        </div>
                    </div>
                    <div class="close-icon">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div class="body">
                    <div class="tips">提醒：在完成交易前，請賣家、買家留存TXID相關截圖，並上傳至交易中心。</div>
                    <div class="chat">
                        <div class="left">
                            <div class="comment">
                                <div class="i">

                                </div>
                                <div class="m">
                                    一二三四五六七八九十一二三四五
                                </div>
                                <div class="t">
                                    18:45
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="comment">
                                <div class="t">
                                    18:45
                                </div>
                                <div class="m">
                                    一二三四五六七八九十一二三四五
                                    一二三四五六七八九十一二三四五
                                    一二三四五六七八九
                                </div>
                                <div class="i">

                                </div>
                            </div>
                        </div>
                        <div class="left">
                            <div class="comment">
                                <div class="i">

                                </div>
                                <div class="m">
                                    一二三四五六七八九
                                </div>
                                <div class="t">
                                    18:45
                                </div>
                            </div>
                        </div>
                        <div class="date">
                            <span>
                                2022/07/24
                            </span>
                        </div>
                        <div class="right">
                            <div class="comment">
                                <div class="t">
                                    18:45
                                </div>
                                <div class="m">
                                    一二三四五六七
                                </div>
                                <div class="i">

                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="comment">
                                <div class="t">
                                    22:45
                                </div>
                                <div class="m">
                                    一二三四
                                </div>
                                <div class="i">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="quick_command">
                        <div class="options">
                            <div class="option">發出收幣地址</div>
                            <div class="option">請您點擊交易完成</div>
                            <div class="option">請您點擊交易取消</div>
                            <div class="option">完成發幣請查收</div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="upload">
                        <label for="uploadfile">
                            <i class="fa-solid fa-plus"></i>
                        </label>
                        <input type="file" class="hidden" id="uploadfile">
                    </div>
                    <div class="input-col">
                        <input class="input-control" type="text" placeholder="請輸入內容">
                    </div>
                    <button type="submit" class="submit">
                        <i class="fa-solid fa-location-arrow"></i>
                    </button>
                    <div class="mic">
                        <i class="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`
)

const follow_modal = (
    `<div class="modal">
        <div class="mask">
            <div class="follow-modal">
                <div class="close-icon">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="footer">
                    <div class="links">
                        <a href="./setting-regular.html" class="link">
                            每筆<br/>
                            固定金額
                        </a>
                        <a href="./setting-persentage.html" class="link">
                            每筆<br/>
                            比例金額
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
)

// 基礎確認框modal
btns.forEach(btn => {
    if (!btn.classList.contains('disabled')) {
        btn.addEventListener('click', e => {
            // 插入modal
            if(btn.classList.contains('comment')){
                content_section.insertAdjacentHTML('afterEnd', chat_modal)
            }else if (btn.classList.contains('follow')){
                content_section.insertAdjacentHTML('afterEnd', follow_modal)
            }else {
                content_section.insertAdjacentHTML('afterEnd', confirm_modal)
            }
            
            // mask綁上事件
            const mask = document.querySelector('.mask')
            const modal = document.querySelector('.modal')

            mask.onclick = () => {
                modal.remove();
            }
        })
    }
})