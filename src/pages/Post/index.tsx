import {PostHeader} from "./components/PostHeader";

import {PostContent} from "./styles.ts";
import {useParams} from "react-router-dom";

export function Post() {
    const { postNumber } = useParams();

    return (
        <main>
            <PostHeader />
            <PostContent>
                <div>
                    <p>AAA</p>
                </div>
            </PostContent>
        </main>
    );
}
