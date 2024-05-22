export interface Course {
    id: string;
    name: string;
    thumbnail: string;
    sessions: string;
    price: number;
    discountText: string;
    previousPrice: number;
    resourcePerson: Person;
    tags: Tag[];
    ratings: Rating;
}

interface Person {
    name: string;
    profileImage: string;
}

interface Tag {
    name: string;
    color: string;
}

interface Rating {
    rating: number;
    participants: number;
}
