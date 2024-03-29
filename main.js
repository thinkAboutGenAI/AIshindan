const questions = [
  {
    number:1,
    type:"AIの有用性",
    sentence:"AI(生成AIに限らない)によって「人が身体、脳、空間、時間の制約から解放された社会を実現」することや「AIとロボットの共生により、自ら学習・行動し人と共生するロボットを実現」することが期待され、有用だと思う",
    choice:["とてもそう思う","まあそう思う","あまりそう思わない","全くそう思わない","その他","分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 2,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)は人類にとってリスクが大きいため、全面的に廃止するべきだと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number:3,
    type:"AIの有用性",
    sentence:"AI(生成AIに限らない)によって新たなイノベーションの創出が期待され、有用だと思う",
    choice:["とてもそう思う","まあそう思う","あまりそう思わない","全くそう思わない","その他","分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 4,
    type: "生成AIの有用性",
    sentence: "生成AIによって新たなイノベーションの創出が期待され、有用だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number:5,
    type:"AIの有用性",
    sentence:"AI(生成AIに限らない)は、文化の発展に寄与すると思う",
    choice:["とてもそう思う","まあそう思う","あまりそう思わない","全くそう思わない","その他","分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 6,
    type: "生成AIの有用性",
    sentence: "生成AIは、文化の発展に寄与すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 7,
    type: "生成AIの有用性",
    sentence: "生成AIは、表現の自由に寄与すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 8,
    type: "生成AIの有用性",
    sentence: "生成AIの技術は、著作物の公正な利用を促進すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 9,
    type: "生成AIの問題性",
    sentence: "生成AIの技術は、著作物の不公正な利用を助長すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 10,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、データセットに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 11,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、利用することによって意図せず権利侵害してしまう可能性があるため問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 12,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、容易に悪用できることが問題だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 13,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、新たな雇用問題を生むと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 14,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、新たな環境問題を生むと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 15,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、より不安定な情報空間を生むと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 16,
    type: "生成AIの権利侵害性",
    sentence: "現在の主な生成AIは、人権に関する原則に則っていないと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 17,
    type: "生成AIの権利侵害性",
    sentence: "現在の主な生成AIは、財産権を侵害していると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 18,
    type: "生成AIの有用性",
    sentence: "現在の主な生成AIは、文化的生活を営む権利に寄与すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 19,
    type: "生成AIの権利侵害性",
    sentence: "現在の主な生成AIは、文化的生活を営む権利を侵害していると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 20,
    type: "生成AIの倫理的問題性",
    sentence: "現在の主な生成AIは、倫理規範を組み込んでいないと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 21,
    type: "生成AIの有用性",
    sentence: "現在の主な生成AIは、文化多様性に寄与すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 22,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、文化多様性を阻害すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 23,
    type: "30条の4の問題性",
    sentence: "柔軟な権利制限規定や著作権法30条の4に問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 24,
    type: "30条の4の問題点",
    sentence: "技術革新など社会の変化に対応できる柔軟な権利制限規定を設けることに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 25,
    type: "30条の4の問題点",
    sentence: "明確性と柔軟性の適切なバランスを備えた複数の規定の組合せによる「多層的」な対応を行うことに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 26,
    type: "30条の4の問題点",
    sentence: "著作物に表現された思想又は感情の享受を目的としない行為について権利制限することに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 27,
    type: "30条の4の問題点",
    sentence: "著作権法30条の4のただし書きの「著作権者の利益」と著作権侵害による損害を同一視することに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 28,
    type: "30条の4の問題点",
    sentence: "著作権法30条の4のただし書きについて、同様のただし書を置いている他の権利制限規定の観点と同じ観点で判断を行うことに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 29,
    type: "30条の4の問題点",
    sentence: "著作物が利用される場面を「開発・学習段階」と「生成・利用段階」に分けることに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 30,
    type: "30条の4の問題点",
    sentence: "著作権法30条の4は、権利制限規定に要求される社会的意義・公益性と権利者の利益を不当に害する領域が比例の関係になっていないと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 31,
    type: "30条の4の問題点",
    sentence: "著作権法30条の4は、「一般人の理解において具体的な場面で刑罰が適用されるかどうかという基準が読み取れるかどうか」という基準を満たしていないと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 32,
    type: "30条の4の問題の解決手段",
    sentence: "著作権法30条の4の問題を解決するには○○が必要だと思う",
    choice: ["条文に問題があるため、法改正", "条文には問題がないため、法解釈の見直し", "法解釈には問題がないため、ソフトローによる対応", "現行法とは別に、新たな立法", "その他", "分からない"],
    value:[0,1,2,3,4,5]
  },
  {
    number: 33,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "知的財産権の趣旨から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 34,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "著作権の趣旨から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 35,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "刑法体系との関係から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 36,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "憲法との関係から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 37,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "条約との関係から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 38,
    type: "法改正又は法解釈の見直し又は立法の理由",
    sentence: "国際情勢との関係から、法改正又は法解釈の見直し又は立法が必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 39,
    type: "30条の4の問題点",
    sentence: "著作権法30条の4に関して、立法府、行政府、司法府の役割分担に問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 40,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、声やフォークロア等著作権で保護されないものに関する扱いに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 41,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、著作者人格権や著作隣接権、不正競争防止法等との関係で問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 42,
    type: "生成AIの問題性",
    sentence: "現在の主な生成AIは、権利者の名誉感情を無視していることに問題があると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 43,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、裁判外での簡易・迅速な解決手段の導入が有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 44,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、損害賠償制度等に関し権利者側の負担を軽減し実質的な公平性を担保する制度が有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 45,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、オプトイン制を義務づけることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 46,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、オプトアウト制を義務づけることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 47,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、「開発・学習段階」と「生成・利用段階」で使用したデータや入力したプロンプト等の開示を義務づけることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 48,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、関連する法律の明確性を上げることが有効と思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 49,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、AI生成物についてAI製であることの明示を義務づけることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 50,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、一部AI利用したものについてAI製である部分とそうでない部分の明示を義務づけることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 51,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、AIモデルの公開を認可制にすることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 52,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、AIモデルの使用を免許制にすることが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 53,
    type: "生成AI問題の解決手段",
    sentence: "生成AIに関する諸問題を解決するには、権利者に対価を還元することが有効だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 54,
    type: "生成AIの問題性",
    sentence: "生成AIについて、大量データのアクセス、保管及び利用を行う一部企業が市場で大きな影響力をもつことは問題だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 55,
    type: "感情的問題",
    sentence: "現在の生成AIは好まない",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 56,
    type: "感情的問題",
    sentence: "仮に生成AIに関する諸問題が解決したとしても、生成AIを好きになれないと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value:[2,1,-1,-2,0,0]
  },
  {
    number: 57,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)に頼ることで人間の思考力等が低下すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 58,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)に依存することは問題だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 59,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)は責任の所在をあやふやにするため問題だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 60,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)を人間と同等に扱うことは問題だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 61,
    type: "AIの問題性",
    sentence: "AI(生成AIに限らない)に関する国際的な議論や取り決めが不十分だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 62,
    type: "AIの有用性",
    sentence: "AI(生成AIに限らない)は医療の発展や食料問題の解決等生存権に関する分野に寄与すると思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  },
  {
    number: 63,
    type: "AIの有用性",
    sentence: "AI(生成AIに限らない)は公共の福祉の増進にとって必要だと思う",
    choice: ["とてもそう思う", "まあそう思う", "あまりそう思わない", "全くそう思わない", "その他", "分からない"],
    value: [2, 1, -1, -2, 0, 0]
  }
  
  
];

