// wordpressAPIからデータを取得する用
const fetchAPI = async (
	endpoint: string,
	queryParams: Record<string, string> = {},
) => {
	const API_URL = import.meta.env.DEV
		? "http://localhost:4321/api" // 開発環境
		: "https://your-production-domain.com/api"; // 本番環境

	console.log(endpoint, queryParams);
	const url = new URL(`${endpoint}`, API_URL);
	console.log(url);
	for (const [key, value] of Object.entries(queryParams)) {
		console.log(key, value);
		url.searchParams.append(key, value);
	}

	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
	}
	return response.json();
};

export const getCounselors = async () => {
	const response = await fetchAPI("/counselors", { per_page: "100" });
	return response.data;
};

export const getCounselor = async (id: string) => {
	const response = await fetchAPI(`/counselors/${id}`);
	return response.data;
};

export const getBlogs = async () => {
	const response = await fetchAPI("/blogs", { per_page: "100" });
	return response.data;
};

export const getBlog = async (id: string) => {
	const response = await fetchAPI(`/blogs/${id}`);
	return response.data;
};

export const getBlogsByCounselor = async (
	counselorId: string,
	params: Record<string, string> = {},
) => {
	const response = await fetchAPI("/blogs", {
		counselor_id: counselorId,
		...params,
	});
	return response.data;
};
