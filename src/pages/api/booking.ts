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
		const preferredDate = data.get("preferred_date");
		const notes = data.get("notes");

		// バリデーション
		if (!counselorId || !name || !email || !phone || !preferredDate) {
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

		// 日時のバリデーション
		const bookingDate = new Date(preferredDate.toString());
		const now = new Date();
		if (bookingDate < now) {
			return new Response(
				JSON.stringify({
					message: "過去の日時は指定できません。",
				}),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
		}

		// 予約処理（実際の実装では予約システムと連携）
		console.log("予約内容:", {
			counselorId,
			counselorName: counselor.name,
			name,
			email,
			phone,
			preferredDate: bookingDate.toISOString(),
			notes,
		});

		// 成功レスポンス
		return new Response(
			JSON.stringify({
				message: "予約を受け付けました。",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	} catch (error) {
		console.error("予約処理エラー:", error);
		return new Response(
			JSON.stringify({
				message: "予約処理中にエラーが発生しました。",
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