const types = ["AIの有用性","AIの問題性","生成AIの有用性","生成AIの問題性","30条の4の問題点","30条の4の問題の解決手段","法改正又は法解釈の見直し又は立法の理由","政策の問題性","生成AIのその他の問題性","生成AI問題の解決手段","一部企業が影響力をもつ問題","感情的問題","30条の4の問題性"];

const bunki = [
  //[該当questionNumber,[選択肢],次のquestionNumber,[選択肢],次のquestionNumber]
   [23,[1,2],24,[-1,4-2,0],39],
   [32,[0,1,3],33,[2,4,5],39],
   [55,[1,2],56,[-1,-2,0],57]
  ];
  
function modoru(){
  if(user.questionNumber == 1)return;
  
  let _lastQuestion = user.answers[user.answers.length -1];
  user.questionNumber = _lastQuestion[0];
  setQuestion(_lastQuestion[0]);
  for(var t=1;t<=6;t++){
    $("a" + t).checked = false;
  }
  user.answers.splice(user.answers.length -1);
  
    
}
  
function tsugihe(){
  let _ans = getAnswer();
  let _nextQuestionNumber = user.questionNumber +1;
  if(_ans == 10)return;
  
  for (var i = 0; i < bunki.length; i++) {
    if(bunki[i][0] == user.questionNumber){
      //分岐の処理
      if(bunki[i][1].includes(_ans)){
        _nextQuestionNumber = bunki[i][2];
      }else if(bunki[i][3].includes(_ans)){
        _nextQuestionNumber = bunki[i][4];
      }
      
      
    }
  }
  
    user.answers.push([user.questionNumber,_ans,questions[user.questionNumber -1].type]);
    //console.log(user.answers[user.answers.length -1]);
    
  if(user.questionNumber < questions.length){
    user.questionNumber = _nextQuestionNumber;
    setQuestion(user.questionNumber);
  }else{
    //回答し終わった時の処理
    $("questionDiv").classList.add("none");
    $("modoruButton").classList.add("none");
    $("tsugiheButton").classList.add("none");
    
    for (var i = 0; i < user.answers.length; i++) {
      let _answer = [].concat(user.answers[i]);
      user.result[_answer[2]] += _answer[1]
      
      let _max = questions[_answer[0] -1].value[0];
      let _min = questions[_answer[0] -1].value[0];
      for (var x = 1 ; x < questions[_answer[0] -1].value.length; x++) {
        if(questions[_answer[0] -1].value[x] > _max)_max = questions[_answer[0] -1].value[x];
        if(questions[_answer[0] -1].value[x] < _min)_min = questions[_answer[0] -1].value[x];
      }
      user.resultMax[_answer[2]] += _max;
      user.resultMin[_answer[2]] += _min;
    }
      
    let resultSentence = "";
    resultSentence += "<h2>診断結果</h2>";
    resultSentence += "《pt及び%の計算方法》とてもそう思う:2pt,まあそう思う:1pt,あまりそう思わない:-1pt,全くそう思わない:-2pt,その他:0pt,分からない:0ptとして、合計で0ptのとき50%とする。項目ごとに出題数が異なるため、何ptで100%になるかは項目ごとに異なります。<br><br><br>";
    //const types = ["AIの有用性","AIの問題性","生成AIの有用性","生成AIの問題性","生成AIの問題点","30条の4の問題の解決手段","法改正又は法解釈の見直し又は立法の理由","政策の問題性","生成AIのその他の問題性","生成AI問題の解決手段","一部企業が影響力をもつ問題","感情的問題","30条の4の問題性"];
    for(var x=0;x<types.length;x++){
      if(x!= 4 && x != 5 && x != 6 && x != 9 && x != 7 && x != 8 && x != 10 && x != 12){
        resultSentence += types[x] + ":" + user.result[types[x]] + "pt(" + returnPer(user.result[types[x]],user.resultMin[types[x]],user.resultMax[types[x]]) + "%) <br><br>";
        }
    }
    
    for (var k = 0; k < user.answers.length; k++) {
      if (user.answers[k][2] == types[5]) {
        let _a = user.answers[k][1];
        let _s = questions[30].choice[_a];
        if(_a <=3)resultSentence += types[5] + ":" + _s + " が必要だと思う <br><br>";
        if(_a > 3)resultSentence += types[5] + ":" + _s + "<br><br>";
      }
    }
    
    
    for (var x = 0; x < types.length; x++) {
      if (x == 4 || x == 6 || x == 9 ||x == 0 || x==1 || x==2 || x ==3) {
        let arr = []; //とてもそう思う
        let arr2 = []; //まあそう思う
        for (var y = 0; y < user.answers.length; y++) {
          if(user.answers[y][2] == types[x] ){
            if( user.answers[y][1] == 2){
              arr.push([user.answers[y][0],user.answers[y][1]]);
            }
            if(user.answers[y][1] == 1 ){
              arr2.push([user.answers[y][0],user.answers[y][1]]);
            }
              
          }
        }
        

          
          
        resultSentence += types[x] + "(とてもそう思う):<br>";
        
        for(var n =0;n<arr.length;n++){
          resultSentence += "・" + questions[arr[n][0] -1].sentence + "<br>" ;
        }
        
        resultSentence += "<br>" + types[x] + "(まあそう思う):<br>";
        
        for (var n = 0; n < arr2.length; n++) {
          resultSentence += "・" + questions[arr2[n][0] -1].sentence + "<br>";
        }
        
        resultSentence += "<br>";
          
      }
      $("resultDiv").innerHTML = resultSentence;
    }
      
  
    
    
    
    
    $("resultDiv").classList.remove("none");
    $("resetButton").classList.remove("none");
  }
  
    
}
  
