import { useState } from "react";
import type { Prefecture } from "../data/regions";
import { prefectures, regions } from "../data/regions";

interface SearchParams {
	prefecture?: string;
	region?: string;
	keyword?: string;
}

interface Props {
	onSearch?: (params: SearchParams) => void;
	initialSearchParams?: SearchParams;
}

export default function CounselorSearch({
	onSearch,
	initialSearchParams = {},
}: Props) {
	const [searchParams, setSearchParams] =
		useState<SearchParams>(initialSearchParams);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch?.(searchParams);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
	) => {
		const { name, value } = e.target;
		setSearchParams((prev) => ({
			...prev,
			[name]: value || undefined,
		}));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
				<div>
					<label
						htmlFor="region"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						地方
					</label>
					<select
						id="region"
						name="region"
						value={searchParams.region || ""}
						onChange={handleChange}
						className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					>
						<option value="">すべての地方</option>
						{regions.map((region) => (
							<option key={region} value={region}>
								{region}
							</option>
						))}
					</select>
				</div>

				<div>
					<label
						htmlFor="prefecture"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						都道府県
					</label>
					<select
						id="prefecture"
						name="prefecture"
						value={searchParams.prefecture || ""}
						onChange={handleChange}
						className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
					>
						<option value="">すべての都道府県</option>
						{prefectures
							.filter(
								(pref) =>
									!searchParams.region || pref.region === searchParams.region,
							)
							.map((pref) => (
								<option key={pref.id} value={pref.name}>
									{pref.name}
								</option>
							))}
					</select>
				</div>

				<div>
					<label
						htmlFor="keyword"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						キーワード
					</label>
					<input
						type="text"
						name="keyword"
						id="keyword"
						value={searchParams.keyword || ""}
						onChange={handleChange}
						placeholder="相談所名、特徴など"
						className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div className="flex justify-center">
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					検索する
				</button>
			</div>
		</form>
	);
}
