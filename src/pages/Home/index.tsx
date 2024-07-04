import {CardsContainer, CardsContent} from "./styles.ts";

import {SearchForm} from "./components/SearchForm";
import {PostCard} from "./components/PostCard";
import {ProfileCard} from "./components/ProfileCard";

export function Home() {
    return (
        <main>
            <ProfileCard />
            <CardsContainer>
                <SearchForm />
                <CardsContent>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </CardsContent>
            </CardsContainer>
        </main>
    );
}
