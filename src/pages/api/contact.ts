export const prerender = false;

import type { APIRoute } from "astro";
import { counselors } from "../../data/counselors";

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.formData();
		const counselorId = data.get("counselorId");
		const name = data.get("name");
		const email = data.get("email");
		const phone = data.get("phone");
		const message = data.get("message");

		// バリデーション
		if (!counselorId || !name || !email || !message) {
			return new Response(
				JSON.stringify({
					message: "必須項目が入力されていません。",
				}),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// 相談所の存在確認
		const counselor = counselors.find((c) => c.id === counselorId);
		if (!counselor) {
			return new Response(
				JSON.stringify({
					message: "指定された相談所が見つかりません。",
				}),
				{
					status: 404,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// メール送信処理（実際の実装ではメールサービスを使用）
		console.log("問い合わせ内容:", {
			counselorId,
			counselorName: counselor.name,
			name,
			email,
			phone,
			message,
		});

		// 成功レスポンス
		return new Response(
			JSON.stringify({
				message: "問い合わせを受け付けました。",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.error("問い合わせ処理エラー:", error);
		return new Response(
			JSON.stringify({
				message: "問い合わせ処理中にエラーが発生しました。",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};
