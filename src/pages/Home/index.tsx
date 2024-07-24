import {CardsContainer, CardsContent} from "./styles.ts";

import {SearchForm} from "./components/SearchForm";
import {PostCard} from "./components/PostCard";
import {ProfileCard} from "./components/ProfileCard";
import {useContextSelector} from "use-context-selector";
import {IssuesContext} from "../../contexts/IssuesContext.tsx";

export function Home() {
    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues;
    })

    return (
        <main>
            <ProfileCard />
            <CardsContainer>
                <SearchForm />
                <CardsContent>
                    {issues.map((issue) => {
                        return (
                            <PostCard
                                key={issue.number}
                                number={issue.number}
                                title={issue.title}
                                body={issue.body}
                                created_at={issue.created_at}
                            />
                        );
                    })}

                </CardsContent>
            </CardsContainer>
        </main>
    );
}
