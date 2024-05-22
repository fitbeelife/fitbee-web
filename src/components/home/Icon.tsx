import CategoryIconOne from "@/svg/CategoryIconOne";
import CategoryIconTwo from "@/svg/category-icon-two";
import CategoryIconThere from "@/svg/category-icon-there";
import CategoryIconFour from "@/svg/category-icon-four";
import CategoryIconFive from "@/svg/category-icon-five";
import CategoryIconSix from "@/svg/category-icon-six";
import CategoryIconSeven from "@/svg/category-icon-seven";

type Props = {
    icon: string;
}

const Icon = ({ icon }: Props) => {
    switch (icon) {
        case 'tablet.svg':
            return <CategoryIconOne />;
        case 'fa-male':
            return <CategoryIconTwo />;
        case 'house.svg':
            return <CategoryIconThere />;
        case 'discord.svg':
            return <CategoryIconFour />;
        case 'pie-chart.svg':
            return <CategoryIconFive />;
        case 'paint.svg':
            return <CategoryIconSix />;
        case 'graph.svg':
            return <CategoryIconSeven />;
    }
};

export default Icon;
