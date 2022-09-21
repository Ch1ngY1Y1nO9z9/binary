<template>
            <div class="commission">
            <div class="custom-container">
                <div class="tab">
                    <div class="tab-options">
                        <button class="btn-options active">好友返佣</button>
                        <button class="btn-options">間接返佣</button>
                        <button class="btn-options">跟單返佣</button>
                    </div>
                </div>

                <div class="board commission_detail">
                    <div class="left">
                        <div class="title">
                            <span class="icon"></span>累積返佣 (點)
                        </div>
                        <div class="point">
                            662,062,066
                        </div>
                    </div>
                    <div class="mid">
                        <div class="title">
                            <span class="icon"></span>本月返佣 (點)
                        </div>
                        <div class="point">
                            2,000
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">
                            <span class="icon"></span>本月推薦績效 (點)
                        </div>
                        <div class="point">
                            2,500
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-container c-644">
                <div class="catalog">
                    <div class="filter">
                        <button class="btn sm">本週</button>
                        <button class="btn sm">上週</button>
                        <button class="btn sm">本月</button>
                        <button class="btn sm active">上月</button>
                        <button class="btn sm">近三月</button>
                        <div class="input-col">
                            <select name="sort" id="sort" class="input-control">
                                <option value="">依投注金額(由低至高)</option>
                                <option value="">依投注金額(由高至低)</option>
                            </select>
                            <div class="arrow">
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-container c-624 p-200">
                <table class="trading-table hidden">
                    <thead>
                        <tr>
                            <th>
                                編號
                            </th>
                            <th>
                                會員帳號
                            </th>
                            <th>
                                遊戲金額(點)
                            </th>
                            <th>
                                回饋點數(點)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                999,999,999
                            </td>
                            <td>
                                999,999,999
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                11
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                20
                            </td>
                            <td>
                                20
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                999,999,999
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                6
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                999,999,999
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                6,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                999,999,999
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table class="trading-table">
                    <thead>
                        <tr>
                            <th>
                                編號
                            </th>
                            <th>
                                會員帳號
                            </th>
                            <th>
                                類別
                            </th>
                            <th>
                                遊戲金額(點)
                            </th>
                            <th>
                                回饋點數(點)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                體育
                            </td>
                            <td>
                                999,999,999
                            </td>
                            <td>
                                999,999,999
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                金融
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                新聞
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                11
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                新聞
                            </td>
                            <td>
                                20
                            </td>
                            <td>
                                20
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                金融
                            </td>
                            <td>
                                999,999,999
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                6
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                新聞
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                999,999,999
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                新聞
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                金融
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                金融
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                6,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10
                            </td>
                            <td>
                                123456789012345
                            </td>
                            <td>
                                金融
                            </td>
                            <td>
                                6,000
                            </td>
                            <td>
                                999,999,999
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

<style lang="scss" scoped src="../../assets/css/layout.scss"></style>
<style src="../../assets/css/commission/commission.scss" scoped></style>