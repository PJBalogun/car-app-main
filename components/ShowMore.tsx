"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types/index";
import { updateSearchParams } from "@/utils/index";
import  CustomButton  from "@/components/CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
	const router = useRouter();

	const handleNavigation = () => {
		// Calculate the new limit based on the page number and navigation type
		const newLimit = (pageNumber + 1) * 10;

		// Update the "limit" search parameter in the URL with the new value
		// const newPathname = updateSearchParams("limit", `${newLimit}`);

		// router.push(newPathname);
		setLimit(newLimit);
	};

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					btnType="button"
					title="Show More"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
