<template>
  <div class="track">
    <div class="custom-container c-1056 p-200">
      <div class="catalog">
        <div class="options">
          <button class="btn btn-o active">全部</button>
          <button class="btn btn-o">體育遊戲</button>
          <button class="btn btn-o">金融遊戲</button>
        </div>
      </div>
      <table class="trading-table">
        <thead>
          <tr>
            <th>開始日期</th>
            <th>標的</th>
            <th>遊戲名稱</th>
            <th>金額</th>
            <th>目前損益</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022/04/25</td>
            <td>義大利 甲級聯賽</td>
            <td>ＸＸＸ隊比賽贏</td>
            <td>1,000</td>
            <td class="status-r">999,999,999</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>1,000</td>
            <td class="status-g">-6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>義大利 甲級聯賽</td>
            <td>ＸＸＸ隊比賽贏</td>
            <td>1,000</td>
            <td class="status-r">6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>1,000</td>
            <td class="status-g">-20</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>1,000</td>
            <td class="status-g">-999,999,999</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>義大利 甲級聯賽</td>
            <td>ＸＸＸ隊比賽贏</td>
            <td>1,000</td>
            <td class="status-r">6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>義大利 甲級聯賽</td>
            <td>ＸＸＸ隊比賽贏</td>
            <td>1,000</td>
            <td class="status-g">-6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>1,000</td>
            <td class="status-r">-500</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>100,000,000</td>
            <td class="status-r">6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
          <tr>
            <td>2022/04/25</td>
            <td>台積電</td>
            <td>收盤價格漲</td>
            <td>1,000</td>
            <td class="status-r">6,000</td>
            <td>
              <form action="">
                <a href="./edit.html" class="link">編輯</a>
                <a href="./scheduled_list_detail.html" class="link">查看</a>
                <a href="./cancel.html" class="btn cancel">取消跟單</a>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button class="prev-arrow">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div class="pages">
          <a class="active" href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">...</a>
          <a href="#">13</a>
        </div>
        <button class="next-arrow">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/mystack/mystack.scss" scoped></style>