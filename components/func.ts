export type func = {
  func: {
    name: string
    caption: string,
    function: string
  }[];
}


export const obj: func = {
  func: [
    {
      name: 'tax',
      caption: '入力した金額から消費税10%価格を計算します．',
      function: '(...param) => {return Math.floor(param[0] * 1.1) }'
    },
    {
      name: 'tax2',
      caption: '入力した金額から軽減税率による消費税8%価格を計算します．',
      function: '(...param) => {return Math.floor(param[0] * 1.08) } '
    },
    {
      name: 'total',
      caption: '10, 20, 30...というようにカンマで区切った数字の合計を計算します．',
      function: `(...param) => {
        let re = 0;
        for (let i in param) {
          ret += param[i] * 1
        }
        return re;
      }`
    },
    {
      name: 'factorial',
      caption: 'ゼロから入力値までの合計を計算します．',
      function: `(...param) => {
        let re = 0;
        for (let i = 0; i <= param[0]; i++) {
          ret += i;
        }
        return re;
      }`
    }
  ]
};

