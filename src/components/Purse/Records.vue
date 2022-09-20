<template>
  <div class="purse">
    <div class="custom-container c-1056 p-200">
      <div class="board wallets all">
        <div class="left">
          <div class="title"><span class="icon"></span>投注錢包 (點)</div>
          <div class="point">662,062,066</div>
        </div>
        <div class="right">
          <div class="title"><span class="icon"></span>出金錢包 (點)</div>
          <div class="point">200</div>
        </div>
      </div>

      <div class="catalog">
        <div class="options">
          <button class="btn active">全部</button>
          <button class="btn">入金</button>
          <button class="btn">下注</button>
          <button class="btn">派彩</button>
          <button class="btn">交易</button>
          <button class="btn">轉帳</button>
          <button class="btn">紅包及紅利</button>
          <button class="btn">退佣</button>
        </div>
        <div class="filter">
          <button class="btn">本週</button>
          <button class="btn">上週</button>
          <button class="btn active">本月</button>
          <div class="datetimepicker">
            <div class="input-date">
              <div
                class="datepicker relative form-floating h-full"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  class="form-control block w-full transition ease-in-out"
                />
                <button
                  class="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                >
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>
            <span>至</span>
            <div class="input-date">
              <div
                class="datepicker relative form-floating h-full"
                data-mdb-toggle-button="false"
              >
                <input
                  type="text"
                  class="form-control block w-full transition ease-in-out"
                />
                <button
                  class="datepicker-toggle-button"
                  data-mdb-toggle="datepicker"
                >
                  <i class="fa-solid fa-calendar-days"></i>
                </button>
              </div>
            </div>
            <button class="submit-btn" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
              搜尋
            </button>
          </div>
        </div>
      </div>

      <div class="result-table">
        <div class="row header">
          <div class="col">狀態</div>
          <div class="col">日期</div>
          <div class="col">摘要</div>
          <div class="col text-center">金額</div>
          <div class="col text-center">餘額</div>
        </div>
        <div class="row body">
          <div class="col">入金</div>
          <div class="col">2022/07/11</div>
          <div class="col">錢包加值</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+991,000,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">紅包及紅利</div>
          <div class="col">2022/07/12</div>
          <div class="col">紅包及紅利</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">+0</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point add">+199,000,000</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">派彩</div>
          <div class="col">2022/07/12</div>
          <div class="col">遊戲派彩</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">轉帳</div>
          <div class="col">2022/07/12</div>
          <div class="col">轉帳轉帳轉帳轉帳</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">+0</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point minus">-5,000</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">入金</div>
          <div class="col">2022/07/15</div>
          <div class="col">遊戲ＸＸＸ退回</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">1,216,188</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">紅包及紅利</div>
          <div class="col">2022/07/17</div>
          <div class="col">紅包及紅利紅包及紅利</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">199,000,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">退佣</div>
          <div class="col">2022/07/19</div>
          <div class="col">退佣退佣退佣退佣</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">入金</div>
          <div class="col">2022/07/15</div>
          <div class="col">遊戲ＸＸＸ退回</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">199,216,188</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">紅包及紅利</div>
          <div class="col">2022/07/17</div>
          <div class="col">紅包及紅利紅包及紅利</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">1,000,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
        <div class="row body">
          <div class="col">退佣</div>
          <div class="col">2022/07/19</div>
          <div class="col">退佣退佣退佣退佣</div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point add">+10,000</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">+0</div>
            </div>
          </div>
          <div class="col">
            <div class="left">
              <div class="title">投注錢包</div>
              <div class="point">10,020</div>
            </div>
            <div class="right">
              <div class="title">出金錢包</div>
              <div class="point">200</div>
            </div>
          </div>
        </div>
      </div>
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

<style src="../../assets/css/purse/purse.scss" scoped></style>