function $(id){
  return document.getElementById(id);
}

function returnPer(num,min,max){
  let _max = max - min;
  let _num = num - min;
  return Math.round(_num / _max * 100);
}

function getAnswer(){
  let _elements = document.getElementsByName("answer");
  let _checkValue = 10;
  for (var i = 0; i < _elements.length; i++) {
    if(_elements.item(i).checked){
      _checkValue = _elements.item(i).value;
    }
  }
  return Number(_checkValue);
}
  
function setQuestion(number){
  let _question = questions[number -1];
  $("questionNumberSpan").innerText = _question.number;
  $("questionSentenceSpan").innerText = _question.sentence;
  for (var i = 0; i < 6; i++) {
    $("label" + (i +1)).innerText = _question.choice[i];
    $("a" + (i +1)).checked = false;
    $("a" + (i +1)).value = _question.value[i];
  }
  user.questionNumber = number;
  
}
  
class User{
  constructor(){
    this.questionNumber = 1;
    this.answers = []; //[questionNumber,answerValue,questiontType]をpushしていく
    this.result = {};
    this.resultMax = {}; //questionTypeごとの最大値を入れる。
    this.resultMin = {};
    
    for (var i = 0; i < types.length; i++) {
      this.result[types[i]] = null;;
      this.resultMax[types[i]] = null;
      this.resultMin[types[i]] = null;
    }
  }
}

let user = new User();

function reset(){
  let al= window.confirm("リセットしますか?　現在の診断結果は消去されます。");
  if(al == false)return ;
  user = new User();
  setQuestion(1);
  $("resultDiv").classList.add("none");
  $("resetButton").classList.add("none");
  $("questionDiv").classList.remove("none");
  $("modoruButton").classList.remove("none");
  $("tsugiheButton").classList.remove("none");
  
}

function onload() {
  $("syutudaisuuSpan").innerText = questions.length;
  setQuestion(1);
}

window.onload = onload();
