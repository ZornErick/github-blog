import {PostHeader} from "./components/PostHeader";

import {PostContent} from "./styles.ts";
import {useParams} from "react-router-dom";
import {useContextSelector} from "use-context-selector";
import {IssuesContext} from "../../contexts/IssuesContext.tsx";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Post() {
    const {issues, user} = useContextSelector(IssuesContext, (context) => ({
        issues: context.issues,
        user: context.user
    }));

    const { postNumber } = useParams();

    const foundIssue = issues.find((issue) => issue.number === Number(postNumber))

    if (!foundIssue) {
        return <div>Issue not found!</div>;
    }

    return (
        <main>
            <PostHeader userLogin={user.login} issue={foundIssue} />
            <PostContent>
                <div>
                    <p><Markdown children={foundIssue.body} remarkPlugins={[remarkGfm]} /></p>
                </div>
            </PostContent>
        </main>
    );
}
