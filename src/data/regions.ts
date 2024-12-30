export interface Prefecture {
	id: string;
	name: string;
	region: string;
}

export const regions = [
	"北海道",
	"東北",
	"関東",
	"中部",
	"関西",
	"中国",
	"四国",
	"九州・沖縄",
] as const;

export const prefectures: Prefecture[] = [
	{ id: "hokkaido", name: "北海道", region: "北海道" },
	{ id: "aomori", name: "青森県", region: "東北" },
	{ id: "iwate", name: "岩手県", region: "東北" },
	{ id: "miyagi", name: "宮城県", region: "東北" },
	{ id: "akita", name: "秋田県", region: "東北" },
	{ id: "yamagata", name: "山形県", region: "東北" },
	{ id: "fukushima", name: "福島県", region: "東北" },
	{ id: "ibaraki", name: "茨城県", region: "関東" },
	{ id: "tochigi", name: "栃木県", region: "関東" },
	{ id: "gunma", name: "群馬県", region: "関東" },
	{ id: "saitama", name: "埼玉県", region: "関東" },
	{ id: "chiba", name: "千葉県", region: "関東" },
	{ id: "tokyo", name: "東京都", region: "関東" },
	{ id: "kanagawa", name: "神奈川県", region: "関東" },
	{ id: "niigata", name: "新潟県", region: "中部" },
	{ id: "toyama", name: "富山県", region: "中部" },
	{ id: "ishikawa", name: "石川県", region: "中部" },
	{ id: "fukui", name: "福井県", region: "中部" },
	{ id: "yamanashi", name: "山梨県", region: "中部" },
	{ id: "nagano", name: "長野県", region: "中部" },
	{ id: "gifu", name: "岐阜県", region: "中部" },
	{ id: "shizuoka", name: "静岡県", region: "中部" },
	{ id: "aichi", name: "愛知県", region: "中部" },
	{ id: "mie", name: "三重県", region: "関西" },
	{ id: "shiga", name: "滋賀県", region: "関西" },
	{ id: "kyoto", name: "京都府", region: "関西" },
	{ id: "osaka", name: "大阪府", region: "関西" },
	{ id: "hyogo", name: "兵庫県", region: "関西" },
	{ id: "nara", name: "奈良県", region: "関西" },
	{ id: "wakayama", name: "和歌山県", region: "関西" },
	{ id: "tottori", name: "鳥取県", region: "中国" },
	{ id: "shimane", name: "島根県", region: "中国" },
	{ id: "okayama", name: "岡山県", region: "中国" },
	{ id: "hiroshima", name: "広島県", region: "中国" },
	{ id: "yamaguchi", name: "山口県", region: "中国" },
	{ id: "tokushima", name: "徳島県", region: "四国" },
	{ id: "kagawa", name: "香川県", region: "四国" },
	{ id: "ehime", name: "愛媛県", region: "四国" },
	{ id: "kochi", name: "高知県", region: "四国" },
	{ id: "fukuoka", name: "福岡県", region: "九州・沖縄" },
	{ id: "saga", name: "佐賀県", region: "九州・沖縄" },
	{ id: "nagasaki", name: "長崎県", region: "九州・沖縄" },
	{ id: "kumamoto", name: "熊本県", region: "九州・沖縄" },
	{ id: "oita", name: "大分県", region: "九州・沖縄" },
	{ id: "miyazaki", name: "宮崎県", region: "九州・沖縄" },
	{ id: "kagoshima", name: "鹿児島県", region: "九州・沖縄" },
	{ id: "okinawa", name: "沖縄県", region: "九州・沖縄" },
];